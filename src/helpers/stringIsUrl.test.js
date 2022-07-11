import { describe, expect, it } from "vitest";
import isStringUrl from "./stringIsUrl";

describe("RegExp: URI", function () {
  it("matches: google.com", () => {
    const url = "google.com";
    expect(isStringUrl(url)).toBe(true);
  });

  it("matches: google.com/search?q=jest", () => {
    const url = "google.com/search?q=jest";
    expect(isStringUrl(url)).toBe(true);
  });

  it("matches: https://google.com", () => {
    const url = "https://google.com";
    expect(isStringUrl(url)).toBe(true);
  });

  it("matches: https://www.google.com/search?q=jest", () => {
    const url = "https://www.google.com/search?q=jest";
    expect(isStringUrl(url)).toBe(true);
  });

  it("doesn't match: https:/google.com", () => {
    const url = "https:/google.com";
    expect(isStringUrl(url)).toBe(false);
  });

  it("doesn't match: https//google.com", () => {
    const url = "https//google.com";
    expect(isStringUrl(url)).toBe(false);
  });

  it("doesn't match: asdadaad", () => {
    const url = "asdadaad";
    expect(isStringUrl(url)).toBe(false);
  });

  it("doesn't match: tel:+78881234567", () => {
    const url = "tel:+78881234567";
    expect(isStringUrl(url)).toBe(false);
  });
});
