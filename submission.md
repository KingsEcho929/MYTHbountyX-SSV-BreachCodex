# Immunefi Submission — SSV Network

## Title
Slashing Bypass via Validator Drift

## Severity
Critical

## Description
SSV allows validator updates via `updateValidator()` using operator sets. If a validator is updated with a stale or invalid quorum, the slashing logic in `slashValidator()` can be bypassed. This enables malicious validators to remain active without proper quorum, avoiding penalties and leaking rewards.

## PoC
See `/simulations/ValidatorDriftTest.js`

## Fix Recommendation
See `/fix/FixRecommendation.md`

## Contact
- Handle: MYTHbountyX  
- Discord: KingsEcho  
- Email: sc00px.mask@gmail.com
