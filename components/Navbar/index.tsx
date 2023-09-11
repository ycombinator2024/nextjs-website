import Link from "next/link";
import WebNav from "./WebNav";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { formatCurrency } from "@/utilities/formatCurrency";
import { CartItem } from "@/components/Shopping/CartItem";
import storeItems from "@/data/items.json";

import { MdOutlineShoppingCartCheckout } from "react-icons/md";
export default function Navbar() {
  const { openCart, cartQuantity, closeCart, cartItems, isOpen } =
    useShoppingCart();
  return (
    <div className="flex flex-col w-full justify-center font-helvetica font-normal items-center bg-white ">
      <div className="flex flex-col w-[95vw] footerXM:w-[90vw] footerSM:w-[85vw] sm:w-[80vw] xxl:w-[1280px] ">
        <nav className="flex text-lg justify-center items-center">
          <Link href="/" className="mr-auto ml-5 my-2">
            <Image
              src="/favicon_adj.png"
              width={51}
              height={68}
              alt="LA Lager"
            />
          </Link>
          <WebNav />
          <MobileNav />
        </nav>
      </div>
      <hr className="h-[1px] opacity-50 bg-[#C2C2C2] w-full border-0 rounded"></hr>
      <Drawer isOpen={isOpen} onClose={closeCart} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody>
            {cartItems.map((item) => {

              return <CartItem key={item.id} {...item} />;
            })}
            <div className="text-lg mb-8">
              Total{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = [
                    storeItems.find(
                      (i) => i.id.toString() + "-SM" === cartItem.id
                    ),
                    storeItems.find(
                      (i) => i.id.toString() + "-MD" === cartItem.id
                    ),

                    storeItems.find(
                      (i) => i.id.toString() + "-LG" === cartItem.id
                    ),

                    storeItems.find(
                      (i) => i.id.toString() + "-XL" === cartItem.id
                    ),
                  ];
                  for (let i = 0; i < item.length; i++) {
                    total += (item[i]?.price || 0) * cartItem.quantity;
                  }

                  return total;
                }, 0)
              )}
            </div>
            <button className="flex gap-1 items-center bg-green rounded-lg px-2 py-1 text-lg">
              Checkout <MdOutlineShoppingCartCheckout />
            </button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
