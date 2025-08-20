import { classNames } from "./classNames";

describe("classNames", () => {
  test("with first param", () => {
    expect(classNames("some class")).toBe("some class");
  });

  test("with additional param", () => {
    expect(classNames("some class", {}, ["class1", "class2"])).toBe(
      "some class class1 class2"
    );
  });

  test("with all param", () => {
    expect(
      classNames("someclass", { someclass1: true, someclass2: false }, [
        "class1",
        "class2",
      ])
    ).toBe("someclass class1 class2 someclass1");
  });
});
