"use client";

import InputComp from "@/components/InputComp";
import { Button, Checkbox } from "@nextui-org/react";
import { useRouter ,useSearchParams} from "next/navigation";
import React, { useState ,useEffect} from "react";

function Page2() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const namesearch = searchParams.get('name')
  const emailsearch = searchParams.get('email')

  const citysearch = searchParams.get('city')
  const statesearch = searchParams.get('state')
  const patientId = searchParams.get('patientId')
  console.log(statesearch)
  console.log("City is here ",citysearch)
  const [apiUrl, setApiUrl] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  console.log("form data", name, email, city, phoneNumber)
  const patientIdSearch :any= searchParams.get('patientId')
  // const namesearch = searchParams.get('name')
  // if (namesearch){
  //   setName(namesearch)
  // }
  // const emailsearch = searchParams.get('email')
  // if (emailsearch){
  //   setEmail(emailsearch)
  // }
  // const phoneNumberSearch = searchParams.get('phoneNumber')
  // if (phoneNumberSearch){
  //   setPhoneNumber(phoneNumberSearch)
  // }
  useEffect(() => {
    if (namesearch) {
      setName(namesearch);
    }
  }, [namesearch]);

  useEffect(() => {
    if (emailsearch) {
      setEmail(emailsearch);
    }
  }, [emailsearch]);
  //citysearch
  useEffect(() => {
    if (citysearch) {
      setCity(citysearch);
    }
  }, [citysearch]);
  useEffect(() => {
    if (statesearch) {
      setState(statesearch);
    }
  }, [statesearch]);



  const handleSubmit = async () => {
    // Access the form values and perform necessary actions

    const requestBody = {patientId ,name, email, city, phoneNumber ,state};

    try {
      const response = await fetch(
        "http://54.153.103.241:5500/createStripeCustomer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any other headers if needed
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("API call successful!");
        //@ts-ignore
        console.log(result.TestUrl)
        //@ts-ignore
        setApiUrl(result.TestUrl);
        console.log("API_URL --->", apiUrl)
        router.push(result.TestUrl);
        // You can handle the success response here
      } else {
        console.error("API call failed!");
        router.push("/failure");
        // Handle the failure response, e.g., show an error message
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle network or other errors
    }
    // Perform your form submission logic here
  
    console.log(requestBody)
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-[60%] h-full my-8 px-16 py-10 bg-white rounded-xl  shadow-gray-900 xs-desktop:px-8 xs-desktop:py-6 xs-desktop:w-[80%] lg-mob:w-[90%] lg-mob:px-4 lg-mob:py-3">
        <div>
          <h1 className="mb-20  font-semibold text-4xl ml-1 text-[#006FEE] tablet:text-2xl tablet:mb-10 tablet:mt-4">
            Add Payment
          </h1>
        </div>
        <div className="relative flex flex-col gap-y-6">
          <InputComp
            text="Name"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
          <InputComp
            text="Email Address"

            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <InputComp
            text="City"
            value={city}
            onChange={(e: any) => setCity(e.target.value)}
          />
                    <InputComp
            text="State"
            value={state}
            onChange={(e: any) => setCity(e.target.value)}
          />
          <InputComp
            text="Phone Number"
            value={'+61'}
            // value={`+61`}
            onChange={(e: any) => setPhoneNumber(e.target.value)}
          />
          <h1 className="text-xl font-semibold  mt-2 text-[#006FEE]">
            Shipping Details
          </h1>
          <Checkbox defaultSelected>Same as billing details</Checkbox>
          <div className="flex items-center justify-end ">
            <Button
              color="primary"
              onClick={handleSubmit}
              className="px-10 py-5 text-lg font-semibold"
            >
              Add Customer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
