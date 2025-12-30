
import Header from './MyComponents/Header'
import ToDos from './MyComponents/ToDos'
import Container from 'react-bootstrap/Container';

function App() {
  return (
      <Container fluid="md">
        <Header />  
        <ToDos />
      </Container>
    
  )
}

export default App
