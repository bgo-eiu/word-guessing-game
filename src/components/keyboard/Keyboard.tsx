import { KeyValue } from '../../lib/keyboard'
import { getStatuses, Letters } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'
import { ENTER_TEXT, DELETE_TEXT } from '../../constants/strings'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
}

export const Keyboard = ({ onChar, onDelete, onEnter, guesses }: Props) => {
  const charStatuses = getStatuses(guesses)

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

  return (
    <div>
      <div className="flex justify-center mb-1">
        {Letters.slice(0, 10).map((l) => (
          <Key key={l} value={l} onClick={onClick} status={charStatuses[l]} />
        ))}
      </div>
      <div className="flex justify-center mb-1">
        {Letters.slice(10, 20).map((l) => (
          <Key key={l} value={l} onClick={onClick} status={charStatuses[l]} />
        ))}
      </div>
      <div className="flex justify-center mb-1">
        {Letters.slice(20, 30).map((l) => (
          <Key key={l} value={l} onClick={onClick} status={charStatuses[l]} />
        ))}
      </div>
      <div className="flex justify-center mb-1">
        {Letters.slice(30, 40).map((l) => (
          <Key key={l} value={l} onClick={onClick} status={charStatuses[l]} />
        ))}
      </div>
      <div className="flex justify-center mb-1">
        {Letters.slice(40, 50).map((l) => (
          <Key key={l} value={l} onClick={onClick} status={charStatuses[l]} />
        ))}
      </div>
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
