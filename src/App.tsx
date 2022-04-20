import { InformationCircleIcon, CogIcon } from '@heroicons/react/outline'
import { useState, useEffect } from 'react'
import { Alert } from './components/alerts/Alert'
import { Grid } from './components/grid/Grid'
import { Keyboard } from './components/keyboard/Keyboard'
import { AboutModal } from './components/modals/AboutModal'
import { InfoModal } from './components/modals/InfoModal'
import { StatsModal } from './components/modals/StatsModal'
import {
  GAME_TITLE,
  WIN_MESSAGES,
  GAME_COPIED_MESSAGE,
  ABOUT_GAME_MESSAGE,
  NOT_ENOUGH_LETTERS_MESSAGE,
  WORD_NOT_FOUND_MESSAGE,
  CORRECT_WORD_MESSAGE,
} from './constants/strings'
import {
  getRandomWord,
  getWordOfDay,
  isWordInWordList,
  SolutionInfo,
} from './lib/words'
import { addStatsForCompletedGame, loadStats } from './lib/stats'
import {
  loadGameStateFromLocalStorage,
  loadSettingsFromLocalStorage,
  saveGameStateToLocalStorage,
  saveSettingsToLocalStorage,
  Settings,
} from './lib/localStorage'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import { CurrentRow } from './components/grid/CurrentRow'
import { SettingsModal } from './components/modals/SettingsModal'

const ALERT_TIME_MS = 500

type GameProps = {
  solutionInfo: SolutionInfo
  gameDescription: string
  gameType: 'daily' | 'random'
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DailyApp />} />
        <Route path="random" element={<Random />} />
      </Routes>
    </div>
  )
}

function DailyApp() {
  const solutionInfo = getWordOfDay()
  const gameDescription = `daily: #${solutionInfo.solutionIndex}`
  return (
    <BaseGame
      solutionInfo={solutionInfo}
      gameDescription={gameDescription}
      gameType={'daily'}
    ></BaseGame>
  )
}

function Random() {
  const solutionInfo = getRandomWord()
  const gameDescription = `random: ${solutionInfo.solution}`
  return (
    <BaseGame
      solutionInfo={solutionInfo}
      gameDescription={gameDescription}
      gameType={'random'}
    ></BaseGame>
  )
}

function BaseGame(props: GameProps) {
  const { solution, solutionWithoutModifiers, modifiers } = props.solutionInfo
  const gameDescription = props.gameDescription

  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  const [currentGuess, setCurrentGuess] = useState('')
  const [isGameWon, setIsGameWon] = useState(false)
  const [isNotEnoughLetters, setIsNotEnoughLetters] = useState(false)
  const [isWordNotFoundAlertOpen, setIsWordNotFoundAlertOpen] = useState(false)
  const [isGameLost, setIsGameLost] = useState(false)
  const [settings, setSettings] = useState<Settings>(() => {
    // migration to new settings key
    let settings = loadSettingsFromLocalStorage()
    if (settings === null) {
      const oldThemeSetting = localStorage.getItem('theme')
      let resolvedThemeSetting: Settings['theme'] = 'light'
      if (oldThemeSetting === 'dark' || oldThemeSetting === 'light') {
        resolvedThemeSetting = oldThemeSetting
      } else {
        resolvedThemeSetting = prefersDarkMode ? 'dark' : 'light'
      }
      settings = {
        theme: resolvedThemeSetting,
        keyboardLayout: 'ten-per-line',
      }
      saveSettingsToLocalStorage(settings)
    }
    return settings
  })
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false)
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false)
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)
  const [successAlert, setSuccessAlert] = useState('')
  const [guesses, setGuesses] = useState<string[]>(() => {
    console.log(props)
    if (props.gameType === 'daily') {
      const loaded = loadGameStateFromLocalStorage()
      console.log(loaded)
      if (loaded?.solution !== solution) {
        return []
      }
      const gameWasWon = loaded.guesses.includes(solutionWithoutModifiers)
      if (gameWasWon) {
        setIsGameWon(true)
      }

      return loaded.guesses
    } else {
      return []
    }
  })

  const [stats, setStats] = useState(() => loadStats())

  useEffect(() => {
    if (settings.theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [settings])

  const handleSettings = (partialSettings: Partial<Settings>) => {
    const newSettings: Settings = {
      ...settings,
      ...partialSettings,
    }
    saveSettingsToLocalStorage(newSettings)
    setSettings(newSettings)
  }

  useEffect(() => {
    if (props.gameType === 'daily') {
      saveGameStateToLocalStorage({
        guesses,
        solution,
        solutionWithoutModifiers,
      })
    }
  }, [guesses, solution, solutionWithoutModifiers, props.gameType])

  useEffect(() => {
    if (isGameWon) {
      setSuccessAlert(
        WIN_MESSAGES[Math.floor(Math.random() * WIN_MESSAGES.length)]
      )
      setTimeout(() => {
        setSuccessAlert('')
        setIsStatsModalOpen(true)
      }, ALERT_TIME_MS)
    }
    if (isGameLost) {
      setTimeout(() => {
        setIsStatsModalOpen(true)
      }, ALERT_TIME_MS)
    }
  }, [isGameWon, isGameLost])

  const onChar = (value: string) => {
    if (currentGuess.length < solutionWithoutModifiers.length && !isGameWon) {
      setCurrentGuess(`${currentGuess}${value}`)
    }
  }

  const onDelete = () => {
    setCurrentGuess(currentGuess.slice(0, -1))
  }

  const onEnter = () => {
    if (isGameWon || isGameLost) {
      return
    }
    if (!(currentGuess.length === solutionWithoutModifiers.length)) {
      setIsNotEnoughLetters(true)
      return setTimeout(() => {
        setIsNotEnoughLetters(false)
      }, ALERT_TIME_MS)
    }
    if (!isWordInWordList(currentGuess, modifiers)) {
      setIsWordNotFoundAlertOpen(true)
      return setTimeout(() => {
        setIsWordNotFoundAlertOpen(false)
      }, ALERT_TIME_MS)
    }

    const winningWord = currentGuess === solutionWithoutModifiers

    if (currentGuess.length === solutionWithoutModifiers.length && !isGameWon) {
      setGuesses([...guesses, currentGuess])
      setCurrentGuess('')

      if (winningWord) {
        try {
          ;(window as any).goatcounter.count({
            path: function (p: string) {
              return 'winning-word-' + p
            },
            title: 'winning-word',
            event: true,
          })
        } catch (e) {}

        setStats(addStatsForCompletedGame(stats, guesses.length))
        return setIsGameWon(true)
      }
    }
  }

  const randomLink = (
    <a
      href="/random"
      className="w-fit mx-auto my-4 flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 select-none"
      data-goatcounter-click="click.switch-to-random"
      data-goatcounter-title="switch-to-random"
    >
      Practice random words
    </a>
  )
  const dailyLink = (
    <a
      href="/"
      className="w-fit mx-auto my-4 flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 select-none"
      data-goatcounter-click="click.switch-to-daily"
      data-goatcounter-title="switch-to-daily"
    >
      Guess word of the day
    </a>
  )

  const d = new Date(Date.now())
  const noAlertDate = new Date(2022, 3, 21)
  const dateAlerts =
    d < noAlertDate ? (
      <div className="flex w-72 mx-auto items-center">
        <p className="mb-2 text-sm grow dark:text-white">
          NEW: we now have 4-letter words too!
        </p>
      </div>
    ) : null

  return (
    <div className="py-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
      {dateAlerts}
      <div className="flex w-72 mx-auto items-center mb-8">
        <h1 className="text-xl grow font-bold dark:text-white">{GAME_TITLE}</h1>

        <button
          className="p-2"
          aria-label="toggle settings"
          onClick={() => setIsSettingsModalOpen(true)}
          data-goatcounter-click="click.settings-open"
          data-goatcounter-title="settings-open"
        >
          <CogIcon className="h-6 w-6 cursor-pointer dark:stroke-white" />
        </button>

        <button
          className="p-2"
          aria-label="how to play"
          onClick={() => setIsInfoModalOpen(true)}
          data-goatcounter-click="click.info-modal"
          data-goatcounter-title="info-modal"
        >
          <InformationCircleIcon className="h-6 w-6 cursor-pointer dark:stroke-white" />
        </button>
      </div>
      <Grid
        guesses={guesses}
        currentGuess={currentGuess}
        modifiers={modifiers}
        solutionInfo={props.solutionInfo}
      />
      {isGameWon ? null : (
        <div className="flex justify-center sticky self-start top-2 overflow-y-auto">
          <CurrentRow
            key={'current'}
            guess={currentGuess}
            modifiers={modifiers}
          />
        </div>
      )}

      <Keyboard
        onChar={onChar}
        onDelete={onDelete}
        onEnter={onEnter}
        guesses={guesses}
        solutionInfo={props.solutionInfo}
        view={settings.keyboardLayout}
      />
      <InfoModal
        isOpen={isInfoModalOpen}
        handleClose={() => setIsInfoModalOpen(false)}
      />
      <SettingsModal
        settings={settings}
        isOpen={isSettingsModalOpen}
        handleClose={() => setIsSettingsModalOpen(false)}
        handleSettingChange={handleSettings}
      />
      <StatsModal
        isOpen={isStatsModalOpen}
        handleClose={() => setIsStatsModalOpen(false)}
        handlePlayAnother={() => window.location.assign('/random')}
        guesses={guesses}
        gameStats={stats}
        isGameLost={isGameLost}
        isGameWon={isGameWon}
        handleShare={() => {
          setSuccessAlert(GAME_COPIED_MESSAGE)
          return setTimeout(() => setSuccessAlert(''), ALERT_TIME_MS)
        }}
        solutionInfo={props.solutionInfo}
        gameDescription={gameDescription}
      />
      <AboutModal
        isOpen={isAboutModalOpen}
        handleClose={() => setIsAboutModalOpen(false)}
      />
      <button
        type="button"
        className="mx-auto mt-8 flex items-center px-2.5 py-1.5 border border-transparent text-xl font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 select-none"
        onClick={() => setIsAboutModalOpen(true)}
        data-goatcounter-click="click.about-modal"
        data-goatcounter-title="about-modal"
      >
        {ABOUT_GAME_MESSAGE}
      </button>
      {props.gameType === 'daily' && randomLink}
      {props.gameType === 'random' && dailyLink}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdZdiicCOOfGoSFmkAITtNOwTkbFVzIjJLqvyYEqWK9rgf5vg/viewform"
        className="w-fit mx-auto my-4 flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 select-none"
        data-goatcounter-click="click.contact-me"
        data-goatcounter-title="click.contact-me"
        target="_blank"
        rel="noreferrer"
      >
        Send me feedback
      </a>
      <Alert message={NOT_ENOUGH_LETTERS_MESSAGE} isOpen={isNotEnoughLetters} />
      <Alert
        message={WORD_NOT_FOUND_MESSAGE}
        isOpen={isWordNotFoundAlertOpen}
      />
      <Alert message={CORRECT_WORD_MESSAGE(solution)} isOpen={isGameLost} />
      <Alert
        message={successAlert}
        isOpen={successAlert !== ''}
        variant="success"
      />
    </div>
  )
}

export default App
