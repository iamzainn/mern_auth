import { useSelector } from "react-redux"

import type { RootState } from "../store"

const HomePage = () => {
    const {name } = useSelector((state:RootState)=>state.userInfo.value)
  return (
    <div className="flex">
      <h1 className="text-2xl p-3">Welcome to Home Page {name}</h1>
    </div>
  )
}

export default HomePage
