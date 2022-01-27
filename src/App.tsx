import React, {useState} from 'react';
import './App.css';
import {ReactSortable} from "react-sortablejs";

class Demo {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

function App() {
  const [demos, setDemos] = useState<Demo[]>([
    new Demo('one', 1),
    new Demo('two', 2),
    new Demo('three', 3),
  ]);

  function classDiv(demo: Demo) {
    return <div style={{background: 'red'}} key={demo.id}>{demo.name}</div>;
  }

  function nonClassDiv(demo: Demo) {
    return <div style={{background: 'blue'}} key={demo.id}>{demo.name}</div>;
  }

  return (
    <div className="App">
      <ReactSortable
        list={demos}
        setList={setDemos}
      >
        {demos.map((demo: Demo | any) => {
          console.log(demo);
          return demo instanceof Demo ? classDiv(demo) : nonClassDiv(demo)
        })}
      </ReactSortable>
    </div>
  );
}

export default App;
