

function BoxCompo({ label, amount, onChangeAmount, onCurrencyChange, CurrencyOption = [], selectCurrency, amountDisable = false, currencyDisable = false }) {   
    return <>
        <div className='bg-black m-auto rounded-xl w-160 h-30 flex justify-between '>
            <div className='flex flex-col justify-between mx-5 my-3'>
                <label className='text-orange-200' htmlFor='inpi'>{label}</label>
                <input type='number' className='p-1 w-80 text-white text-2xl rounded-xl' placeholder="0" value={amount} id="inpi" disabled={amountDisable} onChange={(e) => 
                    onChangeAmount && onChangeAmount(Number(e.target.value))
                }></input>
            </div>
            <div className='flex flex-col justify-between mx-5 my-3'>
                <label className='text-orange-200' htmlFor='chel'>Current Type</label>
                <select className='bg-white p-1 rounded-xl border-none' name="che" id="chel" value={selectCurrency} onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}>
                    {CurrencyOption.map((eve)=>(
                        <option value={eve} key={eve}>{eve}</option>
                    ))}
                </select>
            </div>
        </div>
    </>
}
export default BoxCompo;