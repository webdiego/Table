 import {useState} from 'react'
 import Final from './Final'

const IngredientOne = ({recipeName, recipeNumber,mass,number}) => {
  const menu = {IngredientName : recipeName, Number : recipeNumber}
  return ( 
   
    <div className="ingredients">
       {/* <p>{recipeName}</p>
        <p>{recipeNumber/2}</p> */}
        <Final
        number={number}
        recipeNumber={recipeNumber}
         mass={mass} 
         menu={menu}/>
      </div>
    

  
    );
}
 
export default IngredientOne;