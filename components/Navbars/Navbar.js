import Link from "next/link";
import React from "react";
import SolidButton from "../Buttons/SolidButton";

import { FaWallet } from "react-icons/fa6";
import WalletConnect from "../Auth/WalletConnect";

const HeroNavbar = () => {
  return (
    <>
      <header className="fixed top-0 z-50 w-screen">
        <nav className="w-full bg-background/95 backdrop-blur-md md:absolute">
          <div className="container m-auto px-2 md:px-12 lg:px-7">
            <div className="flex flex-wrap items-center justify-between py-4 gap-6 md:py-4 md:gap-0 relative">
              <div className="px-6 flex justify-between lg:w-max md:px-0">
                <Link
                  href="/"
                  aria-label="logo"
                  className="flex space-x-2 items-center"
                >
                  <div aria-hidden="true" className="flex space-x-1">
                    {/* logo here */}
                  </div>
                  <span className="text-2xl font-bold text-dark-900 dark:text-white">
                    Eneftee
                  </span>
                </Link>
              </div>

              <div
                className="hidden absolute top-full transition translate-y-1 lg:peer-checked:translate-y-0 lg:translate-y-0 left-0 
                    lg:top-0 lg:relative peer-checked:flex
                    lg:flex lg:flex-row flex-col 
                    flex-wrap justify-center items-center 
                    gap-6 p-6 
                    bg-[white] dark:bg-dark-900 lg:gap-0 
                    lg:p-0 lg:bg-transparent"
              >
                <div className="text-dark-600 dark:text-dark-300 lg:pr-4 lg:pt-0">
                  <ul className="tracking-wide font-medium text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                    <li>
                      <Link href="/market" className="block md:px-4 text-link">
                        <span>Marketplace</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/collections"
                        className="block md:px-4 text-link"
                      >
                        <span>Collections</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/artists" className="block md:px-4 text-link">
                        <span>Artists</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/community"
                        className="block md:px-4 text-link"
                      >
                        <span>Community</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <WalletConnect />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeroNavbar;
