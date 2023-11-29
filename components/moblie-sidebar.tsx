"use client"

import { Button } from './ui/button'
import { Menu } from 'lucide-react'

const Mobile_Sidebar = () => {
  return (
    <Button variant="ghost" size="icon" className="md:hidden">
        <Menu/>
      </Button>
  )
}

export default Mobile_Sidebar
