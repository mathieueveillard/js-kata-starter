// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";

expect.extend(matchers);

test("That's a test!", () => {
  expect(1 + 1).toEqual(2);
});

test("jest-extended is included", () => {
  expect([1, 0]).toIncludeSameMembers([0, 1]);
});
