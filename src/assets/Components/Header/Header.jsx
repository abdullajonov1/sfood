import './Header.css'
import rasm1 from './img/sfood1.jpg'
import rasm2 from './img/sfood-row1.jpg'
import rasm3 from './img/sfood-row2.jpg'
import rasm4 from './img/sfood-row3.jpg'

function Header() {
  

  return (
    <>
      <div className="header">
        {/* <div className="container"> */}
        <img src={rasm1} alt="" className='header-img'/>
          <div className="header-row">
            <img src={rasm2} alt="" className='header-img-first'/>
            <img src={rasm3} alt="" className='header-img-second'/>
            <img src={rasm4} alt="" className='header-img-third'/>
          </div>
        {/* </div> */}
      </div>
    </>
  )
}

export default Header
