import { BrowserRouter } from 'react-router-dom'
import Navbar from '../components/navbar'
import Rotas from './rotas'

import 'bootswatch/dist/yeti/bootstrap.css'
import '../main/custom.css'

function App() {
  return (
    <BrowserRouter>
      <div className='container'> 
        <Rotas />
        <Navbar />        
      </div>
    </BrowserRouter>
  );
}

export default App
