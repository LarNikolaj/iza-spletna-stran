'use client'

import { useState, useEffect } from 'react'

const surnames = ['Štrumbelj', 'Oblak', 'Štrumbelj Oblak']
const PREFIX = 'Iza '

// Timing config
const TYPE_SPEED = 160          // base ms per character while typing
const DELETE_SPEED = 100        // base ms per character while deleting
const PAUSE_AFTER_TYPING = 3000 // ms to hold the full word before deleting
const PAUSE_AFTER_DELETING = 600 // ms before starting next word
const JITTER = 50               // random ms variation per keystroke

export default function TypingName() {
  const [surnameIndex, setSurnameIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const targetSurname = surnames[surnameIndex]
    const fullText = PREFIX + targetSurname

    let timeout

    if (!isDeleting && displayText === fullText) {
      // Hold then start deleting
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPING)
    } else if (isDeleting && displayText === PREFIX) {
      // Deleted back to "Iza " — pause, then move to next surname
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setSurnameIndex((prev) => (prev + 1) % surnames.length)
      }, PAUSE_AFTER_DELETING)
    } else {
      // Currently typing or deleting
      const baseSpeed = isDeleting ? DELETE_SPEED : TYPE_SPEED
      const jitter = Math.random() * JITTER - JITTER / 2

      // Tiny extra hesitation right after typing "Iza " — like a real human pause
      const isAfterPrefix = !isDeleting && displayText === PREFIX.trim()
      const extraPause = isAfterPrefix ? 250 : 0

      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting ? prev.slice(0, -1) : fullText.slice(0, prev.length + 1)
        )
      }, baseSpeed + jitter + extraPause)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, surnameIndex])

  return (
    <span className="inline-block">
      {displayText}
      <span className="inline-block w-px h-[0.7em] bg-current align-baseline ml-1 animate-blink" />
    </span>
  )
}