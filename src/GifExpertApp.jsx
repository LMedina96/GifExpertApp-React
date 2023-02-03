import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

  const [categories, setCategories] = useState([])

  const onAddCategory = (newCategory) => {
    if(!categories.includes(newCategory)) {
      setCategories([newCategory, ...categories])
    }
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
        onNewCategory={onAddCategory}
      />

        {categories.map((category) => {
          return (
            <GifGrid 
              key={category} 
              category={category} 
            />
          )
        })}
    </>
  )
}

export default GifExpertApp
