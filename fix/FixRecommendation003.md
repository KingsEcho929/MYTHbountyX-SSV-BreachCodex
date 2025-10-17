# Fix Recommendation — Breach Glyph #003

## Target
DKG.sol

## Fixes
- Enforce timestamp freshness on `submitShares()`  
- Add replay protection and share hash verification  
- Emit event on DKG quorum breach  
- Add test coverage for forged share onboarding and validator spoofing
