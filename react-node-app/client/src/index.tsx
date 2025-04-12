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
      <h1>HTTPS on browser -{'>'} HTTPS ALB -{'>'} (HTTPS Target Group?) -{'>'} HTTP to EC2 Instance</h1>
      <h1>All while using another SSL Cert for bvogs.com (main domain), and api.bvogs.com (ALB custom domain)</h1>
      <h1>Message: {message}</h1>
      <button
        type="button"
        onClick={() => {
          console.log('click action')
          setPath("https://api.bvogs.com/message")
        }}
      >Message</button>
      <button
        type="button"
        onClick={() => setPath("https://api.bvogs.com/api")}
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