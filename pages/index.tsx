import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
const index = () => {
  const [Number,setNumber]:any=useState({MilSecond:0, Second:0,Minutes:0,Hour:0})
  const[ StopWatch,setStopWatch]:any=useState()
  var Mil=Number.MilSecond;
  var Sec=Number.Second;
  var Min=Number.Minutes;
  var hour=Number.Hour;
  const Go=()=>{
    Mil++
    if(Mil==100){
      Sec++
      Mil=0;
    }
    if(Sec==60){
      Min++
      Sec=0
    }
    if(Min==60){
      hour++
      Min=0;
    }
    
    
    setNumber({MilSecond:Mil,Second:Sec,Minutes:Min,Hour:hour})
  }
  const Run=()=>{
    
    
     setStopWatch(setInterval(Go,10))
      


}
  const stopWatch=()=>{
    clearInterval(StopWatch)
    
  }
  const ResumeTime=()=>{
    // Go()
    // setInterval(Go,10)
    
    clearInterval(StopWatch)
    setNumber({MilSecond:'0'+0,Second:'0'+0,Minutes:'0'+0,Hour:'0'+0})

  }


  return (
    <>
      <div className={styles.main_body}>
        <h1 className={styles.heading}>Stop Watch</h1>
        <div className={styles.watch}>
        <h1 className={styles.zero}>{Number.Hour}</h1>
        <h1 className={styles.zero}>{Number.Minutes}</h1>
        <h1 className={styles.zero}>{Number.Second}</h1>
        <h1 className={styles.zero}>{Number.MilSecond}</h1>

      </div>
      <div className={styles.allBtn}>
        <button className={styles.start} onClick={Run}>Start</button>
        <button className={styles.stop} onClick={stopWatch}>Stop</button>
        <button className={styles.resume} onClick={ResumeTime}>Reset</button>

      </div>

      </div>
      
       
      
      
      </>    
  )
}

export default index
