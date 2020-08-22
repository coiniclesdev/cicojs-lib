module.exports = {
    cico: {
        messagePrefix: '\x15Cico Signed Message:\n',
        bech32: 'cc',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x1c,
        scriptHash: 0x05,
        wif: 0x80
    },
    cico_testnet: {
        messagePrefix: '\x15Cico Signed Message:\n',
        bech32: 'tc',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x78,
        scriptHash: 0x6e,
        wif: 0xef
    }
}
