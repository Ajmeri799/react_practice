import { useEffect, useStete } from "react";

function useCurrencyInfo(currency) {
  useEffect(() => {
    const [data, setData] = useStete({});
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));

    console.log(data);
  }, [currency]);
  return data;
}
export default useCurrencyInfo;
