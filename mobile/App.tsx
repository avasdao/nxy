/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Button,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import './polyfills.js';
import {Wallet} from 'ethers';
import {utils as SecpUtils} from '@noble/secp256k1';
import {Client} from '@xmtp/xmtp-js';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const account = new Wallet(SecpUtils.randomPrivateKey());

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text style={styles.sectionTitle}>Example Chat App</Text>
          <Text>{account.address}</Text>
          <Button title="Send a gm" onPress={() => sendGm(account)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

async function sendGm(account: Wallet) {
  console.log('creating xmtp client');
  try {
    const xmtp = await Client.create(account);
    const conversation = await xmtp.conversations.newConversation(
      // 'shomari.eth',
      // '0x27a9b30DBe015842098F4CD31f0301a1cEE74bfe', // shomari.eth
      '0xE2266286745fEFdDeC42D895abC85a33710a2078', // dev wallet
      // '0x6A03c07F9cB413ce77f398B00C2053BD794Eca1a', // petermdenton.eth
    );
    const message = await conversation.send(
      `gm! ${Platform.OS === 'ios' ? 'from iOS' : 'from Android'}`,
    );
    console.log('sent message: ' + message.content);
  } catch (error) {
    console.log(`error creating client: ${error}`);
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
