import React from 'react'
import './Footer.css'
import logo from '../../assets/images/eco-logo.png'
import {Link} from 'react-router-dom'

import { Col, Container, Row ,ListGroup,ListGroupItem} from 'react-bootstrap'

function Footer() {

  return (
    <>
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="4" className='mb-4' md='6'> 
          <div className="logo">
                 <div>
                  <h1 className='text-white'>Multimart</h1>
                </div>
              </div>
              <p className="footer_text mt-4">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deleniti nostrum in consectetur facilis, libero tempora error repudiandae neque nesciunt labore, <br/> autem molestias animi sunt dolorum!
             </p>
          </Col>

          <Col lg='3' md='6' className='mb-4'>
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Top Categories</h4>

              <ListGroup>
                 <ListGroupItem className='ps-0 border-0' style={ {background:"var(--primary-color)"}}>
                   <Link to='#'>Mobile Phones</Link>
                 </ListGroupItem>

                 <ListGroupItem className='ps-0 border-0' style={ {background:"var(--primary-color)"}}>
                   <Link to='#'>Modern Sofa</Link>
                 </ListGroupItem>

                 <ListGroupItem className='ps-0 border-0' style={ {background:"var(--primary-color)"}}>
                   <Link to='#'>Arm Chair</Link>
                 </ListGroupItem>

                 <ListGroupItem className='ps-0 border-0' style={ {background:"var(--primary-color)"}}>
                   <Link to='#'>Smart Watche</Link>
                 </ListGroupItem>
              </ListGroup>
            </div>  
          </Col>

          <Col lg='2'md='6' className='mb-4'>
          <div className="footer_quick-links">
              <h4 className="quick_links-title">Usefull Links</h4>

              <ListGroup>
                 <ListGroupItem className='ps-0 border-0' style={ {background:"var(--primary-color)"}}>
                   <Link to='/shop'>Shop</Link>
                 </ListGroupItem>

                 <ListGroupItem className='ps-0 border-0' style={ {background:"var(--primary-color)"}}>
                   <Link to='/Home'>Home</Link>
                 </ListGroupItem>

                 <ListGroupItem className='ps-0 border-0' style={ {background:"var(--primary-color)"}}>
                   <Link to='/login'>Login</Link>
                 </ListGroupItem>

                 <ListGroupItem className='ps-0 border-0' style={ {background:"var(--primary-color)"}}>
                   <Link to='#'>Privacy Policy</Link>
                  </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='3' md='4'>
          
          <div className="footer_quick-links">
              <h4 className="quick_links-title">Contact</h4>

              <ListGroup className='footer_contact'>
                 <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3 pt-2' style={ {background:"var(--primary-color)"}}>
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>120,Sahajand Society L.H Rod Suart</p>
                 </ListGroupItem>

                 <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3' style={ {background:"var(--primary-color)"}}>
                   <span><i class="ri-phone-line"></i></span>
                   <p>+8795436778</p>
                 </ListGroupItem>

                 <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3' style={ {background:"var(--primary-color)"}}>
                    <span><i class="ri-mail-line"></i></span>
                    <p>Multimart45@gmail.com</p>  
                 </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          
        </Row>
      </Container>


    </footer>
      
    </>
  )
}

export default Footer
