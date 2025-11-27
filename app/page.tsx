import { SiBuymeacoffee, SiKofi } from 'react-icons/si'

import { formatDate, getBlogPosts } from 'app/lib/posts'
import CustomLink from './components/ui/CustomLink'
import { ProfileIntroduction } from './lib/constants'

export default function Page() {
  let allBlogs = getBlogPosts()

  return (
    <section>
      <h1 className='text-2xl font-medium rounded-sm underline decoration-teal-700 decoration-2 underline-offset-4 focus:decoration-transparent dark:decoration-teal-500'>
        Nosekiri
      </h1>
      <div className='prose prose-neutral dark:prose-invert mb-8'>
        <p>
          {ProfileIntroduction.map((line, index) => (
            <span key={index}>
              {line.bold && <span className='font-bold'>{line.bold}</span>} {line.rest}
              <br />
            </span>
          ))}
        </p>
        <div className='border-dashed border-t border-[#27272a] pb-4' />
        <div>
          <h1 className='mb-4 text-2xl font-medium rounded-sm underline decoration-teal-700 decoration-2 underline-offset-4 focus:decoration-transparent dark:decoration-teal-500'>
            Blog Posts
          </h1>
          {allBlogs
            .filter((post) => post.metadata.published !== 'false')
            .sort((a, b) => {
              if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
                return -1
              }
              return 1
            })
            .map((post) => (
              <CustomLink
                key={post.slug}
                className='flex flex-col space-y-1 mb-2 transition-opacity duration-200 hover:opacity-80  no-underline'
                href={`/blog/${post.slug}`}
              >
                <div className='w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2'>
                  <span className='text-black dark:text-white'>{post.metadata.title}</span>
                  <span className='text-neutral-600 dark:text-neutral-400 tabular-nums text-sm'>
                    {formatDate(post.metadata.publishedAt, false)}
                  </span>
                </div>
              </CustomLink>
            ))}
        </div>
        <div className='border-dashed border-t border-[#27272a] my-4' />
        <div>
          <h1 className='mb-4 text-2xl font-medium rounded-sm underline decoration-teal-700 decoration-2 underline-offset-4 focus:decoration-transparent dark:decoration-teal-500'>
            Support?
          </h1>
          <div className='flex flex-row gap-2'>
            <CustomLink
              href='https://ko-fi.com/nakirium'
              className='inline-flex items-center gap-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 shadow-md dark:text-neutral-400 text-neutral-600 px-3 py-2 no-underline hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors'
            >
              <SiKofi className='w-4 h-4' />
              <span>Ko-fi</span>
            </CustomLink>

            <CustomLink
              href='https://buymeacoffee.com/nakirium'
              className='inline-flex items-center gap-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 shadow-md dark:text-neutral-400 text-neutral-600 px-3 py-2 no-underline hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors'
            >
              <SiBuymeacoffee className='w-4 h-4' />
              <span>Buy Me a Coffee</span>
            </CustomLink>
          </div>
        </div>
      </div>
    </section>
  )
}
