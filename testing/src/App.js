import './App.css';

function App() {

  const throwknownError=()=>{
    console.log("this is working")
    throw new Error("this is the error from broken button");}
  return (
    <div className="App">
    <button onClick={()=>throwknownError()}>hello</button>
    </div>
  );
}

export default App;
