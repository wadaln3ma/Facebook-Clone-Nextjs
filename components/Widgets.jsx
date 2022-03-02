import {SearchIcon} from "@heroicons/react/outline"

import { VideoCameraIcon, DotsHorizontalIcon } from "@heroicons/react/solid"
import ContactItem from "./ContactItem"

const contacts = [
  { img: "/images/mark.jpg", name: "Mark Zuckerberg" },
  { img: "/images/sonny.jpg", name: "Sonny Sangha" },
  { img: "/images/abdo.png", name: "Abdulrahman Hamad" },
  { img: "/images/musk.jpg", name: "Elon Musk" },
  { img: "/images/jeff.jpeg", name: "Jeff Bezos" },
]

const Widgets = ()=>{
  return (
    <div className="flex flex-col mt-5 w-60 p-2">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact, i) => <ContactItem key={i} contact={contact} />)}
    </div>
)}

export default Widgets
