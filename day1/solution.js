const fs = require("fs");
const filePath = "input.txt";

fs.readFile(filePath, "utf8", (err, data) => {
  const input = data.split(/[\r]*\n/);

  console.log("Part 1: " + part1(input));
  console.log("Part 2: " + part2(input));
});

const part1 = (input) => {
  const list1 = [],
    list2 = [];
  input.forEach((s) => {
    const [first, second] = s.split("   ");
    list1.push(first);
    list2.push(second);
  });
  list1.sort();
  list2.sort();
  let diffSum = 0;
  list1.forEach((num, i) => {
    diffSum += Math.abs(num - list2[i]);
  });
  return diffSum;
};

const part2 = (input) => {
  const left = [],
    right = [];
  input.forEach((s) => {
    const [first, second] = s.split("   ");
    left.push(+first);
    right.push(+second);
  });
  const map = right.reduce((p, c) => {
    if (!p[c]) {
      p[c] = 0;
    }
    p[c]++;
    return p;
  }, {});
  const sum = left.reduce((p, c) => p + c * (map[c] ?? 0), 0);
  return sum;
};
