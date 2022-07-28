// import logo from './logo.svg';
import './App.css';
import{useSelector, useDispatch} from "react-redux"
import {AddUser,RemoveUser} from "./actions/index"
import ChildCom from './ChildCom';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state)=> state.changeUserNumber.counter);
 return(
<>
<div className="container">
  <h1><ChildCom header="Add user/ Remove user" /> </h1>
  <h4> using react and redux</h4>
  <div className="quantity">
    <a className="quantity__minus" title="Decrement"
     onClick={()=>dispatch(RemoveUser())}
    ><button>  - </button></a>
    <input name="quantity" type="text" className="quantity__input" value={count} onChange={AddUser}/>
    <a className="quantity__plus" title="Increment"
    onClick={()=>dispatch(AddUser())}
    ><button> + </button></a>
  </div>
</div>

</>
 )

}

export default App;
