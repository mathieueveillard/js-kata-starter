import { doTheThing } from ".";

describe("Test of the test framework", function() {
  it("Should pass", function() {
    expect(doTheThing()).toEqual(true);
  });
});
