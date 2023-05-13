import Secaoimagemresultado from '../secao1'
import styled from 'styled-components'

 const Containermain = styled.div`
     display:flex;
    
 `
 function Caixacorpo1 (){
    return(
        <Containermain >
            <Secaoimagemresultado/>
        </Containermain>
    )
 }

 export default  Caixacorpo1