import React, { useRef, useState } from 'react'
import {
    CalendarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SearchCircleIcon,
} from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'

function TweetBox() {
    const [input, setInput] = useState<string>('')
    const [image, setImage] = useState<string>('')

    const imageInputRef = useRef<HTMLInputElement>(null)

    const { data: session } = useSession()
    const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState<Boolean>(false)

        const addImageToTweet = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();

            if (!imageInputRef.current?.value) return

            setImage(imageInputRef.current.value)
            imageInputRef.current.value = ''
            setImageUrlBoxIsOpen(false)
        }

  return (
    <div className='flex space-x-2 p-5'>
        <img
        className='mt-4 h-14 w-14 rounded-full object-cover'
        src={session?.user?.image || ""}
        alt=""
        />

        <div className='"flex flex-1 item-center pl-2'>
            <form className='flex  flex-1 flex-col'>
                <input
                value={input}
                onChange={(e) => setInput(e.target.validationMessage)}
                type="text"
                placeholder="What's Happening?"
                className='h-24 w-full text-xl outline-none
                placeholder:text-xl'
                />
                <div className='flex items-center'>
                    <div className='flex flex-1 space-x-2 text-twitter'>
                        {/* Icons */}
                        <PhotographIcon onClick={() => setImageUrlBoxIsOpen
                        (!imageUrlBoxIsOpen)}
                        className='h-5 w-5 cursor-pointer
                        taransition-transform duration-150 ease-out
                        hover:scale-150'/>
                        <SearchCircleIcon className='h-5 w-5'/>
                        <EmojiHappyIcon className='h-5 w-5'/>
                        <CalendarIcon className='h-5 w-5'/>
                        <LocationMarkerIcon className='h-5 w-5'/>
                    </div>

                    <button 
                    disabled={!input || !input}
                    className='rounded-full bg-twitter px-5 py-2 
                    font-bold text-white disabled:opacity-40'
                    >
                        Tweet
                    </button>

                </div>

                {imageUrlBoxIsOpen && (
                    <form className='mt-5 flex rounded-lg bg-twitter/80 py-2 px-4'>
                        <input
                        ref={imageInputRef}
                        className='flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white' 
                        type='text' 
                        placeholder='Enter Image URL...' />
                        <button type='submit' onClick={addImageToTweet} 
                        className='font-bold text-white'>Add Image</button>
                    </form>
                )}

                {image && <img className='mt-10 h-40 w-full rounded-xl object=contain shadow-lg' 
                src={image} alt="" />}

            </form>
        </div>

    </div>
  )
}

export default TweetBox