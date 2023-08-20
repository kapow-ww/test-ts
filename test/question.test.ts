import { getHandScore } from "../src/question1";
import { getClockAngle } from "../src/question2";
import { getQuestionPart } from "../src/question3";

describe("Question 1 :", () => {
  it("S8 S10 CA is 18", () => {
    const result = getHandScore("S8 S10 CA");
    expect(result).toBe(18);
  });

  it("SA SA CA is 35", () => {
    const result = getHandScore("SA SA CA");
    expect(result).toBe(35);
  });

  it("SJ SJ CJ is 32.5", () => {
    const result = getHandScore("SJ SJ CJ");
    expect(result).toBe(32.5);
  });

  it("SQ SQ CQ : 32.5", () => {
    const result = getHandScore("SQ SQ CQ");
    expect(result).toBe(32.5);
  });

  it("S10 SQ CK is 20", () => {
    const result = getHandScore("S10 SQ CK");
    expect(result).toBe(20);
  });

  it("S10 C10 H9 is 10", () => {
    const result = getHandScore("S10 C10 H9");
    expect(result).toBe(10);
  });
});

describe("Question 2 :", () => {
  it("09:00 is 90 degree", () => {
    const result = getClockAngle("09:00");
    expect(result).toBe(90);
  });

  it("17:30 is 15 degree", () => {
    const result = getClockAngle("17:30");
    expect(result).toBe(15);
  });

  it("11:00 is 30 degree", () => {
    const result = getClockAngle("11:00");
    expect(result).toBe(30);
  });

  it("12:00 is 0 degree", () => {
    const result = getClockAngle("12:00");
    expect(result).toBe(0);
  });

  it("13:00 is 30 degree", () => {
    const result = getClockAngle("13:00");
    expect(result).toBe(30);
  });

  it("11:45 is 82.5 degree", () => {
    const result = getClockAngle("11:45");
    expect(result).toBe(82.5);
  });

  it("22:22 is 179 degree", () => {
    const result = getClockAngle("22:22");
    expect(result).toBe(179);
  });

  it("12:34 is 173 degree", () => {
    const result = getClockAngle("12:34");
    expect(result).toBe(173);
  });

  it("01:59 is 65.5 degree", () => {
    const result = getClockAngle("01:59");
    expect(result).toBe(65.5);
  });
});

describe("Question 3 :", () => {
  it("test 1", () => {
    const result = getQuestionPart(["BATHROOM", "BATHSALT", "BLOODBATH"]);
    expect(result).toEqual(["ROOM", "SALT", "BLOOD"]);
  });
  it("test 2", () => {
    const result = getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]);
    expect(result).toEqual(["BE", "GIRL", "SHIP"]);
  });
  it("test 3", () => {
    const result = getQuestionPart(["HANDSOME", "SOMETHING", "SOMEBODY"]);
    expect(result).toEqual(["HAND", "THING", "BODY"]);
  });
  it("test 4", () => {
    const result = getQuestionPart(["FULLMOON", "HELPFULLY", "FULLNAME"]);
    expect(result).toEqual(["MOON", "HELPY", "NAME"]);
  });
});
