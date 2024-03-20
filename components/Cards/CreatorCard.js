import Image from "next/image";

export const CreatorCard = () => {
  return (
    <>
      <div className="w-full bg-[#141414] flex md:flex-col items-start gap-2 rounded-xl p-4">
        <div className="max-w-[50px] overflow-hidden rounded-full">
          <Image
            src="/nft-art-01.png"
            width={1000}
            height={1000}
            quality={100}
            alt="NFT art"
          />
        </div>
        <div className="my-2 text-sm">
          <p className="">@0xJohnDoe</p>
          <div className="my-1 flex">
            <div className="w-full">
              <p className="text-xs text-gray-400">Floor</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
