import { useState } from "react";
import '../style/_calculator.scss'
import Ingredient from '../Components/Ingredients/Ingredient'

const Calculator = ( ) => {
  const [numberPeople, setNumberPeople] = useState(1);
  const [numberRecipe, setNumberRecipe] = useState(1)
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientQuantity, setIngredientQuantity] = useState('');
  const [mass, setMass] = useState("g");
  const [show, setShow] = useState(false)
 
 const showResult =(e)=>{
   e.preventDefault()
   setShow(true)
 }
 const resetResult= (e)=>{
   e.preventDefault()
   setShow(false)
 }

  return (
    <div>
      <div className="calculator">
        <h1 className="calculator-title">Calculator</h1>


        <form className="calculator-form" >
          <div className="calculator-number">
          <div className="calculator-number_recipe">
            <label>Original recipe is for</label>
            <select value={numberRecipe} onChange={(e) => setNumberRecipe(+e.target.value)}>
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

          <div className="calculator-number_people">
            <label>Number of people on table</label>
            <select 
            value={numberPeople} 
            onChange={(e) => setNumberPeople(+e.target.value)}>
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

            
         
          </div>
         
         
          <div className="calculator-ingredients">

          <div className="calculator-ingredients_inputs" >
        <label>Ingredient </label>
        <input
       
          type="text"
          value={ingredientName}
          onChange={(e) => setIngredientName(e.target.value)}
          required
        />

        <label>Quantity</label>
        <input
          value={ingredientQuantity}
          type="number"
          onChange={(e) => setIngredientQuantity(+e.target.value)}
          min="0"
          step=".01"
          max="1000"
        />
        <select 
        className="calculator-ingredients_inputs__weight"
           value={mass}
            onChange={(e) => setMass(e.target.value)}
        >
          <option value="g">g</option>
          <option value="Kg">Kg</option>
        </select>
      </div>
        <p>Remember that 1g = 1ml and 1kg = 1L</p>
            
          </div>
           <div className="calculator-buttons">

          <button onClick={showResult}>Result</button>
          <button onClick={resetResult}>Reset</button>
           </div>


          <Ingredient
           show={show}
           className="calculator-ingredients_new-ingredient"
          numberPeople={numberPeople}
          numberRecipe ={numberRecipe}
          recipeName={ingredientName}
          recipeQuantity={ingredientQuantity}
          mass={mass} 
          />


        
         
        </form>
      </div>
    </div>
  );
};

export default Calculator;


