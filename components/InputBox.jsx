import { useState, useRef } from 'react'
import { useSession } from 'next-auth/react'
import Image from "next/image"
import { EmojiHappyIcon } from "@heroicons/react/outline"
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid"
import { db, storage } from '../firebase'
import { collection, addDoc } from "firebase/firestore"
import { updateDoc, serverTimestamp } from "firebase/firestore"
import { ref, getDownloadURL, uploadString } from 'firebase/storage'

const InputBox = ()=>{
  const { data: session } = useSession()
  const [imageToPost, setImageToPost] = useState(null)
  const [imgFileName, setImgFileName] = useState('')
  const inputRef = useRef(null)
  const filePickerRef = useRef(null)

  const storePost = async (data)=> {
    const posts = collection(db, "posts")
    const docRef = await addDoc(posts , data)
    await updateDoc(docRef, {
      timestamp: serverTimestamp()
    })

    if(imageToPost){
      const imageRef = ref(storage, `posts/${session.user.email}/${docRef.id}/${imgFileName}`)

      const metadata = {
        contentType: 'image/jpeg',
      }
      
      uploadString(imageRef, imageToPost, 'data_url', metadata).then(snapshot =>{
        removeImage()
        getDownloadURL(snapshot.ref).then(url =>{
          updateDoc(docRef, {
            postImage : url,
          })
        })
      })
    }
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

  const addImageToPost = (e)=>{
    const reader = new FileReader()
    if(e.target.files[0]){
      setImgFileName(e.target.files[0].name)
      reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = readerEvent => {
      setImageToPost(readerEvent.target.result)
    }
  }

  const removeImage = ()=>{
    setImageToPost(null)
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
            accept="image/*"
            ref={inputRef}
            placeholder={`What'on on your mind, ${session.user.name}`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
        {imageToPost &&
          <div onClick={removeImage}
               className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
            <img src={imageToPost} alt="" className="h-10 object-contain" />
            <p className="text-xs text-red-500 text-center">remove</p>
            </div> 
        }
       </div> 
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Videos</p>
        </div>
        <div
          className="inputIcon"
          onClick={()=> filePickerRef.current.click()} >
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input type="file" ref={filePickerRef} hidden onChange={addImageToPost} />
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
