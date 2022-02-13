import { WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'
import {
  createModifier,
  isModifier,
  Modifier,
} from '../components/grid/modifier'

export const isWordInWordList = (word: string, modifiers: Modifier) => {
  return true

  // Removing requirement for words until we have a suitable dictionary
  /*
  let wordWithModifiers = ''
  for (var i = 0; i < word.length; i++) {
    wordWithModifiers += word.charAt(i) + modifiers[i]
  }
  return (
    WORDS.includes(wordWithModifiers.toLowerCase()) ||
    VALIDGUESSES.includes(wordWithModifiers.toLowerCase())
  )
  */
}

export type SolutionInfo = {
  solution: string
  solutionWithoutModifiers: string
  solutionIndex: number
  modifiers: Modifier
}

export type DailySolutionInfo = SolutionInfo & {
  tomorrow: number
}

export const getRandomWord = (): SolutionInfo => {
  const index = Math.floor(Math.random() * WORDS.length)
  const solution = WORDS[index % WORDS.length].toUpperCase()
  const solutionWithoutModifiers = solution
    .split('')
    .filter((l) => !isModifier(l))
    .join('')
  return {
    solution,
    solutionWithoutModifiers,
    solutionIndex: index,
    modifiers: createModifier(solution),
  }
}

export const getWordOfDay = (): DailySolutionInfo => {
  const epochMs = new Date('February 4, 2022 00:00:00').valueOf()
  const now = Date.now()
  const msInDay = 86400000 // / 24 / 12 // every 5 min
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs

  const solution = WORDS[index % WORDS.length].toUpperCase()
  const solutionWithoutModifiers = solution
    .split('')
    .filter((l) => !isModifier(l))
    .join('')
  return {
    solution,
    solutionWithoutModifiers,
    solutionIndex: index,
    tomorrow: nextday,
    modifiers: createModifier(solution),
  }
}
