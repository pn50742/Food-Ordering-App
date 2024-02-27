import React, { useEffect, useState, useRef } from "react";

const SubscribeArea = () => {
  const [showMessage, setShowMessage] = useState(false);
  const subscribeButtonRef = useRef(null);

  useEffect(() => {
    // Event listener to handle clicks outside the "subscribe" button
    const handleClickOutside = (event) => {
      if (
        subscribeButtonRef.current &&
        !subscribeButtonRef.current.contains(event.target)
      ) {
        setShowMessage(true);
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button ref={subscribeButtonRef}>Subscribe</button>
      {showMessage && <p>Click on the subscribe button to get access.</p>}
    </div>
  );
};

const Excercise = () => {
  const [renderCount, setRenderCount] = useState(0);

  //   ========hello world will show on every render except first render===
  //useEffect(() => {
  //     // This effect will run after every render (including the initial render)
  //     if (renderCount > 0) {
  //       // Perform the action you want to take on every render except the first render
  //       console.log("Hello World");
  //     }
  //   }, [renderCount]); // Run the effect whenever renderCount changes

  //   // Increment the render count on every render
  //   useEffect(() => {
  //     setRenderCount((prevCount) => prevCount + 1);
  //   });

  return (
    <div>
      <SubscribeArea />
    </div>
  );
};

export default Excercise;
