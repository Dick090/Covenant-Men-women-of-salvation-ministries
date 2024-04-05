import React, { useEffect, useState } from 'react';

function ScrollComponent() {
  const [showScrollListener, setShowScrollListener] = useState(false);
  const [hieht, sethieht] = useState()

  useEffect(() => {
    const handleScroll = () => {
      // Your scroll event logic goes here
      console.log('Scrolled');
    };

    if (showScrollListener) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showScrollListener]);

  useEffect(() => {
    const handleScrollPosition = () => {
      sethieht(window.scrollY)//115
      if (window.scrollY >= 200) { // Adjust the scroll position threshold as needed
        setShowScrollListener(true);
         
      } else {
        setShowScrollListener(false);
      }
    };

    window.addEventListener('scroll', handleScrollPosition);

    return () => {
      window.removeEventListener('scroll', handleScrollPosition);
    };
  }, []);

  return (
    <div>
      {/* Your component content */}
      <p className='chrujsjjs'>dhdhdhd
      <p className='seee'>Hight is = {hieht}</p>
      </p>
    </div>
  );
}

export default ScrollComponent;
