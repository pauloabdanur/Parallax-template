import { AppContainer } from './App.styles';
import Content from './pages/Content';
import Home from './pages/Home';

const App = () => {
  return (
    <AppContainer>
      <Home />
      <Content />
    </AppContainer>
  );
};

export default App;
