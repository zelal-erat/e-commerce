import { AlignRight, ChevronDown, Facebook, Instagram, Mail, Phone, Search, ShoppingCart, Twitter, UserRound, Youtube } from "lucide-react";

export default function Header(){
    return (
        <div>
     <div className="hidden lg:flex items-center justify-between bg-[#252B42] space-x-6 text-white px-16 h-10">
     <div className="flex items-center space-x-2">
    <Phone />
    <span>(225) 555-0118</span>
  </div>

  <div className="flex items-center space-x-2 ">
    <Mail />
    <span>michelle.rivera@example.com</span>
  </div>

  <p>Follow Us and get a chance to win 80% off</p>

  <div className="flex items-center space-x-4">
    <p>Follow us:</p>
    <Instagram  />
    <Youtube  />
    <Facebook />
    <Twitter  />
  </div>
</div>

            <div>
                <div className="flex justify-around mt-4 lg:justify-between lg:px-16"> 
                    <h1 className="font-bold">Bandage</h1>
                    <div className="hidden lg:flex space-x-4 text-[#737373] font-medium">
                        <a href="">Home</a>
                        <div >
                        <a href="" className="flex">Shop <ChevronDown/> </a>
                        </div>
                        <a href="">About</a>
                        <a href="">Blog</a>
                        <a href="">Contact</a>
                        <a href="">Pages</a>
                        
                    </div>
                    <div className="flex gap-4">
                    <UserRound/>
                    <Search/>
                    <ShoppingCart/>
                    <AlignRight/>
                    </div>   
                </div>
                <div className="flex justify-around lg:hidden">
                    <nav>
                        <ul className="p-7.5 text-3xl text-center space-y-5 text-[#737373] font-medium">
                            <li >Home</li>
                            <li >Product</li>
                            <li >Pricing</li>
                            <li >Contact</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div><img src="https://images.placeholders.dev/350x150" alt="" /></div>
        </div>
    )


}
