import './Bread.css'
import rasm1 from './img/bread1.png'
import rasm2 from './img/bread2.png'
import rasm3 from './img/bread3.png'
import rasm4 from './img/bread4.png'
import rasm5 from './img/bread5.png'
import rasm6 from './img/bread6.png'

function Bread() {
  

  return (
    <>
      <div className="bread">
        <div className="container">
            <div className="bread-row1">
              <a className='bread-link1' href="#">
                <div className="bread-card1">
                    <img src={rasm1} alt="" className='bread-rasm1'/>
                    <h3 className='bread-card1-h3'>Achchiq tajribali dengiz mahsulotlari noodle</h3>
                    <p className='bread-card1-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="bread-card1-bottom">
                      <p className='bread-card1-p2'>2,29 so'm</p>
                      <button className='bread-card1-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>
              </a>
                
                <a className='bread-link2' href="#">
                  <div className="bread-card2">
                    <img src={rasm2} alt="" className='bread-rasm2'/>
                    <h3 className='bread-card2-h3'>x boyqushlar mavjud</h3>
                    <p className='bread-card2-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="bread-card2-bottom">
                      <p className='bread-card2-p2'>3,29 so'm</p>
                      <button className='bread-card2-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>
                </a>
                
                <a className='bread-link3' href="#">
                  <div className="bread-card3">
                    <img src={rasm3} alt="" className='bread-rasm3'/>
                    <h3 className='bread-card3-h3'>Qo'ziqorin sousi bilan tuzlangan makaron</h3>
                    <p className='bread-card3-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="bread-card3-bottom">
                      <p className='bread-card3-p2'>5,29 so'm</p>
                      <button className='bread-card3-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>
                </a>
                

                <a className='bread-link4' href="#">
                  <div className="bread-card4">
                    <img src={rasm4} alt="" className='bread-rasm4'/>
                    <h3 className='bread-card4-h3'>Issiq sho'rvada mol go'shti köftesi</h3>
                    <p className='bread-card4-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                    <div className="bread-card4-bottom">
                      <p className='bread-card4-p2'>3,29 so'm</p>
                      <button className='bread-card4-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>  
                </a>
                   
            </div>    
            <div className="bread-row2">
                <a className='bread-link5' href="#">
                  <div className="bread-card5">
                    <img src={rasm5} alt="" className='bread-rasm5'/>
                    <h3 className='bread-card5-h3'>Omlet bilan issiq baharatli qovurilgan guruch</h3>
                      <p className='bread-card5-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                      <div className="bread-card5-bottom">
                        <p className='bread-card5-p2'>9,29 so'm</p>
                        <button className='bread-card5-btn' type='submit'>Buyurtma</button>
                      </div>
                  </div>
                </a>
                
                <a className='bread-link6' href="#">
                  <div className="bread-card6">
                    <img src={rasm6} alt="" className='bread-rasm6'/>
                    <h3 className='bread-card6-h3'>Achchiq lahzali noodle</h3>
                      <p className='bread-card6-p'>Ma'lumot: klassik go'shtli lavash, frantsuz kartoshkasi, qalampir</p>
                      <div className="bread-card6-bottom">
                        <p className='bread-card6-p2'>2,29 so'm</p>
                        <button className='bread-card6-btn' type='submit'>Buyurtma</button>
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

export default Bread
