import Countdown from 'react-countdown'
import { StatBar } from '../stats/StatBar'
import { Histogram } from '../stats/Histogram'
import { GameStats } from '../../lib/localStorage'
import { getShareStr } from '../../lib/share'
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
  const shareText = getShareStr(guesses, gameDescription, solutionInfo)
  const shareTextEncoded = encodeURIComponent(shareText)

  return (
    <BaseModal
      title={STATISTICS_TITLE}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      {(isGameLost || isGameWon) && (
        <div>
          <div className="mt-5 sm:mt-6 columns-1 dark:text-white">
            You've guessed {gameStats.totalGames} words. Keep it up!
            <button
              aria-label="play another word"
              className="mt-4 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-700 text-base font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 sm:text-sm"
              onClick={() => {
                handlePlayAnother()
              }}
              data-goatcounter-click="click.play-again"
            >
              Play another word
            </button>
            <div className="grid grid-cols-2 gap-2">
              <button
                aria-label="share results"
                className="mt-4 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                onClick={() => {
                  navigator.clipboard.writeText(shareText)
                  handleShare()
                }}
                data-goatcounter-click="click.share-clipboard"
              >
                {SHARE_TEXT}
              </button>
              <a
                aria-label="see other tweets"
                className="block mt-4 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:text-sm"
                href={`https://twitter.com/search?q=punjabipuzzle.netlify.app&f=live`}
                data-goatcounter-click="click.view-twitter"
                target="_blank"
              >
                See other results
              </a>
            </div>
            <a
              aria-label="see word definition"
              className="block mt-4 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              href={dictionaryLink}
              target="_blank"
              data-goatcounter-click="click.dsal-dictionary"
            >
              See {solutionInfo.solution} meaning
            </a>
          </div>
        </div>
      )}
    </BaseModal>
  )
}
