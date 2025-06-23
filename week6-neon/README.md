# 🔁 Solana ⇄ Neon EVM USDC Interoperability Scripts

This project provides two essential scripts to demonstrate cross-chain USDC token interactions between the **Solana Devnet** and the **Neon EVM Devnet**.

### 🎯 Goal
Use a Solana private key to:
- Transfer USDC from a Solana wallet to a Neon EVM-compatible address.
- Approve USDC allowance on Neon EVM using a Solana-based signer.

---

## 🧩 Components

### 1. `token-transfer-solana-signer-sdk.js`  
Transfers `1 USDC` from a Solana-associated token account (ATA) to a **Neon EVM wallet**.

- ✅ **Neon EVM Transaction Hash (Approval):**
  ```
  0xabbc2d233135781a3dd969eabcc0b635ee81a830cbc08bacde4745cf6040e225
  ```

### 2. `token-approval-solana-signer-sdk.js`  
Issues an `approve()` transaction for USDC on Neon, **signed with a Solana private key**.

- ✅ **Neon EVM Transaction Hash (Transfer):**
  ```
  0xa8a0cf29aa94b5dfecbd0e124b4a1fcb57b5ffbad525e146d7069888af684f3c
  ```

---

## 💡 Why This Project?

This project showcases how to:
- Leverage a **Solana keypair** to sign and execute **EVM-compatible transactions**.
- Interact with wrapped USDC tokens across both ecosystems.
- Use the `@neonevm/solana-sign` SDK to derive **Neon wallet addresses from Solana keys**.

---

## 🛠️ Tech Stack

| Package | Purpose |
|--------|---------|
| `@solana/web3.js` | Manage Solana accounts and transactions |
| `@solana/spl-token` | Interact with Solana token accounts (ATA) |
| `ethers` | Encode and send ERC-20 `approve()` transactions |
| `@neonevm/solana-sign` | Bridge Solana keys to sign Neon EVM transactions |
| `bs58` | Decode Solana private key |
| `dotenv` | Securely manage environment variables |

---

## 📁 Project Structure

```bash
.
├── .env                           # Holds your base58 Solana private key
├── token-transfer-solana-signer-sdk.js
├── token-approval-solana-signer-sdk.js
├── package.json
```

---

## ⚙️ Environment Setup

Create a `.env` file with the following content:

```env
PRIVATE_KEY_SOLANA=your_base58_encoded_solana_private_key
```

> ✅ This should be a **base58-encoded** Solana secret key (as exported from Phantom, Sollet, or Solana CLI).

---

## 📦 Install Dependencies

```bash
npm install @solana/web3.js @solana/spl-token ethers bs58 dotenv @neonevm/solana-sign
```

---

## 🚀 How to Use

### 🔄 Transfer USDC from Solana → Neon EVM

```bash
node token-transfer-solana-signer-sdk.js
```

**Functionality:**
- Initializes a USDC ATA if not already created.
- Transfers 1 USDC to a Neon-derived wallet.
- Logs pre- and post-transaction balances.

✅ **Expected Output base on my wallet:**
```
5000000n senderUsdcBalance
0n receiverUsdcBalance
...
4000000n senderUsdcBalanceAfter
1000000n receiverUsdcBalanceAfter
```

---

### ✅ Approve USDC Spending on Neon EVM (via Solana Signer)

```bash
node token-approval-solana-signer-sdk.js
```

**Functionality:**
- Uses your Solana private key to sign an EVM `approve()` call.
- Approves a USDC allowance to your Neon wallet.

✅ **Expected Output based on my wallet address:**
```
usdc approval of 0xYourNeonWallet is 1750040215n
...
Current USDC approval of 0xYourNeonWallet is 1750180042n
```

---



## 🧪 Tips & Debugging

- 🔍 Check Solana balance:
  ```bash
  solana balance <your_pubkey>
  ```

- 🌐 View transactions:
  - [Solana Explorer (Devnet)](https://explorer.solana.com/?cluster=devnet)
  - [Neon Devnet Explorer](https://devnet.neonscan.org)

- 🧠 Your Neon wallet is derived from your Solana private key via the Neon SDK — no separate key required.

---

## 🔗 Key References

- 📚 [Neon Labs Documentation](https://docs.neonfoundation.io/)
- 🔗 [Solana SPL Token Docs](https://spl.solana.com/token)
- 🛠️ [Solana Web3.js](https://solana-labs.github.io/solana-web3.js/)
- 🔍 [Neon EVM Devnet Explorer](https://devnet.neonscan.org)

---

## 🛡️ License


