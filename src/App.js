import './App.css';
import axios from "axios";
import {useState} from "react";
function App() {

  const [author,setauthor] = useState("Gandhi");
  const [quote,setquote] = useState("Be the change you wish to see in the world  ");

  console.log("author",author);
  console.log("quotes",quote);

  const handleClick = () =>{

    axios.get("https://api.quotable.io/random").then((res)=>{
      setauthor(res.data.author);
      setquote(res.data.content);
    })

  };

  return (
    <div className="quote-box">
      <div className="quote-text">
        <p> {quote} </p>
      </div>
      <div className="quote-author">
        <h3> {author} </h3>
      </div>

      <div className="quote-button">
        <button
          onClick={handleClick}
        >
          New Quote</button>
      </div>
    </div>

  );
}

export default App;
