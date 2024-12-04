const fs = require("fs");
const filePath = "input.txt";

fs.readFile(filePath, "utf8", (err, data) => {
  console.log("Part 1: " + part1(data));
  console.log("Part 2: " + part2(data));
});

const part1 = (input) => {
  return sectionSum(input);
};

const part2 = (input) => {
  return input
    .split("do()")
    .map((section) => section.split("don't()")[0])
    .reduce((sum, section) => sum + sectionSum(section), 0);
};

const sectionSum = (section) => {
  return [...section.matchAll(/(mul\((\d{0,3}),(\d{0,3})\))/g)].reduce(
    (sum, match) => match[2] * match[3] + sum,
    0
  );
};
