// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
expect.extend(matchers);

it("That's a test!", function () {
  expect(1 + 1).toEqual(2);
});

it("jest-extended is included", function () {
  expect([1, 0]).toIncludeSameMembers([0, 1]);
});
