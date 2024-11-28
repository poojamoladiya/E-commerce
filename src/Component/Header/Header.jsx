import React ,{useRef,useEffect} from 'react'
import './Header.css'
import {motion} from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import {Container,Row} from 'react-bootstrap'
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'




const nav_links=[
  {
    path:'home',
    display:"Home"

  },

  {
    path:'shop',
    display:"Shop"

  },
  // {
  //   path:'cart',
  //   display:"Cart"

  // }
]

function Header() {

    const headerRef = useRef(null)

    const menuRef =useRef(null)

const stickyHeaderFunction = () =>{
  window.addEventListener('scroll',()=>{
    if(document.body.scrollTop >80 || document.documentElement.scrollTop >80
    )
    {
      headerRef.current.classList.add('sticky_header')
    } else{
      headerRef.current.classList.remove('sticky_header')
    }
  })

}
  useEffect(()=>{
     stickyHeaderFunction()

      return () => window.removeEventListener('scroll',stickyHeaderFunction);
  });

  const menuToggle = () =>menuRef.current.classList.toggle('active_menu')

  return (
    <div>
      <header className='header' ref={headerRef}>
        <Container>
          <Row>
            <div className="Nav_wrapper">
              <div className="logo">
                <img src={logo} alt="logo" />
                 <div>
                  <h1>E-commerce</h1>
                  </div>
                </div>

              <div className="navigation" ref={menuRef} onClick={menuToggle}>
                <ul className="menu">
                   {
                    nav_links.map((item,index)=>(
                      <li className="nav_item" key={index}>
                      <NavLink to={item.path} 
                      className={(navclass)=>
                        navclass.isActive ? "nav_acion" :""
                      }>
                        {item.display}</NavLink>
                   </li>
                    ))
                   }
                                 
                </ul>

              </div>

              <div className="nav_icons">
                 <span className='fav-icon'>
                     <i><svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path></svg></i>
                     {/* <span className='badge'>1  </span> */}
                     </span>
                
                 <span className='cart_icon'>
                     <i><svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" viewBox="0 0 24 24" fill="currentColor"><path d="M7.00488 7.99966V5.99966C7.00488 3.23824 9.24346 0.999664 12.0049 0.999664C14.7663 0.999664 17.0049 3.23824 17.0049 5.99966V7.99966H20.0049C20.5572 7.99966 21.0049 8.44738 21.0049 8.99966V20.9997C21.0049 21.5519 20.5572 21.9997 20.0049 21.9997H4.00488C3.4526 21.9997 3.00488 21.5519 3.00488 20.9997V8.99966C3.00488 8.44738 3.4526 7.99966 4.00488 7.99966H7.00488ZM7.00488 9.99966H5.00488V19.9997H19.0049V9.99966H17.0049V11.9997H15.0049V9.99966H9.00488V11.9997H7.00488V9.99966ZM9.00488 7.99966H15.0049V5.99966C15.0049 4.34281 13.6617 2.99966 12.0049 2.99966C10.348 2.99966 9.00488 4.34281 9.00488 5.99966V7.99966Z"></path></svg> </i>
                     {/* <span className='badge'>1  </span> */}
                     </span>
                  
                  <span><Link to='/Login'><motion.img whileTap={{scale:1.4}} src={userIcon} alt="" /></Link>
                  </span>
                  <div className="mobil_menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                
                </span>
              </div>
             </div>  
            </div>
          </Row>
        </Container>

      </header>

    </div>
  )
}

export default Header;
