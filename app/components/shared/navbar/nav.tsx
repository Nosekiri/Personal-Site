import CustomLink from '../../ui/CustomLink'
import { ThemeSwitch } from './theme-switch'
import Clock from './time/clock'

const navItems = {
  '/': { name: 'Home' }
}

export function Navbar() {
  return (
    <nav className='lg:mb-8 mb-4 py-2'>
      <div className='flex flex-col md:flex-row md:items-center justify-between'>
        <div className='flex items-center'>
          <Clock />
        </div>
        <div className='flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center'>
          {Object.entries(navItems).map(([path, { name }]) => (
            <CustomLink
              key={path}
              href={path}
              className='transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex items-center relative'
            >
              {name}
            </CustomLink>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  )
}
