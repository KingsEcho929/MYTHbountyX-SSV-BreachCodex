describe("SSV Reward Overflow Simulation", () => {
  it("should trigger double-claim via stale validator state", async () => {
    // Step 1: Register validator and accrue rewards
    // Step 2: Trigger partial slashing to reset validator state
    // Step 3: Call withdraw before token sync
    // Step 4: Observe double-claim or overflow
    // Step 5: Repeat with ghost validator — observe leakage
  });
});
