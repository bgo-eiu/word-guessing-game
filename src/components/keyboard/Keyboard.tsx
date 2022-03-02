import { KeyValue } from '../../lib/keyboard'
import { getStatuses, Letters } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'
import { ENTER_TEXT, DELETE_TEXT } from '../../constants/strings'
import { SolutionInfo } from '../../lib/words'
import { Settings } from '../../lib/localStorage'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
  solutionInfo: SolutionInfo
  view: Settings['keyboardLayout']
}

export const Keyboard = ({
  onChar,
  onDelete,
  onEnter,
  guesses,
  solutionInfo,
  view,
}: Props) => {
  const charStatuses = getStatuses(guesses, solutionInfo)

  const onClick = (value: KeyValue) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = e.key.toUpperCase()
        if (Letters.includes(key)) {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  let total = 0
  const splitLetters = []
  const nextCount = view === 'ten-per-line' ? 10 : 5
  while (total < Letters.length) {
    splitLetters.push(Letters.slice(total, total + nextCount))
    total += nextCount
  }

  const width = view === 'ten-per-line' ? 40 : 60
  const keys = splitLetters.map((letters, i) => (
    <div className="flex justify-center mb-1" key={i}>
      {letters.map((l) => (
        <Key
          key={l}
          value={l}
          onClick={onClick}
          width={width}
          status={charStatuses[l]}
        />
      ))}
    </div>
  ))

  return (
    <div className="pt-6">
      {keys}
      <div className="flex justify-center">
        <Key key={'enter'} width={100} value="ENTER" onClick={onClick}>
          {ENTER_TEXT}
        </Key>
        <Key key={'delete'} width={100} value="DELETE" onClick={onClick}>
          {DELETE_TEXT}
        </Key>
      </div>
    </div>
  )
}
