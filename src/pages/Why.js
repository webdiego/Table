import '../style/_why.scss'

const Why = () => {
  return (
    <div className="why">
      <div className="why-title">
        <h1>Why Table?</h1>
      </div>
      <div className="why-container">

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
          "churn out" the recipe ad hoc for you and not miss a shot in the
          kitchen.
          </p>
      </div>
      <div className="why-balls">
        <div className="why-balls-1"></div>
        <div className="why-balls-2"></div>
      </div>
      </div>
    </div>
  );
};

export default Why;
