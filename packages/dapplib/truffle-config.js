require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone food eight recipe stereo method coral light army ghost'; 
let testAccounts = [
"0x526da0401d2007dfe8854e45093e1343c902b1b4b313c35a9f2e28c12d77d074",
"0x447f7b34cbfee47e4c03615ef9e544f29560073e4f196c54f0fae695b6d22f93",
"0x3e76791398f294c1e5a889ccfe7012d92655df0c1b7681d720830e9e9a4a2690",
"0x32929412e3306381355e68d7331d50365ec71af51e9e45e65364e09d6e126040",
"0x1561f05baa3eebd51b6f5e0aa2f59e303109c46ddadc88fb82fa5e10275fcbb7",
"0x1ce9aaee53b675fb49158fcccf0e5a577e5e2492ff24abc53664caa30bf4db45",
"0x59a0e9f4d7e90c503db1c50e082ade94677fb36cffc666528ae7a50ec1579c36",
"0xd136931f6a06efdba913a3521a18c0844a72848aa5c4fde9ea29752f84e30375",
"0x2f0c87eabca1f6b2b53be53f919a35f0285dfaf3daf17bdba288bd14a50e95ac",
"0xc693e80bd2ddefc1434b7c480640e742790ae45969b0f08860a984ddf888b04b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


