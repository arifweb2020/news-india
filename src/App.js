import './App.css';
import Main from './Main';

function App() {
  return (
    <div className="container mt-5">
     <h1 style={{textAlign:'center',marginBottom:'30px',fontWeight:'bold'}}>Welcome to <span style={{color:'green'}}>News</span> <span style={{color:'darkorange'}}>India</span></h1>
     <Main/>
    </div>
  );
}

export default App;
