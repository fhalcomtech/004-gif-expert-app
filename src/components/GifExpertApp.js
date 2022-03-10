import React, { useState } from 'react';
import { AddCategoryComp } from './AddCategoryComp';
import { ShowCategories } from './ShowCategories';

const GifExpertApp = () => 
{
  const initialCategs =  ['Dragon Ball'];
  const [categ, setCateg] = useState(initialCategs);
  return (
    <>
      <AddCategoryComp setCategories={setCateg} />
      <hr/>
      <div>
         <ul>{categ.map(ct=><ShowCategories key={ct} category={ct} />)}</ul>
      </div>
    </>
  )

  
}

export default GifExpertApp;