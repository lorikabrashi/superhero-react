import './assets/sass/App.scss'
import { routeData } from './lib/Routes/RouteData'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './lib/Routes/PrivateRoutes'
import PublicRoutes from './lib/Routes/PublicRoutes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routeData.public.map((elem, index) => (
            <Route key={index} path={elem.path} element={<PublicRoutes>{elem.element}</PublicRoutes>} />
          ))}
          {routeData.admin.map((elem, index) => (
            <Route key={index} path={elem.path} element={<PrivateRoutes role="ADMIN">{elem.element}</PrivateRoutes>} />
          ))}
          {routeData.user.map((elem, index) => (
            <Route key={index} path={elem.path} element={<PrivateRoutes role="USER">{elem.element}</PrivateRoutes>} />
          ))}
          {routeData.exposed.map((elem, index) => (
            <Route key={index} path={elem.path} element={elem.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
