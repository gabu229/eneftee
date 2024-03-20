import Link from "next/link";

export const MainFooter = () => {
  return (
    <div className="container mx-auto px-3 flex flex-col justify-center items-center">
      <div className="w-full max-w-screen-xl flex justify-between min-h-[200px]">
        <div className="leading-[2em] flex-1">
          <Link
            href="/"
            aria-label="logo"
            className="flex gap-3 items-center"
          >
            {/* <div aria-hidden="true" className="flex"> */}
              {/* logo here */}
            {/* </div> */}
            <span className="text-2xl font-bold text-dark-900 dark:text-white">
              Eneftee
            </span>
          </Link>
          <p className="">
            Eneftee is a decentralized platform that aims to revolutionize the
            art industry by leveraging blockchain technology and non-fungible
            tokens (NFTs) to create a transparent, secure, and accessible
            marketplace for digital and physical artwork.
          </p>
        </div>
        <div className="leading-[2em] flex flex-1 md:text-end">
          <div className="w-full">
            <ul className="tracking-wide font-medium text-sm flex flex-col gap-6">
              <li>
                <Link href="/" className="block md:px-4 text-link">
                  <span>Marketplace</span>
                </Link>
              </li>
              <li>
                <Link href="/" className="block md:px-4 text-link">
                  <span>Artists</span>
                </Link>
              </li>
              <li>
                <Link href="/" className="block md:px-4 text-link">
                  <span>Community</span>
                </Link>
              </li>
              <li>
                <Link href="/" className="block md:px-4 text-link">
                  <span>Collections</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <ul className="tracking-wide font-medium text-sm flex flex-col gap-6">
              <li>
                <Link href="/" className="block md:px-4 text-link">
                  <span>Marketplace</span>
                </Link>
              </li>
              <li>
                <Link href="/" className="block md:px-4 text-link">
                  <span>Artists</span>
                </Link>
              </li>
              <li>
                <Link href="/" className="block md:px-4 text-link">
                  <span>Community</span>
                </Link>
              </li>
              <li>
                <Link href="/" className="block md:px-4 text-link">
                  <span>Collections</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full max-w-screen-xl flex justify-between py-5 border-t">
        <div className="">
          <p className="flex items-center justify-center gap-2">
            <span className="text-lg pb-1">&copy;</span>
            <span>2024 Eneftee. All rights reserved.</span>
          </p>
        </div>
        <div className="">
          <ul className="tracking-wide font-medium text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
            <li>
              <Link href="/" className="block md:px-4 text-link">
                <span>Privacy policy.</span>
              </Link>
            </li>
            <li>
              <Link href="/" className="block md:px-4 text-link">
                <span>Terms of service.</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
