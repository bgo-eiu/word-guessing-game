import { Cell } from './Cell'

type Props = {
  guess: string
  modifiers: string[]
}

export const CurrentRow = ({ guess, modifiers }: Props) => {
  return (
    <div id="current-row" className="flex justify-center mb-1">
      <Cell key={0} value={guess.charAt(0)} modifier={modifiers[0]} />
      <Cell key={1} value={guess.charAt(1)} modifier={modifiers[1]} />
      <Cell key={2} value={guess.charAt(2)} modifier={modifiers[2]} />
    </div>
  )
}
