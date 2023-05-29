import React from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';

function App() {
  return (
    <>
      {/* <Greet name="Kevin" heroName="Captain America">
        <p>This is children props.</p>
      </Greet>
      <Greet name="Bryce" heroName="Spider-Man">
        <button>Action</button>
      </Greet>
      <Greet name="Ryan" heroName="Black Panther"></Greet>
      <Welcome name="Kevin" heroName="Captain America">
        <p>This is children props inside class component.</p>
      </Welcome>
      <Welcome name="Bryce" heroName="Spider-Man" />
      <Welcome name="Ryan" heroName="Black Panther" /> */}
      <Message />
    </>
  )
}

export default App;
