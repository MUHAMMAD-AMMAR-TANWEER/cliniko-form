"use client";

import Page1 from "@/components/pages/Page1";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Image from "next/image";
import AddPatient from "./addpatient/page";

import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  //@ts-ignore
  const search = searchParams.get("patientId");
  console.log("Main page data ", search);
  return (
    <Provider store={store}>
      <NextUIProvider>
        <div className="flex flex-col items-center justify-center ">
          <div className="w-[60%] h-full my-8 px-16 py-10 bg-white rounded-xl  shadow-gray-900 xs-desktop:px-8 xs-desktop:py-6 xs-desktop:w-[80%] lg-mob:w-[90%] lg-mob:px-4 lg-mob:py-3">
            <div>
              <h1 className="mb-20  font-semibold text-4xl ml-1 text-[#006FEE] tablet:text-2xl tablet:mb-10 tablet:mt-4">
                Add a new Patient
              </h1>
            </div>
            <AddPatient />
          </div>
        </div>
      </NextUIProvider>
    </Provider>
  );
}
