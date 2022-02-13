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
      <p className="text-xl text-gray-500 dark:text-gray-300">
        read about it at{' '}
        <a
          href="https://karanbirsingh.com/punjabi-puzzle"
          className="underline"
          data-goatcounter-click="click.blog-post"
          data-goatcounter-title="blog-post"
        >
          karanbirsingh.com/punjabi-puzzle
        </a>
        {''}
        <br />
        <br />
        based on{' '}
        <a href="https://www.powerlanguage.co.uk/wordle/" className="underline">
          wordle
        </a>
        ,{' '}
        <a
          href="https://github.com/hannahcode/word-guessing-game"
          className="underline"
        >
          word-guessing-game
        </a>
        ,{' '}
        <a href="https://kach.github.io/shabdle/" className="underline">
          shabdle
        </a>
      </p>
    </BaseModal>
  )
}
