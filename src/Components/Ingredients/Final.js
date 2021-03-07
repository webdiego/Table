const Final = ({ menu, mass, recipeNumber,number }) => {
  console.log(number)
  return (
    <div   className="result">
      <div style={{display:'flex'}}>
        
        <h1>{menu.IngredientName}</h1>
        <p>{recipeNumber * number}</p>
        <p>{mass}</p>
      </div>
      <div></div>
      <button >result</button>
    </div>
  );
};

export default Final;
