import Imagens6 from '../imagens/birthday-cake.png'
import Imagens7 from '../imagens/muscles.png'
import styled from 'styled-components'

const CaixaIdademusculo = styled.div`
 display: flex ;
 align-items:center;
 justify-content:center;
 padding:1em 14em
 
`
const CaixaIdade = styled.div`
display: flex ;
flex-direction: column;
border: 1px solid transparent;
background: #fff;
border-radius:16px;
box-shadow: 10px 10px 0 #BFDAE6;
padding: 1.8em 2em;
margin: 0 5em;
`
const Imagembolo = styled.img`
    padding: 0 0 0.8em 0; 
    width: 11%
`
const Caixabolo = styled.div`
    display:flex;
    align-items:center;
    font-size:20px
   
`
const Idade = styled.span`
 text-align:center;
 padding: 0.5em 0.8em;
`
const Idadeparagrafo = styled.p`
    color:#777d8b;
    font-size:18px;
`
const CaixaMusculo = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
border: 1px solid transparent;
background: #fff;
border-radius:16px;
box-shadow: 10px 10px 0 #BFDAE6;
padding: 0.8em 0;
`
const Caixabraco = styled.div`
display:flex;
padding: 0.8em 0;
align-items:center;
`
const Imagembraco = styled.img`
width: 11%;
padding: 0.5em;
`
const Musculo = styled.span`
text-aling:center;
font-size:20px;
padding: 0.5em 0 0  0 ;

`
const Musculoparagrafo = styled.p`
;
margin:0 1em;
text-align:center;
color: #777d8b;
font-size:18px;

`
function Idademusculo(){
    return(
        <CaixaIdademusculo >
            <CaixaIdade>
                <Caixabolo>
                    <Imagembolo src={Imagens6} alt="imagem de um bolo"/>
                    <Idade >Idade</Idade>
                </Caixabolo >   
                <Idadeparagrafo>Em idosos, o aumento da gordura corporal e a perda muscular
              podem fazer com que o IMC subestime o conteúdo de gordura corporal.</Idadeparagrafo> 
            </CaixaIdade>

            <CaixaMusculo>
                <Caixabraco>
                    <Imagembraco src={Imagens7} alt="imagem de um bolo"/>
                    <Musculo >Musculo</Musculo>
                </Caixabraco> 
                <Musculoparagrafo>Em idosos, o aumento da gordura corporal e a perda muscular
              podem fazer com que o IMC subestime o conteúdo de gordura corporal.</Musculoparagrafo>     
            </CaixaMusculo>
           

        </CaixaIdademusculo >
        
    )
}

 export default Idademusculo