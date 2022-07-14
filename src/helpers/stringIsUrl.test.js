import { describe, expect, it } from "vitest";
import isStringUrl from "./stringIsUrl";

describe("RegExp: URI", function () {
  /*
    Valid values
  */

  it("matches the url without protocol", () => {
    const url = "google.com";
    expect(isStringUrl(url)).toBeTruthy();
  });

  it("matches the url without protocol and with port", () => {
    const url = "google.com:12345";
    expect(isStringUrl(url)).toBeTruthy();
  });

  it("matches the url without protocol and letters after domain slash", () => {
    const url = "google.com/search?q=jest";
    expect(isStringUrl(url)).toBeTruthy();
  });

  it("matches the url with protocol", () => {
    const url = "https://google.com";
    expect(isStringUrl(url)).toBeTruthy();
  });

  it("matches the url with protocol, domain and port", () => {
    const url = "https://google.com:12345";
    expect(isStringUrl(url)).toBeTruthy();
  });

  it("matches the url with protocol, subdomain, domain and letters after hostname", () => {
    const url = "https://www.google.com/search?q=jest";
    expect(isStringUrl(url)).toBeTruthy();
  });

  it("matches the mailto link", () => {
    const url = "mailto:name@email.com";
    expect(isStringUrl(url)).toBeTruthy();
  });

  /*
    Unvalid values
  */

  it("doesn't match the empty string", () => {
    const url = "";
    expect(isStringUrl(url)).toBeFalsy();
  });

  it("doesn't match the random letters", () => {
    const url = "asd9fgh/jkl";
    expect(isStringUrl(url)).toBeFalsy();
  });

  it("doesn't match the url without domain", () => {
    const url = "https:/googlecom";
    expect(isStringUrl(url)).toBeFalsy();
  });

  it("doesn't match the url without 1 slash after https", () => {
    const url = "https:/google.com";
    expect(isStringUrl(url)).toBeFalsy();
  });

  it("doesn't match the url without double dots after https", () => {
    const url = "https//google.com";
    expect(isStringUrl(url)).toBeFalsy();
  });

  it("doesn't match the phone call scheme ", () => {
    const url = "tel:+78881234567";
    expect(isStringUrl(url)).toBeFalsy();
  });
});
