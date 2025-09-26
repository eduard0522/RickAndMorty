import { NextPage } from 'next'
import List from './nav/List'
import Image from 'next/image'


const Topbar: NextPage = ({}) => {
  return <header >
  <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <a className="block text-teal-600 dark:text-teal-300" href="#">
          <span className="sr-only">Home</span>
          <Image 
            src='/Title2.png'
            alt='logo de rick and morty'
            width={200}
            height={100}
          />
        </a>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <List/>
        </nav>
      </div>
    </div>
  </div>
</header>
}

export default Topbar