import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { Modifier } from './modifier'

type Props = {
  guesses: string[]
  currentGuess: string
  modifiers: Modifier
}

export const Grid = ({ guesses, currentGuess, modifiers }: Props) => {
  return (
    <div className="flex justify-center pb-6">
      <table>
        {guesses.map((guess, i) => (
          <tr>
            <CompletedRow key={i} guess={guess} modifiers={modifiers} />
          </tr>
        ))}
        {
          <tr>
            <CurrentRow guess={currentGuess} modifiers={modifiers} />
          </tr>
        }
      </table>
    </div>
  )
}
