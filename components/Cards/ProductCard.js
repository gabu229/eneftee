import Image from "next/image";
import Link from "next/link";
import SolidButton from "../Buttons/SolidButton";

export const ProductCard = ({
  preview = "/nft-art-01.png",
  title = "Whispers",
  price = "0.25",
  currency = "ETH",
  url = "",
  miscItems = [],
}) => {
  return (
    <div className="w-full bg-[#141414] flex md:flex-col gap-4 rounded-xl p-4 hover:bg-black/5 duration-300">
      <div className="w-full max-w-[100px] aspect-square md:max-w-[300px] md:min-w-[200px] overflow-hidden rounded-md">
        <Link href={url}>
          <Image
            src={preview}
            width={1000}
            height={1000}
            quality={100}
            alt="NFT art"
            className="h-full object-cover hover:scale-105 duration-500"
          />
        </Link>
      </div>
      <div className="w-full">
        <Link href={url}>
          <p className="">{title}</p>
        </Link>

        <div className="w-full my-3 grid md:grid-cols-2 gap-2">
          <div className="w-full">
            <p className="text-xs text-gray-400">Price:</p>
            <p className="text-sm">
              {price} {currency}
            </p>
          </div>
          {miscItems.map((item, index) => (
            <div className="w-full" key={index}>
              <p className="text-xs text-gray-400">{item.label}</p>
              <p className="text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block">
        <SolidButton block content="Add to Cart" size="md" icon="" />
      </div>
    </div>
  );
};
