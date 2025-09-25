import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {InputBox} from './components'
// apna hook bhi call kar loo becuse joh fucbtion banye hai joh 
// currencyOption ki array banai hai isme sabme value bhi toh daalni hai 
// fucntiion ka kaam bhi toh decide karna hai
import useCurrencyInfo from './hooks/useCurrencyinfo'




function App() {
  const [amount,setAmount] = useState(0);
  const [from,setFrom] = useState("usd");
  const [to,setTo] = useState("inr");
  const [convertedAmount,setConvertedAmount] = useState(0);

  // ab ham apna custom hook use karnege
  const currencyInfo = useCurrencyInfo(from);
  // from ki value change hogi usii hiasab se info cahnge hogi 
  // ab iss currency info pe saari api ki info aa gaii 
  // par we want only key of that object of Api for currencyOption array 

  const options = Object.keys(currencyInfo)

  const swap =()=>{
    setFrom (to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }
  // yeh main cheez aake display hogi 
  const convert=()=>{
  setConvertedAmount(amount * currencyInfo[to]);
  }
  
 return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                          // form jab bhi submit hota toh voh kahi jata hai ham nahi cahte ki voh jaaye iss liye prevent default 
                            e.preventDefault();
                            // form submit hone par yeh hoo
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label={from}
                                amount={amount}
                                currencyOptions={options}
                                onCurrencychange = {(currency)=> setFrom(amount)}
                                selectCurrency= {from}
                                onAmountchange = {(amount)=> setAmount(amount)}
                               
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              // sawp ka button chalane ke liye 

                              onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label={to}
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencychange = {(currency)=> setTo(currency)}
                                selectCurrency= {to}
                                amaountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from} to {to}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
