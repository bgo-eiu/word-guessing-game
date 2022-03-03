import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'
import { traceDeprecation } from 'process'

type Props = {
  modifier?: string
  value?: string
  status?: CharStatus
}

export const Cell = ({ modifier, value, status }: Props) => {
  const classes = classnames(
    'w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-2xl rounded dark:text-white',
    {
      'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600':
        !status,
      'border-black dark:border-slate-100': value && !status,
      'bg-slate-500 dark:bg-slate-800 text-white border-slate-500 dark:border-slate-800':
        status === 'absent',
      'bg-green-600 text-white border-green-600': status === 'correct',
      'bg-[#b1a752] dark:bg-[#b1a752] text-white border-[#b1a752] dark:border-[#b1a752]':
        status === 'present',
      'cell-animation': !!value,
    }
  )
  const text = `${value}${modifier}`
  return (
    <td className={classes} aria-label={`${value} ${status}`}>
      {text}
    </td>
  )
}
