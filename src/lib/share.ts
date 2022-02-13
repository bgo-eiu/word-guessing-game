import { getGuessStatuses } from './statuses'
import { GAME_TITLE } from '../constants/strings'
import { SolutionInfo } from './words'

export const shareStatus = (
  guesses: string[],
  lost: boolean,
  gameDescription: string,
  solutionInfo: SolutionInfo
) => {
  navigator.clipboard.writeText(
    `${GAME_TITLE} | ${gameDescription} | ${guesses.length} guesses\n\n` +
      generateEmojiGrid(guesses, solutionInfo) +
      '\n\n' +
      'Play at https://punjabipuzzle.netlify.app/'
  )
}

export const generateEmojiGrid = (
  guesses: string[],
  solutionInfo: SolutionInfo
) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess, solutionInfo)
      return guess
        .split('')
        .map((letter, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩'
            case 'present':
              return '🟦'
            default:
              return '⬜'
          }
        })
        .join('')
    })
    .join('\n')
}
