import './Xaggi.css'
import rasm1 from './img/xaggi1.jpg'
import rasm2 from './img/xaggi2.jpg'
import rasm3 from './img/xaggi3.jpg'
import rasm4 from './img/xaggi4.jpg'
import rasm5 from './img/xaggi5.jpg'
import rasm6 from './img/xaggi6.jpg'

function Xaggi() {
  

  return (
    <>
      <div className="xaggi">
        <div className="container">
            <div className="xaggi-row1">
              <a className='xaggi-link1' href="#">
                <div className="xaggi-card1">
                    <img src={rasm1} alt="" className='xaggi-rasm1'/>
                    <h3 className='xaggi-card1-h3'>Achchiq tajribali dengiz mahsulotlari noodle</h3>
                    <p className='xaggi-card1-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="xaggi-card1-bottom">
                      <p className='xaggi-card1-p2'>2,29 so'm</p>
                      <button className='xaggi-card1-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>
              </a>
                
                <a className='xaggi-link2' href="#">
                  <div className="xaggi-card2">
                    <img src={rasm2} alt="" className='xaggi-rasm2'/>
                    <h3 className='xaggi-card2-h3'>x boyqushlar mavjud</h3>
                    <p className='xaggi-card2-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="xaggi-card2-bottom">
                      <p className='xaggi-card2-p2'>3,29 so'm</p>
                      <button className='xaggi-card2-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>
                </a>
                
                <a className='xaggi-link3' href="#">
                  <div className="xaggi-card3">
                    <img src={rasm3} alt="" className='xaggi-rasm3'/>
                    <h3 className='xaggi-card3-h3'>Qo'ziqorin sousi bilan tuzlangan makaron</h3>
                    <p className='xaggi-card3-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="xaggi-card3-bottom">
                      <p className='xaggi-card3-p2'>5,29 so'm</p>
                      <button className='xaggi-card3-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>
                </a>
                

                <a className='xaggi-link4' href="#">
                  <div className="xaggi-card4">
                    <img src={rasm4} alt="" className='xaggi-rasm4'/>
                    <h3 className='xaggi-card4-h3'>Issiq sho'rvada mol go'shti köftesi</h3>
                    <p className='xaggi-card4-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="xaggi-card4-bottom">
                      <p className='xaggi-card4-p2'>3,29 so'm</p>
                      <button className='xaggi-card4-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>  
                </a>
                   
            </div>    
            <div className="xaggi-row2">
                <a className='xaggi-link5' href="#">
                  <div className="xaggi-card5">
                    <img src={rasm5} alt="" className='xaggi-rasm5'/>
                    <h3 className='xaggi-card5-h3'>Omlet bilan issiq baharatli qovurilgan guruch</h3>
                      <p className='xaggi-card5-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                      <div className="xaggi-card5-bottom">
                        <p className='xaggi-card5-p2'>9,29 so'm</p>
                        <button className='xaggi-card5-btn' type='submit'>Buyurtma</button>
                      </div>
                  </div>
                </a>
                
                <a className='xaggi-link6' href="#">
                  <div className="xaggi-card6">
                    <img src={rasm6} alt="" className='xaggi-rasm6'/>
                    <h3 className='xaggi-card6-h3'>Achchiq lahzali noodle</h3>
                      <p className='xaggi-card6-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                      <div className="xaggi-card6-bottom">
                        <p className='xaggi-card6-p2'>2,29 so'm</p>
                        <button className='xaggi-card6-btn' type='submit'>Buyurtma</button>
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

export default Xaggi
