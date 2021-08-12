/**
 *
 * @param {String} string
 * @returns
 */
export const capitalize = (string) =>
  string.split(" ").reduce((aggregateWord, currentWord) => {
    const capitalizedCurrentWord = `${currentWord[0].toUpperCase()}${currentWord
      .slice(1)
      .toLowerCase()}`
    return `${aggregateWord} ${capitalizedCurrentWord}`
  }, "")
