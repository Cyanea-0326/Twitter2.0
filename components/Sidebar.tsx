import React from 'react'
import{
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'
import { signIn, signOut, useSession } from 'next-auth/react'


function Sidebar() {
  const { data: session } = useSession()

  return (
    <div className='col-span-2 flex flex-col items-center px-4
    md:items-start'>
      <img 
      className="m-3 h-10 w-10" 
      src="https://links.papareact.com/drg"
      alt=""
       />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bopokmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow onClick={session ? signOut : signIn } Icon={UserIcon} 
      title={session ? 'Sign Out' : 'SignIn'} />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />

    </div>
  )
}

export default Sidebar