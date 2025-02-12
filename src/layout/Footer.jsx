import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer(){
    return( 
    <div className=" gap-[40px] flex flex-col">
       <div className="bg-[#FAFAFA] pl-[30px] lg:flex justify-between px-16 h-20 items-center">
        <h1 className="font-bold">Bandage</h1>
        <div className="mt-[10px] text-sky-400 gap-[10px] flex">
            <Facebook/>
            <Instagram/>
            <Twitter/>
        </div>
       </div>
       <div className="pl-[30px] font-medium text-[#737373] space-y-4 lg:flex justify-between px-16">
        <div className="space-y-2">
            <h2 className="text-[#252B42] font-bold">Company Info</h2>
            <ul className="text-[#737373] space-y-2">
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
            </ul>
        </div>
        <div className="space-y-2">
            <h2 className="text-[#252B42] font-bold">Legal</h2>
            <ul className="space-y-2">
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
            </ul>
        </div>
        <div className="space-y-2">
            <h2 className="text-[#252B42] font-bold">Features</h2>
            <ul className="space-y-2">
                <li>Business Marketing</li>
                <li>User Analytic </li>
                <li>Live Chat</li>
                <li>Unlimited Sport</li>
            </ul>
        </div>
        <div className="space-y-2">
            <h2 className="text-[#252B42] font-bold">Resources </h2>
            <ul className="space-y-2">
                <li> IOS & Android</li>
                <li>Watch a demo</li>
                <li>Customers</li>
                <li>API</li>
            </ul>
        </div>
        
       </div>
       <span className="hidden lg:flex pl-[32px] text-[#737373] font-bold bg-[#FAFAFA] ">Made With Love By Finland All Right Reserved</span>
    </div>
    )
}