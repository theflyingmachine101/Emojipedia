import React from "react";
import Emoji from "./Emoji.jsx";
import emojipedia from "./emojipedia.js"
function ShowEmoji(emojiIcon)
{
    return (<Emoji 
      key={emojiIcon.id} 
      emoji={emojiIcon.emoji}
     name={emojiIcon.name} 
     meaning={emojiIcon.meaning}/>
     );
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(ShowEmoji)}
      </dl>
    </div>
  );
}

export default App;
