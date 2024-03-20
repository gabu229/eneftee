import Image from "next/image";
import Marquee from "react-fast-marquee";

export const HeroMarquee = () => {
  return (
    <>
      <div className="hidden md:block">
        <Marquee
          gradient
          autoFill
          direction="left"
          gradientColor="#0E0E0E"
          gradientWidth={500}
          speed={25}
        >
          {[1, 2, 3, 4].map((i, index) => (
            <div
              className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] overflow-hidden rounded-md mx-3"
              key={index}
            >
              <Image
                src={`/nft-art-0${i}.png`}
                width={1000}
                height={1000}
                quality={100}
                alt="NFT art"
              />
            </div>
          ))}
        </Marquee>
      </div>
      <Marquee
        gradient
        autoFill
        direction="right"
        gradientColor="#0E0E0E"
        gradientWidth={500}
        speed={25}
      >
        {[5, 6, 7, 8].map((i, index) => (
          <div
            className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] overflow-hidden rounded-md mx-3"
            key={index}
          >
            <Image
              src={`/nft-art-0${i}.png`}
              width={1000}
              height={1000}
              quality={100}
              alt="NFT art"
            />
          </div>
        ))}
      </Marquee>
    </>
  );
};
