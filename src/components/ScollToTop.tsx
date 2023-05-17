// src/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";
import { useMediaQuery } from "../misc/custom-hooks";

const ScrollToTop = ({children}: {children: any}) => {
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 1100px)')
  useEffect(() => {
    if (location.pathname.includes('extras')) {
      window.scrollTo(0, isMobile ? 1101 : 750);
    }
    else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return <>{children}</>
};

export default ScrollToTop;
