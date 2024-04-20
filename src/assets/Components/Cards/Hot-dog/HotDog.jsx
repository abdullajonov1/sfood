import './HotDog.css'
import rasm1 from './img/hot-dog1.png'
import rasm2 from './img/hot-dog2.png'
import rasm3 from './img/hot-dog3.png'
import rasm4 from './img/hot-dog4.png'
import rasm5 from './img/hot-dog5.png'
import rasm6 from './img/hot-dog6.png'

function HotDog() {
  

  return (
    <>
      <div className="hot-dog">
        <div className="container">
            <div className="hot-dog-row1">
              <a className='hot-dog-link1' href="#">
                <div className="hot-dog-card1">
                    <img src={rasm1} alt="" className='hot-dog-rasm1'/>
                    <h3 className='hot-dog-card1-h3'>Achchiq tajribali dengiz mahsulotlari noodle</h3>
                    <p className='hot-dog-card1-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="hot-dog-card1-bottom">
                      <p className='hot-dog-card1-p2'>2,29 so'm</p>
                      <button className='hot-dog-card1-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>
              </a>
                
                <a className='hot-dog-link2' href="#">
                  <div className="hot-dog-card2">
                    <img src={rasm2} alt="" className='hot-dog-rasm2'/>
                    <h3 className='hot-dog-card2-h3'>x boyqushlar mavjud</h3>
                    <p className='hot-dog-card2-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="hot-dog-card2-bottom">
                      <p className='hot-dog-card2-p2'>3,29 so'm</p>
                      <button className='hot-dog-card2-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>
                </a>
                
                <a className='hot-dog-link3' href="#">
                  <div className="hot-dog-card3">
                    <img src={rasm3} alt="" className='hot-dog-rasm3'/>
                    <h3 className='hot-dog-card3-h3'>Qo'ziqorin sousi bilan tuzlangan makaron</h3>
                    <p className='hot-dog-card3-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="hot-dog-card3-bottom">
                      <p className='hot-dog-card3-p2'>5,29 so'm</p>
                      <button className='hot-dog-card3-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>
                </a>
                

                <a className='hot-dog-link4' href="#">
                  <div className="hot-dog-card4">
                    <img src={rasm4} alt="" className='hot-dog-rasm4'/>
                    <h3 className='hot-dog-card4-h3'>Issiq sho'rvada mol go'shti köftesi</h3>
                    <p className='hot-dog-card4-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="hot-dog-card4-bottom">
                      <p className='hot-dog-card4-p2'>3,29 so'm</p>
                      <button className='hot-dog-card4-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>  
                </a>
                   
            </div>    
            <div className="hot-dog-row2">
                <a className='hot-dog-link5' href="#">
                  <div className="hot-dog-card5">
                    <img src={rasm5} alt="" className='hot-dog-rasm5'/>
                    <h3 className='hot-dog-card5-h3'>Omlet bilan issiq baharatli qovurilgan guruch</h3>
                      <p className='hot-dog-card5-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                      <div className="hot-dog-card5-bottom">
                        <p className='hot-dog-card5-p2'>9,29 so'm</p>
                        <button className='hot-dog-card5-btn' type='submit'>Buyurtma</button>
                      </div>
                  </div>
                </a>
                
                <a className='hot-dog-link6' href="#">
                  <div className="hot-dog-card6">
                    <img src={rasm6} alt="" className='hot-dog-rasm6'/>
                    <h3 className='hot-dog-card6-h3'>Achchiq lahzali noodle</h3>
                      <p className='hot-dog-card6-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                      <div className="hot-dog-card6-bottom">
                        <p className='hot-dog-card6-p2'>2,29 so'm</p>
                        <button className='hot-dog-card6-btn' type='submit'>Buyurtma</button>
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

export default HotDog
