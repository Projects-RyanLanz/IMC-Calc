import { useState } from 'react'
import './App.css'
 
import ImcCalc from './components/ImcCalc.jsx';
import ImcTable from './components/ImcTable.jsx';
import { data } from './data/data.js';

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if(!height||!weight) return console.log('Falha');
    
    const heightFloat = +height.replace(",",".");
    const weightFloat = +weight.replace(",",".");

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(2)

    data.forEach((item) => {
      if(imcResult >= item.min && imcResult <= item.max){
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    })
    setImc(imcResult)
  }
 
  const resetCalc = (e) => {
    setImc("")
  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <>  
      <div className="container">
        {!imc ? (
         <ImcCalc calcImc={calcImc}/> 
        ):(
          <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc}/> 
        )}
        
      </div> 
    </>
  )
}

export default App
