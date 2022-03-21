import { useFetchGif } from '../hooks/useFetchGif';
import { ShowCategory } from './ShowCategory';

export const ShowCategories = ({category}) => {
   const {loading, data:images} = useFetchGif(category);
  return (
    <div className='category-container'>
        <h4 className='category-name'>
            {loading?'Loading...':category} 
        </h4>
        <div className='category-images'>
            {images.map(({id, url, title}) => (<ShowCategory key={id} url={url} title={title}/>))}
        </div>
    </div>
  )
}
