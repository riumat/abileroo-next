import RedirectButton from "../redirectButton"
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const LandingText = () => {
  return (
    <div className="flex-[1.2] flex flex-col gap-10 justify-center">
      <div className="flex flex-col gap-3">
        <p className="text-[50px] bg-gradient-to-r from-yellow-100 to-neutral-50 bg-clip-text text-transparent">Hungry? You're in the right place.</p>
        <p>Browse through your favorite shops or restaurants, search for the food you crave, and sit back and relax! You'll receive updates on the status of your order, so you can track your food's journey to your home.</p>
      </div>
      <RedirectButton link="/find" text="Start exploring" Svg={<ArrowCircleRightOutlinedIcon />} />
    </div>
  )
}

export default LandingText