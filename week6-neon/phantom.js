// const bs58 = require("bs58").default;
// const web3 = require("@solana/web3.js");
// require('dotenv').config();

// const secretKey = bs58.decode(process.env.PRIVATE_KEY_SOLANA);
// const keypair = web3.Keypair.fromSecretKey(secretKey);
// console.log("Public key:", keypair.publicKey.toBase58());


const bs58 = require("bs58").default;
const fs = require("fs");
require('dotenv').config();

const phantomPrivateKey = process.env.PRIVATE_KEY_SOLANA;

const secretKey = bs58.decode(phantomPrivateKey);

// Write the keypair as JSON array (needed by Solana CLI)
fs.writeFileSync(
  "my-solana-keypair.json",
  JSON.stringify(Array.from(secretKey))
);

console.log("Keypair file created: my-solana-keypair.json");
