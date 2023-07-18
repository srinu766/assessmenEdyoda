import Book from "../asserts/img/book.png"
import Timer from "../asserts/img/timer.png"
import Live from "../asserts/img/live.png"
import Edu from "../asserts/img/edu.png"
import NoAdd from "../asserts/img/noAdds.png"
import Timer2 from "../asserts/img/timer2.png"
import razarPay from "../asserts/img/Razorpay.png"

const Body = ()=>{
    return(
        <div className="bg-gradient-to-r from-black via-slate-900 to-slate-900 h-[630px]">
        <div className="flex">
        <div className="ml-24">
        <h1 className="text-3xl font-bold text-white pt-16 ">Access curated courses worth <br/> ₹<span className=" line-through">18,500</span> at just <span className="text-blue-500">₹ 99</span> per year!</h1>
        <div className="mt-10">
        <div className="flex">
        <img src={Book} className="w-8 h-8"/>
        <h1 className="text-white ml-7 text-xl"><span className="text-blue-500 text-xl">100+</span> Job relevant courses</h1>
        </div>
        <div className="flex mt-6">
        <img src={Timer} className="w-8 h-8"/>
        <h1 className="text-white ml-7 text-xl"><span className="text-blue-500 text-xl">20,000+</span> Hours of content</h1>
        </div>

        <div className="flex mt-6">
        <img src={Live} className="w-8 h-8"/>
        <h1 className="text-white ml-7 text-xl"><span className="text-blue-500 text-xl">Exclusive</span>  webnar access</h1>
        </div>
        <div className="flex mt-6">
        <img src={Edu} className="w-8 h-8"/>
        <h1 className="text-white ml-7 text-xl"> Scholarship worth <span className="text-blue-500 text-xl" >$94,500</span></h1>
        </div>
        <div className="flex mt-6">
        <img src={NoAdd} className="w-8 h-8"/>
        <h1 className="text-white ml-7 text-xl"><span className="text-blue-500">Ad Free</span>  learning experience</h1>
        </div>
        </div>
        </div>
        
        <div className="ml-80 mt-12 bg-white  h-[570px] w-[370px] rounded-md ">
        <div >
            <form >
            <div className="mt-8">
                <button className="ml-24 bg-blue-600 px-2 rounded-full text-white">1</button><button className="ml-36 bg-blue-600 px-2 rounded-full text-white">2</button>
                <h1 className="mt-5 ml-20 font-bold">Select your subcription plan</h1>
            <div className="mt-5">

            <div className="border border-black mx-4 rounded-md ">
                <input type="radio" name="radioBtn" id="expired" className="ml-2 my-3"/>
                <label htmlFor="" className="ml-2 ">12 Months Subscription</label><br/>
            </div>
            <div className="border border-black mx-4 rounded-md mt-2 ">
                <input type="radio" name="radioBtn" id="recommended" className="ml-2 my-3"/>
                <label htmlFor="" className="ml-2">12 Months Subscription</label><br/>
            </div>
            <div className="border border-black mx-4 rounded-md mt-2 ">
                <input type="radio" name="radioBtn" id="normal" className="ml-2 my-3"/>
                <label htmlFor="" className="ml-2 ">6 Months Subscription</label><br/>
            </div>
            <div className="border border-black mx-4 rounded-md mt-2 ">
                <input type="radio" name="radioBtn" id="normal" className="ml-2 my-3"/>
                <label htmlFor="" className="ml-2 ">3 Months Subscription</label><br/>
            </div>   
            <hr className="bg-black mt-5 mx-4 h-[1px]"/>
            <h1 className="ml-9 mt-2">Subscription Fee          & 18,500</h1>
            <div className="mx-4 border-2 border-orange-700 bg-red-100 rounded-md px-5">
                <h1 className="text-orange-700 font-bold" >Limited time    -& 18,401</h1>
                <div className="flex">
                <img src={Timer2} className="w-5 h-5 text-orange-700"/>
                <h1 className="ml-2 text-orange-700">Offer validate 25th March 2023</h1>
                </div>
            </div>
            <h1 className="ml-8 mt-1">Total (Incl. of 18% GST)    ₹149</h1>
            <div className="mt-5 ml-4">
                <button className="border-2 border-red-600 text-red-600 font-bold py-2 px-12">CANCEL</button>
                <button className="border-2 border-green-900 bg-green-900 text-white font-bold ml-2 py-2 px-4">PROCEED TO PAY</button>
            </div>
            <img src={razarPay}  className="py-6 ml-4"/>
            </div>   
            </div>
            </form>
            </div>
        </div>
        </div>
        </div>
       
    )
}
export default Body;