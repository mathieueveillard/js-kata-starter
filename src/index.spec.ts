import { systemUnderTest } from ".";

describe("Test of systemUnderTest()", function() {
  it("Should pass", function() {
    expect(systemUnderTest()).toEqual(true);
  });
});
