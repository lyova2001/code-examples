const mockedFilter = {
  _sort: 'price',
  _limit: 15,
  q: 'Nikon',
}

const URL_CONST = 'localhost:3000/products'

const constructURL = (url, filter) => {
  const queryParams = []
  for (const key in filter) {
    if (filter.hasOwnProperty(key)) {
      const value = filter[key]
      queryParams.push(`${key}=${encodeURIComponent(value)}`)
    }
  }
  const queryString = queryParams.join('&')
  return `${url}?${queryString}`
}

const finalURL = constructURL(URL_CONST, mockedFilter)
console.log(finalURL)
