Here's a **combined, comprehensive README** that covers both of your scripts:

---

````markdown
# 🔁 Solana ⇄ Neon EVM USDC Scripts (Transfer + Approval)

This project contains two key scripts for interacting with **USDC tokens** across **Solana Devnet** and **Neon EVM Devnet**:

USDC_ADDRESS = '0x512E48836Cd42F3eB6f50CEd9ffD81E0a7F15103';
1. `token-transfer-solana-signer-sdk.js`  
   Transfers `1 USDC` from a Solana ATA to a Neon EVM wallet.

   Neon EVM transaction hash 0xabbc2d233135781a3dd969eabcc0b635ee81a830cbc08bacde4745cf6040e225 for approval 

2. `token-approval-solana-signer-sdk.js`  
   Issues an ERC-20 `approve` transaction from a Neon EVM wallet (signed via Solana).


   Neon EVM transaction hash 0xa8a0cf29aa94b5dfecbd0e124b4a1fcb57b5ffbad525e146d7069888af684f3c for transfer

---

## 💡 Why This Exists

These scripts demonstrate how to:
- Use Solana accounts to initiate and sign Neon EVM-compatible transactions.
- Work with wrapped USDC tokens on both chains.
- Use `@neonevm/solana-sign` to bridge Solana private key authority into Neon EVM.

---

## 🛠️ Tech Stack

| Package | Purpose |
|--------|--------|
| `@solana/web3.js` | Sign and send Solana transactions |
| `@solana/spl-token` | Manage token accounts (ATA) |
| `ethers` | Encode ERC-20 tx calls |
| `@neonevm/solana-sign` | Neon EVM <--> Solana bridge SDK |
| `bs58` | Decode Solana private key from base58 |
| `dotenv` | Load your private key securely |

---

## 📁 Folder Structure

```bash
.
├── .env
├── token-transfer-solana-signer-sdk.js
├── token-approval-solana-signer-sdk.js
├── package.json
````

---

## ⚙️ Environment Setup

Create a `.env` file:

```env
PRIVATE_KEY_SOLANA=your_base58_encoded_solana_private_key
```

This should be a **base58**-encoded secret key (like those exported from Phantom or Sollet).

---

## 📦 Install Dependencies

```bash
npm install @solana/web3.js @solana/spl-token ethers bs58 dotenv @neonevm/solana-sign
```

---

## 🚀 How to Use

### ✅ Transfer USDC from Solana → Neon EVM

```bash
node token-transfer-solana-signer-sdk.js
```

**What it does:**

* Creates the USDC ATA if missing.
* Approves the Neon EVM contract to spend USDC.
* Transfers 1 USDC to a randomly generated Neon wallet.
* Logs balances before and after.

Expected logs:

```
5000000n senderUsdcBalance
0n receiverUsdcBalance
...
4000000n senderUsdcBalanceAfter
1000000n receiverUsdcBalanceAfter
```

---

### ✅ Approve USDC Spending on Neon via Solana Signer

```bash
node token-approval-solana-signer-sdk.js
```

**What it does:**

* Uses your Solana key to sign an ERC20 `approve()` tx on Neon.
* Grants approval to your own Neon wallet address for a random amount.
* Logs the current allowance value before and after.


Expected logs:

```
usdc approval of 0xYourNeonWallet is 1750040215n
...
Current USDC approval of 0xYourNeonWallet is 1750180042n
```

---

## 🔐 Common Errors & Fixes

### ❌ `bs58.decode is not a function`

✅ Fix: Use the correct import based on your Node.js version:

```js
// For CommonJS (Node v16+)
const bs58 = require("bs58"); // DO NOT use `.default`
```

If using `"type": "module"` in `package.json`, switch to:

```js
import bs58 from 'bs58';
```

---

## 🧪 Tips

* Check your Solana address balance:

  ```bash
  solana balance <your_pubkey>
  ```

* Use [https://explorer.solana.com/](https://explorer.solana.com/?cluster=devnet) or [https://devnet.neonscan.org/](https://devnet.neonscan.org/) to trace transactions.

* Your Neon wallet address is derived automatically from your Solana key using the Neon EVM SDK.

---

## 📚 References

* [Neon Labs Docs](https://docs.neonfoundation.io/)
* [Solana SPL Token](https://spl.solana.com/token)
* [Solana Web3.js](https://solana-labs.github.io/solana-web3.js/)
* [Neon Devnet Explorer](https://devnet.neonscan.org)

---

## 🤝 License

MIT — do what you want, just don’t leak your private key. 🛡️

---

## 👨‍💻 Author

Built by [@YourHandle](https://github.com/yourHandle) for research, testing, and bridging experiments on Neon EVM.

```

---

Let me know if you also want a **Markdown Notion export**, a **video walkthrough script**, or want this split into a proper `docs/` structure.
```
