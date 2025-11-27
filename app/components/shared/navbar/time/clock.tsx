'use client'

import { useEffect, useState } from 'react'
import { formatClockDate, formatClockTime } from '@/app/lib/utils'

export default function Clock() {
  const [date, setDate] = useState<Date | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setDate(new Date())

    const timer = setInterval(() => setDate(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Don't render time-dependent content until client-side
  if (!isClient || !date) {
    return (
      <div className='flex items-center'>
        <span className='font-medium text-neutral-600 dark:text-neutral-400'>Loading...</span>
      </div>
    )
  }

  return (
    <div className='flex items-center'>
      <span className='font-medium inline-flex items-center gap-1'>
        <span>{formatClockDate(date)}</span>・<span>{formatClockTime(date)}</span>
      </span>
    </div>
  )
}
