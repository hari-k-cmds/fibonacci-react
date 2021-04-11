import './App.css';
import React from 'react';
import FindCompositeOrPrimeStyle from './Components/FindCompositeOrPrimeStyle'
import { fibonacci, quicksort } from './Components/utils';
import Paginator from './Components/Paginator'

function App() {
  const messgeForUser = 'Please enter a positive number between 1 to 2000';
  const [positiveNumber, setPositiveNumber] = React.useState(1);
  const [message, setMessage] = React.useState([1]);
  const [start, setStart] = React.useState(0);

  const handleChange = (val) => {
    const re = /^0*([1-9]{1}|[0-9]{2,3}|1[0-9]{3}|20[0][0])$/;
    if (val === "" || re.test(val)) {
      setMessage(fibonacci(val))
      setPositiveNumber(val);
    }
  }

  return (

    <div className="App">
      <div className="messgeForUser">{messgeForUser}</div>
      <input type="text" pattern="[0-9]*"
        placeholder="Enter number between 1 to 2000"
        maxLength="4"
        autoFocus
        required
        role='form'
        className="input-positiveNumber"
        onInput={(event) => handleChange(event.target.value)} value={positiveNumber} />
      <div> <button onClick={() => { setMessage(quicksort(message)) }}>Quick sort</button></div>
      
      {message.slice(start, start + 10).map((data, index) => {
        return <div key={index}><span >{data}</span ><FindCompositeOrPrimeStyle num={data} /> </div>})}

      {message.length > 10 ? <Paginator disabledPrev={start < 10} disabledNext={message.length - 10 < start} setActionData={(no) => setStart(start + no)} /> : null}
    </div>

  );
}

export default App;
