import Titulo from "../titulo";
import Inputs from "../input";
import styled from 'styled-components'

const Containerheader = styled.header`
  display:flex;
  justify-content:center;
  padding: 1em 0 ;
  align-items:center;
`

function Header(){
    return (
      <Containerheader>
        <Titulo/>
        <Inputs/>
      </Containerheader>    

    )
}

export default Header;