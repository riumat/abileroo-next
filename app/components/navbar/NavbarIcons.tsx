import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import Link from 'next/link';

const NavbarIcons = () => {
  return (
    <div className='flex gap-2 items-center '>
      <Link href={"/favorites"} className='p-1 border-2 border-black rounded-md'>
        <FavoriteBorderOutlinedIcon className='w-5 h-5' />
      </Link>
      <Link href={"/cart"} className='p-1 border-2 border-black rounded-md'>
        <ShoppingCartOutlinedIcon className='w-5 h-5'/>
      </Link>
      <Link href={"/auth"} className='p-1 border-2 border-black rounded-md'>
        <LoginOutlinedIcon className='w-5 h-5'/>
      </Link>

    </div>
  )
}

export default NavbarIcons