import { Button } from "@/components/ui/button";
import Image from "next/image";

const CardMenu = ({
    MenuImage,
    MenuName,
    Price,
    handleBuy,
    id,
    }: {
    MenuImage: string;
    MenuName: string;
    Price: number;
    handleBuy: (id: number) => void;
    id: number;
    }) => {
        
    return (
        <div className="bg-secondaryColor shadow-lg w-64 p-4 rounded-xl flex justify-between flex-col">
            <div className="w-full h-40 mb-4">
                <Image
                src={MenuImage}
                alt="Menu Image"
                width={150}
                height={150}
                className="rounded-lg object-contain w-full h-full"
                />
            </div>
            <h3 className="text-lg font-bold text-center text-white mb-2 px-4">
                {MenuName}
            </h3>
            <p className="text-sm text-center text-primaryColor font-medium mb-1">
                {Price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
            </p>
            <Button onClick={() => handleBuy(id)} className="bg-primaryColor hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-md mt-2 w-full">Add to cart</Button>
        </div>
    );
};

export default CardMenu;
