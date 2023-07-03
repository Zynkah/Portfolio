import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import Nav from "./Navbar";

const Header = () => {
  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });
  return (
    <header className="App-header">
      <div onClick={() => toggle(!state)}>
        <animated.h1
          style={{
            opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
            scale: x.to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            }),
          }}
        >
          Hello World!
        </animated.h1>
      </div>
      <Nav />
    </header>
  );
};
export default Header;
