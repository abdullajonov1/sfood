import './Drink.css'
import rasm1 from './img/drink1.png'
import rasm2 from './img/drink2.png'
import rasm3 from './img/drink3.png'
import rasm4 from './img/drink4.png'
import rasm5 from './img/drink5.png'
import rasm6 from './img/drink6.png'
import rasm7 from './img/drink7.png'
import rasm8 from './img/drink8.png'

function Drink() {
  

  return (
    <>
      <div className="drink">
        <div className="container">
            <div className="drink-row1">
              <a className='drink-link1' href="#">
                <div className="card1">
                    <img src={rasm1} alt="" className='drink-rasm1'/>
                    <h3 className='card1-h3'>Achchiq tajribali dengiz mahsulotlari noodle</h3>
                    <p className='card1-p'>Ma'lumot: klassik go'shtli drink, frantsuz kartoshkasi, qalampir</p>
                    <div className="card1-bottom">
                      <p className='card1-p2'>2,29 so'm</p>
                      <button className='card1-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>
              </a>
                
                <a className='drink-link2' href="#">
                  <div className="card2">
                    <img src={rasm2} alt="" className='drink-rasm2'/>
                    <h3 className='card2-h3'>x boyqushlar mavjud</h3>
                    <p className='card2-p'>Ma'lumot: klassik go'shtli drink, frantsuz kartoshkasi, qalampir</p>
                    <div className="card2-bottom">
                      <p className='card2-p2'>3,29 so'm</p>
                      <button className='card2-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>
                </a>
                
                <a className='drink-link3' href="#">
                  <div className="card3">
                    <img src={rasm3} alt="" className='drink-rasm3'/>
                    <h3 className='card3-h3'>Qo'ziqorin sousi bilan tuzlangan makaron</h3>
                    <p className='card3-p'>Ma'lumot: klassik go'shtli drink, frantsuz kartoshkasi, qalampir</p>
                    <div className="card3-bottom">
                      <p className='card3-p2'>5,29 so'm</p>
                      <button className='card3-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>
                </a>
                

                <a className='drink-link4' href="#">
                  <div className="card4">
                    <img src={rasm4} alt="" className='drink-rasm4'/>
                    <h3 className='card4-h3'>Issiq sho'rvada mol go'shti köftesi</h3>
                    <p className='card4-p'>Ma'lumot: klassik go'shtli drink, frantsuz kartoshkasi, qalampir</p>
                    <div className="card4-bottom">
                      <p className='card4-p2'>3,29 so'm</p>
                      <button className='card4-btn' type='submit'>Buyurtma</button>
                    </div>
                  </div>  
                </a>
                   
            </div>    
            <div className="drink-row2">
                <a className='drink-link5' href="#">
                  <div className="card5">
                    <img src={rasm5} alt="" className='drink-rasm5'/>
                    <h3 className='card5-h3'>Omlet bilan issiq baharatli qovurilgan guruch</h3>
                      <p className='card5-p'>Ma'lumot: klassik go'shtli drink, frantsuz kartoshkasi, qalampir</p>
                      <div className="card5-bottom">
                        <p className='card5-p2'>9,29 so'm</p>
                        <button className='card5-btn' type='submit'>Buyurtma</button>
                      </div>
                  </div>
                </a>
                
                <a className='drink-link6' href="#">
                  <div className="card6">
                    <img src={rasm6} alt="" className='drink-rasm6'/>
                    <h3 className='card6-h3'>Achchiq lahzali noodle</h3>
                      <p className='card6-p'>Ma'lumot: klassik go'shtli drink, frantsuz kartoshkasi, qalampir</p>
                      <div className="card6-bottom">
                        <p className='card6-p2'>2,29 so'm</p>
                        <button className='card6-btn' type='submit'>Buyurtma</button>
                      </div>
                  </div>
                </a>
                    
                <a className='drink-link7' href="#">
                  <div className="card7">
                    <img src={rasm7} alt="" className='drink-rasm7'/>
                    <h3 className='card7-h3'>Doimiy noodle maxsus omlet</h3>
                      <p className='card7-p'>Ma'lumot: klassik go'shtli drink, frantsuz kartoshkasi, qalampir</p>
                      <div className="card7-bottom">
                        <p className='card7-p2'>2,29 so'm</p>
                        <button className='card7-btn' type='submit'>Buyurtma</button>
                      </div>
                  </div>
                </a>

                <a className='drink-link8' href="#">
                  <div className="card8">
                    <img src={rasm8} alt="" className='drink-rasm8'/>
                    <h3 className='card8-h3'>Ismaloq bilan noodle</h3>
                      <p className='card8-p'>Ma'lumot: klassik go'shtli drink, frantsuz kartoshkasi, qalampir</p>
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

export default Drink
