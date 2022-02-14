import Image from "next/image"


const SidebarItem = ({ src, Icon, title })=>{
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
      {src &&
          <Image alt="profile"
                 src={src}
                 width={30}
                 height={30}
                 className="rounded-full"
                 layout="fixed"/>
            }
      {Icon &&
        <Icon className="text-blue-500 h-8 w-8"/>
      }
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
)}

export default SidebarItem
