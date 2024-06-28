"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { c } from 'tar';

const navLinks = [
  { title: "Home", path: "/", icon: <HomeOutlinedIcon /> },
  { title: "Shops", path: "/shops", icon: <RestaurantOutlinedIcon className='w-5 h-5' /> },
  { title: "Products", path: "/products", icon: <LunchDiningOutlinedIcon className='w-5 h-5' /> },
  { title: "Orders", path: "/orders", icon: <MenuBookOutlinedIcon className='w-5 h-5' /> },
]


const NavbarLinks = () => {
  const pathname = usePathname();
  return (
    <div className='flex gap-5 items-center flex-1 justify-center'>
      {navLinks.map((link, index) => (
        <Link
          href={link.path}
          key={`navlink-${index}`}
          className={`border-b-2 flex gap-1 items-center p-1 ${pathname === link.path ? "border-orange-950" : "border-neutral-300"}`}
        >
          {link.icon}
          <p className='text-[14px] font-semibold'>{link.title}</p>
        </Link>
      ))}
    </div>
  )
}

export default NavbarLinks