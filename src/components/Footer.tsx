import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';

export const Footer = () => {
    return (
        <div >
            <div className=" flex gap-5 w-auto justify-center ">
                <div className="flex w-[600px] h-[264px]">
                    <p className="text-4xl">Uber</p>
                    <p className=" text-4xl font-bold ">Eats</p>
                </div>
                <div className=" flex gap-5" >
                    <div className="w-[300px] h-[264px]">
                        <button className="hover:underline flex m-4 ">Get Help</button>
                        <button className="hover:underlin flex m-4 ">Buy gift cards</button>
                        <button className="hover:underline flex m-4 ">Add your restaurant</button>
                        <button className="hover:underline flex m-4">Sign up to deliver</button>
                        <button className="hover:underline flex m-4">Create a business account</button>
                        <button className="hover:underline flex m-4">Promotions</button>
                    </div>
                    <div className="w-[300px] h-[264px]">
                        <button className="hover:underline flex m-4">Restaurants near me</button>
                        <button className="hover:underline flex m-4" >View all cities</button>
                        <button className="hover:underline flex m-4">View all countries</button>
                        <button className="hover:underline flex m-4" >Pickup near me</button>
                        <button className="hover:underline flex m-4">About Uber Eats</button>
                        <button className="hover:underline flex m-4">Shop groceries</button>
                    </div>
                </div>
            </div>

            <div className=" flex w-auto justify-center pt-20 border-t-2 ">
                <div className=" flex gap-5 w-auto justify-center ">
                   <button> <Facebook /> </button>
                   <button> <Twitter /></button>
                   <button>  <Instagram /></button>
                </div>
                <div className="w-[527px] h-[36px]"></div>
                <div className=" flex  ">
                    <button className="hover:underline pr-4">Privacy Policy</button>
                    <button className="hover:underline pl-4 " >Terms</button>
                    <button className="hover:underline pl-8 ">Pricing</button>
                    <button className="hover:underline pl-8 " >Do not sell or share my personal information</button>
                </div>
            </div>
                <div className="flex w-auto justify-center">
                    <div className="w-[362px] h-[20px]"></div>
                    <div className="flex">
                        <p>This site is protected by reCAPTCHA and the Google </p>
                        <button className="hover:underline pl-1">Privacy Policy</button>
                        <p>end</p>
                        <button className="hover:underline pl-1">Terms of Service</button>
                        <p>apple</p>

                        <p className="pl-8">© 2024  Uber Technologies Inc.</p>
                    </div>
                </div>

        </div>

    )
}
