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
        Guess the word. The color will change to show how close your guess is.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="" />
        <Cell value="" />
        <Cell value="" modifier="ਿ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The last letter has a ਿ. You only need to guess the mukta.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ਗ" />
        <Cell value="ਰ" status="correct" />
        <Cell value="ਮ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        ਰ is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ਪ" modifier="ਾ" status="present" />
        <Cell value="ਲ" />
        <Cell value="ਕ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The mukta ਪ (ignore the ਾ) is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ਲ" modifier="ੇ" />
        <Cell value="ਖ" status="absent" />
        <Cell value="ਕ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        ਖ is not in the word in any spot.
      </p>
    </BaseModal>
  )
}
