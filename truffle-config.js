const { TruffleProvider } = require('@harmony-js/core');

const { testnetMnemonic, testnetPrivateKey, testnetUrl } = require('./secrets.json');

module.exports = {
    networks: {
        testnet: {
            network_id: '2',
            provider: () => {
                const truffleProvider = new TruffleProvider(
                    testnetUrl,
                    { memonic: testnetMnemonic },
                    { shardID: 0, chainId: 2 }
                );
                truffleProvider.setSigner(truffleProvider.addByPrivateKey(testnetPrivateKey));
                return truffleProvider;
            },
        },
    },

    compilers: {
        solc: {
            version: '0.5.8',
        },
    },
};
