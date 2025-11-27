import type { Metadata } from 'next'
import CustomLink from './components/ui/CustomLink'

export const metadata: Metadata = {
  title: '404',
  description: 'Error 404'
}

export default function NotFound() {
  return (
    <section>
      <h1 className='font-medium text-2xl mb-8'>404 - Page not found</h1>
      <p className='mb-4'>Oops! The page you're looking for doesn't seem to exist.</p>
      <CustomLink
        href='/'
        className='inline-flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900 shadow-md dark:text-neutral-400 text-neutral-600 px-3 py-2 no-underline hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors'
      >
        Home
      </CustomLink>
    </section>
  )
}
