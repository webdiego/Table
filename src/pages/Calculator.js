import { useState } from "react";
const Calculator = () => {
  const [number, setNumber] = useState(1);
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientQuantity, setIngredientQuantity] = useState();
  const [mass, setMass] = useState("g");
  const [recipe, setRecipe] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipe({ number, ingredientName, mass, ingredientQuantity });
    if (number === 2) {
      recipe.ingredientQuantity = recipe.ingredientQuantity * 2;
    }
    console.log(recipe);
  };

  return (
    <div>
      <div className="calculator">
        <h1>Calculator</h1>

        <form className="calculator-form" onSubmit={handleSubmit}>
          <div className="calculator-people">
            <label>Number of people on table</label>
            <select value={number} onChange={(e) => setNumber(+e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="calculator-people">
            <label>Recipe for</label>
            <select value={number} onChange={(e) => setNumber(+e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          
          
          <div className="ingredients">
            <div className="ingredient-1">
              <label>Ingredient </label>
              <input
                type="text"
                onChange={(e) => setIngredientName(e.target.value)}
                required
              />

              <label>Quantity</label>
              <input
                onChange={(e) => setIngredientQuantity(+e.target.value)}
                min="0"
                max="1000"
              />
              <select value={mass} onChange={(e) => setMass(e.target.value)}>
                <option value="g">g</option>
                <option value="Kg">Kg</option>
              </select>
            </div>
          </div>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
