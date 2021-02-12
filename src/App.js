import logo from './logo.svg';
import GoogleLogin from "./components/Googlelogin"
import FaceBookLogin from "./components/facebooklogin"
import './App.css';
import facebooklogin from './components/facebooklogin';

function App() {
  return (
    <div className="App">
    <div style={{display:"flex", width:"100%"}}>
    <div style={{width:"40%"}}>
    <GoogleLogin />
    </div>
    <div style={{width:"40%"}}>
    <FaceBookLogin />
    </div>
    
    </div>
     
    </div>
  );
}

export default App;
