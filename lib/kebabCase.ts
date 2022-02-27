export const kebabCase = (words: string) => {
  const arr = words.toLowerCase().split(' ')
  return arr.join('-')
}
