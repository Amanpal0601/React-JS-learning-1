import {useId} from "react";
function InputBox({
   
    label,
    amount,
    onAmountchange, // yeh fucntion hoga 
    onCurrencychange, // yeh bhi function hoga 
    currencyOptions =[], // yeh saare option voh hai joh hamko currency waale meh click karke milega 
    selectCurrency ="usd", // yeh hampe list toh hai par usme se sleect kon si karni hai voh yeh voh select karga 
    currencyDisable = false,
    amaountDisable = false,
    className = "",

    // yeh saare input box meh cahnge hone waalu cheez hai becuse yeh sab ham user yeh imput leh rahe hai issi liye inke variable bana liye hai taaki baad meh hooks ka use kar ke ui meh inn value ko cahnge kar sake 

}) {
    const amountid = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>  {/* yeh joh ccs hai yeh backticks meh likha hai becuse yeh change ho skta hai because ham classname ki css leh rahe hai ho kya pata nam yeh cahnge kar deh issi liye backtoick ko update this css */}
            
            <div className="w-1/2">
                <label htmlFor={amount}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountid}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amaountDisable}
                    /* yeh joh input hai isme koi value bhi toh hogi becuse imput feild hai value toh honi hi hai */
                    value = {amountid}
                    onChange={(e)=> onAmountchange && onAmountchange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value = {selectCurrency}
                    onChange = {(e)=>  onCurrencychange &&
                        onCurrencychange(e.target.value)
                    }
                    disabled = {currencyDisable}
                >
                    {/* yeh slect feild hai uske anadar option feild hai toh options meh toh pakka hai loop lagenge joh currency otioons laake dega  */}

                    {currencyOptions.map((currency)=>(
                        
                        <option key={currency} value= {currency}>
                            {currency}
                        </option>
                    ))}
                        
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;