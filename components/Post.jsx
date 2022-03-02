import Image from "next/image"

import { ThumbUpIcon, ShareIcon, ChatAltIcon } from "@heroicons/react/outline"

const Post = ({ post })=>{
  const {message, name, email, image, postImage, timestamp } = post
  return (
   <div className="flex flex-col">
     <div className="bg-white mt-5 p-5 shadow-sm rounded-t-2xl">
       <div className="flex items-center space-x-2">
         <Image alt="avatar" src={image} width={40} height={40} className="rounded-full"/> 
         <div>
           <p>{name}</p>
           <p className="text-xs text-gray-400">{new Date(timestamp?.toDate()).toLocaleString()}</p>
         </div>
       </div>
       
       <p className="pt-4">{message}</p>
     </div>
     {postImage && (
       <div className="relative bg-white h-56 md:h-96">
          <Image alt="" src={postImage} layout="fill" objectFit="cover"/>
       </div>
     )}

     <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
       <div className="inputIcon rounded-none rounded-bl-2xl">
         <ThumbUpIcon className="h-4" />
         <p className="text-xs sm:text-base">Like</p>
       </div>
       <div className="inputIcon rounded-none">
         <ChatAltIcon className="h-4" />
         <p className="text-xs sm:text-base">Comment</p>
       </div>
       <div className="inputIcon rounded-none rounded-br-2xl">
         <ShareIcon className="h-4" />
         <p className="text-xs sm:text-base">Share</p>
       </div>
     </div>

   </div>
)}

export default Post 
