import { describe, expect, it } from "vitest";
import getRandomUrl from "./getRandomUrl";
import stringIsUrl from "./stringIsUrl";

describe("Get random site url", () => {
  it("should match with the url regexp", () => {
    expect(stringIsUrl(getRandomUrl())).toBeTruthy();
  });
});
