import CustomLink from '../../ui/CustomLink'
import { SiModrinth } from 'react-icons/si'

export default function DurabilityHelperLicense() {
  return (
    <div className=''>
      <h1 className='mb-4 text-3xl font-medium rounded-sm underline decoration-teal-700 decoration-2 underline-offset-4 focus:decoration-transparent dark:decoration-teal-500'>
        Durability Helper
      </h1>
      <h1 className='text-2xl font-bold mb-2'>Custom Proprietary License (Closed Source)</h1>

      <p className=' mb-8'>Copyright © 2025 Nosekiri</p>

      <div className='rounded-lg mb-8'>
        <p className='font-medium'>
          This mod is provided in <strong>COMPILED FORM ONLY</strong>. Source code is NOT available.
        </p>
      </div>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold  flex items-center gap-2 mb-4'>
          <span className=''>✅</span> PERMISSIONS
        </h2>

        <ul className='space-y-3'>
          <li className=' border-l-4 border-green-500  p-4 rounded'>
            <strong>Personal Use</strong> - You may download and use this mod for personal gameplay
          </li>
          <li className=' border-l-4 border-green-500  p-4 rounded'>
            <strong>Commercial Use</strong> - You may use this mod on commercial servers or content
            creation (YouTube, Twitch, etc.)
          </li>
          <li className=' border-l-4 border-green-500 p-4 rounded'>
            <strong>Monetization</strong> - You may monetize content featuring this mod (ads,
            sponsorships, donations)
          </li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold flex items-center gap-2 mb-4'>
          <span>❌</span> RESTRICTIONS
        </h2>

        <ul className='space-y-3'>
          <li className=' border-l-4 border-red-500  p-4 rounded'>
            <strong>NO Redistribution</strong> - You may not reupload, share, or distribute this mod
            on any other platform
          </li>
          <li className=' border-l-4 border-red-500 p-4 rounded'>
            <strong>NO Modification</strong> - You may not modify, decompile, reverse engineer, or
            create derivative works
          </li>
          <li className=' border-l-4 border-red-500 p-4 rounded'>
            <strong>NO Repackaging</strong> - You may not include this mod in modpacks without
            explicit permission
          </li>
          <li className=' border-l-4 border-red-500 p-4 rounded'>
            <strong>NO Source Code</strong> - Source code is not provided and reverse engineering is
            prohibited
          </li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>ATTRIBUTION</h2>

        <ul className='list-disc pl-6 space-y-2 '>
          <li>Credit must be given when showcasing this mod in public content</li>
          <li>Link back to the official download page when possible</li>
        </ul>
      </section>

      <div className='rounded-lg'>
        <p className='font-semibold text-lg mb-2'>Official Download Source</p>
        <p className=' mb-4'>The mod must be downloaded from the official source only:</p>
        <CustomLink
          href='https://modrinth.com/mod/durabilityhelper'
          className='inline-flex items-center gap-2 rounded-xl bg-zinc-100 shadow-xl  text-black px-4 py-2'
        >
          <SiModrinth className='w-5 h-5 text-green-500' />
          <span>Download on Modrinth</span>
        </CustomLink>
      </div>

      <div className='border-dashed border-t border-[#27272a] my-5' />
      <footer className='text-center text-sm '>
        <p>All rights not explicitly granted are reserved by the creator.</p>
      </footer>
    </div>
  )
}
