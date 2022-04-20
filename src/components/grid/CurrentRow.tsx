import { Cell } from './Cell'

type Props = {
  guess: string
  modifiers: string[]
}

export const CurrentRow = ({ guess, modifiers }: Props) => {
  return (
    <table>
      <tbody>
        <tr id="current-row" className="flex justify-center mb-1">
          {modifiers.map((m, i) => (
            <Cell key={i} value={guess.charAt(i)} modifier={m} />
          ))}
        </tr>
      </tbody>
    </table>
  )
}
