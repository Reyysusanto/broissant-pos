"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { FaMinus, FaPlus, FaSearch } from "react-icons/fa";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CardMenu from "./_components/CardMenu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

const Method = [
  {
    val: "dineIn",
    name: "Dine In",
  },
  {
    val: "toGo",
    name: "To Go",
  },
  {
    val: "delivery",
    name: "Delivery",
  },
];

const Menu = [
  {
    id: 1,
    name: "Spicy Seasoned Seafood Noodles",
    price: 2.29,
    image: "/Images/seafood_noodle.png",
  },
  {
    id: 2,
    name: "Salted Pasta with mushroom sauce",
    price: 2.69,
    image: "/Images/salted_pasta_mushroom_sauce.png",
  },
  {
    id: 3,
    name: "Beef dumpling in hot and sour soup",
    price: 2.99,
    image: "/Images/dumpling_sour_soup.png",
  },
  {
    id: 4,
    name: "Heathy noodle with spinach leaf",
    price: 3.29,
    image: "/Images/healthy_noodle_spinach_leaf.png",
  },
  {
    id: 5,
    name: "Hot spicy fried rice with omelette",
    price: 3.49,
    image: "/Images/hot_spicy_fried_rice_omelette.png",
  },
  {
    id: 6,
    name: "Spinach instant noodle with special omelette",
    price: 3.59,
    image: "/Images/spicy_instant_noodle_omelette.png",
  },
  {
    id: 7,
    name: "Shoyu noodle",
    price: 3.29,
    image: "/Images/healthy_noodle.png",
  },
  {
    id: 8,
    name: "Spicy instant noodle with special shrimp",
    price: 3.59,
    image: "/Images/instant_noodle_omellete.png",
  },
  {
    id: 9,
    name: "Special de Authentic noodle",
    price: 3.49,
    image: "/Images/special_authentic.png",
  },
];

const HomePage = () => {
  const [Cart, setCart] = useState<
    { id: number; name: string; price: number; qty: number }[]
  >([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [userName, setUserName] = useState("Guest");
  const [selectMethod, setSelectMethod] = useState("");
  const [notes, setNotes] = useState<Record<number, string>>({});
  

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/users");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        if (data.length > 0) {
          setUserName(data[0].username);
        }
      } catch (error) {
        console.error(error);
        setUserName("Guest");
      }
    };
    fetchUser();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const filteredMenu = Menu.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const sum = Cart.reduce((acc, item) => {
      const product = Menu.find((product) => product.id === item.id);
      return product ? acc + product.price * item.qty : acc;
    }, 0);
    setTotalPrice(sum);
  }, [Cart]);

  const handleNoteChange = (id: number, note: string) => {
    setNotes((prev) => ({ ...prev, [id]: note }));
  };

  const handleBuy = (id: number) => {
    const selectedItem = Menu.find((item) => item.id === id);
    if (selectedItem) {
      const isItemInCart = Cart.find((item) => item.id === id);
      if (isItemInCart) {
        setCart(
          Cart.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
          )
        );
      } else {
        setCart([
          ...Cart,
          { id, name: selectedItem.name, price: selectedItem.price, qty: 1 },
        ]);
      }
    }
  };

  const handleMin = (id: number) => {
    const selectedItem = Menu.find((item) => item.id === id);
    if (selectedItem) {
      const isItemInCart = Cart.find((item) => item.id === id);
      if (isItemInCart) {
        if (isItemInCart.qty > 1) {
          setCart(
            Cart.map((item) =>
              item.id === id ? { ...item, qty: item.qty - 1 } : item
            )
          );
        } else {
          setCart(Cart.filter((item) => item.id !== id));
        }
      }
    }
  };

  return (
    <div className="flex">
      <div className="w-full md:w-2/3 pb-6 pr-6">
      <motion.div
          className="flex justify-between items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full relative md:w-1/3">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for food..."
              className="pl-9 w-full border border-gray-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>
        <div className="flex items-center mt-6 justify-between">
          <h3 className="text-lg font-semibold text-gray-700">Choose Dishes</h3>
          <Select onValueChange={(value) => setSelectMethod(value)}>
            <SelectTrigger className="w-[180px] bg-primaryColor text-white font-base rounded-lg">
              <SelectValue placeholder="Select a method" />
            </SelectTrigger>
            <SelectContent className="bg-secondaryColor text-white font-base">
              <SelectGroup>
                <SelectItem value="dineIn">Dine In</SelectItem>
                <SelectItem value="toGo">To Go</SelectItem>
                <SelectItem value="delivery">Delivery</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <motion.div
          className="flex flex-wrap gap-6 mt-4 justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filteredMenu.map((menu) => (
            <CardMenu
              key={menu.id}
              MenuImage={menu.image}
              MenuName={menu.name}
              Price={menu.price}
              id={menu.id}
              handleBuy={() => handleBuy(menu.id)}
            />
          ))}
        </motion.div>
      </div>

      <div className="hidden md:block p-4 w-1/3 bg-secondaryColor right-0 top-0 h-full fixed">
        <h4 className="text-lg font-semibold text-white">
          Order <span className="text-primaryColor">{userName}</span>
        </h4>
        <div className="flex gap-x-3 mt-4">
          {Method.map((m) => (
            <div
              key={m.val}
              className={`${
                selectMethod === m.val
                  ? "text-white bg-primaryColor"
                  : "text-primaryColor bg-transparent"
              } text-xs px-2 py-1 rounded-md border border-gray-700`}
            >
              {m.name}
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-6 gap-y-6">
          <ul className="divide-y divide-gray-700">
            {Cart.map((item) => {
              const product = Menu.find((product) => product.id === item.id);
              return (
                <div key={item.id} className="flex flex-col p-3">
                  {product && (
                    <div className="flex items-center py-2 gap-x-4 justify-between">
                      <div className="flex items-center py-2 gap-x-4">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={50}
                          height={50}
                        />
                        <div>
                          <h5 className="font-semibold text-base text-white">
                            {product.name}
                          </h5>
                          <p className="text-gray-300 font-lightm text-sm">
                            {product.price.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center py-2 gap-x-2">
                        <Button
                          onClick={() => handleMin(product.id)}
                          className="border border-primaryColor p-3 size-10 text-primaryColor bg-transparent"
                        >
                          <FaMinus />
                        </Button>
                        <div className="p-2 bg-gray-700 rounded-lg size-10 flex justify-center">
                          <p className="text-base text-white">{item.qty}</p>
                        </div>
                        <Button
                          onClick={() => handleBuy(product.id)}
                          className="border border-primaryColor p-3 size-10 text-primaryColor bg-transparent"
                        >
                          <FaPlus />
                        </Button>
                      </div>
                    </div>
                  )}
                  <div className="flex gap-x-3 justify-between items-center">
                    <div className="flex-1">
                        <Input
                        className="w-full mt-2 p-1 border-none bg-gray-700 text-white"
                        placeholder="Order note..."
                        value={notes[item.id] || ""}
                        onChange={(e) =>
                            handleNoteChange(item.id, e.target.value)
                        }
                        />
                    </div>
                    <div className="flex-shrink-0">
                        <div className="p-2 border-gray-400 w-full">
                        <p className="text-base text-white">
                            {(item.price * item.qty).toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            })}
                        </p>
                        </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </ul>
          {Cart.length > 0 && (
            <>
              <div className="flex justify-between px-4 items-center">
                <h4 className="font-base text-sm text-gray-400">Total Price</h4>
                <p className="font-semibold text-white">
                  {totalPrice.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </p>
              </div>
              <Button className="w-full text-white bg-primaryColor text-xs hover:bg-orange-600">
                Continue to Payment
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
