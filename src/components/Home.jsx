import React from 'react'
import Hero from './Hero'
import Products from './Products'
import Categories from './Categories'
import { useState } from 'react'

const Home = () => {

  const [category, setCategory] = useState([])

  return (
    <div className='bg-gray-100 min-h-screen '>
      <Hero />
      <div className='flex-col mt-7 h- '>
          <Categories setCategory={setCategory} />
          <Products category={category} />
      </div>
    </div>
  )
}

export default Home