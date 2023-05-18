// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import fc from "fast-check";

expect.extend(matchers);

test("A simple test (Jest)", () => {
  expect(1 + 1).toEqual(2);
});

test("Additional matchers (jest-extended)", () => {
  expect([1, 0]).toIncludeSameMembers([0, 1]);
});

test("Property-based testing (fast-check)", () => {
  type Boundaries = {
    min: number;
    max: number;
  };

  const minmax =
    ({ min, max }: Boundaries) =>
    (n: number): number =>
      Math.min(max, Math.max(min, n));

  fc.assert(
    fc.property(fc.integer(), (n): boolean => {
      const result = minmax({ min: 1, max: 10 })(n);
      return 1 <= result && result <= 10;
    })
  );
});
