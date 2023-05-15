import styled from 'styled-components'
import Header from './componentes/Header';
import Caixacorpo1 from './componentes/main';
import CaixaDicas from './componentes/Tresdicas';
import Caixalimitacoes from './componentes/limitacoes';
import CaixaIdadeMusculo from './componentes/anivermusculo';
import CaixaGravidez from './componentes/gravidezDesen';

const AppContainer = styled.div`
  width: 100vw;
  
  background: linear-gradient(#FFF, #DBEAEB );
  font-family: sans-serif;
`




function App() {
  return (
    <AppContainer>
      <Header/>
      <Caixacorpo1/>
      <CaixaDicas/>
      <Caixalimitacoes/>
      <CaixaIdadeMusculo/>
      <CaixaGravidez/>
    </AppContainer>
  );
}

export default App;
