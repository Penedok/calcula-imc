import React, {useState} from "react";
import styled from 'styled-components';

const  Sectioncontainer = styled.section`
display:flex;
flex-direction:column;
width:86%;
align-items: center;
padding: 1.8em 0;
`
const Fraseinput = styled.h4`
font-family: Raleway, sans-serif; 
font-size:20px;

`
const Inputradio = styled.input`
text-align:center;
`
const Caixainput =styled.div`
display:flex;
flex-direction:row;
`
const  Radiofrase = styled.p`
 padding: 0.8em;
 color: #777d8b;
`
const Caixainputdados = styled.div`
 display:flex;
 flex-direction: row;
 padding: 0.5em 0;
`
const Alturainput = styled.p`
padding: 0  0.3em;
color: #777d8b;
`
const Pesoinput = styled.p`
 padding: 0  0.3em;
 color: #777d8b;
`
const Botao = styled.button`
padding: 0.5em 5em;
margin: 1em 0;
cursor:pointer;
background: #d6e6fd;
font-size:18px;
border: 1px solid transparent;
border-radius:16px;

`
const Inputdados = styled.input`

  placeholder: 0 0.5em;
`
const Resultado = styled.h2`
 font-size:28px;
 padding: 1em 0 0 0 ;
`


function Inputs(){
  

  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState ();
  const [result, setResultado] = useState("")

  const Calculaimc = () => {
      const imc = peso / (altura * altura)
      const Formatandoimc = imc.toFixed(2)
      setResultado(+Formatandoimc)
  
  }
  return(
    <Sectioncontainer>
       <Fraseinput>Insira os seus dados</Fraseinput>
     <Caixainput>  
      
       <Radiofrase>Feminino</Radiofrase>
       <Inputradio type='radio'/>
       <Radiofrase>Masculino</Radiofrase>
       <Inputradio type='radio'/>
     </Caixainput > 
     <Caixainputdados>
        <Alturainput>Altura</Alturainput>
        <Inputdados type="number" onChange={e=> setAltura(+e.target.value)} placeholder=""/>
        
        <Pesoinput>Peso</Pesoinput>
        <Inputdados type="number" onChange={e=> setPeso(+e.target.value)} placeholder=""/>
     </Caixainputdados> 
     <Botao type='button' onClick={Calculaimc}>Calcular o IMC</Botao>
     <Resultado> {result}</Resultado>
    </Sectioncontainer>
   
)
}
   


export default Inputs