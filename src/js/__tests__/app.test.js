import ErrorRepository from "../app.js";

const errorStorage = new ErrorRepository();
const errors = [
  [404, "Not Found"],
  [500, "Internal Server Error"],
];

test("Testing the addErr method", () => {
  errorStorage.addErr(errors);
  expect(errorStorage.repo.size).toBe(errors.length);
});

test("Testing the translate method with valid value", () => {
  expect(errorStorage.translate(404)).toBe("Not Found");
});

test("Testing the translate method with invalid value", () => {
  expect(errorStorage.translate(411)).toBe("Unknown error");
});
