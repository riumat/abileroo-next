import LandingText from "./components/landingPage/LandingText";
import LandingImage from "./components/landingPage/LandingImage";

const Home = () => {
  return (
    <main className="flex mx-10 rounded-lg p-5 bg-orange-950 text-neutral-50">
      <LandingText />
      <LandingImage/>
    </main>
  )
}

export default Home