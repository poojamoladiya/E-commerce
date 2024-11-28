
import React,{useEffect,useState} from "react";
import '../../Styles/Clock.css'

function Clock(){

        const [days,setDays] = useState()
        const [hourse,setHourse] = useState()
        const [minutes,setMinutes] =useState()
        const [seconds,setSeconds] =useState()  
    
        
      let interval;
         
        const countDown = ()=>{
           
            const destination = new Date("Novemer 28,2024").getTime()

            interval = setInterval(()=>{

              const now = new Date().getTime()
              const different = destination - now
              const days = Math.floor(different / (1000 * 60 * 60 *24))

              const hourse =Math.floor(different % (1000 * 60 *60 *24)/
               (1000*60))
     
              const minutes = Math.floor(different % (1000 *60 *60)/
               (1000*60))

               const seconds = Math.floor(different % (1000 *60*60)/ 1000)
    
                if(destination < 0) clearInterval(interval.current);

                  else{
                    setDays(days)
                    setHourse(hourse)
                    setMinutes(minutes)
                    setSeconds(seconds)
                  }

            });
    
          }

          useEffect(()=>{
            countDown()
          })

  return (
        <>
          <div className="clock_wrapper d-flex align-items-center gap-5">
          <div className='clock_data d-flex alihn-items-center gap-5'>
              <div className='text-center'>
                 <h1 className='text-white fs-3 mb-2'>{days}</h1>
                 <h5 className="text-white fs-6">Days</h5>
              </div>
              <span className='text-white fs-3'>:</span>
            </div>
           
            <div className='clock_data d-flex alihn-items-center gap-5'>
              <div className='text-center'>
                 <h1 className='text-white fs-3 mb-2'>{hourse}</h1>
                 <h5 className="text-white fs-6">Hourse</h5>
              </div>
              <span className='text-white fs-3'>:</span>
            </div>
    
            <div className='clock_data d-flex alihn-items-center gap-5'>
              <div className='text-center'>
                 <h1 className='text-white fs-3 mb-2'>{minutes}</h1>
                 <h5 className="text-white fs-6">Minutes</h5>
              </div>
              <span className='text-white fs-3'>:</span>
            </div>
    
            <div className='clock_data d-flex alihn-items-center gap-5'>
              <div className='text-center'>
                 <h1 className='text-white fs-3 mb-2'>{seconds}</h1>
                 <h5 className="text-white fs-6">Seconds</h5>
              </div>
            
            </div>
    
    
          </div>
        </>
      
         
             
    
      )
      
}

export default Clock;



