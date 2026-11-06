import './App.css';
import boloimg from './assets/Logo (11).png';
import div1Img from './assets/Img.png';
import div2Img from './assets/Img (1).png';
import div3Img from './assets/Icon (10).png';
import div4Img from './assets/Icon (11).png';
import div5Img from './assets/Client.png';
import div6Img from './assets/whatsapp 1.png';
import div7Img from './assets/phone 1.png';
import div8Img from './assets/map-pin 1.png';
import div9Img from './assets/mail 1.png';
import div10Img from './assets/Logo (12).png';
import div11Img from './assets/instagram 1.png';
import div12Img from './assets/facebook 1.png';
import div13Img from './assets/youtube 1.png';

function App() {
  return (
    <div className="box">

      <div className='bolo'>
      <img className='bolo-foto1' src={boloimg} alt="" />

      <div className='bolo-name'>
      <p>Início</p>
      <p>Sobre</p>
      <p>Serviços</p>
      <p>Depoimentos</p>
      <p>Contato</p>
      </div>

      </div>

      <div className='div1'>
      <div className='div1-chap'>
      <h1 className='div1-chap-h1'>Saúde natural para os seus cabelos</h1>
      <p className='div1-chap-p'>Um salão exclusivo em São Paulo, especializado em tratamentos naturais.</p>
      <button className='div1-chap-button'>Agendar um  horário</button>
      </div>
      <img className='imgjon' src={div1Img} alt="" />
      </div>
      <br />
      <br />
      <br />
<hr className='hr1'/>
      <div className='div2'>
      <img src={div2Img} alt="" />

      <div className='div2-rost'>
      <h1 className='div2-rost-h1'>Sobre nós</h1>
      <p className='div2-rost-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin quis bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula risus. </p>
      <p className='div2-rost-p'>In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec luctus, nunc finibus elementum suscipit, tortor augue vulputate sapien, vitae feugiat enim augue sed. </p>
      <p className='div2-rost-p'>Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat, nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend dolor. Nullam eget dui at sem ullamcorper luctus.</p>
      </div>
      </div>
      <br />
      <br />
      <br />
<hr className='hr1'/>
      <br />
      <br />
      <br />

     <h1 className='h1-1'>Serviços</h1>   

     <p className='p-1'>Com mais de 10 anos no mercado, o <span className='span-1'>Beautysalon</span> já conquistou clientes de inúmeros países com seus tratamentos exclusivos e totalmente naturais</p>  

     <div className='div3'>
    <div className='card1'>
    <img src={div3Img} alt="" />
    <h1 className='div3-h1'>Terapia capilar</h1>
    <p className='div3-p'>Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos.</p>
    </div>

    <div className='card1'>
    <img src={div4Img} alt="" />
    <h1 className='div3-h1'>Cortes</h1>
    <p className='div3-p'>A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos.</p>
    </div>

    <div className='card1'>
    <img src={div3Img} alt="" />
    <h1 className='div3-h1'>Tratamentos</h1>
    <p className='div3-p'>O beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo de cabelo.</p>
    </div>
    
     </div>

    <br />
    <br />
    <br />

    <hr className='hr1' />

    <br />
    <br />
    <br />

    <h1 className='h1-2'>Depoimentos de quem já passou por aqui</h1>

    <br />
    <br />

<div className='cards'>
    <div className='card2'>
    <p className='p-3'>Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.</p>
    <img src={div5Img} alt="" />
    </div>
  
   <div className='card2'>
    <p className='p-3'>Minha mãe frequenta o salão há anos e me levou um dia para conhecer. Minha experiência foi incrível, eu continuo fazendo o a terapia capilar e isso salvou o meu cabelo. Adoro todos os profissionais do Beautysalon.</p>
    <img src={div5Img} alt="" />
    </div>
    </div>
  
    <br />
    <br />
    <br />
  
    <hr className='h1-1' />
  
    <br />
    <br />
    <br />
  
  <div className='div5'>

  <div className='div5-chap'>
  <h1 className='div5-chap-h1'>Entre em contato com a gente!</h1>
  <p className='div5-chap-p'>Entre em contato com a Beautysalon, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>
  <button className='div5-chap-btn'><img src={div6Img} alt="" />Entrar em contato</button>
  </div>

  <div className='div5-rost'>

  <div className='i1'>
  <img src={div7Img} alt="" />
  <p className='div5-rost-p'>11 99845-6754</p>
  </div>

  <div className='i1'>
  <img src={div8Img} alt="" />
  <p className='div5-rost-p'>R. Amauri Souza, 346</p>
  </div>

  <div className='i1'>
  <img src={div9Img} alt="" />
  <p className='div5-rost-p'>contato@beautysalon.com</p>
  </div>

  </div>

  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />

  <div className='div6'>

  <div className='div6-chap'>
  <img src={div10Img} alt="" />
  <p className='div6-chap-p'>©2021 Beautysalon.</p>
  <p  className='div6-chap-p'>Todos os direitos reservados.</p>
  </div>

  <div className='div6-rost'>
  <img src={div11Img} alt="" />
  <img src={div12Img} alt="" />
  <img src={div13Img} alt="" />
  </div>

  </div>
  
    </div>
   
  );
}

export default App; 