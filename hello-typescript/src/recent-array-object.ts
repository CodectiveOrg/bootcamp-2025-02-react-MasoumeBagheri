type KnownType = Record<string, unknown>;

type MyObjectType = KnownType & {
  createAt: Date;
  modifiedAt?: Date;
};

function recentObject(inputArray: MyObjectType[]): object {
  let recentObject = inputArray[0];
  let recentDate: Date = inputArray[0].modifiedAt || inputArray[0].createAt;
  for (let i = 0; i < inputArray.length; i++) {
    const currentDate = inputArray[i].modifiedAt || inputArray[i].createAt;
    if (currentDate > recentDate) {
      recentDate = currentDate;
      recentObject = inputArray[i];
    }
  }

  return recentObject;
}

const inputArray: MyObjectType[] = [
  { createAt: new Date("2024-01-01"), a: 1, b: "b" },
  {
    createAt: new Date("2024-02-01"),
    modifiedAt: new Date("2024-03-01"),
    a: 1,
  },
  { createAt: new Date("2024-01-15"), b: true },
];

console.log(recentObject(inputArray));
