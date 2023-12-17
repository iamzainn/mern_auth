import Calculator from "../Components/Calculator"

const CalcPage = () => {
  return (
    <div className="flex items-center min-h-[50%] bg-slate-100">
      <p className="flex-1">Welcome to calc</p>
      <div className="calc grow-[2] border-2 border-black">
        <Calculator></Calculator>
        </div> 
    </div>
  )
}

export default CalcPage
