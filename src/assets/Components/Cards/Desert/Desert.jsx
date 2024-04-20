import './Desert.css'
import rasm1 from './img/desert1.jpg'
import rasm2 from './img/desert2.jpg'
import rasm3 from './img/desert3.jpg'
import rasm4 from './img/desert4.jpg'
import rasm5 from './img/desert5.jpg'
import rasm6 from './img/desert6.jpg'

function Desert() {
  

  return (
    <>
      <div className="desert">
        <div className="container">
            <div className="desert-row1">
              <a className='desert-link1' href="#">
                <div className="desert-card1">
                    <img src={rasm1} alt="" className='desert-rasm1'/>
                    <h3 className='desert-card1-h3'>Achchiq tajribali dengiz mahsulotlari noodle</h3>
                    <p className='desert-card1-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="desert-card1-bottom">
                      <p className='desert-card1-p2'>2,29 so'm</p>
                      <button className='desert-card1-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>
              </a>
                
                <a className='desert-link2' href="#">
                  <div className="desert-card2">
                    <img src={rasm2} alt="" className='desert-rasm2'/>
                    <h3 className='desert-card2-h3'>x boyqushlar mavjud</h3>
                    <p className='desert-card2-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="desert-card2-bottom">
                      <p className='desert-card2-p2'>3,29 so'm</p>
                      <button className='desert-card2-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>
                </a>
                
                <a className='desert-link3' href="#">
                  <div className="desert-card3">
                    <img src={rasm3} alt="" className='desert-rasm3'/>
                    <h3 className='desert-card3-h3'>Qo'ziqorin sousi bilan tuzlangan makaron</h3>
                    <p className='desert-card3-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="desert-card3-bottom">
                      <p className='desert-card3-p2'>5,29 so'm</p>
                      <button className='desert-card3-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>
                </a>
                

                <a className='desert-link4' href="#">
                  <div className="desert-card4">
                    <img src={rasm4} alt="" className='desert-rasm4'/>
                    <h3 className='desert-card4-h3'>Issiq sho'rvada mol go'shti köftesi</h3>
                    <p className='desert-card4-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="desert-card4-bottom">
                      <p className='desert-card4-p2'>3,29 so'm</p>
                      <button className='desert-card4-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>  
                </a>
                   
            </div>    
            <div className="desert-row2">
                <a className='desert-link5' href="#">
                  <div className="desert-card5">
                    <img src={rasm5} alt="" className='desert-rasm5'/>
                    <h3 className='desert-card5-h3'>Omlet bilan issiq baharatli qovurilgan guruch</h3>
                      <p className='desert-card5-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                      <div className="desert-card5-bottom">
                        <p className='desert-card5-p2'>9,29 so'm</p>
                        <button className='desert-card5-btn' type='submit'>Buyurtma</button>
                      </div>
                  </div>
                </a>
                
                <a className='desert-link6' href="#">
                  <div className="desert-card6">
                    <img src={rasm6} alt="" className='desert-rasm6'/>
                    <h3 className='desert-card6-h3'>Achchiq lahzali noodle</h3>
                      <p className='desert-card6-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                      <div className="desert-card6-bottom">
                        <p className='desert-card6-p2'>2,29 so'm</p>
                        <button className='desert-card6-btn' type='submit'>Buyurtma</button>
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

export default Desert
