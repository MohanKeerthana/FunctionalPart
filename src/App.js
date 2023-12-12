import logo from './logo.svg';
import './App.css';
import UseState from './component/hooks/UseState/useState1';
import UseState2 from './component/hooks/UseState/useState2';
import Uncontrolled from './component/forms/unControlledForm';
import Controlled from './component/forms/ControlledForm';
import EmailValidate from './component/forms/emailValidation';
import Registration from './component/forms/registrationForm';
import ControlledComponent from './component/forms/Controlled';


function App() {
  return (
    <>
    {/* <UseState/>
    <UseState2/> */}
    {/* <Uncontrolled/> */}
     {/* <EmailValidate/> */}
     {/* <Registration/> */}
     <ControlledComponent/>
    </>
  );
}

export default App;
