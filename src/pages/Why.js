import '../style/_why.scss'
import Boom from '../img/boom-small.png'

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
          <span className="why-logo">Table</span> was born with the intention of make life easier between pans,
          sheets and calculators.
        </p>

          <p>
          How many times have you come across a complicated, long recipe for 6 people when at the table you were only in 4 ?
          </p>
          <p>I know, we are better at cooking or...eating than we are at maths.</p>
          <p>
           This application can help you to calculate and to
          "churn out" the ingredient ad hoc for your preparation and not miss a shot in the
          kitchen and mainly for don't waste food.
          </p>
      </div>
      
      </div>
    </div>
  );
};

export default Why;
