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
      <h1>Message: {message}</h1>
      <button
        type="button"
        onClick={() => setPath("http://localhost:3001/message")}
      >Message</button>
      <button
        type="button"
        onClick={() => setPath("http://localhost:3001/api")}
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