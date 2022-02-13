import Countdown from 'react-countdown'
import { StatBar } from '../stats/StatBar'
import { Histogram } from '../stats/Histogram'
import { GameStats } from '../../lib/localStorage'
import { shareStatus } from '../../lib/share'
import { BaseModal } from './BaseModal'
import {
  STATISTICS_TITLE,
  GUESS_DISTRIBUTION_TEXT,
  NEW_WORD_TEXT,
  SHARE_TEXT,
} from '../../constants/strings'
import { DailySolutionInfo, SolutionInfo } from '../../lib/words'

type Props = {
  isOpen: boolean
  handleClose: () => void
  handlePlayAnother: () => void
  guesses: string[]
  gameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShare: () => void
  gameDescription: string
  solutionInfo: SolutionInfo
}

export const StatsModal = ({
  isOpen,
  handleClose,
  handlePlayAnother,
  guesses,
  gameStats,
  isGameLost,
  isGameWon,
  handleShare,
  gameDescription,
  solutionInfo,
}: Props) => {
  const countdown = (solutionInfo as DailySolutionInfo).tomorrow ? (
    <div>
      <h5>{NEW_WORD_TEXT}</h5>
      <Countdown
        className="text-lg font-medium text-gray-900 dark:text-gray-100"
        date={0}
        daysInHours={true}
      />
    </div>
  ) : null

  const dictionaryLink = `https://dsal.uchicago.edu/cgi-bin/app/singh_query.py?qs=${solutionInfo.solution}&searchhws=yes`
  return (
    <BaseModal
      title={STATISTICS_TITLE}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      {(isGameLost || isGameWon) && (
        <div className="mt-5 sm:mt-6 dark:text-white">
          You've guessed {gameStats.totalGames} words!
          <div className="mt-5 sm:mt-6 columns-1 dark:text-white">
            <button
              aria-label="play another word"
              className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              onClick={() => {
                handlePlayAnother()
              }}
            >
              Play another word
            </button>
            <a
              aria-label="see word definition"
              className="block mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              href={dictionaryLink}
              target="_blank"
            >
              See meaning of {solutionInfo.solution}
            </a>
            <button
              aria-label="copy guess chart to clipboard"
              className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              onClick={() => {
                shareStatus(guesses, isGameLost, gameDescription, solutionInfo)
                handleShare()
              }}
            >
              {SHARE_TEXT}
            </button>
          </div>
        </div>
      )}
    </BaseModal>
  )
}
