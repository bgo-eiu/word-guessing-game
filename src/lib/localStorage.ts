const gameStateKey = 'gameState'
const settingsKey = 'settings'

export type StoredGameState = {
  guesses: string[]
  solution: string
  solutionWithoutModifiers: string
}

export type Settings = {
  theme: 'dark' | 'light'
  keyboardLayout: 'ten-per-line' | 'traditional'
}

export const saveSettingsToLocalStorage = (settings: Settings) => {
  localStorage.setItem(settingsKey, JSON.stringify(settings))
}

export const loadSettingsFromLocalStorage = () => {
  const state = localStorage.getItem(settingsKey)
  return state ? (JSON.parse(state) as Settings) : null
}

export const saveGameStateToLocalStorage = (gameState: StoredGameState) => {
  localStorage.setItem(gameStateKey, JSON.stringify(gameState))
}

export const loadGameStateFromLocalStorage = () => {
  const state = localStorage.getItem(gameStateKey)
  return state ? (JSON.parse(state) as StoredGameState) : null
}

const gameStatKey = 'gameStats'

export type GameStats = {
  winDistribution: number[]
  gamesFailed: number
  currentStreak: number
  bestStreak: number
  totalGames: number
  successRate: number
}

export const saveStatsToLocalStorage = (gameStats: GameStats) => {
  localStorage.setItem(gameStatKey, JSON.stringify(gameStats))
}

export const loadStatsFromLocalStorage = () => {
  const stats = localStorage.getItem(gameStatKey)
  return stats ? (JSON.parse(stats) as GameStats) : null
}
