"use client"
import React, { useEffect, useState } from 'react'
import Title from './Title'
import Item from './Item'
import { useAppContext } from '../(context)/AppContext'

function PopularProduct() {
    const { products } = useAppContext()
    const [popularProduct, setPopularProduct] = useState([])
    useEffect(() => {
        const data = products.filter((item)=> item.popular === true).slice(0,5);
        setPopularProduct(data)
        
    }, [products])
  return (
     <section className="max-padd-container pt-20">
            <Title
                title1="Popular"
                title2="Products"
                titlestyles="pb-10"
                parastyles="!block"
            />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
                    {popularProduct.map((product) => (
                        
                          <Item key={product.id} product={product} />
                    ))}

               </div>
        </section>
  )
}

export default PopularProduct