import { useState } from "react";


//created input box tag for using it in app.jsx -- created input box inside the box
function Inputbox({

    label,
    amount,            
    amountChange,       // when the value of the amount changes,it calls 
    currencies = [],   // whole currency object
    currencyChange, // when another currency is chosen, it calls 
    selectCurrency = "usd",

    className = ""

}) {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input

                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => {
                        amountChange(Number(e.target.value))
                    }}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => 
                        {
                            currencyChange(e.target.value)
                        }
                    }
                >
                    {/* loop function for all currencies */}
                    {currencies.map((rates) => (
                        <option key = {rates} value = {rates} >{rates}</option>
                    ))}

                </select>
            </div>
        </div>
    );

}

export default Inputbox;