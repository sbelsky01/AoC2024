const fs = require("fs");
const filePath = "input.txt";

fs.readFile(filePath, "utf8", (err, data) => {
  const input = data.split(/[\r]*\n/);

  console.log("Part 1: " + part1(input));
  console.log("Part 2: " + part2(input));
});

const part1 = (input) => {
  let ct = 0;
  input.forEach((l) => {
    const ns = l.split(" ");
    ns.forEach((n, i) => (ns[i] = +n));
    const neg = ns[1] - ns[0] < 0;
    for (let i = 0; i < ns.length - 1; i++) {
      const d = Math.abs(ns[i + 1] - ns[i]);
      if (
        d < 1 ||
        d > 3 ||
        (neg && ns[i + 1] > ns[i]) ||
        (!neg && ns[i + 1] < ns[i])
      ) {
        return;
      }
    }
    ct++;
  });
  return ct;
};

const part2 = (input) => {
  let ct = 0;
  input.forEach((l) => {
    const ar = l.split(" ");
    for (let i = 0; i < ar.length; i++) {
      const ns = [...ar];
      ns.splice(i, 1);
      if (isValid(ns)) {
        ct++;
        return;
      }
    }
  });
  return ct;
};

const isValid = (ns) => {
  ns.forEach((n, i) => (ns[i] = +n));
  const neg = ns[1] - ns[0] < 0;
  for (let i = 0; i < ns.length - 1; i++) {
    const d = Math.abs(ns[i + 1] - ns[i]);
    if (
      d < 1 ||
      d > 3 ||
      (neg && ns[i + 1] > ns[i]) ||
      (!neg && ns[i + 1] < ns[i])
    ) {
      return false;
    }
  }
  return true;
};
