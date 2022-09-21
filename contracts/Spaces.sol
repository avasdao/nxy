// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/*******************************************************************************
 *
 * Copyright (c) 2022 Ava's DAO
 * Released under the MIT License.
 *
 * Spaces - Manager for each Space in the Nexaverse.
 *
 * Version 22.9.21
 *
 * https://avasdao.org
 * support@avasdao.org
 */


/*******************************************************************************
 *
 * ECRecovery
 *
 * Contract function to validate signature of pre-approved token transfers.
 * (borrowed from LavaWallet)
 */
interface ECRecovery {
    function recover(bytes32 hash, bytes memory sig) external pure returns (address);
}


/*******************************************************************************
 *
 * ERC Token Standard #20 Interface
 * https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md
 */
interface ERC20Interface {
    function totalSupply() external view returns (uint);
    function balanceOf(address tokenOwner) external view returns (uint balance);
    function allowance(address tokenOwner, address spender) external view returns (uint remaining);
    function transfer(address to, uint tokens) external returns (bool success);
    function approve(address spender, uint tokens) external returns (bool success);
    function transferFrom(address from, address to, uint tokens) external returns (bool success);

    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
}


/*******************************************************************************
 *
 * ApproveAndCallFallBack
 *
 * Contract function to receive approval and execute function in one call
 * (borrowed from MiniMeToken)
 */
interface ApproveAndCallFallBack {
    function approveAndCall(address spender, uint tokens, bytes memory data) external;
    function receiveApproval(address from, uint256 tokens, address token, bytes memory data) external;
}


/*******************************************************************************
 *
 * Owned contract
 */
contract Owned {
    address public owner;
    address public newOwner;

    event OwnershipTransferred(address indexed _from, address indexed _to);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function transferOwnership(address _newOwner) public onlyOwner {
        newOwner = _newOwner;
    }

    function acceptOwnership() public {
        require(msg.sender == newOwner);

        emit OwnershipTransferred(owner, newOwner);

        owner = newOwner;

        newOwner = address(0);
    }
}


/*******************************************************************************
 *
 * ModeneroDb Interface
 */
interface ModeneroDbInterface {
    /* Interface getters. */
    function getAddress(bytes32 _key) external view returns (address);
    function getBool(bytes32 _key)    external view returns (bool);
    function getBytes(bytes32 _key)   external view returns (bytes memory);
    function getInt(bytes32 _key)     external view returns (int);
    function getString(bytes32 _key)  external view returns (string memory);
    function getUint(bytes32 _key)    external view returns (uint);

    /* Interface setters. */
    function setAddress(bytes32 _key, address _value) external;
    function setBool(bytes32 _key, bool _value) external;
    function setBytes(bytes32 _key, bytes calldata _value) external;
    function setInt(bytes32 _key, int _value) external;
    function setString(bytes32 _key, string calldata _value) external;
    function setUint(bytes32 _key, uint _value) external;

    /* Interface deletes. */
    function deleteAddress(bytes32 _key) external;
    function deleteBool(bytes32 _key) external;
    function deleteBytes(bytes32 _key) external;
    function deleteInt(bytes32 _key) external;
    function deleteString(bytes32 _key) external;
    function deleteUint(bytes32 _key) external;
}


/*******************************************************************************
 *
 * @notice Service Name
 *
 * @dev Developer details.
 */
contract ServiceName is Owned {
    /* Initialize predecessor contract. */
    address private _predecessor;

    /* Initialize successor contract. */
    address private _successor;

    /* Initialize revision number. */
    uint private _revision;

    /* Initialize Modenero Db contract. */
    ModeneroDbInterface private _modeneroDb;

    /**
     * @dev
     *
     * Set Namespace
     *
     * Provides a "unique" name for generating "unique" data identifiers,
     * most commonly used as database "key-value" keys.
     *
     * NOTE: Use of `namespace` is REQUIRED when generating ANY & ALL
     *       ModeneroDb keys; in order to prevent ANY accidental or
     *       malicious SQL-injection vulnerabilities / attacks.
     */
    string private _namespace = 'SERVICE_NAME_HERE';

    event Broadcast(
        address indexed primary,
        address secondary,
        bytes data
    );

    /***************************************************************************
     *
     * Constructor
     */
    constructor() {
        /* Initialize ModeneroDb (eternal) storage database contract. */
        // NOTE We hard-code the address here, since it should never change.
        // _modeneroDb = ModeneroDbInterface(0x68133E0A4996D0103c2135dcD8E2084450DF66D5); // Avalanche | AVAX
        // _modeneroDb = ModeneroDbInterface(0x7AaCEC83e10D8F8DfDfaa4858d55b0cC29eE4795); // Binance Smart Chain | BSC
        // _modeneroDb = ModeneroDbInterface(0x0B79d476DaC963Bf4D342233AB129Ab833077627); // Ethereum | ETH
        // _modeneroDb = ModeneroDbInterface(0x7AaCEC83e10D8F8DfDfaa4858d55b0cC29eE4795); // Fantom | FTM
        // _modeneroDb = ModeneroDbInterface(0xeF54AE01D55ADeCac852cBe3e6F16b0D1bf38dE0); // Polygon | MATIC

        /* Initialize (aname) hash. */
        bytes32 hash = keccak256(abi.encodePacked('aname.', _namespace));

        /* Set predecessor address. */
        _predecessor = _modeneroDb.getAddress(hash);

        /* Verify predecessor address. */
        if (_predecessor != address(0x0)) {
            /* Make address payable. */
            address payable predecessor = payable(address(uint160(_predecessor)));

            /* Retrieve the last revision number (if available). */
            uint lastRevision = ServiceName(predecessor).getRevision();

            /* Set (current) revision number. */
            _revision = lastRevision + 1;
        }
    }

    /**
     * @dev Only allow access to an authorized Modenero administrator.
     */
    modifier onlyAuthByModenero() {
        /* Verify write access is only permitted to authorized accounts. */
        require(_modeneroDb.getBool(keccak256(
            abi.encodePacked(msg.sender, '.has.auth.for.', _namespace))) == true);

        _;      // function code is inserted here
    }

    /**
     * THIS CONTRACT DOES NOT ACCEPT DIRECT PAYMENTS
     */
    fallback () external payable {
        /* Cancel this transaction. */
        revert('Oops! Direct payments are NOT permitted here.');
    }

    receive () external payable {
        /* Cancel this transaction. */
        revert('Oops! Direct payments are NOT permitted here.');
    }


    /***************************************************************************
     *
     * ACTIONS
     *
     */

    function firstAction() public pure returns(bool) {
        // TODO

        /* Return success. */
        return true;
    }


    /***************************************************************************
     *
     * GETTERS
     *
     */

    /**
     * Get Revision (Number)
     */
    function getRevision() public view returns (uint) {
        return _revision;
    }

    /**
     * Get Predecessor (Address)
     */
    function getPredecessor() public view returns (address) {
        return _predecessor;
    }

    /**
     * Get Successor (Address)
     */
    function getSuccessor() public view returns (address) {
        return _successor;
    }


    /***************************************************************************
     *
     * SETTERS
     *
     */

    /**
     * Set Successor
     *
     * This is the contract address that replaced this current instnace.
     */
    function setSuccessor(
        address _newSuccessor
    ) onlyAuthByModenero external returns (bool success) {
        /* Set successor contract. */
        _successor = _newSuccessor;

        /* Return success. */
        return true;
    }


    /***************************************************************************
     *
     * INTERFACES
     *
     */

    /**
     * Supports Interface (EIP-165)
     *
     * (see: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-165.md)
     *
     * NOTE: Must support the following conditions:
     *       1. (true) when interfaceID is 0x01ffc9a7 (EIP165 interface)
     *       2. (false) when interfaceID is 0xffffffff
     *       3. (true) for any other interfaceID this contract implements
     *       4. (false) for any other interfaceID
     */
    function supportsInterface(
        bytes4 _interfaceID
    ) external pure returns (bool) {
        /* Initialize constants. */
        bytes4 InvalidId = 0xffffffff;
        bytes4 ERC165Id = 0x01ffc9a7;

        /* Validate condition #2. */
        if (_interfaceID == InvalidId) {
            return false;
        }

        /* Validate condition #1. */
        if (_interfaceID == ERC165Id) {
            return true;
        }

        // TODO Add additional interfaces here.

        /* Return false (for condition #4). */
        return false;
    }

    /**
     * ECRecovery Interface
     */
    function _ecRecovery() private view returns (
        ECRecovery ecrecovery
    ) {
        /* Initialize hash. */
        bytes32 hash = keccak256('aname.ecrecovery');

        /* Retrieve value from Modenero Db. */
        address aname = _modeneroDb.getAddress(hash);

        /* Initialize interface. */
        ecrecovery = ECRecovery(aname);
    }


    /***************************************************************************
     *
     * UTILITIES
     *
     */

    /**
     * Is (Owner) Contract
     *
     * Tests if a specified account / address is a contract.
     */
    function _ownerIsContract(
        address _owner
    ) private view returns (bool isContract) {
        /* Initialize code length. */
        uint codeLength;

        /* Run assembly. */
        assembly {
            /* Retrieve the size of the code on target address. */
            codeLength := extcodesize(_owner)
        }

        /* Set test result. */
        isContract = (codeLength > 0);
    }

    /**
     * Bytes-to-Address
     *
     * Converts bytes into type address.
     */
    function _bytesToAddress(
        bytes memory _address
    ) private pure returns (address) {
        uint160 m = 0;
        uint160 b = 0;

        for (uint8 i = 0; i < 20; i++) {
            m *= 256;
            // b = uint160(_address[i]); // NOTE: This line broke in v0.5.0
            b = uint160(uint8(_address[i])); // NOTE: This HAS NOT been tested yet.
            m += (b);
        }

        return address(m);
    }

    /**
     * Convert Bytes to Bytes32
     */
    function _bytesToBytes32(
        bytes memory _data,
        uint _offset
    ) private pure returns (bytes32 result) {
        /* Loop through each byte. */
        for (uint i = 0; i < 32; i++) {
            /* Shift bytes onto result. */
            result |= bytes32(_data[i + _offset] & 0xFF) >> (i * 8);
        }
    }

    /**
     * Convert Bytes32 to Bytes
     *
     * NOTE: Since solidity v0.4.22, you can use `abi.encodePacked()` for this,
     *       which returns bytes. (https://ethereum.stackexchange.com/a/55963)
     */
    function _bytes32ToBytes(
        bytes32 _data
    ) private pure returns (bytes memory result) {
        /* Pack the data. */
        return abi.encodePacked(_data);
    }
}
