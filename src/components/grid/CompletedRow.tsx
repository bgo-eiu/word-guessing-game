import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'
import { Modifier } from './modifier'

type Props = {
  guess: string
  modifiers: Modifier
}

export const CompletedRow = ({ guess, modifiers }: Props) => {
  const statuses = getGuessStatuses(guess)
  return (
    <td className="flex justify-center mb-1">
      {guess.split('').map((letter, i) => (
        <Cell
          key={i}
          value={letter}
          status={statuses[i]}
          modifier={modifiers[i]}
        />
      ))}
    </td>
  )
}
