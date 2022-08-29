import './assets/sass/App.scss'
import { routeData } from './lib/Routes/RouteData'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routeData.public.map((elem) => (
            <Route path={elem.path} element={elem.element} />
          ))}
          {routeData.admin.map((elem) => (
            <Route path={elem.path} element={elem.element} />
          ))}
          {routeData.user.map((elem) => (
            <Route path={elem.path} element={elem.element} />
          ))}
          {routeData.exposed.map((elem) => (
            <Route path={elem.path} element={elem.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
