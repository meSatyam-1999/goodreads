import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import NotFound from "../Pages/NotFound"


const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default MainRoutes