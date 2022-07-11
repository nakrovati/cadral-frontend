import { describe, expect, it } from "vitest";
import isStringUrl from "./stringIsUrl";

describe("RegExp: URI", function () {
  /*
    Valid values
  */

  it("matches: google.com", () => {
    const url = "google.com";
    expect(isStringUrl(url)).toBeTruthy();
  });

  it("matches: google.com/search?q=jest", () => {
    const url = "google.com/search?q=jest";
    expect(isStringUrl(url)).toBeTruthy();
  });

  it("matches: https://google.com", () => {
    const url = "https://google.com";
    expect(isStringUrl(url)).toBeTruthy();
  });

  it("matches: https://google.com:3000", () => {
    const url = "https://google.com:3000";
    expect(isStringUrl(url)).toBeTruthy();
  });

  it("matches: https://www.google.com/search?q=jest", () => {
    const url = "https://www.google.com/search?q=jest";
    expect(isStringUrl(url)).toBeTruthy();
  });

  /*
    Unvalid values
  */

  it("matches: ''", () => {
    const url = "";
    expect(isStringUrl(url)).toBeFalsy();
  });

  it("matches: 1 (number)", () => {
    const url = "1";
    expect(isStringUrl(url)).toBeFalsy();
  });

  it("doesn't match: https:/google.com", () => {
    const url = "https:/google.com";
    expect(isStringUrl(url)).toBeFalsy();
  });

  it("doesn't match: https//google.com", () => {
    const url = "https//google.com";
    expect(isStringUrl(url)).toBeFalsy();
  });

  it("doesn't match: asdadaad", () => {
    const url = "asdadaad";
    expect(isStringUrl(url)).toBeFalsy();
  });

  it("doesn't match: tel:+78881234567", () => {
    const url = "tel:+78881234567";
    expect(isStringUrl(url)).toBeFalsy();
  });
});
