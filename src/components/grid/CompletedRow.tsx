import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'
import { Modifier } from './modifier'

type Props = {
  guess: string
  modifiers: Modifier
}

export const CompletedRow = ({ guess, modifiers }: Props) => {
  const statuses = getGuessStatuses(guess)
  const cells = guess.split('').map((letter, i) => (
    <div>
      <Cell
        key={i}
        value={letter}
        status={statuses[i]}
        modifier={modifiers[i]}
      />{' '}
    </div>
  ))
  return <div>{cells}</div>
}
