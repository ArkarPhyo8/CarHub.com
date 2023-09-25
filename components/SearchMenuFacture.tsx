"use client";
import React from "react";
import { ManuFactureProps } from "../types/index";
import { Combobox } from "@headlessui/react";
import Image from "next/image";

const SearchMenuFacture = ({
  manuFacture,
  setManuFacture,
}: ManuFactureProps) => {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4s"
              alt="Car Logo"
            />
          </Combobox.Button>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchMenuFacture;
