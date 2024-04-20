import Foter from '../../Components/Foter/Foter'
import Navbar from '../../Components/Navbar/Navbar'
import rasm from './img/sfood-about-img.png'
import './About.css'

function About() {
  

  return (
    <>
        <Navbar/>
      <div className="about">
        <div className="container">
        <div className="about-card">
            <img src={rasm} alt="" className='about-img'/>
            <h1 className='about-h1'>Kompaniya haqida</h1>
            <p className='about-p'>Kompaniya 2005 yilning fevral oyida Toshkent shahrida tashkil etilgan. Hozirda kompaniyaning Toshkent shahrida 11 ta filiali mavjud. Menyu asosan klub sendvichlari, hot-doglar, gamburgerlar, pita nonlari va donarlardan iborat. Bizning ustuvor vazifalarimiz - ingredientlarning yangiligi va sifati, turli xil to'ldirishlar, arzon narxlar va mehmonlarning so'rovlariga e'tibor. Har kuni MaxWay-dan juda ko'p turli xil odamlar buyurtma berishadi. Biz esa tashrif buyuruvchilar sonini ham, filiallar sonini ham oshirishga harakat qilyapmiz. Biz tayyorlagan har bir taom bilan biz o'zimizning o'ziga xos retseptlarimiz tafsilotlarini aniqlaymiz va sizning sevimli brendingiz bo'lib qolishda davom etish uchun narx va sifatning mukammal muvozanatini qidiramiz. Agar siz to'satdan biz tomonimizdan yomon xizmat yoki tayyorlangan taomning past sifatiga duch kelsangiz, bizga yozing. Biz ijobiy va salbiy sharhlarni mamnuniyat bilan qabul qilamiz. Mehmonning shikoyati bizga o'sish uchun imkoniyat beradigan sovg'adir.</p>
        </div>  
        </div>
       
      </div>
       <Foter/>
    </>
  )
}

export default About
