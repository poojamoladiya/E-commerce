import React from "react";
import { Container } from "react-bootstrap";
import '../../Styles/Commensection.css'

const Commensection=({title}) =>{
    return(
        <>
        <section className="commen_section">
            <Container className='text-center'>
                <h1>{title}</h1>
                
            </Container>
        </section>
        </>
    )
}
export default Commensection;