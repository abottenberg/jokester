import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JokesList from './components/JokesList';
import './styles/_app.scss';
import logo from './images/JokesterSmile.svg';
import {useSpring, animated} from 'react-spring';

const App = () => {
  const [jokes, setJokes] = useState([]);
  // spring react state for laugh animation
  const [state, toggle] = useState(true);
  const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } });

  useEffect(() => {
    const getJokes = async () => {
      const results = await axios.get('https://official-joke-api.appspot.com/random_ten');
      setJokes(results.data);
    };
    getJokes();
  }, []);

  const logoLaugh = () => {
    toggle(!state)
  };

  return (
    <div >
      <div className="logo">
        <animated.div
          style={{
            transform: x
              .interpolate({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.95, 1.1, 0.95, 1.1, 0.95, 1.1, 1]
              })
              .interpolate(x => `scale(${x})`)
          }}>
            <img alt="Jokester logo" src={logo} style={{width: "172px"}}/>
        </animated.div>
      </div>
      <JokesList jokes={jokes} logoLaugh={logoLaugh} />
    </div>
  );

};

export default App;
