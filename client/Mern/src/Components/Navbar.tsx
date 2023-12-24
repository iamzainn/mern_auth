import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import UserAuth from "./userAuth"
import type { RootState } from "../store"

const Navbar = () => {

  const {name} = useSelector((state:RootState)=>state.userInfo.value)

   
  return (
    <nav className="flex px-8 py-4 bg-slate-200 sticky top-0">
        <div className="logo text-xl flex-1 items-center"><NavLink to = "/">Logo</NavLink></div>
      <ul className="flex gap-4 justify-center items-center">
      <>
      {name?
      <UserAuth>
      
      </UserAuth>
      
    :<>
      <li>
        <NavLink to="/login" style={({isActive})=>{return isActive?{color:"red"}:{}}}>
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/SignUp" style={({isActive})=>{return isActive?{color:"red"}:{}}}>Sign Up</NavLink>
      </li>
      </>}
    </>
      </ul>
    </nav>
  )
}

export default Navbar
