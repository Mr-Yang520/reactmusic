export function handleSongsCategory(data) {
  const category = data.categories
  const categoryData = Object.entries(category).map(([key, value]) => {
    return {
      name: value,
      subs: [],
    }
  })
  for (let item of data.sub) {
    categoryData[item.category].subs.push(item)
  }

  return categoryData
}
