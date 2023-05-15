import styled from 'styled-components'
import imagem2 from '../imagens/restaurant.png';
import imagem3 from '../imagens/dumbell.png';
import imagem4 from '../imagens/moon-and-stars copiar.png';

const CaixaDicas = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    padding: 1em 5em;
    padding: 1em 0;
    
`
const Comida = styled.div`
 display:flex;
 flex-direction: column;
 padding: 1em 0.5em;
 background-color:#f9fdff;
 border: 1px solid transparent;
 border-radius:10px;
 margin: 0 2em;

`
const Peso = styled.div`
display:flex;
 flex-direction: column;
padding: 1em 0.5em;
background-color:#f9fdff;
border: 1px solid transparent;
border-radius:10px;
margin: 0 2em;
width:70%;
`
const Sono = styled.div`
display:flex;
 flex-direction: column;
 padding: 1em 0.5em;
background-color:#f9fdff;
border: 1px solid transparent;
border-radius:10px;
margin: 0 2em;

`
const Paragrafodica = styled.p`
width: 80%;
`
const Titulodicas = styled.h2`
 padding: 0.5em 0;
`
const Imagemdicas =styled.img`
    width:10%
`
const Imagemdicasd = styled.img`
    width:8%
`
function Secaotrescaixa(){
    return(
        <CaixaDicas>
            <Comida>
                <Imagemdicas src={imagem2} alt="imagem de um boll de comida"/>
                <Titulodicas >Comendo de forma saudável.</Titulodicas >
                <Paragrafodica>Comidas saudáveis promovem o controle de peso,
                   prevenção de doenças, melhor digestão, imunidade,
                   e melhora no humor.
                </Paragrafodica>
            </Comida>
            <Peso>
                <Imagemdicasd src={imagem3} alt="imagem de um peso"/>
                <Titulodicas >Fazendo exercícios</Titulodicas >
                <Paragrafodica>O exercícios melhora o seu corpo, controla o peso, eleva o humor,
                   e reduz o risco de doenças, melhorando o seu bem-estar e aumentando
                   o seu tempo de vida..
                </Paragrafodica>
            </Peso>
            <Sono>
                <Imagemdicas src={imagem4} alt="imagem da lua com estrelas"/>
                <Titulodicas >Dormindo bem</Titulodicas>
                <Paragrafodica>Dormir ajuda na sua saúde mental, estabilidade emocional e bem-estar físico,
                 promovendo o equilíbrio do seu corpo.
                </Paragrafodica>
            </Sono>
        </CaixaDicas>

    )

}

export default  Secaotrescaixa