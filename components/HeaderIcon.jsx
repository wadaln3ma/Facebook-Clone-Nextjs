

const HeaderIcon = ({ Icon, active })=>{
  return (
    <div className="group flex items-center md:px-10 sm:h-14 hover:border-b-2 active:border-b-2 active:border-blue-500 hover:bg-gray-100 rounded-lg cursor-pointer">
      <Icon 
      className={`h-6 sm:h-7 text-gray-500 text-center mx-auto group-hover:text-blue-500 ${active && 'text-blue-500'}`} />
    </div>
)}

export default HeaderIcon
