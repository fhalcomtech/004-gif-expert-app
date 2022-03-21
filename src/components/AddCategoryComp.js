import React, { useState } from 'react'

export const AddCategoryComp = ({setCategories}) => {
    const [category, setCategory] = useState('');
    const [timer, setTimer] = useState(0);
    const [msg, setMsg] = useState('');
    const handlerChangeCategory = (e) => setCategory(e.target.value); 
    const handlerFormSubmit = (e) => {
        e.preventDefault();
        if(category.length<1) return;

        setCategories(curr => {
            if(timer){
                setTimer(tm => {
                    clearTimeout(tm);
                    return 0;
                });
            }
            if(curr.includes(category))
            {
                setMsg('La categoria ya existe')
                return curr;
            }
            else
            {
                setMsg('La categoria fue Agregada con exito')
                return ([category, ...curr]);
            }
        });
        setCategory('');
        setTimer(tm=>setTimeout(()=>{setMsg('')},5000));
        
    }

  return (
      <form onSubmit={handlerFormSubmit}>
          <h2>Gif Expert App</h2> 
          <h5>{msg}</h5>
          <input type='text' value={category} onChange={handlerChangeCategory}/>
          <button type='submit'>Save</button>
      </form>
  )
}
