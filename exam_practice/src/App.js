import './App.css';
import Function_Component from './Component/Function_Component';
import Class_Component from './Component/Class_Component';
import Use_Satate from './Component/Use_Satate';
import Conditional_Rendering from './Component/Conditional_Rendering';
import Input from './Component/Input';
import Fetch_Api from './Component/Fetch_Api';


function App() {
  return (
   <>
   <div className='mt-3'>
    <Function_Component name= "Function Componet" color="blue"/>
    <Class_Component name = "Class Componet"/>
    <Use_Satate/>
    <Conditional_Rendering/>
    <Input/>
    <Fetch_Api/>
    </div>
   </>
  );
}

export default App;
