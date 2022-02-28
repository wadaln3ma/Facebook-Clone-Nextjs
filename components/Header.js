import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import { FlagIcon, PlayIcon, ShoppingCartIcon, SearchIcon } from '@heroicons/react/outline'
import { HomeIcon, UserGroupIcon, ViewGridIcon, ChatIcon, BellIcon, ChevronDownIcon } from '@heroicons/react/solid'
import HeaderIcon from './HeaderIcon'

function Header(){
  const { data: session } = useSession()
  return(
    <header className="flex sticky top-0 items-center p-2 md:px-5 z-50 bg-white shadow-md">
      <div className="flex items-center mr-10 md:mr-0">
        <Image src="/images/facebook.svg"
          alt="logo"
          width={40}
          height={40}
          layout='fixed'/>

        <div className="hidden md:inline-flex items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6"/>
          <input type="text" placeholder="search facebook" className="flex ml-2 items-center bg-transparent outline-none"/>
        </div>
      </div>

      <div className="flex justify-around items-center flex-grow space-x-6 md:space-x-2">
        <HeaderIcon active Icon={HomeIcon}/>
        <HeaderIcon Icon={FlagIcon}/>
        <HeaderIcon Icon={PlayIcon}/>
        <HeaderIcon Icon={ShoppingCartIcon}/>
        <HeaderIcon Icon={UserGroupIcon}/>
      </div>

      <div className="hidden md:inline-flex sm:space-x-2 justify-end items-center">
        <Image alt=""
               src={session?.user.image || "/images/facebook.svg"}
               className="rounded-full cursor-pointer"
               width={40}
               height={40}
               layout="fixed"
               onClick={signOut}/>

        <p className="pr-3 font-bold whitespace-nowrap">{session.user.name}</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon"/>
        <ChevronDownIcon className="icon" />
      </div>
    </header>
)}

export default Header
