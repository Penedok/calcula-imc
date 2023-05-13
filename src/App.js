

import styled from 'styled-components'
import Titulo from './componentes/titulo';
import Frase from './componentes/frase';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #BFDAE6 0%, #FCF0DD 50%, #FACF9D 100%)

`
const Header = styled.header`
  display:flex;
  justify-content:space-around;
  padding: 1em;

`

function App() {
  return (
    < AppContainer>
      <Header>
        <Titulo/>
        <Frase/>
      </Header>
    </AppContainer>
  );
}

export default App;
