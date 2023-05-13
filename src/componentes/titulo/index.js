
import styled from 'styled-components';

const Divcontainer =styled.div`
    display:flex;
    flex-direction: column; 
     
    justify-content:center;
`
const Titulocabecalho =styled.h1`
padding: 0.3em 0;
font-size: 32px;
`
const Caixatitulo =styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  

`
const Paragrafo = styled.p`
   font-size:18px;
   font-weight:500;
   color: #777d8b;
   padding: 0 3em;
   text-align:center

`



function Titulo(){
    return (
        <Divcontainer >
            <Caixatitulo >
                <Titulocabecalho>Calculadora de Índice de Massa Corporal</Titulocabecalho>  
                <Paragrafo>Também conhecido como IMC, é uma fórmula utilizada por vários profissionais de saúde,
                          incluindo médicos, enfermeiros e nutricionistas para saber, de uma forma rápida,
                          A se a pessoa precisa ganhar ou perder peso.
                </ Paragrafo >
            </Caixatitulo > 
        </Divcontainer >
    )
}
export default Titulo 