import Imagens8 from '../imagens/baby-boy.png'
import Imagens9 from '../imagens/single-person.png'
import styled from 'styled-components'

const CaixaGravidezDesen = styled.div`
 display: flex ;
 align-items:center;
 justify-content:center;
 padding: 1em  11em  1em 0
 
`
const CaixaGravi = styled.div`
display: flex ;
flex-direction: column;
border: 1px solid transparent;
background: #fff;
border-radius:16px;
box-shadow: 10px 10px 0 #BFDAE6;
padding: 1.8em 1em;
margin: 0 6em;
width:73%;
`
const Imagembebe = styled.img`
    padding: 0 0 0.8em 0; 
    width: 11%
`
const Caixabebe= styled.div`
    display:flex;
    align-items:center;
    font-size:20px
   
`
const Gravidez = styled.span`
 text-align:center;
 padding: 0.5em 0.8em;
`
const Graveparagrafo = styled.p`
    color:#777d8b;
    text-align:center;
    padding: 0 1em;
    font-size:18px;
`
const CaixaDesen = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
border: 1px solid transparent;
background: #fff;
border-radius:16px;
box-shadow: 10px 10px 0 #BFDAE6;
padding: 0.8em 0;
margin: 0 0 3em 0;
`
const Caixaperfil = styled.div`
display:flex;
padding: 0.8em 0;
align-items:center;
`
const Imagemperfil = styled.img`
width: 11%;
padding: 0.5em;
`
const Perfil = styled.span`
text-aling:center;
font-size:20px;
padding: 0.5em 0 0  0 ;

`
const Perfilparagrafo = styled.a`
padding: 0 1em;
margin:0 1em;
text-align:center;
color: #777d8b;
font-size:18px;

`
function GravidezDesen(){
    return(
        <CaixaGravidezDesen>
            <CaixaGravi>
                <Caixabebe>
                    <Imagembebe src={Imagens8} alt="imagem de um bolo"/>
                    <Gravidez >Gravidez</Gravidez>
                </Caixabebe>   
                <Graveparagrafo>Espera-se que as mãae ganhem peso durante a gravidez.
                     Manter o corpo saudável antes de engravidar é o melhor para minimizar
                      risco na saúde da mãe e do bebê.
                </Graveparagrafo> 
            </CaixaGravi>

            <CaixaDesen>
                <Caixaperfil>
                    <Imagemperfil src={Imagens9} alt="imagem de um bolo"/>
                    <Perfil>Desenvolvido por Karen Penedo</Perfil>
                </Caixaperfil> 
                <Perfilparagrafo href='https://github.com/Penedok'>Para conhecer mais sobre meus projetos
                    click aqui
                </Perfilparagrafo>
                 
            </CaixaDesen>
        </CaixaGravidezDesen >
        
    )
}

 
export default GravidezDesen