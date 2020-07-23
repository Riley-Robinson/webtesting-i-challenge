module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {

    if (item.enhancement !== 20) {
      return item.enhancement + 1
    } else {
      return item.enhancement
    }
}

function fail(item) {
    if (item.enhancement !== 20) {
      return item.enhancement + 1
    } else {
      return item.enhancement
    }
}

function repair(item) {
  let difference = 0
  if (item.durability === 100) {
    return item.durability
  } else {
    difference = 100 - item.durability
  }
  return difference + item.durability


}

function get(item) {
  if (item.enhancement > 0) {
    let level = item.enhancement
    item.name = `[+${level}]` + item.name
  }
  return item
}
