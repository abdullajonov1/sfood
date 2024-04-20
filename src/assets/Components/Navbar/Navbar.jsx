import { Link } from 'react-router-dom'
import './Navbar.css'
import rasm1 from './img/shopping-cart.svg'

function Navbar() {
  

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="nav-left">
            <h3 className="nav-logo">SFood</h3>
              <div className="nav-link">
                  <Link to="/" className='nav-home'>uy</Link>
                  <Link to="#" className='nav-branche'>Filallar</Link>
                  <Link to="About" className='nav-about'>Biz haqimizda</Link>
                  <Link to="#" className='nav-contacts'>Kontaktlar</Link>
              </div>
          </div>
            <div className="nav-right">
              <Link to="#"><img src={rasm1} alt="" className='shopping-cart'/></Link>
              <button className='nav-btn' type='submit'>Kirish uchun</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
