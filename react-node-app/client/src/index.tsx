import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";

<script type="text/javascript" src="https://js-cdn.dynatracelabs.com/jstag/145e049b9b1/bf05671csb/d7cd2a23085a52ec_complete.js" crossOrigin="anonymous"></script>

function App() {
  const [path, setPath] = useState("");
  const [message, setMessage] = useState("");
  const images = [
    {
       src: "https://demo-app-frontend-bobby1014.s3.us-east-2.amazonaws.com/media/h14pjp259s961.jpg",
       width: 540,
       height: 719,
       isSelected: true,
       caption: "a cool cat",
    },
    {
       src: "https://demo-app-frontend-bobby1014.s3.us-east-2.amazonaws.com/media/1535763269540.jpg",
       width: 540,
       height: 339,
       tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" },
       ],
    },
    {
       src: "https://demo-app-frontend-bobby1014.s3.us-east-2.amazonaws.com/media/IMG_1656.jpg",
       width: 540,
       height: 720,
    },
 ];

  React.useEffect(() => {
      fetch(path)
        .then((res) => res.json())
        .then((data) => setMessage(data.message)
      ); 
    });


 

  return (
    <>
      <h1>Path 1: {path}</h1>
      <Gallery images={images} />
      
     <img 
      src="https://demo-app-frontend-bobby1014.s3.us-east-2.amazonaws.com/media/IMG_1656.jpg"
      alt="CoolCat"
      width='540'
      height='720'
      />
     {/*

      <img 
      src="https://demo-app-frontend-bobby1014.s3.us-east-2.amazonaws.com/media/1535763269540.jpg"
      alt="MeSmile"
      />
      */}

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