import { Roboto_Mono as Font } from "next/font/google"
import FastfoodSharpIcon from '@mui/icons-material/FastfoodSharp';

const font = Font({ weight: "400", subsets: ["latin"] })

const Logo = () => {
  return (
    <div className={`${font.className} flex  items-center gap-3 flex-1 justify-center`}>
      <FastfoodSharpIcon className=" text-[25px]" />
      <p className="text-[20px] ">Abileroo</p>
    </div>
  )
}

export default Logo