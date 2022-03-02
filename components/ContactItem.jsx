import Image from "next/image"


const ContactItem = ({ contact })=>{
  const { name, img } = contact
  return (
    <div className="flex items-center space-x-3 mb-2 p-2 hover:bg-gray-200 rounded-xl cursor-pointer relative">
      <Image alt="" src={img} width={50} height={50} 
             objectFit="cover" layout="fixed" className="rounded-full"/>
      <p>{name}</p>
      <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-pulse"/>
    </div>
)}

export default ContactItem
