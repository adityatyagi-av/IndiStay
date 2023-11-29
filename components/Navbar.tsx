import { UserButton } from "@clerk/nextjs"
import Mobile_Sidebar from "./moblie-sidebar"

const Navbar = () => {
  return (
    <div className="flex items-center p-4" >
      <Mobile_Sidebar/>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  )
}

export default Navbar
