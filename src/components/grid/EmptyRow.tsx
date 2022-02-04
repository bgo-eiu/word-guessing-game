import { Cell } from './Cell'
import { Modifier } from './modifier'

type Props = {
  modifier?: Modifier
}

const defaultModifiers = [undefined, undefined, undefined]

export const EmptyRow = ({ modifier }: Props) => {
  const emptyCells = Array.from(Array(3))
  const mod = modifier ?? defaultModifiers
  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((_, i) => (
        <Cell key={i} modifier={mod[i]} />
      ))}
    </div>
  )
}
