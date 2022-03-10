import { useEffect, useState } from "react";
import { getGifHelper } from "../helpers/fetchGitHelper";

export const useFetchGif = (category) => {
  const[gifs, setGifs] = useState({loading: true, data:[]});

  useEffect(()=>
  {
      const gifsDataLst = getGifHelper(category);
      gifsDataLst.then(data => {setGifs({loading:false, data:data})});
    },[category])
  
  return gifs;
}
