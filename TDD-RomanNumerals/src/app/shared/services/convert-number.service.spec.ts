import { TestBed } from "@angular/core/testing";

import { ConvertNumberService } from "./convert-number.service";

describe("ConvertNumberService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: ConvertNumberService = TestBed.get(ConvertNumberService);
    expect(service).toBeTruthy();
  });
  it("Convert 1 to I", () => {
    const fixture = new ConvertNumberService();
    const results = fixture.convertToRomanNumerals(1);
    expect(results).toEqual("I");
  });
  it("Convert 2 to II", () => {
    const fixture = new ConvertNumberService();
    const results = fixture.convertToRomanNumerals(2);
    expect(results).toEqual("II");
  });
  it("Convert 3 to III", () => {
    const fixture = new ConvertNumberService();
    const results = fixture.convertToRomanNumerals(3);
    expect(results).toEqual("III");
  });
  it("Convert 4 to IV", () => {
    const fixture = new ConvertNumberService();
    const results = fixture.convertToRomanNumerals(4);
    expect(results).toEqual("IV");
  });
  it("Convert 5 to V", () => {
    const fixture = new ConvertNumberService();
    const results = fixture.convertToRomanNumerals(5);
    expect(results).toEqual("V");
  });
  it("Convert 6 to VI", () => {
    const fixture = new ConvertNumberService();
    const results = fixture.convertToRomanNumerals(6);
    expect(results).toEqual("VI");
  });
});

describe("ConvertToArabic", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("Convert I to 1", () => {
    const fixture = new ConvertNumberService();
    const results = fixture.convertToArabicNumber("I");
    expect(results).toEqual(1);
  });
  it("Convert II to 2", () => {
    const fixture = new ConvertNumberService();
    const results = fixture.convertToArabicNumber("II");
    expect(results).toEqual(2);
  });
  it("Convert III to 3", () => {
    const fixture = new ConvertNumberService();
    const results = fixture.convertToArabicNumber("III");
    expect(results).toEqual(3);
  });
  it("Convert IV to 4", () => {
    const fixture = new ConvertNumberService();
    const results = fixture.convertToArabicNumber("IV");
    expect(results).toEqual(4);
  });
  it("Convert V to 5", () => {
    const fixture = new ConvertNumberService();
    const results = fixture.convertToArabicNumber("V");
    expect(results).toEqual(5);
  });
});
