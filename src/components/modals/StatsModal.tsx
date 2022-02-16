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
import { useEffect } from 'react'

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
  const shareTextEmojiReplaced = shareText
    .replaceAll('🟩', 'GOOD')
    .replaceAll('🟦', 'CLOSE')
    .replaceAll('⬜', 'WRONG')

  const shareTextPreEncoded = encodeURIComponent(shareTextEmojiReplaced)
  const shareTextEncoded = shareTextPreEncoded
    .replaceAll('GOOD', '%F0%9F%9F%A9')
    .replaceAll('CLOSE', '%F0%9F%9F%A6')
    .replaceAll('WRONG', '%E2%AC%9C')

  return (
    <BaseModal
      title={STATISTICS_TITLE}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      {(isGameLost || isGameWon) && (
        <div>
          <div className="mt-5 sm:mt-6 columns-1 dark:text-white">
            You've guessed {gameStats.totalGames}{' '}
            {gameStats.totalGames > 1 ? 'words' : 'word'}. Keep it up!
            <button
              aria-label="play another word"
              className="mt-4 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-700 text-lg font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 sm:text-sm"
              onClick={() => {
                handlePlayAnother()
                try {
                  ;(window as any).goatcounter.count({
                    path: function (p: string) {
                      return 'click.play-again' + p
                    },
                    title: 'click.play-again',
                    event: true,
                  })
                } catch (e) {}
              }}
            >
              Play another word
            </button>
            <a
              aria-label="see word definition"
              className="block mt-4 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-500 text-lg font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 sm:text-sm"
              href={dictionaryLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                try {
                  ;(window as any).goatcounter.count({
                    path: function (p: string) {
                      return 'click.dsal-dictionary' + p
                    },
                    title: 'click.dsal-dictionary',
                    event: true,
                  })
                } catch (e) {}
              }}
            >
              See {solutionInfo.solution} meaning
            </a>
            <div className="grid grid-cols-2 gap-2 items-center">
              <a
                aria-label="share on WhatsApp"
                className="block mt-4 w-full rounded-md border border-transparent shadow-sm py-2 bg-blue-600 text-lg font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:text-sm"
                href={`https://wa.me/?text=${shareTextEncoded}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  try {
                    ;(window as any).goatcounter.count({
                      path: function (p: string) {
                        return 'click.share-whatsapp' + p
                      },
                      title: 'click.share-whatsapp',
                      event: true,
                    })
                  } catch (e) {}
                }}
              >
                <img
                  className="inline"
                  alt=""
                  width="32px"
                  src="/whatsapp2.png"
                ></img>
                <p className="inline ml-2">WhatsApp</p>
              </a>
              <a
                aria-label="share on Twitter"
                className="block mt-4 w-full rounded-md border border-transparent shadow-sm py-2 bg-blue-600 text-lg font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 sm:text-sm"
                href={`https://twitter.com/intent/tweet?text=${shareTextEncoded}`}
                onClick={() => {
                  try {
                    ;(window as any).goatcounter.count({
                      path: function (p: string) {
                        return 'click.share-twitter' + p
                      },
                      title: 'click.share-twitter',
                      event: true,
                    })
                  } catch (e) {}
                }}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="inline"
                  alt=""
                  width="32px"
                  src="/twitter.png"
                ></img>
                <p className="inline ml-2">Tweet</p>
              </a>
            </div>
            <button
              aria-label="share results"
              className="mt-4 w-full rounded-md border border-transparent shadow-sm py-2 bg-blue-600 text-lg font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
              onClick={() => {
                navigator.clipboard.writeText(shareText)
                handleShare()
                try {
                  ;(window as any).goatcounter.count({
                    path: function (p: string) {
                      return 'click.share-clipboard' + p
                    },
                    title: 'click.share-clipboard',
                    event: true,
                  })
                } catch (e) {}
              }}
            >
              {/* from https://remixicon.com/ */}
              <img
                className="inline"
                alt=""
                width="32px"
                src="/clipboard-fill.png"
              ></img>
              <p className="inline ml-2">{SHARE_TEXT}</p>
            </button>
          </div>
        </div>
      )}
    </BaseModal>
  )
}
