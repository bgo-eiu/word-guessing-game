export type Modifier = ModifierChar[]

export type ModifierChar = typeof modifierChars[number]
const modifierChars = [
  'ਿ',
  'ੀ',
  'ੁ',
  'ੂ',
  'ੇ',
  'ੈ',
  'ੋ',
  'ੌ',
  'ਾ',
  'ਂ',
  'ੱ',
  'ੰ',
  '਼',
]

export const isModifier = (l: string) => modifierChars.includes(l)

export function createModifier(source: string): Modifier {
  const modifiers: string[] = ['']
  let index = 0
  const letters = source.split('')
  for (const letter of letters) {
    if (modifierChars.includes(letter)) {
      modifiers[index] += letter
    } else {
      index++
      if (index >= modifiers.length) modifiers.push('')
    }
  }
  const result = modifiers.splice(1)
  return result
}
