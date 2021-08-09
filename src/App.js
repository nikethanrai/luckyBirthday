import './App.css';
import { useState } from 'react';
import {Link} from 'react-scroll'


function App() {

  const [sum,setSum]=useState('')
  const [luckyNum,setLuckyNum]=useState('')
  const [text,setText]=useState('')
  const [dateCheck,setDateCheck]=useState('')
  const [luckyNumCheck,setLuckyNumCheck]=useState('')
  let x=''

  function dateInputHandler(input){
    const dateArray= input.target.value.split('-')
    let sum=0;
    dateArray.map((string)=>{
      sum+=Number(string)
    })
    setSum(sum)

    
  }
  function luckyNumberInputHandler(input){
    setLuckyNum(input.target.value)

  }
  function checkBtnHandler(){


    if(sum==2018){
      setDateCheck('')
      setLuckyNumCheck('')
      
      setText("💜's Birthday, obviously lucky")
    return;
  }
    else if (sum==0 || luckyNum==''){{
     
        
     } if(sum==0){
        setDateCheck("Date can't be empty!!")
        
      }else{setDateCheck('')}
      if(luckyNum==''){
        setLuckyNumCheck('Add your Lucky Number!!')
      }else{
        setLuckyNumCheck('')
      }
      
    }else {
      setDateCheck('')
      setLuckyNumCheck('')
    if (sum%luckyNum==0){
      x ='Your Birthday is Lucky'
     
    }else{
      x ='Your Birthday is not Lucky'
      
    }}
    setText(x)

  }
  

  return (
    <div className="App">
      <div className='page-heading'>
        <h1>Is your Birthday Lucky?</h1>
        <Link to='main' spy={true} smooth={true}><p id='letsStart'>Let's Start</p> </Link>


      </div>
      <section id='main' className='section'>
        <div id="alertBox"><strong>Privacy Notice!</strong> We are not storing your data.</div>
        <div className='input'>
          <form>
            <label id='birthday-label'>Enter your Birthday</label><br></br><input onChange={dateInputHandler} type='date' id='birthday'></input></form>

          <form>
          <p className='checkInput'>{dateCheck}</p>
            <label id='lucky-label'>Your Lucky Number</label><br></br><input onChange={luckyNumberInputHandler} type="number" id='lucky-input' /></form>
            <p className='checkInput'>{luckyNumCheck}</p>
            <button onClick={checkBtnHandler} type='submit' id='check-btn'>check</button> 
            <p>{text}</p> 

        </div>

      </section>
      


    </div>
  );
}

export default App;
