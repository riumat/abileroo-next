import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Searchbar = () => {
  return (
    <div className='flex gap-2 items-center rounded-xl border-2 p-1 max-w-48 '>
      <SearchOutlinedIcon className='w-5 h-6 text-neutral-400'/>
      <input type="text" className='w-full text-[14px]' placeholder='Search shop '  />
    </div>
  )
}

export default Searchbar