
import  { useState } from 'react';

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value:string) => {
    if(expression ==='Error'){
        setExpression(value);
    }
    else
    setExpression((prevExpression) => prevExpression + value);
  };

  const backspace = ()=>{
    let length = expression.length;
    let newExpresstion = expression.substring(0,length-1);
   
    setExpression(newExpresstion)
  }

  const handleCalculate = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const handleClear = () => {
    setExpression('');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-200 rounded shadow-md sm:max-w-xl">
      <div className="mb-4 text-left text-lg font-bold bg-slate-100 max-w-[100%]">{expression || '0'}</div>
      <div className="grid grid-cols-4 gap-2">
        {[7, 8, 9, '/'].map((value) => (
          <button key={value} onClick={() => handleButtonClick(value.toString())} className="btn">
            {value}
          </button>
        ))}
         
        {[1, 2, 3, '-','.'].map(btn=>{
            return <button className='btn' key={btn} onClick={()=>{handleButtonClick(btn.toString())}}>{btn}</button>
        })}
        {['C', 0, '=', '+','*'].map((value) => (
          <button
            className={`btn ${value ==='=' ? 'bg-slate-600 text-white':''}`}
            key={value}
            onClick={value === 'C' ? handleClear : value === '=' ? handleCalculate : () => handleButtonClick(value.toString())}
          >
            {value}
          </button>
        ))}
        {['(',')'].map(item=>(<button onClick={()=>handleButtonClick(item.toString())} key={item}>{item}</button>))}
        {<button onClick={backspace} className=' text-white flex items-center justify-center rounded-sm col-span-4 bg-slate-600'>BackSpace</button>}
      </div>
    </div>
  );
};

export default Calculator;
