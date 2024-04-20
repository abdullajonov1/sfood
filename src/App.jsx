import { Route, Routes } from 'react-router-dom'
import './App.css'
import Bread from './assets/Components/Cards/Bread/Bread'
import Burger from './assets/Components/Cards/Burger/Burger'
import Desert from './assets/Components/Cards/Desert/Desert'
import Donar from './assets/Components/Cards/Donar/Donar'
import Drink from './assets/Components/Cards/Drink/Drink'
import Free from './assets/Components/Cards/Fee/Free'
import HotDog from './assets/Components/Cards/Hot-dog/HotDog'
import Lavash from './assets/Components/Cards/Lavash/Lavash'
import Pizza from './assets/Components/Cards/Pizza/Pizza'
import Salad from './assets/Components/Cards/Salad/Salad'
import Sandwich from './assets/Components/Cards/Sandwich/Sandwich'
import Sauce from './assets/Components/Cards/Sauce/Sauce'
import Set from './assets/Components/Cards/Set/Set'
import Xaggi from './assets/Components/Cards/Xaggi/Xaggi'
import Foter from './assets/Components/Foter/Foter'
import Header from './assets/Components/Header/Header'
import Menu from './assets/Components/Menu/Menu'
import Navbar from './assets/Components/Navbar/Navbar'
import About from './assets/Pages/About/About'
import HomePage from './assets/Pages/HomePage/HomePage'

function App() {
  

  return (
    <>
      {/* <Navbar/> */}
      {/* <Header/> */}
      {/* <Menu/> */}
      {/* <Lavash/> */}
      {/* <Desert/>
      <Set/>
      <Xaggi/> */}
      {/* <Burger/> */}
      {/* <Pizza/> */}
      {/* <Sandwich/> */}
      {/* <Donar/> */}
      {/* <HotDog/> */}
      {/* <Free/> */}
      {/* <Drink/> */}
      {/* <Salad/> */}
      {/* <Bread/> */}
      {/* <Sauce/> */}
      {/* <Foter/> */}
      {/* <About/> */}
      {/* <HomePage/> */}
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
