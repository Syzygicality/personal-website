'use client'
import { useEffect, useState } from 'react'

export default function DateDisplay() {
  const [date, setDate] = useState('')

  useEffect(() => {
    const d = new Date()
    setDate(
      d.toLocaleDateString('sv-SE', { year: 'numeric', month: '2-digit', day: '2-digit' })
        .replaceAll('/', '-')
    )
  }, [])

  return (
    <span className="text-3xl font-bold leading-none border-t border-black pt-1">{date}</span>
  )
}
