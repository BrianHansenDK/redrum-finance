// src/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = ({children}: {children: any}) => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes('extras')) {
      window.scrollTo(0, 675);
    }
    else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return <>{children}</>
};

export default ScrollToTop;
