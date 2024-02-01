import React from 'react'

import { Link } from 'react-router-dom'

// import icon from '../../assets/icon.png'
import icon from '~@/assets/icon.png'

/**
 * Blank Screen
 *
 * Empty template.
 */
const Blank = () => {
    const [hasAgreed, setHasAgreed] = React.useState(false)

    /* Handle onLoad scripts. */
    React.useEffect(() => {
        /**
         * Fetch Info
         */
        const fetchInfo = async () => {
            //
        }

        /* Fetch info. */
        fetchInfo()
    }, [])

    return (
        <main className="w-screen p-3">
            <div className="flex justify-center">
                <img alt="icon" src={icon} className="w-48 m-5" />
            </div>

            <div className="flex flex-col max-w-2xl mx-auto items-center p-3 border-4 border-purple-400 bg-purple-200 rounded-xl shadow-lg">
                <h1 className="text-5xl text-purple-500 font-bold">
                    Blank Screen
                </h1>
            </div>

            <Link to="/" className="flex mt-3">
                <button type="button" className="">
                    <span role="img" aria-label="wave" className="mx-2">
                        👋
                    </span>
                    back home
                </button>
            </Link>
        </main>
    )
}

/* Export module. */
export default Blank
