import {useState, useEffect} from 'React'

async function useCurrencyInfo(currency) {
const [data, setData] = useState({})
useEffect(() => {
await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json')

await((res) => res.json())
await((res) => setData(res [currency]))
console.log(data);

}, [currency])

console.log(data);

return data

}

export default useCurrencyInfo;