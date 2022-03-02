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
    <div>
      <div className="flex justify-center">
        <table>
          <tbody>
            {guesses.map((guess, i) => (
              <CompletedRow
                key={i}
                guess={guess}
                modifiers={modifiers}
                solutionInfo={solutionInfo}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
