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
`
const Inputdados = styled.input`
  placeholder: 0 0.5em;
`
function Inputs(){
  
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
            <Inputdados type='number'/>
            <Pesoinput>Peso</Pesoinput>
            <Inputdados type='number'/>
         </Caixainputdados> 
         <Botao type='button'>Calcular</Botao>
        </Sectioncontainer>
    )
}

export default Inputs