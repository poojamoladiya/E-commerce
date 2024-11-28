import React, { useEffect, useState } from 'react'

import {Link} from 'react-router-dom'
import Helmet from "../Component/Helmet/Helmet"
import { Container,Row,Col} from 'react-bootstrap'
import heroImg from '../assets/images/hero-img.png'
import '../Styles/Home.css'
import'../Styles/Clock.css';
import {motion} from 'framer-motion'
import Services from '../services/Services'
import ProductList from '../Component/UI/ProductList'
import products from '../assets/data/products'
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../Component/UI/Clock'


function Home() {
    
   const [trendingProducts,settrendingProducts] = useState([]);
   const [bestsalesProducts,setBestSalesProducts]= useState([]);
   const [mobileProducts,setMobilProducts] = useState([]);
   const [wirelessProducts,setWirelessProducts]=useState([]);
   const [popularProducts,setPopuarProducts]=useState([]);


   const year = new Date().getFullYear();

   useEffect(()=>{
    const filteredrendingProducts = products.filter(
      (item) => item.category === 'chair'
    );
    
    const filteredBestSalesProducts = products.filter(
      (item) => item.category === 'sofa'
    );

    const filteredMobilProducts = products.filter(
      (item) => item.category === 'mobile'
    );

    const filteredWirelessProducts = products.filter(
      (item) => item.category === 'wireless'
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === 'watch'
    );

     settrendingProducts(filteredrendingProducts);
     setBestSalesProducts(filteredBestSalesProducts);
     setMobilProducts(filteredMobilProducts);
     setWirelessProducts(filteredWirelessProducts);
     setPopuarProducts(filteredPopularProducts);

   },[]);

  return (
    <div>
      <Helmet title={"Home"}>

        <section className='hero_section'>
           <Container>
            <Row>
              <Col lg="6" md="6">
               <div className='hero_content'>
                <p className='hero_subile'>Trending product in{year}
                </p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo distinctio mollitia tempora vel eum velit. At, deserunt dicta! Tempore quod eos ea repudiandae dignissimos minus! Quas fugit porro facilis! Qui.</p>
                <motion.button whileTap={{scale:1.2}}
                  className='buy_btn'><Link to="/shop">SHOP NOW</Link>
                </motion.button>
               </div>
              </Col>
              <Col lg="6" md="6">
              <div className='hero_img'>
                <img src={heroImg } alt=''/>
              </div>
              </Col>
            </Row>
           </Container>

        </section>
        <Services/>

           <section className='trending_product'>
            <Container>
              <Row>
                <Col lg='12' className='text-center'>
                 <h2 className='section_title'>Trening Products</h2>
                </Col>
                <ProductList data={trendingProducts   }/>
              </Row>
            </Container>
           </section>
           
       
           <section className='best_sales'>
            <Container>
              <Row>
                <Col lg='12' className='text-center'>
                 <h2 className='section_title'>Best Salse</h2>
                </Col>
                <ProductList data={bestsalesProducts} />
              </Row>
            </Container>
           </section>

           <section className="timer_count">
            <Container>
              <Row>
                <Col lg="6" md="12" className='count_doen-col'>

                <div className="clock_top-content">
                   <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                   <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
                </div>
                <Clock/>
                <motion.button whileTap={{scale:1.2}} className="buy_btn store_btn">
                  <Link to='/shop' className='text-dark'>Visit Store</Link>
                  </motion.button>
                </Col>

                <Col lg="6" md="12" className='text-end counter_img'>
                   <img src={counterImg} alt="" />
                </Col>
        
              </Row>
            </Container>
           </section>
           <br/>

           <section>
            <Container>
              <Row>
                <Col lg='12' className='text-center'>
                 <h2 className='section_title'>New Arrivals</h2> 
                </Col>
                <ProductList data={mobileProducts} />
                <ProductList data={wirelessProducts}/>
              </Row>
            </Container>
           </section>


           <section>
           <Container>
              <Row>
                <Col lg='12' className='text-center mb-5' >
                 <h2 className='section_title'>Popular in Category</h2> 
                </Col>
                <ProductList  data={popularProducts} />
           
              </Row>
            </Container>
           </section>



      </Helmet>
    </div>
  )
}

export default Home
