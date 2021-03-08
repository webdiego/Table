import { useState } from "react";
import '../style/_calculator.scss'
import Ingredient from '../Components/Ingredients/Ingredient'
import This from '../img/this-1.svg'

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
       <p className="calculator_sub-title">In a few steps you will convert the amount of ingredient of the recipe with the amount you need .</p>
        <div className="calculator-container">

        <form className="calculator-form" >
         
         <div className="calculator-form_1">

            <p className="calculator-form_1-step">1. Insert the serving of the original recipe</p>
            <label>The original recipe is for</label>
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
            <span>serving</span>
         </div>
        <div className="calculator-form_2">

          <p>2. Insert the ingredient that you want to convert</p>
          <div className="calculator-form_2-inputs">
         <div className="calculator-form_2-inputs-name">

        <label>Name</label>
        <input
       
          type="text"
          value={ingredientName}
          onChange={(e) => setIngredientName(e.target.value)}
          required
        />
         </div>
        <div className="calculator-form_2-inputs-quantity">

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
           value={mass}
            onChange={(e) => setMass(e.target.value)}
        >
          <option value="g">g</option>
          <option value="Kg">Kg</option>
        </select>
        </div>
          </div>
        </div>
      
            
         

          <div className="calculator-form_3">
            
          <p>3. Insert serving number on your table</p>
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
        <img src={This} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Calculator;


