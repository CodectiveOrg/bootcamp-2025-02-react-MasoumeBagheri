function reverse<T>(input: T[]): T[] {
  let itemsReverse = [];
  for (let i = input.length - 1; i >= 0; i--) {
    itemsReverse.push(input[i]);
  }
  return itemsReverse;
}

console.log(reverse<number>([1, 2, 3, 4]));
console.log(reverse<string>(["a", "b", "c", "d"]));
