import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import memories from './images/memories.png'
import { useState, useEffect } from 'react';
import 'animate.css';

function App() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="border rounded-lg p-4 my-6 flex justify-center items-center bg-white w-full">
        <h2 className="text-2xl text-blue-500">Memories</h2>
        <img src={memories} alt="memories" className="h-16 ml-4" />
      </div>
      <div className={`animate__animated ${showAnimation ? 'animate__scaleUp' : ''}`}>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-1">
              <Posts />
            </div>
            <div className="sm:col-span-1">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
