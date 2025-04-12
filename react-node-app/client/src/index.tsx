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
      
      <img 
      src="https://demo-app-frontend-bobby1014.s3.us-east-2.amazonaws.com/media/h14pjp259s961.jpg"
      alt="CoolCat"
      />
      <img 
      src="https://demo-app-frontend-bobby1014.s3.us-east-2.amazonaws.com/media/1535763269540.jpg"
      alt="MeSmile"
      />

      
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