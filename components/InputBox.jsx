import { useRef } from 'react'
import { useSession } from 'next-auth/react'
import Image from "next/image"
import { EmojiHappyIcon } from "@heroicons/react/outline"
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid"
import { db } from '../firebase'
import { collection, addDoc } from "firebase/firestore"
import { updateDoc, serverTimestamp } from "firebase/firestore"

const InputBox = ()=>{
  const { data: session } = useSession()
  const inputRef = useRef(null)

  const storePost = async (data)=> {
    const posts = collection(db, "posts")
    const docRef = await addDoc(posts , data)
    await updateDoc(docRef, {
      timestamp: serverTimestamp()
    })

  }

  const sendPost = (e)=>{
    e.preventDefault()
    
    if (!inputRef.current.value) return

    const data = {
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
    }

    storePost(data)

    inputRef.current.value = ""
  }

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image alt="profile image"
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder={`What'on on your mind, ${session.user.name}`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
       </div> 
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Videos</p>
        </div>
        <div
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox
