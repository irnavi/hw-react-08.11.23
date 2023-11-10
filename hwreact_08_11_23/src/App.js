
import './App.css';
import User from './components/User';

function App() {

let age = 25;
let name = 'Alice'
let adult = true
const data = {
      name: 'Tom',
      age: 30
    
}

  return (
    <div >
     <User age={age} name={name} adult={adult} data={data}/>
    </div>
  );
}

export default App;
