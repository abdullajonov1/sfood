import './Lavash.css'
import rasm1 from './img/lavash1.jpg'
import rasm2 from './img/lavash2.jpg'
import rasm3 from './img/lavash3.jpg'
import rasm4 from './img/lavash4.jpg'
import rasm5 from './img/lavash5.jpg'
import rasm6 from './img/lavash6.jpg'
import rasm7 from './img/lavash7.jpg'
import rasm8 from './img/lavash8.png'

function Lavash() {
  

  return (
    <>
      <div className="lavash">
        <div className="container">
            <div className="lavash-row1">
              <a className='lavash-link1' href="#">
                <div className="card1">
                    <img src={rasm1} alt="" className='lavash-rasm1'/>
                    <h3 className='card1-h3'>Achchiq tajribali dengiz mahsulotlari noodle</h3>
                    <p className='card1-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="card1-bottom">
                      <p className='card1-p2'>2,29 so'm</p>
                      <button className='card1-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>
              </a>
                
                <a className='lavash-link2' href="#">
                  <div className="card2">
                    <img src={rasm2} alt="" className='lavash-rasm2'/>
                    <h3 className='card2-h3'>x boyqushlar mavjud</h3>
                    <p className='card2-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="card2-bottom">
                      <p className='card2-p2'>3,29 so'm</p>
                      <button className='card2-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>
                </a>
                
                <a className='lavash-link3' href="#">
                  <div className="card3">
                    <img src={rasm3} alt="" className='lavash-rasm3'/>
                    <h3 className='card3-h3'>Qo'ziqorin sousi bilan tuzlangan makaron</h3>
                    <p className='card3-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="card3-bottom">
                      <p className='card3-p2'>5,29 so'm</p>
                      <button className='card3-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>
                </a>
                

                <a className='lavash-link4' href="#">
                  <div className="card4">
                    <img src={rasm4} alt="" className='lavash-rasm4'/>
                    <h3 className='card4-h3'>Issiq sho'rvada mol go'shti köftesi</h3>
                    <p className='card4-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="card4-bottom">
                      <p className='card4-p2'>3,29 so'm</p>
                      <button className='card4-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>  
                </a>
                   
            </div>    
            <div className="lavash-row2">
                <a className='lavash-link5' href="#">
                  <div className="card5">
                    <img src={rasm5} alt="" className='lavash-rasm5'/>
                    <h3 className='card5-h3'>Omlet bilan issiq baharatli qovurilgan guruch</h3>
                      <p className='card5-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                      <div className="card5-bottom">
                        <p className='card5-p2'>9,29 so'm</p>
                        <button className='card5-btn' type='submit'>Buyurtma</button>
                      </div>
                  </div>
                </a>
                
                <a className='lavash-link6' href="#">
                  <div className="card6">
                    <img src={rasm6} alt="" className='lavash-rasm6'/>
                    <h3 className='card6-h3'>Achchiq lahzali noodle</h3>
                      <p className='card6-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                      <div className="card6-bottom">
                        <p className='card6-p2'>2,29 so'm</p>
                        <button className='card6-btn' type='submit'>Buyurtma</button>
                      </div>
                  </div>
                </a>
                    
                <a className='lavash-link7' href="#">
                  <div className="card7">
                    <img src={rasm7} alt="" className='lavash-rasm7'/>
                    <h3 className='card7-h3'>Doimiy noodle maxsus omlet</h3>
                      <p className='card7-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                      <div className="card7-bottom">
                        <p className='card7-p2'>2,29 so'm</p>
                        <button className='card7-btn' type='submit'>Buyurtma</button>
                      </div>
                  </div>
                </a>

                <a className='lavash-link8' href="#">
                  <div className="card8">
                    <img src={rasm8} alt="" className='lavash-rasm8'/>
                    <h3 className='card8-h3'>Ismaloq bilan noodle</h3>
                      <p className='card8-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                      <div className="card8-bottom">
                        <p className='card8-p2'>0,29 so'm</p>
                        <button className='card8-btn' type='submit'>Buyurtma</button>
                      </div>
                  </div>
                </a>    
            </div>
        </div>
      </div>
    </>
  )
}

export default Lavash
