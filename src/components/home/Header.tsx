import type { RefObject } from "react";
import { Link } from "react-router";

type HeaderProps={
    searchRef:RefObject<HTMLInputElement|null>;
}

export default function Header({searchRef}:HeaderProps){
    return(
        <>
        <header className="bg-[#ff5200]">
            <section className="flex justify-between items-center container px-20 py-5">
                <article>
                    <a href="#">
                        <img className="w-40 h-12"
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" 
                        alt="swiggy logo" />
                    </a>
                </article>

                <article className="flex gap-10 text-white font-bold">
                    <nav className="flex items-center gap-10">
                        <a href="#">Swiggy Corporate</a>
                        <a href="#">Partner with us</a>
                    </nav>
                    <div className="flex gap-10">
                        <button className="border px-7 py-3 rounded-2xl">Get the App</button>
                        <Link to='/'>
                            <button className="px-10 py-3 rounded-2xl bg-black hover:cursor-pointer">Sign in</button>
                        </Link>
                    </div>
                </article>
            </section>
            <section>
                <article className="flex items-center justify-center text-center text-5xl py-16 font-bold text-white">
                    <h1>Order food & groceries. Discover <br /> best restaurants. Swiggy it!</h1>
                </article>
                <article className="flex gap-5 items-center justify-center text-center pb-5 relative ">

                    <img className="absolute left-0 w-60 h-112"
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" 
                    alt="vegetable-img" />

                    <img className="absolute right-0 w-60 h-112"
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" 
                    alt="food-img" />

                    <div className="bg-white w-80 rounded-2xl">
                        <input type="text" placeholder="Enter your delivery location" className="w-full p-5 rounded-2xl"></input>
                    </div>
                    <div className="bg-white w-125 rounded-2xl">
                        <input type="text" placeholder="Enter your delivery location" className="w-full p-5 rounded-2xl"
                        ref={searchRef}
                        ></input>
                    </div>
                </article>
            </section>
            <section>
                <div className="flex justify-center">
                    <Link to='/restaurant'>
                        <img  className="w-99 h-91" 
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" 
                        alt="order food" />
                    </Link>
                    <Link to='/restaurant'>
                        <img  className="w-99 h-91" 
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" 
                        alt="order food" />
                    </Link>
                    <Link to='/restaurant'>
                        <img  className="w-99 h-91" 
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" 
                        alt="order food" />
                    </Link>
                </div>
            </section>
        </header>
        </>
    )
}