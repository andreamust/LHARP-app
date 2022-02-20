const data = require("./hsim.json").similarities;

export function findId(id) {
  return data.find((event) => event.track == id);
}

export function getSim(query, filterValue) {
  return data
    .filter((x) => x.track == query)[0]
    .similarTo.filter((x) => x.value >= filterValue / 10000);
}
