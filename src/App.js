import React, {useState} from 'react';
import styled from 'styled-components';
import './App.css';

const Title = styled.h1``;

const Input = styled.input`

`;

function App(){

   const [vconta, setVconta ] = useState(0);
   const [percentual, setPercentual]= useState(0);

 return <div className="gorj">
    <Title>Calculadora de Gorjeta</Title>
    <h2>Quanto deu a conta?</h2>
    <Input type="number" value={vconta} onChange={(i)=>{setVconta(parseFloat(i.target.value))}}></Input>
    <h2>Qual a porcentagem de gorjeta?</h2>
    <Input type="number" value={percentual} onChange={(j)=>{setPercentual(parseFloat(j.target.value))}}></Input>
   {
     vconta>0 &&
     <>
      <p>Sub-total: R$ {vconta+(vconta*(percentual/100))}</p>
      <p>Gorjeta(%{percentual}): R$ {vconta*(percentual/100)}</p>
     </>
   }
 </div>;
}

export default App;
