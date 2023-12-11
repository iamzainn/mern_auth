import HomePage from "./Pages/HomePage";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomePage/>}>
        
      </Route>
    )
  );
  return (
    <RouterProvider router={router}>
    
    
    </RouterProvider>
  )
}

export default App
