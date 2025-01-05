type KnownType = Record<string, unknown>;

type MyObjectType = KnownType & {
  createAt: Date;
  modifiedAt?: Date;
};

function recentObject(inputArray: MyObjectType[]): MyObjectType {
  return inputArray.reduce((currentObj, recentObj) => {
    return (currentObj.modifiedAt || currentObj.createAt) >
      (recentObj.modifiedAt || recentObj.createAt)
      ? currentObj
      : recentObj;
  });
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
