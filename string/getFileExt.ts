export const getFileExt = (fullFileName: string): string => {
  const regex = /^.*\.(js|jsx|txt|ts|tsx|json)$/
  const ext = fullFileName.match(regex)

  return ext ? ext.at(-1)! : 'txt'
}
