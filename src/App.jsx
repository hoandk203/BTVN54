import {Route, Routes} from "react-router-dom";
import publicRoutes from "./routes/publicRoutes.js";

function App() {

  return (
    <Routes>
      {publicRoutes.routes.map(({path, element}, index)=>{
        const Component = element;
        return <Route key={index} path={path} element={<Component/>} />
      })}
    </Routes>
  )
}

export default App
