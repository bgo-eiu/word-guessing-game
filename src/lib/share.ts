import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { GAME_TITLE } from '../constants/strings'

export const shareStatus = (guesses: string[], lost: boolean) => {
  navigator.clipboard.writeText(
    `${GAME_TITLE} #${solutionIndex} | ${guesses.length} guesses\n\n` +
      generateEmojiGrid(guesses) +
      '\n\n' +
      'Play at https://punjabipuzzle.netlify.app/'
  )
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
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
