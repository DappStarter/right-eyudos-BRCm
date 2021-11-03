require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include enroll sure tribe stone royal stereo mistake industry light army giant'; 
let testAccounts = [
"0x0c03ae4cd23caf03aabf537452e30869b7aa4918c599402705ae00d3c686d87b",
"0xf76a599a0cd46c5ce3a5e4924ab6f154bb015ad34d63d6a4f939fcc7f8a9e0a2",
"0x733b0ce1a628bdbc5e0a19992ac05f0c3b3efb61d9dd1501b0a7194903069de5",
"0x271139b6a3bd9c32e667499a16a1851d5ad086c29604aa14c789327477c98cc4",
"0xfe540e2adf71e69d8af32601b104287c78b21af8e514acf75dc9abd8c521be18",
"0x9e3ebe23c04cc22f4b325ec7fb19b8b678b97caddc912c399d63e853e237f0e3",
"0x69ed6822422db16f961dd862c930b67d6dff099d573b56baf8ef2dc220d88931",
"0x76a1b8891eef68ceef4f96e7fe12ec7f53ae711a5afdc24836ae16edf5921cdc",
"0xbde519335df8fa5fbb16c6da0a5a2c261e1d6dc83c8bbd1178fef2a3f6103697",
"0x80fc3144096219572dc05c634612a2d15c480ff221cc85869ae5cd7d7223683f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

