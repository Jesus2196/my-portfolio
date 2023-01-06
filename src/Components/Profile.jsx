import { useState } from "react";

export default function Profile() {
    const [names, setNames] = useState(['Wanting to make cool stuff', 'Love for games/cars/anime', 'would be cool to travel to space', 'hopes to be able to play the piano']);
    const [currentName, setCurrentName] = useState(0);
  
    const getName = (index) => {
      return names[index];
    };
  
    return (
      <div>
        <button onClick={() => setCurrentName((currentName + 1) % names.length)}>Next Name</button>
        <p>{getName(currentName)}</p>
      </div>
    );
}

