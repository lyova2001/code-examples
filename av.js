const relatives = {
  Daryl: { age: 35, isMale: true },
  Maggie: { age: 25, isMale: false },
  Rick: { age: 40, isMale: true },
  Bob: { age: 34, isMale: true },
  Michonne: { age: 35, isMale: false },
  Carl: { age: 12, isMale: true },
}

function getAverege(relatives, isMale) {
  const acc = Object.keys(relatives).reduce(
    (prev, key) => {
      if (relatives[key].isMale === isMale) {
        return {
          prev: prev.count++,
          av: (prev.av += relatives[key].age),
        }
      }
      return prev
    },
    { av: 0, count: 0 }
  )
  return acc.av / acc.count
}

console.log(getAverege(relatives, true)) // 30.25
