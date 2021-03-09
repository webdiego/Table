
const Ingredient = ({ numberPeople,numberRecipe ,recipeName, recipeQuantity,mass,show}) => {
  if(numberRecipe === 1){
    recipeQuantity = recipeQuantity * numberPeople
  }
  if(numberRecipe > 1){
    recipeQuantity = (recipeQuantity * numberPeople) / numberRecipe
  }

  if(recipeQuantity > 1000){
    
    mass =  'kg'
  }

  console.log(show)
  return ( 
    
   
<div>
  {(show &&  (
      <div className="new-ingredient" >
    
      <h2>Your ingredient converted is :</h2>
      <div className="new-ingredient-result">
      <p>{recipeName}</p>
      <p>{(recipeQuantity > 1000 ? recipeQuantity / 1000 : recipeQuantity).toFixed(2)}  <span>{mass}</span></p>
      </div> 
     </div>
    ))}
</div>

  )
    

  
}
 
export default Ingredient;