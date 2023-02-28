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
export function numberWithCommasAsString(x: string) {
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

export const MakeDateGerman = (date: Date) => {
  const dateList = date.toLocaleDateString().split('/')
  return `${dateList[1]}/${parseInt(dateList[0]) < 10 ? `0${dateList[0]}` : dateList[0]}-${dateList[2]}`
}

export const appReadyNumber = (x: number) => {
  return numberWithCommasAsString(toFixedIfNecessary(x , 2).toString().replace('.', ','))
}

export function groupBy<T>(arr: T[], fn: (item: T) => any) {
    return arr.reduce<Record<string, T[]>>((prev, curr) => {
        const groupKey = fn(curr);
        const group = prev[groupKey] || [];
        group.push(curr);
        return { ...prev, [groupKey]: group };
    }, {});
}
