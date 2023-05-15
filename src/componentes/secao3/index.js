import { styled } from 'styled-components'
import imagens5 from '../imagens/gender.png'

const CaixaLimitacoes = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;  

`
const CaixaTitulo = styled.div`
 display: flex;
 flex-direction:column;
 padding: 0.9em 5em;
`
const CaixaTituloborda =styled.div`
    border: 1px solid transparent;
    background: #fff;
    border-radius:16px;
    box-shadow: 10px 10px 0 #BFDAE6 ;
    display: flex;
    flex-direction:column;
    padding: 0.9em 2em;
    margin: 1em 7em;
    `

const LimitacoesTitulo = styled.h2`
 padding: 0.5em 1em;
 font-size: 33px;
`
const LimitacoesParagrafo = styled.p`
  color:#777d8b;
  padding: 0 1em;
  font-size: 20px;
 `
 const ImagemGenero = styled.img`
    padding: 0.8em 1em;
    width:10%;
 `
function Secaoquatro(){
    return (
        <CaixaLimitacoes>
           <CaixaTitulo> 
                <LimitacoesTitulo>Limitações do Índice IMC</LimitacoesTitulo>
                <LimitacoesParagrafo>Mesmo o IMC sendo um indicador de peso saudável,
                     ele não é igual para todas as pessoas. Grupos específicos devem analisar o resultado 
                     do seu IMC, e em certos casos, os resultados não devem ser levados em consideração.
                     </LimitacoesParagrafo>
            </CaixaTitulo> 
            <CaixaTituloborda> 
                <ImagemGenero src={imagens5} alt='imagem de uma lampada de ideia' />
                <LimitacoesParagrafo>O desenvolvimento e a gordura corporal variam de acordo com o gênero
                     e idade. Consequentemente, o gênero e idade devem ser levados em consideração ao avaliar
                    o IMC</LimitacoesParagrafo>
            </CaixaTituloborda>
        </CaixaLimitacoes>   

       
    )
}

export default Secaoquatro