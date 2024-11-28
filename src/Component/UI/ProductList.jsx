import React from 'react'
import Productcard from './Productcard'

function ProductList({data}) {
  return (
    <>
      {
        data?.map(item =>(
          <Productcard item={item}/> 
        ))
      }
        
    

    </>
  )
}

export default ProductList
