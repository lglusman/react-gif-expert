import { useState } from 'react'
// import { AddCategory } from './components/AddCategory'
// import { GifGrid } from './components/GifGrid'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['GNR', 'Metallica'])

  const onAddCategory = (cat) => {
    if (categories.some((categ) => categ.toLowerCase() === cat.toLowerCase()))
      return
    setCategories([cat, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((cat) => (
        <GifGrid key={cat} category={cat} />
      ))}
    </>
  )
}
