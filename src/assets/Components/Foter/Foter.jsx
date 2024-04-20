import './Foter.css'
import rasm1 from './img/telegram.svg'
import rasm2 from './img/instagram.svg'
import rasm3 from './img/youtube.svg'


function Foter() {
  

  return (
    <>
      <div className="foter">
        <div className="container">
            <div className="foter-up">
                <h2 className="foter-logo">SFood</h2>
                <h2 className='foter-item1'>bizga qo'shiling</h2>
                <h2 className='foter-item2'>Raqam bo'yicha buyurtma</h2>
            </div>
            <div className="foter-middle">
                <div className="foter-link">
                    <a href="#" className='foter-home'>uy</a>
                    <a href="#" className='foter-branche'>Filallar</a>
                    <a href="#" className='foter-about'>Biz haqimizda</a>
                    <a href="#" className='foter-contacts'>Kontaktlar</a>
                </div>
                <div className="messenger">
                  <a href="#"><img src={rasm1} alt="" className='telegram'/></a>
                  <a href="#"><img src={rasm2} alt="" className='instagram'/></a>
                  <a href="#"><img src={rasm3} alt="" className='youtube'/></a> 
                </div>
                <a className='foter-num' href="tel number">+998887600722</a>
            </div>
            <div className="foter-bottom">
                <p className='foter-p'>© 2020–2022, IT-TIME MChJ, rasmiy veb-sayt</p>
                <a className='made-by' href="#">Xurshidbek tomonidan ishlab chiqilgan</a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Foter