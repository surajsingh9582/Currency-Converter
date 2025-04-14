import { useEffect, useState } from "react"

const CurrencyConvert = (currency) => {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
            .then((data) => data.json())
            .then((data) => setData(data[currency]))
    },[currency]);
    return data;
}
export default CurrencyConvert