import React from 'react';
import '../styles/_app.scss';
import logo from '../images/JokesterSmile.svg';
import frownLogo from '../images/JokesterFrown.svg';
import {useSpring, useTransition, animated} from 'react-spring';



const Logo = ({ logoLaugh, logoWobble, logoSigh, index }) => {
  // logo animation
  const { x } = useSpring({
    from: { x: 0 },
    x: logoWobble ? 1 : 0,
    config: { duration: 1000 }
  });

  const logos = [
    ({ style }) => <animated.div
          style={{
            transform: x
              .interpolate({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.95, 1.1, 0.95, 1.1, 0.95, 1.1, 1]
              })
              .interpolate(x => `scale(${x})`)
          }}>
            <img alt="Jokester logo" src={logo} style={{width: "172px"}}/>
        </animated.div>,
    ({ style }) => <animated.div
          style={{
            transform: x
              .interpolate({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.95, 0.9, 0.85, 0.8, 0.9, 0.95, 1]
              })
              .interpolate(x => `scale(${x})`),
          }}>
            <img alt="Jokester logo" src={frownLogo} style={{width: "172px"}}/>
        </animated.div>
  ]

  // switch between smile and frown
  const transitions = useTransition(index, p => p, {
    from: { position: 'absolute', opacity: 0 },
    leave: { opacity: 0 }
  })


  return (
    <div className="logo">
      {transitions.map(({ item, props, key }) => {
        const Logo = logos[item]
        return <Logo key={key} style={props} />
      })}
    </div>
  );

};

export default Logo;


