import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ConvertNumberService {
  constructor() {}

  public convertToRomanNumerals(value: number): string {
    if (value < 4) {
      const multiplier = value % 5;
      const answer = "".padEnd(multiplier, "I");
      return answer;
    } else if (value === 4) {
      return "IV";
    } else if (value === 6) {
      return "VI";
    } else {
      return "V";
    }
  }

  public convertToArabicNumber(value: string): number {
    var answer = 0;
    for (var index = 0; index < value.length; index++) {
      var character = value.charAt(index).toUpperCase();
      switch (character) {
        case "I":
          if (index < value.length - 1) {
            var nextCharacter = value.charAt(index + 1).toUpperCase();
            switch (nextCharacter) {
              case "V":
                answer = 4;
                break;
              default:
                answer += 1;
                break;
            }
          } else {
            answer += 1;
          }
          break;
        case "V":
          if (index === value.length - 1) {
            answer += 5;
          }
          break;
      }
    }
    return answer;
  }
}
