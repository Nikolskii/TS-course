import Controls from './components/Controls';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Controls />
      </Main>
    </>
  );
};

export default App;
