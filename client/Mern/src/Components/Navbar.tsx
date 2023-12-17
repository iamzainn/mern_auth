import { NavLink } from "react-router-dom"

const Navbar = () => {
  
   
   
  return (
    <nav className="flex px-8 py-4 bg-slate-200 sticky top-0">
        <div className="logo text-xl flex-1 items-center"><NavLink to = "/">Math Magician</NavLink></div>
      <ul className="flex gap-4 justify-center items-center">
       <NavLink to= '/'>Home</NavLink>
       <NavLink to= '/calculator'>Calculator</NavLink>
       <NavLink to= '/quote'>Quote</NavLink>
      </ul>
    </nav>
  )
}

export default Navbar
