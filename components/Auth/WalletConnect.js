"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import SolidButton from "../Buttons/SolidButton";
import { FaWallet } from "react-icons/fa6";
import Image from "next/image";
import { WalletConnectOptions } from "@/utils/constants/wallet-connect-options";

export default function WalletConnect() {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <SolidButton
        content="Connect Wallet"
        size="sm"
        icon={<FaWallet />}
        customText="hidden md:inline"
        onClickEvent={() => openModal()}
      />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-background p-6 text-left align-middle shadow-xl transition-all">
                  {/* <Dialog.Title
                    as="h3"
                    className="text-lg font-normal leading-6 my-3"
                  >
                    Connect using
                  </Dialog.Title> */}
                  <ConnectBoard options={WalletConnectOptions} />

                  {/* <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

const ConnectBoard = ({ options }) => {
  return (
    <div>
      {options.map((method, index) => (
        <button
          className="rounded-lg my-2 flex items-center bg-black/50 w-full text-start hover:bg-black"
          key={index}
          onClick={() => {}}
        >
          <div className="w-full h-auto max-w-[70px] p-3">
            <Image
              src={`/wallet-icons/${method.logo}`}
              alt={method.Title}
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-full h-auto max-w-[30px]s px-4">
            <p className="text-sm">{method.title}</p>
          </div>
        </button>
      ))}
    </div>
  );
};
