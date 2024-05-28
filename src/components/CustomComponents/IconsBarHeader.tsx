import { Grip, Video, Bell } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const IconsBarHeader = () => {
  return (
    <div className="flex items-center gap-4">
        <div>
          <Video />
        </div>
        <div>
          <Grip />
        </div>
        <div>
          <Bell />
        </div>
        <div>
          <Image
            src={"/images/User-Avatar.png"}
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </div>
  )
}

export default IconsBarHeader