import React, { useState } from "react";

function App() {
  const [path, setPath] = useState("");
  const [message, setMessage] = useState("");

  React.useEffect(() => {
      fetch(path)
        .then((res) => res.json())
        .then((data) => setMessage(data.message)
      ); 
    });

  return (
    <>
      <h1>Path: {path}</h1>
      <h1>Testing 1 Testing</h1>
      <h1>Message: {message}</h1>
      <button
        type="button"
        onClick={() => {
          console.log('click action')
          setPath("https://3.133.125.57/message")
        }}
      >Message</button>
      <button
        type="button"
        onClick={() => setPath("https://3.133.125.57/api")}
      >Api</button>
      <button
        type="button"
        onClick={() => setPath("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setPath("green")}
      >Green</button>
    </>
  );
}


export default App