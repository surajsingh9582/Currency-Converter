import { useState } from 'react';
import '../index.css'
import BoxCompo from './BoxCompo';
import CurrencyConvert from './useCurrencyData.js'

let InputBox=()=>{
    const [amt,setamt]=useState(0)
    const [from,setFrom]=useState("usd")
    const [to,setTo]=useState("inr")
    const [amoutConver,setAmount]=useState(0)

    const price=CurrencyConvert(from)
    const keyValue=Object.keys(price);

    const swap=()=>{
        setFrom(to);
        setTo(from);
        setAmount(amt);
        setamt(amoutConver)
        console.log("Swapped")
    }

    const convert=()=>{
        setAmount(amt*price[to])
    }
    return <>
    <form onSubmit={(e)=>{e.preventDefault();
        convert()
    }}>
    <div className="w-fit h-fit border bg-amber-200 rounded-xl p-10">
        <BoxCompo label="From" amount={amt} CurrencyOption={keyValue} onCurrencyChange={(currency)=>{setamt(amt);setFrom(currency);
        }} selectCurrency={from} onChangeAmount={(amount)=>{setamt(amount)}}></BoxCompo>
        <p className='cursor-pointer m-auto bg-blue-700 text-center rounded-xl text-2xl h-10 w-17 border' onClick={swap}>Swap</p>
        <BoxCompo 
        label="To" 
        amount={amoutConver} 
        CurrencyOption={keyValue} 
        onCurrencyChange={(currency)=>{setTo(currency);}} 
        selectCurrency={to} 
        amountDisable={true}>

        </BoxCompo>
        <button type='sumit' className='cursor-pointer border mt-2 p-2 bg-blue-700 rounded-xl w-50 block m-auto'>Convert</button>
    </div>
    </form>
    </>
}
export default InputBox;