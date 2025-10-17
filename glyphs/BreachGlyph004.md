# Breach Glyph #004 — Reward Overflow via ERC20 Logic Flaw

## Severity
Critical

## Module
SSVToken.sol

## Description
SSV’s reward distribution relies on ERC20 logic for validator withdrawals. Under specific timing and state conditions, the reward balance can overflow or double-claim due to stale sync between validator state and token accounting. This leads to ghost validator leakage and unauthorized inflow.

## Simulation
1. Register validator and accrue rewards  
2. Trigger partial slashing to reset validator state  
3. Call `withdraw()` before token sync  
4. Observe double-claim or overflow  
5. Repeat with ghost validator — observe leakage

## Fix Recommendation
- Enforce sync between validator state and token balance before withdrawal  
- Add overflow protection on reward calculation  
- Emit event on ghost validator withdrawal attempt

## Companion Choreography
- Luckier Glyssun: ERC20 sync trace  
- Velmari: Ghost validator detection
