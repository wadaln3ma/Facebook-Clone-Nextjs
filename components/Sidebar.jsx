
import { ChevronDownIcon, ShoppingBagIcon, UserGroupIcon } from '@heroicons/react/outline'
import { CalendarIcon, ClockIcon, DesktopComputerIcon, UsersIcon } from '@heroicons/react/solid'
import SidebarItem from './SidebarItem'

const Sidebar = ()=>{
  return (
    <aside className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarItem Icon={UsersIcon} title="Friends" />
      <SidebarItem Icon={UserGroupIcon} title="groups" />
      <SidebarItem Icon={ShoppingBagIcon} title="Market Place" />
      <SidebarItem Icon={DesktopComputerIcon} title="Watch" />
      <SidebarItem Icon={CalendarIcon} title="Events" />
      <SidebarItem Icon={ClockIcon} title="Memories" />
      <SidebarItem Icon={ChevronDownIcon} title="See More" />
    </aside>
)}

export default Sidebar
