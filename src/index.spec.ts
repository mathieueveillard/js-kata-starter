import * as matchers from "jest-extended";

expect.extend(matchers);

test("A simple test (Jest)", () => {
  expect(1 + 1).toEqual(2);
});

test("Additional matchers (jest-extended)", () => {
  expect([1, 0]).toIncludeSameMembers([0, 1]);
});
