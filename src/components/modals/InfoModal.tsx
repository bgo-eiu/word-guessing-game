import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word. The colors will give you clues.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="" />
        <Cell value="" />
        <Cell value="" modifier="ਿ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The last letter has a ਿ. You just guess the mukta.
      </p>
      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ਗ" status="absent" />
        <Cell value="ਰ" status="correct" />
        <Cell value="ਮ" status="absent" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        <span className="text-lg">ਰ</span> is in the word and in the correct
        spot. <br /> Muktas <span className="text-lg">ਗ</span> or{' '}
        <span className="text-lg">ਮ</span> are not in the word at all.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ਪ" modifier="ਾ" status="present" />
        <Cell value="ਲ" />
        <Cell value="ਕ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The mukta <span className="text-lg">ਪ</span> (not with{' '}
        <span className="text-lg">ਾ</span>) is in the word.
        <br /> But it's in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ਆ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Special letters like ਆ or ਏ will not show ਾ or ੇ clues.
      </p>
    </BaseModal>
  )
}
