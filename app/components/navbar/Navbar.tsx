import Logo from "./Logo"
import NavbarIcons from "./NavbarIcons"
import NavbarLinks from "./NavbarLinks"
import Searchbar from "./Searchbar"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-3">
      <NavbarLinks />
      
      <Logo />

      <div className="flex-1 flex gap-3 justify-center">
        <Searchbar />
        <NavbarIcons />
      </div>
    </nav>
  )
}

export default Navbar