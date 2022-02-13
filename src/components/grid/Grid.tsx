import { SolutionInfo } from '../../lib/words'
import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { Modifier } from './modifier'

type Props = {
  guesses: string[]
  currentGuess: string
  modifiers: Modifier
  solutionInfo: SolutionInfo
}

export const Grid = ({
  guesses,
  currentGuess,
  modifiers,
  solutionInfo,
}: Props) => {
  return (
    <div className="flex justify-center pb-6">
      <table>
        {guesses.map((guess, i) => (
          <tr>
            <CompletedRow
              key={i}
              guess={guess}
              modifiers={modifiers}
              solutionInfo={solutionInfo}
            />
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
