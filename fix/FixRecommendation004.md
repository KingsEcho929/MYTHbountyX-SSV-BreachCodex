# Fix Recommendation — Breach Glyph #004

## Target
SSVToken.sol

## Fixes
- Enforce sync between validator state and token balance before withdrawal  
- Add overflow protection on reward calculation  
- Emit event on ghost validator withdrawal attempt  
- Add test coverage for double-claim and ghost leakage
