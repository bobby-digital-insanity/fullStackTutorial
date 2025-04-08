import "./App.css";
import * as React from 'react';


function App() {
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    fetch("http://localhost:3001/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message)
    ); 
  }, []);

 /*  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "option1"
    }; */

  return (
    message
  );
}

export default App
