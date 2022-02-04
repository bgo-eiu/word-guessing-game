import { solutionWithoutModifiers } from './words'

export type CharStatus = 'absent' | 'present' | 'correct'

export const Letters = [
  'ੳ',
  'ਅ',
  'ੲ',
  'ਸ',
  'ਹ',
  'ਕ',
  'ਖ',
  'ਗ',
  'ਘ',
  'ਙ',
  'ਚ',
  'ਛ',
  'ਜ',
  'ਝ',
  'ਞ',
  'ਟ',
  'ਠ',
  'ਡ',
  'ਢ',
  'ਣ',
  'ਤ',
  'ਥ',
  'ਦ',
  'ਧ',
  'ਨ',
  'ਪ',
  'ਫ',
  'ਬ',
  'ਭ',
  'ਮ',
  'ਯ',
  'ਰ',
  'ਲ',
  'ਵ',
  'ੜ',
  'ਸ਼',
  'ਖ਼',
  'ਗ਼',
  'ਜ਼',
  'ਫ਼',
  'ਆ',
  'ਇ',
  'ਈ',
  'ਉ',
  'ਊ',
  'ਏ',
  'ਐ',
  'ਓ',
  'ਔ',
]

export type CharValue = typeof Letters[number]

export const getStatuses = (
  guesses: string[]
): { [key: string]: CharStatus } => {
  const charObj: { [key: string]: CharStatus } = {}

  guesses.forEach((word) => {
    word.split('').forEach((letter, i) => {
      if (!solutionWithoutModifiers.includes(letter)) {
        // make status absent
        return (charObj[letter] = 'absent')
      }

      if (letter === solutionWithoutModifiers[i]) {
        //make status correct
        return (charObj[letter] = 'correct')
      }

      if (charObj[letter] !== 'correct') {
        //make status present
        return (charObj[letter] = 'present')
      }
    })
  })

  return charObj
}

export const getGuessStatuses = (guess: string): CharStatus[] => {
  const splitSolution = solutionWithoutModifiers.split('')
  const splitGuess = guess.split('')

  const solutionCharsTaken = splitSolution.map((_) => false)

  const statuses: CharStatus[] = Array.from(Array(guess.length))
  // handle all correct cases first
  splitGuess.forEach((letter, i) => {
    if (letter === splitSolution[i]) {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    }
  })

  splitGuess.forEach((letter, i) => {
    if (statuses[i]) return

    if (!splitSolution.includes(letter)) {
      // handles the absent case
      statuses[i] = 'absent'
      return
    }

    // now we are left with "present"s
    const indexOfPresentChar = splitSolution.findIndex(
      (x, index) => x === letter && !solutionCharsTaken[index]
    )

    if (indexOfPresentChar > -1) {
      statuses[i] = 'present'
      solutionCharsTaken[indexOfPresentChar] = true
      return
    } else {
      statuses[i] = 'absent'
      return
    }
  })

  return statuses
}
