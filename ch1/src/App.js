import logo from './logo.svg';
import './App.css';

import ReactDOM, {unmountComponentAtNode} from 'react-dom';
import Counter from "./ch1-1/example_1";

function App() {

    const num=()=>{

        console.log(document.getElementById("root"));
        ReactDOM.unmountComponentAtNode(document.getElementById("root"));

    }



    const handlerClick=()=>{
        let x= document.getElementById("root");
        if(x.style.display ==="none"){
            x.style.display ="block";
        }else{
            x.style.display ="none";
        }
    }


    return (
    <div className="App">
      {/* example_1*/}
        <Counter/>
        <button onClick={num}>unmount</button>
    </div>


  );
}

export default App;
