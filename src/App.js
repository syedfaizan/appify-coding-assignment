import './App.css';
import Form from './components/Form';
import formData from './data/formData.json';

function App() {
  return (
    <div className="App">
      <header className="App-content">
        <Form fromJSON={formData}></Form>
      </header>
    </div>
  );
}

export default App;
