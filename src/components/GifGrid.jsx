import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({ category }) => {

  const {images, isloading} = useFetchGifs(category)

  

  return (
    <>
      <h3>{category}</h3>
      {isloading && <p>Cargando...</p>}
      <div className='card-grid'>
        {images.map((img) => (
          // <GifItem key={img.id} title={img.title} url={img.url}  />
          <GifItem key={img.id} {...img}  />
        ))}
      </div>
    </>
  )
}
