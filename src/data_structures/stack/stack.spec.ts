import Stack from "./stack";
const dynamicStack: Stack<string> = new Stack<string>();
const staticStack = new Stack(4);

afterEach(() => {
  dynamicStack.clear();
  staticStack.clear();
});

test("testing the func push() in dynamic stack :1", () => {
  dynamicStack.push("echo");

  expect(dynamicStack.Count).toBe(1);
});

describe("testing the func push() in static stack :", () => {
  it("should throw an error !", () => {
    staticStack.push("echo");
    staticStack.push("hotel");
    staticStack.push("india");
    staticStack.push("siera");

    expect(() => staticStack.push("enemy")).toThrow();
  });
});

test("testing the func pop() in dynamic stack :1", () => {
  dynamicStack.push("echo");

  expect(dynamicStack.pop()).toBe(1);

  dynamicStack.pop();

  expect(dynamicStack.pop()).toBe(-1);
});

test("testing the func pick() :", () => {
  dynamicStack.push("echo");
  dynamicStack.push("hotel");
  dynamicStack.push("india");
  dynamicStack.push("siera");

  expect(dynamicStack.pick()).toBe("siera");

  dynamicStack.clear();

  expect(dynamicStack.pick()).toBeFalsy();
});

test("testing the func clear() :", () => {
  dynamicStack.push("echo");
  dynamicStack.push("echo");
  dynamicStack.push("hotel");
  dynamicStack.push("india");
  dynamicStack.push("siera");
  dynamicStack.clear();
  expect(dynamicStack.Count).toBe(0);
});

test("testing the func contains() :", () => {
  dynamicStack.push("echo");
  dynamicStack.push("hotel");
  dynamicStack.push("india");
  dynamicStack.push("siera");

  expect(dynamicStack.contains("india")).toBeTruthy();
  expect(dynamicStack.contains("anonymos")).toBeFalsy();
});

test("testing func copyToArray() :", () => {
  dynamicStack.push("echo");
  dynamicStack.push("hotel");
  dynamicStack.push("india");
  dynamicStack.push("siera");
  const expected = ["echo", "hotel", "india", "siera"];
  const myArray = ["lop", "bob"];

  dynamicStack.copyToArray(myArray, 0);

  expect(myArray).toEqual(expect.arrayContaining(expected));
});
