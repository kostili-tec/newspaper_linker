import styled from 'styled-components'
import { GetButton } from './components/GetButton/GetButton';

const MainContainer = styled.div`
  width: 200px;
  height: 100px;
  background: #00000050;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


function App() {

  return (
    <>
      <MainContainer>
        <GetButton />
      </MainContainer>
    </>
  )
}

export default App
