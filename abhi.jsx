import React, { useState } from 'react';
import './App.css';

function App() {
  const [isBackgroundDark, setBackgroundDark] = useState(false);

  const toggleBackgroundColor = () => {
    setBackgroundDark((prevIsBackgroundDark) => !prevIsBackgroundDark);
  };

  const backgroundColor = isBackgroundDark ? '#333' : '#fff';

  return (
    <div className="App" style={{ background: backgroundColor }}>
      <header className="App-header">
        <h1>Background Toggle App</h1>
        <button onClick={toggleBackgroundColor}>
          Toggle Background Color
        </button>
      </header>
    </div>
  );
}

export default App;
