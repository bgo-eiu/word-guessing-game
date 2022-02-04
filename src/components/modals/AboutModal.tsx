import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="About this game"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an open-source Punjabi guessing game.{' '}
        <a
          href="https://github.com/karanbirsingh/word-guessing-game"
          className="underline font-bold"
        >
          Learn more here
        </a>
        {''}.
      </p>
    </BaseModal>
  )
}
