import styled from 'styled-components'
import Header from './componentes/Header';
import Caixacorpo1 from './componentes/main';
import CaixaDicas from './componentes/Tresdicas';
import Caixalimitacoes from './componentes/limitacoes';

const AppContainer = styled.div`
  width: 100vw;

  background: linear-gradient(180deg, #BFDAE6 0%, #FCF0DD 50%, #FACF9D 100%);
  font-family: sans-serif;
`
function App() {
  return (
    <AppContainer>
      <Header/>
      <Caixacorpo1/>
      <CaixaDicas/>
      <Caixalimitacoes/>
    </AppContainer>
  );
}

export default App;
