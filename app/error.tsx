'use client'

import { useEffect } from 'react'
import CustomLink from './components/ui/CustomLink'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <p>Oops! Something went wrong... maybe try refreshing?</p>
      <CustomLink
        href='/'
        className='inline-flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900 shadow-md dark:text-neutral-400 text-neutral-600 px-3 py-2 no-underline hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors'
      >
        Home
      </CustomLink>
    </div>
  )
}
