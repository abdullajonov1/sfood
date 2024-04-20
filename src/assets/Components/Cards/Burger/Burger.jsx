import './Burger.css'
import rasm1 from './img/burger1.jpg'
import rasm2 from './img/burger2.jpg'
import rasm3 from './img/burger3.jpg'
import rasm4 from './img/burger4.jpg'
import rasm5 from './img/burger5.jpg'
import rasm6 from './img/burger6.jpg'

function Burger() {
  

  return (
    <>
      <div className="burger">
        <div className="container">
            <div className="burger-row1">
              <a className='burger-link1' href="#">
                <div className="burger-card1">
                    <img src={rasm1} alt="" className='burger-rasm1'/>
                    <h3 className='burger-card1-h3'>Achchiq tajribali dengiz mahsulotlari noodle</h3>
                    <p className='burger-card1-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="burger-card1-bottom">
                      <p className='burger-card1-p2'>2,29 so'm</p>
                      <button className='burger-card1-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>
              </a>
                
                <a className='burger-link2' href="#">
                  <div className="burger-card2">
                    <img src={rasm2} alt="" className='burger-rasm2'/>
                    <h3 className='burger-card2-h3'>x boyqushlar mavjud</h3>
                    <p className='burger-card2-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="burger-card2-bottom">
                      <p className='burger-card2-p2'>3,29 so'm</p>
                      <button className='burger-card2-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>
                </a>
                
                <a className='burger-link3' href="#">
                  <div className="burger-card3">
                    <img src={rasm3} alt="" className='burger-rasm3'/>
                    <h3 className='burger-card3-h3'>Qo'ziqorin sousi bilan tuzlangan makaron</h3>
                    <p className='burger-card3-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="burger-card3-bottom">
                      <p className='burger-card3-p2'>5,29 so'm</p>
                      <button className='burger-card3-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>
                </a>
                

                <a className='burger-link4' href="#">
                  <div className="burger-card4">
                    <img src={rasm4} alt="" className='burger-rasm4'/>
                    <h3 className='burger-card4-h3'>Issiq sho'rvada mol go'shti köftesi</h3>
                    <p className='burger-card4-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="burger-card4-bottom">
                      <p className='burger-card4-p2'>3,29 so'm</p>
                      <button className='burger-card4-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>  
                </a>
                   
            </div>    
            <div className="burger-row2">
                <a className='burger-link5' href="#">
                  <div className="burger-card5">
                    <img src={rasm5} alt="" className='burger-rasm5'/>
                    <h3 className='burger-card5-h3'>Omlet bilan issiq baharatli qovurilgan guruch</h3>
                      <p className='burger-card5-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                      <div className="burger-card5-bottom">
                        <p className='burger-card5-p2'>9,29 so'm</p>
                        <button className='burger-card5-btn' type='submit'>Buyurtma</button>
                      </div>
                  </div>
                </a>
                
                <a className='burger-link6' href="#">
                  <div className="burger-card6">
                    <img src={rasm6} alt="" className='burger-rasm6'/>
                    <h3 className='burger-card6-h3'>Achchiq lahzali noodle</h3>
                      <p className='burger-card6-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                      <div className="burger-card6-bottom">
                        <p className='burger-card6-p2'>2,29 so'm</p>
                        <button className='burger-card6-btn' type='submit'>Buyurtma</button>
                      </div>
                  </div>
                </a>
                    
                {/* <a className='desert-link7' href="#">
                  <div className="card7">
                    <img src={rasm7} alt="" className='desert-rasm7'/>
                    <h3 className='card7-h3'>Doimiy noodle maxsus omlet</h3>
                      <p className='card7-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                      <div className="card7-bottom">
                        <p className='card7-p2'>2,29 so'm</p>
                        <button className='card7-btn' type='submit'>Buyurtma</button>
                      </div>
                  </div>
                </a>

                <a className='desert-link8' href="#">
                  <div className="card8">
                    <img src={rasm8} alt="" className='desert-rasm8'/>
                    <h3 className='card8-h3'>Ismaloq bilan noodle</h3>
                      <p className='card8-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                      <div className="card8-bottom">
                        <p className='card8-p2'>0,29 so'm</p>
                        <button className='card8-btn' type='submit'>Buyurtma</button>
                      </div>
                  </div>
                </a>     */}
            </div>
        </div>
      </div>
    </>
  )
}

export default Burger
