import HeaderImg from '../img/vector-creator-small.png'
import GamberoRosso from '../img/gambero-rosso2.png'
import Michelin from '../img/MichelinStar.svg.png'
import SlowFood from '../img/slow-food.svg'
import {Link} from 'react-router-dom'
const Header = () => {

  return ( 
    <header >
      <div className="header">

      <div className="header-description">
      <h1>It's time to cook!</h1>
      <h4>How many of us?</h4>
      <Link to="/why"> <button className="header-button">Learn More </button> </Link>
      </div>
      
      <div className="header-img">
       <img  src={HeaderImg} alt="img"/>
      </div>

      </div>

      <div className="header-trusted">
      <h2>Trusted by chefs around the world and by</h2>

      <div className="header-trusted-logos">
       <img className="gambero-rosso" src={GamberoRosso} alt=""/>
       <img  className="slow-food" src={SlowFood} alt=""/>
       <img  className="michelin" src={Michelin} alt=""/>

      </div>
      </div>
    </header>
   );
}
 
export default Header;