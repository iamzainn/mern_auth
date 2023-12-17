import HomePage from "./Pages/HomePage";
import RootPage from "./Pages/RootPage";



import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import CalcPage from "./Pages/CalcPage";
import QuotePage from "./Pages/QuotePage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootPage/>}>
        <Route index element = {<HomePage></HomePage>}></Route> 
        <Route path="calculator" element= {<CalcPage/>}></Route> 
        <Route path="/quote" element = {<QuotePage></QuotePage>}></Route>
      </Route>
    )
  );
  return (
   
    <RouterProvider router={router}/>
    
  
  )
}

export default App
