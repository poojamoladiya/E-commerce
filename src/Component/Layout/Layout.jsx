import React from 'react'
import Header from '../Header/Header'
import Routers from '../../Rouers/Routers'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <div>
        <Header/>
       <div>
         <Routers/>
       </div>
       <Footer/>
    </div>
  )
}

export default Layout
