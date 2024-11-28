import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import Helmet from '../Component/Helmet/Helmet'
import products from '../assets/data/products'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import '../Styles/Productdetails.css'
import { motion } from 'framer-motion'

 






function ProductDetails() {

 const {id} =useParams()
 const  product =products.find(item=>item.id ===id)
 const {imgUrl,productsName,price,avgRating,reviews,description,shortDesc}=product
  return (
    <div>
      <Helmet title={productsName}>
      
      
        <section className='pt-0'>
          <Container>
            <Row>
              <Col lg='6'>
              <img src={imgUrl} alt="" />
              </Col>
               
              <Col lg='6'>
                <div className="product_details">
                  <h2>{productsName}</h2>
                  <div className="product_rating d-flex align-items-center gap-5 mb-3">
                    <div>
                      <span><i class="ri-star-line"></i></span>
                      <span><i class="ri-star-line"></i></span>
                      <span><i class="ri-star-line"></i></span>
                      <span><i class="ri-star-line"></i></span>
                      <span><i class="ri-star-half-line"></i></span>
                    </div>
                    <p>(<span>{avgRating}</span>ratings)</p>
                
                  </div>

                  <span className='product_price'>${price}</span>

                <p className='mt-3'>{shortDesc}</p>

                  <motion.button whileTap={{scale:1.2}} className='buy_btn'><Link to="/Login">Add To Cart</Link> </motion.button>
                </div>
              
              </Col>
            </Row>
          </Container>
        </section>

        <section >
          <Container>
          <Row>
            <Col lg='12'>
               <div className='tab_wrepper d-flex align-items-center gap-5'>
                <h6>Description</h6>
                <h6>Reviews ({reviews .length})</h6>

               </div>
               <div className='tab_content mt-1'>
                <p>{description}</p>
               </div>
  
            </Col>
          </Row>
          </Container>
         
        </section>
      </Helmet>
    
    </div>
  )
}

export default ProductDetails
