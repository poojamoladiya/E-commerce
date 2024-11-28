import React ,{useState} from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import '../Styles/Shop.css'
import Helmet from '../Component/Helmet/Helmet'
import products from '../assets/data/products'
import Commensection from '../Component/UI/Commensection'

import ProductList from '../Component/UI/ProductList'

function Shop() {

  const [productData,setProductsData] =useState(products);

  const handleFilter =(e)=>{
     const filterValue =e.target.value;

     if (filterValue === 'sofa'){
      const filteredProducts =products.filter(
        (item)=>item.category === 'sofa'
      )
     
     setProductsData(filteredProducts)
  }

  if (filterValue === 'mobile'){
    const filteredProducts =products.filter(
      (item)=>item.category === 'mobile'
    )
   
   setProductsData(filteredProducts);
  }

  
  if (filterValue === 'chair'){
    const filteredProducts =products.filter(
      (item)=>item.category === 'chair'
    )
   
   setProductsData(filteredProducts);
  }

  if (filterValue === 'watch'){
    const filteredProducts =products.filter(
      (item)=>item.category === 'watch'
    )
   
   setProductsData(filteredProducts);
  }

  if (filterValue === 'wireless'){
    const filteredProducts =products.filter(
      (item)=>item.category === 'wireless'
    )
   
   setProductsData(filteredProducts);
  }

  

};


const handleSearch = e=>{
  const searchTerm = e.target.value

  const searchhedProducts= products.filter(item=> item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(searchhedProducts)
}

  return (
    <div>
       <Helmet title='shop'>
        <Commensection title='Products' />

        
        <section>  
          
          <Container>
           <Row>
             <Col lg='3' md='3 pt-0'>
             <div className='filter_widget'>
              <select onChange={handleFilter}>
                <option>Filter By Category</option>
                <option value="sofa">Sofa</option>
                <option value="mobile">mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
              </select>
             </div>
             
             </Col>

             <Col lg='6' md='6'>
             <div className="search_box">
      
              <input type='text' placeholder='Search......' onChange={handleSearch}/>
              <span><i class="ri-search-line"></i></span>
            </div>
          </Col>
            
        </Row>        
      </Container>
      </section> 
      </Helmet>

      <section>
        <Container>
          <Row>
            {
              productData.length=== 0? <h1 className='text-center'>No Products are found!</h1>
              : <ProductList data={productData}/>
            }
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Shop;
