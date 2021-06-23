import React, {useEffect} from 'react';

import { ProgressBar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

function alertt() {
  const name = prompt("What is your name?", "");
alert(name)

}
// useEffect(() => {
//   const name = prompt("What is your name?", "");
//   alert(name);
// },[]);


  return (
<div>
 {alertt()}
<h1>
hi from dev branch
</h1>
</div>

   
  );
}

export default App;
