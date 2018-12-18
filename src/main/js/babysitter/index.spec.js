import calculatePay from "./";

const scenarios = [
  { arrival: 6, departure: 8, bedtime: 9, expectedPay: 20 },
  { arrival: 5, departure: 9, bedtime: 9, expectedPay: 40 },
  { arrival: 6, departure: 12, bedtime: 8, expectedPay: 44 },
  { arrival: 9, departure: 12, bedtime: 9, expectedPay: 18 },
  { arrival: 7, departure: 11, bedtime: 10, expectedPay: 36 },
  { arrival: 5, departure: 12, bedtime: 9, expectedPay: 58 },
  { arrival: 12, departure: 4, bedtime: 9, expectedPay: 32 },
  { arrival: 7, departure: 2, bedtime: 10, expectedPay: 58 }
  { arrival: 5, departure: 4, bedtime: 9, expectedPay: 90 }
];

describe("Babysitter Pay Calculator", () => {
  scenarios.forEach(({ arrival, departure, bedtime, expectedPay }) => {
    describe(`When the babysitter arrives at ${ arrival } and leaves at ${ departure }, and bedtime is at ${ bedtime }`, () => {
      it(`the babysitter's expected pay should be ${ expectedPay }`, () => {
        const calculatedPay = calculatePay({ arrival, departure, bedtime });
        expect(calculatedPay).toEqual(expectedPay);
      })
    });
  });
});
