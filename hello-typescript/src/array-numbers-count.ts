function numbersCount(inputArray: unknown[]): number {
  let count = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (typeof inputArray[i] === "number") {
      count++;
    }
  }
  return count;
}

console.log(numbersCount([1, 2, 3])); //3
console.log(numbersCount([1, "2", 3])); //2
console.log(numbersCount([1, "2", { id: 1, name: "a" }])); //1
