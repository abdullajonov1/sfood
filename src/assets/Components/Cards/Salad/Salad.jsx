import './Salad.css'
import rasm1 from './img/salad1.png'
import rasm2 from './img/salad2.png'
import rasm3 from './img/salad3.png'
import rasm4 from './img/salad4.png'
import rasm5 from './img/salad5.png'
import rasm6 from './img/salad6.png'

function Salad() {
  

  return (
    <>
      <div className="salad">
        <div className="container">
            <div className="salad-row1">
              <a className='salad-link1' href="#">
                <div className="salad-card1">
                    <img src={rasm1} alt="" className='salad-rasm1'/>
                    <h3 className='salad-card1-h3'>Achchiq tajribali dengiz mahsulotlari noodle</h3>
                    <p className='salad-card1-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="salad-card1-bottom">
                      <p className='salad-card1-p2'>2,29 so'm</p>
                      <button className='salad-card1-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>
              </a>
                
                <a className='salad-link2' href="#">
                  <div className="salad-card2">
                    <img src={rasm2} alt="" className='salad-rasm2'/>
                    <h3 className='salad-card2-h3'>x boyqushlar mavjud</h3>
                    <p className='salad-card2-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="salad-card2-bottom">
                      <p className='salad-card2-p2'>3,29 so'm</p>
                      <button className='salad-card2-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>
                </a>
                
                <a className='salad-link3' href="#">
                  <div className="salad-card3">
                    <img src={rasm3} alt="" className='salad-rasm3'/>
                    <h3 className='salad-card3-h3'>Qo'ziqorin sousi bilan tuzlangan makaron</h3>
                    <p className='salad-card3-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="salad-card3-bottom">
                      <p className='salad-card3-p2'>5,29 so'm</p>
                      <button className='salad-card3-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>
                </a>
                

                <a className='salad-link4' href="#">
                  <div className="salad-card4">
                    <img src={rasm4} alt="" className='salad-rasm4'/>
                    <h3 className='salad-card4-h3'>Issiq sho'rvada mol go'shti köftesi</h3>
                    <p className='salad-card4-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="salad-card4-bottom">
                      <p className='salad-card4-p2'>3,29 so'm</p>
                      <button className='salad-card4-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>  
                </a>
                   
            </div>    
            <div className="salad-row2">
                <a className='salad-link5' href="#">
                  <div className="salad-card5">
                    <img src={rasm5} alt="" className='salad-rasm5'/>
                    <h3 className='salad-card5-h3'>Omlet bilan issiq baharatli qovurilgan guruch</h3>
                      <p className='salad-card5-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                      <div className="salad-card5-bottom">
                        <p className='salad-card5-p2'>9,29 so'm</p>
                        <button className='salad-card5-btn' type='submit'>Buyurtma</button>
                      </div>
                  </div>
                </a>
                
                <a className='salad-link6' href="#">
                  <div className="salad-card6">
                    <img src={rasm6} alt="" className='salad-rasm6'/>
                    <h3 className='salad-card6-h3'>Achchiq lahzali noodle</h3>
                      <p className='salad-card6-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                      <div className="salad-card6-bottom">
                        <p className='salad-card6-p2'>2,29 so'm</p>
                        <button className='salad-card6-btn' type='submit'>Buyurtma</button>
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

export default Salad
