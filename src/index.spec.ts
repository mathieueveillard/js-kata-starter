describe("Test of the test framework", function() {
  it.skip("Should fail", function() {
    expect(0).toEqual(1);
  });

  it("Should pass", function() {
    expect(0).toEqual(0);
  });
});
