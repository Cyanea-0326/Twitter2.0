import React, { SVGProps } from 'react'

interface Props {
    Icon: (props: SVGProps<SVGSVGAElement>) => JSX.Element
    title: string
    onClick?: () => {}
}

function SidebarRow({ Icon, title }: Props) {
  return (
    <div
    onClick={() => onClick?.()}
    className="group flex max-w-fit cursor-pointer items-cetner space-x-2 
    rounded-full px-4 py-3 transition-all duration-200
    hover:bg-gray-100 group">
        <Icon className='h-6 w-6'/>
        <p className='hidden md:inline-flex text-base font-light
         group-hover:text-twitter'>{title}</p>
    </div>
  )
}

export default SidebarRow