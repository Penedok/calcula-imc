import styled from 'styled-components'
import imagem1 from '../imagens/Homem.png';

const CaixaSecao = styled.div`
    display:flex;
    padding:0 2em;
`
const Caixaimagem =styled.div`
   display:flex;
   justify-content: center;
   width:50%;
    
`
const Imagemhomem = styled.img`
    width:65%;
`
const Caixatexto =styled.div`
    display:flex;
    flex-direction: column;
    width:50%;
    flex-wrap: wrap;
   
`
const Textosecao = styled.h2`
    display:flex;
    padding: 2.2em 0 0 0;
    font-size: 32px;
`
const Paragrafosecao = styled.p`
display:flex;
margin:0 3.5em 0 0;
padding: 1em 0;
font-size: 20px;
color: #777d8b;
`

function Secaoimagemresultado(){
    return(
        <CaixaSecao>
            <Caixaimagem>
              <Imagemhomem src={imagem1} className='Imagemhomem' alt='um homem comendo sanduiche' />
            </Caixaimagem>
            <Caixatexto>
                <Textosecao>O que o resultado do seu IMC significa</Textosecao>
                <Paragrafosecao>Um IMC entre 18,5 a 24,9 é considerado um peso saudável.
                Manter seu peso correto pode diminuir as chances de você ter problemas de saúde como: obesidade e diabetes tipo 2.
                Tenha como objetivo ter uma dietaa nutritiva e saudável com redução de gordura e açúcar, incorporando frutas e vegetais.
                Faça também atividades físicas regulares, durante 30min, 5 dias na semana.</Paragrafosecao>
               
            </Caixatexto>
        </CaixaSecao>
        
    )
}

export default Secaoimagemresultado