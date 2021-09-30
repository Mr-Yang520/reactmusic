export function parseLyric(lyricData) {
  const lineStrings = lyricData.split("\n")
  const lyricExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
  let lyricDetail = []
  for (let line of lineStrings) {
    if (line) {
      const lineData = lyricExp.exec(line)
      if (!line) continue;
      const time = lineData[1] * 60 * 1000 + lineData[2] * 1000 + lineData[3].length === 3 ? lineData[3] * 1 : lineData[3] * 10
      const lineContent = line.replace(lyricExp, '')
      const lineObj = {time,lineContent}
      lyricDetail = [...lyricDetail, lineObj]
    }
  }
  return lyricDetail
}