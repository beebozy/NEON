# Neon EVM System Program Library


A Solidity library for interacting with Solana's System Program through Neon EVM, enabling Ethereum-compatible smart contracts to perform native Solana operations.

## 📦 Installation

git clone https://github.com/beebozy/NEON.git
npm install 


🚀 Features
Feature	Description
Account Creation	Create Solana accounts (with/without seeds)
SOL Transfers	Native token transfers between accounts
Account Management	Allocate storage, change ownership
Cross-Chain Queries	Read Solana account data from EVM
Rent Calculation	Compute storage costs on Solana

import {CallSolanaHelperLib} from '../utils/CallSolanaHelperLib.sol';
import {LibSystemProgram} from "./libraries/system-program/LibSystemProgram.sol";
import {LibSystemData} from "./libraries/system-program/LibSystemData.sol";

ICallSolana public constant CALL_SOLANA = ICallSolana(0xFF00000000000000000000000000000000000006);

## 📦 custom function I wrote ... I also had to improve the system program library for easy compilations
function createAccountWithoutSeed(
    bytes32 newAccount,
    bytes32 programId,
    uint64 accountSize
) external {
    bytes32 payer = CALL_SOLANA.getPayer();
    (bytes32[] memory accounts, , , bytes memory data, uint64 rent) = 
        LibSystemProgram.formatCreateAccountWithoutSeedInstruction(
            payer, newAccount, programId, accountSize
        );
    
    CALL_SOLANA.execute(rent, 
        CallSolanaHelperLib.prepareSolanaInstruction(
            Constants.getSystemProgramId(),
            accounts,
            isSigner,
            isWritable,
            data
        )
    );
}


## 📊 Test Results (neondevnet)

### Contract Deployments
| Contract Name              | Address                                    | Deployer Balance (NEON) |
|----------------------------|--------------------------------------------|-------------------------|
| **CallSystemProgram**       | `0xD4d47B22FC7C5E6Bd2F3ca274cc940b485Ee23F2` | 5319.35231051 → 5187.06645821 |
| **MockCallSystemProgram**   | `0x41894a23C268b7277506537734d17894e7bA60FF` | 5187.06645821 (post-deploy) |

### Airdrops
| Recipient Address                     | Amount       | Type  |
|---------------------------------------|--------------|-------|
| `0x44979d19F1f0c8371b52BdDEf97EA4B904535A75` | 100 NEON     | Test Account |
| `0x7D7367c7AAE9CcBd47FE3A7E97D5b63f6c0f9a69` | 100 NEON     | Test Account |
| `8pmPq3WHSbuxHXxQZtWTGLib4kbLhKpJcHhJUKWBtZ9M` | 0.00203928 SOL | PDA Assignment |
| `AjzxXBhsS4zp2UF4xw3jhJHghhXCT2onhFLnrGHJxy9C` | 0.00203928 SOL | Storage Allocation |

### Test Performance
| Test Case                              | Status | Duration  | Gas Used (if applicable) |
|----------------------------------------|--------|-----------|--------------------------|
| Create account with seed               | ✔ Pass | 37.166s   | - |
| Transfer SOL                           | ✔ Pass | 31.624s   | - |
| Assign account to Token program        | ✔ Pass | 36.327s   | - |
| Allocate storage space                 | ✔ Pass | 33.325s   | - |
| Account data getters                   | ✔ Pass | 17.976s   | - |
| Rent exemption calculation (f64 decode)| ✔ Pass | 8.227s    | - |
| Gas estimation                         | ✔ Pass | 2.908s    | 90,111 gas |

### Key Addresses
| Role                  | Address                                    |
|-----------------------|--------------------------------------------|
| **Deployer**          | `0xF4Ad38b0DadD4F73bD721Bfe275D77614aDDc2aC` |
| **CALL_SOLANA**       | `0xFF00000000000000000000000000000000000006` |
| **System Program**    | `11111111111111111111111111111111` (Solana Native) |

📜 License
MIT © beebozy 
See LICENSE for full details.

🌐 Resources
Neon EVM Documentation

Solana System Program