import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Routes , Route,Link} from 'react-router-dom'
import './index.css'
// import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

const Home=()=>{
  return <div>
    <h1>Home Page</h1>
  </div>
}
const About=()=>{
  return <div>
    <h1>About Page</h1>
  </div>
}
const Profile=()=>{
  return <div>
    <h1>Profile Page</h1>
  </div>
}
const Setting=()=>{
  return <div>
    <h1>Setting Page</h1>
  </div>
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        // nested routing
        <Route path="account">
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
