import React, {useState} from 'react';
import styled from 'styled-components';
import './App.css';

const Title = styled.h1``;

const Input = styled.input`

`;

const Questoes = styled.h2``;

const Resultado = styled.p``;

function App(){

   const [vconta, setVconta ] = useState(0);
   const [percentual, setPercentual]= useState(0);

 return <div className="gorj">
    <Title>Calculadora de Gorjeta</Title>
    <Questoes>Quanto deu a conta?</Questoes>
    <Input type="number" value={vconta} onChange={(i)=>{setVconta(parseFloat(i.target.value))}}></Input>
    <Questoes>Qual a porcentagem de gorjeta?</Questoes>
    <Input type="number" value={percentual} onChange={(j)=>{setPercentual(parseFloat(j.target.value))}}></Input>
   {
     vconta>0 &&
     <>
      <Resultado>Sub-total: R$ {vconta+(vconta*(percentual/100))}</Resultado>
      <Resultado>Gorjeta(%{percentual}): R$ {vconta*(percentual/100)}</Resultado>
     </>
   }
 </div>;
}

export default App;
