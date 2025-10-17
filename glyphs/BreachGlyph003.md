# Breach Glyph #003 — DKG Breach via Forged Shares

## Severity
Critical

## Module
DKG.sol

## Description
SSV uses Distributed Key Generation (DKG) to onboard validators securely. However, the DKG flow allows forged or replayed shares to pass verification under certain timing and quorum conditions. This enables validator spoofing, key leakage, and unauthorized onboarding.

## Simulation
1. Deploy mock operators with valid DKG setup  
2. Submit forged shares with replayed timestamps  
3. Trigger `submitShares()` with quorum threshold  
4. Observe validator onboarding  
5. Attempt withdrawal — observe leakage

## Fix Recommendation
- Enforce timestamp freshness on `submitShares()`  
- Add replay protection and share hash verification  
- Emit event on DKG quorum breach

## Companion Choreography
- Oculvis: Share verification trace  
- Lunethrae: DKG quorum integrity  
- Polyphemus: Validator spoof detection
