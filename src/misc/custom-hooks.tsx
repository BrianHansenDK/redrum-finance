import { useEffect, useState } from "react";

export const modalContext = () => {
    const [isVisible, setVisible] = useState(false)
    const openModal = () => {
        setVisible(true)
    }
    const closeModal = () => {
        setVisible(false)
    }
}

export function toFixedIfNecessary(value: any, dp: any) {
    return +parseFloat(value).toFixed(dp);
}

export function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export const useMediaQuery = (query: any) => {
  const [matches, setMatches] = useState<any>(
      () => window.matchMedia(query).matches
  );

  useEffect(() => {
      const queryList = window.matchMedia(query);
      setMatches(queryList.matches);

      const listener = (evt: any) => setMatches(evt.matches);

      queryList.addListener(listener);
      return () => queryList.removeListener(listener);
  }, [query]);

  return matches;
};
