import Image from "next/image"

const LandingImage = () => {
  return (
    <div className='flex-[0.7] flex justify-center items-center h-[400px] relative'>
      <Image src={"/bg-image.webp"} alt="berger" fill objectFit="contain" className="scale-125"/>
    </div>
  )
}

export default LandingImage