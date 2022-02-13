import {
  InformationCircleIcon,
  ChartBarIcon,
  SunIcon,
} from '@heroicons/react/outline'
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
  saveGameStateToLocalStorage,
} from './lib/localStorage'

import './App.css'
import { Route, Routes } from 'react-router-dom'

const ALERT_TIME_MS = 2000

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
  console.log({ solution: props.solutionInfo.solution })

  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  const [currentGuess, setCurrentGuess] = useState('')
  const [isGameWon, setIsGameWon] = useState(false)
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)
  const [isNotEnoughLetters, setIsNotEnoughLetters] = useState(false)
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false)
  const [isWordNotFoundAlertOpen, setIsWordNotFoundAlertOpen] = useState(false)
  const [isGameLost, setIsGameLost] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme')
      ? localStorage.getItem('theme') === 'dark'
      : prefersDarkMode
      ? true
      : false
  )
  const [successAlert, setSuccessAlert] = useState('')
  const [guesses, setGuesses] = useState<string[]>(() => {
    if (props.gameType === 'daily') {
      const loaded = loadGameStateFromLocalStorage()
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
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const handleDarkMode = (isDark: boolean) => {
    setIsDarkMode(isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  useEffect(() => {
    if (props.gameType === 'daily') {
      saveGameStateToLocalStorage({
        guesses,
        solution,
        solutionWithoutModifiers,
      })
    }
  }, [guesses, solution, solutionWithoutModifiers])

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
    if (currentGuess.length < 3 && !isGameWon) {
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
    if (!(currentGuess.length === 3)) {
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

    if (currentGuess.length === 3 && !isGameWon) {
      setGuesses([...guesses, currentGuess])
      setCurrentGuess('')

      if (winningWord) {
        setStats(addStatsForCompletedGame(stats, guesses.length))
        return setIsGameWon(true)
      }
    }
  }

  return (
    <div className="py-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="flex w-80 mx-auto items-center mb-8 mt-12">
        <h1 className="text-xl grow font-bold dark:text-white">{GAME_TITLE}</h1>
        <button
          className="p-2"
          aria-label="toggle theme"
          onClick={() => handleDarkMode(!isDarkMode)}
        >
          <SunIcon className="h-6 w-6 cursor-pointer dark:stroke-white" />
        </button>

        <button
          className="p-2"
          aria-label="how to play"
          onClick={() => setIsInfoModalOpen(true)}
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
      <Keyboard
        onChar={onChar}
        onDelete={onDelete}
        onEnter={onEnter}
        guesses={guesses}
        solutionInfo={props.solutionInfo}
      />
      <InfoModal
        isOpen={isInfoModalOpen}
        handleClose={() => setIsInfoModalOpen(false)}
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
      >
        {ABOUT_GAME_MESSAGE}
      </button>

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
