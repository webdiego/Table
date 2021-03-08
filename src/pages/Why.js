import '../style/_why.scss'
import Boom from '../img/boom.png'

const Why = () => {
  return (
    <div className="why">
      <div className="why-title">
        <h1>Why Table?</h1>
      </div>
      <div className="why-container">
      <div className="why-img">
        <img src={Boom} alt=""/>
      </div>
      <div className="why-description">
        <p>
          <span className="why-logo">Table</span> was born with the intention of facilitating life between pans,
          sheets and calculators.
        </p>

          <p>
           How many times have you come across a
          complicated recipe, long and above all for 6 people when there were
          only 4 at the table?
          </p>
          
          <p>
           This application can help you calculate and
          "churn out" the ingredient ad hoc for you and not miss a shot in the
          kitchen and above all don't waste food.
          </p>
      </div>
      
      </div>
    </div>
  );
};

export default Why;
