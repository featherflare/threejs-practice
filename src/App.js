import './style/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { menuItems } from './menuItems'
import MenuItems from './MenuItem'
import Welcome from './pages/welcome/welcome'
import TestReactThree from './pages/ReactThree/test-react-three'
import TestThree from './pages/Three/test-three'
import LumbertAndPhongMaterial from './pages/LumbertAndPhongMaterial/LumbertAndPhongMaterial'
import GeoMetrix from './pages/GeoMetrix/GeoMetrix'

function App() {
  return (
    <div className='App'>
      <div className='menu'>
        <ul>
          {menuItems.map((menu, index) => {
            const depthLevel = 0
            return (
              <MenuItems items={menu} key={index} depthLevel={depthLevel} />
            )
          })}
        </ul>
      </div>
      <BrowserRouter>
        <div className='Component'>
          <Routes>
            <Route index element={<Welcome />} />
            <Route path='' element={<Welcome />} />
            <Route path='test-react-three' element={<TestReactThree />} />
            <Route path='test-three' element={<TestThree />} />
            <Route
              path='lumbert-and-phong-material'
              element={<LumbertAndPhongMaterial />}
            />
            <Route path='geoMetrix' element={<GeoMetrix />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
