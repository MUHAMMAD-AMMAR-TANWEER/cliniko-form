"use client";

import React, { useState } from "react";
import InputComp from "../InputComp";
import { Button, Dropdown, Radio, RadioGroup } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import DatePicker from "../DatePicker";
import OptionField from "../OptionField";
import { useSelector } from "react-redux";
import TextArea from "../TextArea";
import RadioButton from "@/components/RadioButton";
import DropDown from "@/components/DropDown";
import PhoneNumberInput from "../PhoneNumberInput";

export default function Page3() {
  const router = useRouter();
  const searchParams = useSearchParams();

  //   Extra states
  const [showPronounce, setShowPronounce] = useState(false);

  //   Redux
  const dob = useSelector((state: any) => state.dob);
  const phoneNumber = useSelector((state: any) => state.phoneNumber);
  const finalPhoneNumber = phoneNumber.slice(-1);

  // -------------------------- UseStates -------------------------------
  const [title, setTitle] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [preferredFirstname, setPreferredFirstname] = useState("");
  const [sex, setSex] = useState("");
  const [sexSpecify, setSexSpacify] = useState("");
  const [genderIdentity, setGenderIdentity] = useState("");
  const [nominative, setnominative] = useState("");
  const [accusative, setaccusative] = useState("");
  const [possessivePronomial, setpossessivePronomial] = useState("");
  const [possessivePredicative, setpossessivePredicative] = useState("");
  const [reflexive, setreflexive] = useState("");
  const [extraInformation, setExtraInformation] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState("accepted");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postcode, setPostcode] = useState("");
  const [occupation, setOccupation] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [medicareNumber, setMedicareNumber] = useState("");
  const [medicareReferenceNumber, setMedicareReferenceNumber] = useState("");
  const [dvaCardNumber, setDvaCardNumber] = useState("");
  const [referenceNumber, setReferenceNumber] = useState("");
  const [refferingType, setReferringType] = useState("");

  //   ------------------- Conditional Question 1 -----------------------------
  const [radiovalue1, setRadioValue1] = useState("");
  const [insuranceFundName, setInsuranceFundName] = useState("");
  const [membershipNumber, setMembershipNumber] = useState("");
  const [irnNumber, setIrnNumber] = useState("");

  //   ------------------- Conditional Question 2 -----------------------------
  const [radiovalue2, setRadioValue2] = useState("");
  const [Employer, setEmployer] = useState("");
  const [EmployerEmail, setEmployerEmail] = useState("");
  const [EmployerNumber, setEmployerNumber] = useState("");
  const [insuranceCompany, setInsuranceCompany] = useState("");
  const [insuranceEmail, setInsuranceEmail] = useState("");
  const [caseManager, setCaseManager] = useState("");
  const [caseManagerNumber, setCaseManagerNumber] = useState("");
  const [caseManagerEmail, setCaseManagerEmail] = useState("");
  const [dateOfInjury, setDateOfinjury] = useState("");

  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const years = Array.from({ length: 100 }, (_, i) => (2022 - i).toString());

  //   ------------------- Conditional Question 3 -----------------------------
  const [radiovalue3, setRadioValue3] = useState("");
  const [providerName, setProviderName] = useState("");
  const [caseManagerName, setCaseManagerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [caseManagerEmailAgedCare, setCaseManagerEmailAgedCare] = useState("");
  const [accountEmail, setAccountEmail] = useState("");

  //   ------------------- Conditional Question 4 -----------------------------
  const [radiovalue4, setRadioValue4] = useState("");
  const [fundingManagement, setFundingManagement] = useState("");
  const [ndisNumber, setNDISNumber] = useState("");
  const [planManagerCompanyName, setPlanManagerCompanyName] = useState("");
  const [planManagerContactNumber, setPlanManagerContactNumber] = useState("");
  const [planManagerNumber, setPlanManagerNumber] = useState("");
  const [planEmail, setPlanEmail] = useState("");
  const [planManagerInvoiceEmail, setPlanManagerInvoiceEmail] = useState("");

  //   ------------------- Conditional Question 5 -----------------------------
  const [radiovalue5, setRadioValue5] = useState("");
  const [crn, setCRN] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const [day2, setDay2] = useState<string>("");
  const [month2, setMonth2] = useState<string>("");
  const [year2, setYear2] = useState<string>("");

  const days2 = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const months2 = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const years2 = Array.from({ length: 100 }, (_, i) => (2022 - i).toString());

  // -----------------------------  Error States --------------------------------
  const [dobError, setDOBError] = useState<string | null>(null);
  const [optionFieldError, setOptionFieldError] = useState<string | null>(null);
  const [phoneNumberError, setPhoneNumberError] = useState<string | null>(null);

  const [errors, setErrors] = useState({
    title: "",
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    city: "",
    state: "",
    postcode: "",
    emergencyContact: "",
    medicareNumber: "",
    medicareReferenceNumber: "",
    referringType: "",
    Employer: "",
    insuranceCompany: "",
    insuranceEmail: "",
    providerName: "",
    caseManagerEmailAgedCare: "",
    ndisNumber: "",
    planManagerCompanyName: "",
    planManagerInvoiceEmail: "",
    crn: "",

    // Add other fields here with initial empty strings
    // ...
  });

  // -----------------------  Validation  ---------------------------------

  const validateFields = () => {
    // Validation logic for each required field
    let formIsValid = true;

    if (!title) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        title: "Title is required",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, title: "" }));
    }

    if (!firstname) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstname: "Firstname is required",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, firstname: "" }));
    }

    if (!lastname) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastname: "Lastname is required",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, lastname: "" }));
    }

    if (!email) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    if (!address) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        address: "Address is required",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, address: "" }));
    }

    if (!city) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        city: "City is required",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, city: "" }));
    }

    if (!state) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        state: "State is required",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, state: "" }));
    }

    if (!postcode) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        postcode: "PostCode is required",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, postcode: "" }));
    }

    if (!emergencyContact) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        emergencyContact: "Emergency Contact is required",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, emergencyContact: "" }));
    }

    if (!medicareNumber) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        medicareNumber: "Medicare Number is required",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, medicareNumber: "" }));
    }

    if (!medicareReferenceNumber) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        medicareReferenceNumber: "Medicare Reference Number is required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        medicareReferenceNumber: "",
      }));
    }

    if (!refferingType) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        refferingType: "Medicare Reference Number is required",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, refferingType: "" }));
    }
    if (radiovalue2 === "yes") {
      if (!Employer) {
        formIsValid = false;
        setErrors((prevErrors) => ({
          ...prevErrors,
          Employer: "Employer Name is required",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, Employer: "" }));
      }
      if (!insuranceCompany) {
        formIsValid = false;
        setErrors((prevErrors) => ({
          ...prevErrors,
          insuranceCompany: "Insurance Company is required",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, insuranceCompany: "" }));
      }
      if (!insuranceEmail) {
        formIsValid = false;
        setErrors((prevErrors) => ({
          ...prevErrors,
          insuranceEmail: "Insurance Email is required",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, insuranceEmail: "" }));
      }
    }
    if (radiovalue3 === "yes") {
      if (!providerName) {
        formIsValid = false;
        setErrors((prevErrors) => ({
          ...prevErrors,
          providerName: "Provider Name is required",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, providerName: "" }));
      }
      if (!caseManagerEmailAgedCare) {
        formIsValid = false;
        setErrors((prevErrors) => ({
          ...prevErrors,
          caseManagerEmailAgedCare: "Case Manager Email is required",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          caseManagerEmailAgedCare: "",
        }));
      }
    }

    if (radiovalue4 === "yes") {
      if (!ndisNumber) {
        formIsValid = false;
        setErrors((prevErrors) => ({
          ...prevErrors,
          ndisNumber: "NDIS Number is required",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          ndisNumber: "",
        }));
      }
    }

    if (radiovalue4 === "yes" && fundingManagement === "Plan-Managed") {
      if (!planManagerCompanyName) {
        formIsValid = false;
        setErrors((prevErrors) => ({
          ...prevErrors,
          planManagerCompanyName: "Plan Manager Company Name is required",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          planManagerCompanyName: "",
        }));
      }
      if (!planManagerInvoiceEmail) {
        formIsValid = false;
        setErrors((prevErrors) => ({
          ...prevErrors,
          planManagerInvoiceEmail: "Plan Manager Invoice Email is required",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          planManagerInvoiceEmail: "",
        }));
      }
    }

    if (radiovalue5 === "yes") {
      if (!crn) {
        formIsValid = false;
        setErrors((prevErrors) => ({
          ...prevErrors,
          crn: "CRN Number is required",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          crn: "",
        }));
      }
    }

    return formIsValid;
  };

  // --------------------------  Handle Submit  -------------------------------

  const handleSubmit = async () => {
    const isFormValid = validateFields();
    setDateOfinjury(`{${year}-${month}-${day}}`);
    setExpiryDate(`{${year2}-${month2}-${day2}}`);
    const patientId: any = searchParams.get("patientId");
    console.log("here is the search", patientId);

    const requestBody = {
      patientId,
      title,
      firstname,
      lastname,
      preferredFirstname,
      dob,
      sex,
      sexSpecify,
      genderIdentity,
      // --------  pronounce  ----------
      nominative,
      accusative,
      possessivePronomial,
      possessivePredicative,
      reflexive,
      //   -------------------------------
      extraInformation,
      privacyPolicy,
      email,
      address,
      city,
      state,
      postcode,
      occupation,
      emergencyContact,
      medicareNumber,
      medicareReferenceNumber,
      dvaCardNumber,
      referenceNumber,
      refferingType,
      insuranceFundName,
      membershipNumber,
      irnNumber,
      Employer,
      EmployerEmail,
      EmployerNumber,
      insuranceCompany,
      insuranceEmail,
      caseManager,
      caseManagerEmail,
      caseManagerNumber,
      dateOfInjury,
      providerName,
      caseManagerName,
      contactNumber,
      caseManagerEmailAgedCare,
      accountEmail,
      ndisNumber,
      planManagerCompanyName,
      planManagerContactNumber,
      planManagerNumber,
      planEmail,
      planManagerInvoiceEmail,
      expiryDate,
      crn,
      finalPhoneNumber,
      fundingManagement,
    };

    // router.push(`/addpayment?patientId=${patientId}&&name=${firstname}+${lastname}&&email=${email}&&city${city}&&state=${state}`);
    // console.log(requestBody);
    if (privacyPolicy === "accepted" && isFormValid) {
      console.log(requestBody);
      try {
        const response = await fetch(
          "https://d875-2406-d00-cccf-b461-cba-91b3-e1f2-f925.ngrok-free.app/updatePatient",
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
          console.log("API call successful!");
          router.push(
            `/addpayment?patientId=${patientId}&&name=${firstname}+${lastname}&&email=${email}&&city=${city}&&state=${state}`
          );
          // You can handle the success response here
        } else {
          console.error("API call failed!");
          // Handle the failure response, e.g., show an error message
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle network or other errors
      }
    }
    // Perform your form submission logic here
  };

  // -----------------------  handle Functions -------------------------

  const handleDOBError = (error: string | null) => {
    setDOBError(error);
  };

  const handleOptionFieldSexChange = (
    heading: any,
    selectedOption: any,
    inputValue: any
  ) => {
    if (selectedOption === "" && inputValue === "") {
      setOptionFieldError(`${heading} is required`);
    } else {
      setOptionFieldError(null);
    }
    // Do something with the data, for example, log it
    setSex(selectedOption);
    setSexSpacify(inputValue);
    console.log(
      `Heading: ${heading}, Selected Option: ${selectedOption}, Input Value: ${inputValue}`
    );
  };

  const handleOptionFieldGenderIdentityChange = (
    heading: any,
    selectedOption: any,
    inputValue: any
  ) => {
    // Do something with the data, for example, log it
    setGenderIdentity(heading);
    setGenderIdentity(selectedOption);
    console.log(
      `Heading: ${heading}, Selected Option: ${selectedOption}, Input Value: ${inputValue}`
    );
  };

  const handleChange = (value: any) => {
    setShowPronounce(!showPronounce);
  };

  // ------------------   Pronouce Handlers  --------------------

  const handlePronounceNominativeChange = (
    heading: any,
    selectedOption: any,
    inputValue: any
  ) => {
    // Do something with the data, for example, log it
    setnominative(selectedOption);
    console.log(
      `Heading: ${heading}, SelectedOption: ${selectedOption}, InputValue: ${inputValue}`
    );
  };

  const handlePronounceAccusativeChange = (
    heading: any,
    selectedOption: any,
    inputValue: any
  ) => {
    // Do something with the data, for example, log it
    setaccusative(selectedOption);
    console.log(
      `Heading: ${heading}, SelectedOption: ${selectedOption}, InputValue: ${inputValue}`
    );
  };

  const handlePronouncePossessiveChange = (
    heading: any,
    selectedOption: any,
    inputValue: any
  ) => {
    // Do something with the data, for example, log it
    setpossessivePronomial(selectedOption);
    console.log(
      `Heading: ${heading}, SelectedOption: ${selectedOption}, InputValue: ${inputValue}`
    );
  };
  const handlePronouncePossessive2Change = (
    heading: any,
    selectedOption: any,
    inputValue: any
  ) => {
    // Do something with the data, for example, log it
    setpossessivePredicative(selectedOption);
    console.log(
      `Heading: ${heading}, SelectedOption: ${selectedOption}, InputValue: ${inputValue}`
    );
  };
  const handlePronounceReflexiveChange = (
    heading: any,
    selectedOption: any,
    inputValue: any
  ) => {
    // Do something with the data, for example, log it
    setreflexive(selectedOption);
    console.log(
      `Heading: ${heading}, SelectedOption: ${selectedOption}, InputValue: ${inputValue}`
    );
  };

  const handlePhoneNumberError = (error: string | null) => {
    console.log(error, "error is here");
    setPhoneNumberError(error);
  };

  const handleReferringTypeChange = (value: any) => {
    setReferringType(value);
  };

  //   setFundingManagement
  const handleRadioChange2 = (value: any) => {
    setFundingManagement(value);
    // Reset the input value when radio selection changes
  };

  return (
    <div className="relative flex flex-col gap-y-6">
      <div className="flex tablet:flex-col gap-x-3">
        {title ? (
          <InputComp
            text="Title"
            label="Title"
            onChange={(e: any) => setTitle(e.target.value)}
          />
        ) : (
          <InputComp
            text="Title"
            label="Title"
            onChange={(e: any) => setTitle(e.target.value)}
            error={errors.title}
          />
        )}

        <InputComp
          text="Firstname"
          label="Firstname"
          onChange={(e: any) => setFirstname(e.target.value)}
          error={errors.firstname}
        />
        <InputComp
          text="Lastname"
          label="Lastname"
          onChange={(e: any) => setLastname(e.target.value)}
          error={errors.lastname}
        />
      </div>
      <InputComp
        text="Prefered Firstname"
        label="Prefered Firstname"
        onChange={(e: any) => setPreferredFirstname(e.target.value)}
      />
      <h1 className="text-xl font-semibold  mt-2 text-[#006FEE]">
        Select Date of Birth
      </h1>
      <div className="text-[#006FEE] font-medium">
        <DatePicker onError={handleDOBError} />
        {dobError && <p className="text-red-500 text-xs italic">{dobError}</p>}
      </div>
      <div>
        <OptionField
          onChange={handleOptionFieldSexChange}
          heading="sex"
          Option={["Male", "Female", "AFAB", "AMAB"]}
        />
        {optionFieldError && <p className="text-red-500">{optionFieldError}</p>}
      </div>
      <OptionField
        onChange={handleOptionFieldGenderIdentityChange}
        heading="Gender Identity"
        Option={[
          "Agender",
          "Androgyne",
          "Gender Fliud",
          "Man",
          "Nonbinary",
          "Transgender",
          "Woman",
        ]}
      />
      {/* Pronouns Field */}
      <div className="">
        <h1 className="text-md tablet:mb-3 font-semibold text-[#006FEE]">
          Pronounce
        </h1>
        <div className="flex tablet:flex-col tablet:items-start gap-y-1 items-center justify-between">
          <p>No pronounce have been selected</p>
          <button onClick={handleChange} className="underline text-pink-700">
            Select Pronounce
          </button>
        </div>
        <div className="mt-6">
          {showPronounce && (
            <div className="flex flex-col gap-y-4">
              <div>
                <OptionField
                  onChange={handlePronounceNominativeChange}
                  heading="Nominative (subject)"
                  Option={["e", "he", "she", "they", "xe", "ze"]}
                />
                <p className="mt-2">
                  <span className="font-bold">They </span>booked an appoinment
                </p>
              </div>
              <div>
                <OptionField
                  onChange={handlePronounceAccusativeChange}
                  heading="Accusative (object)"
                  Option={[
                    "em",
                    "her",
                    "him",
                    "hir",
                    "them",
                    "xem",
                    "xir",
                    "xyr",
                    "zir",
                  ]}
                />
                <p className="mt-2">
                  I called <span className="font-bold">them </span>to confirm.
                </p>
              </div>
              <div>
                <OptionField
                  onChange={handlePronouncePossessiveChange}
                  heading="possessive (pronominal)"
                  Option={[
                    "eir",
                    "her",
                    "hir",
                    "his",
                    "their",
                    "xir",
                    "xyr",
                    "zir",
                  ]}
                />
                <p className="mt-2">
                  They called to confirm{" "}
                  <span className="font-bold">their </span>
                  appoinment
                </p>
              </div>
              <div>
                <OptionField
                  onChange={handlePronouncePossessive2Change}
                  heading="possessive (predicative)"
                  Option={[
                    "eirs",
                    "hers",
                    "hirs",
                    "his",
                    "their",
                    "xirs",
                    "xyrs",
                    "zirs",
                  ]}
                />
                <p className="mt-2">
                  The appoinment is <span className="font-bold">Theirs</span>
                </p>
              </div>
              <div>
                <OptionField
                  onChange={handlePronounceReflexiveChange}
                  heading="Reflexive"
                  Option={[
                    "emself",
                    "herself",
                    "himself",
                    "hirself",
                    "theirself",
                    "theirselves",
                    "themself",
                    "themsleves",
                    "xemself",
                    "xirself",
                    "xyreself",
                    "zirself",
                  ]}
                />
                <p className="mt-2">
                  They will arrive by{" "}
                  <span className="font-bold">themselves</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <TextArea
        text="Extra Information"
        onChange={(e: any) => setExtraInformation(e.target.value)}
      />
      <div>
        <h1 className="text-md font-semibold text-[#006FEE] mb-2">
          Privacy policy
        </h1>
        <RadioButton />
      </div>
      <div>
        <PhoneNumberInput onError={handlePhoneNumberError} />
        {phoneNumberError && <p className="text-red-500">{phoneNumberError}</p>}
      </div>

      <InputComp
        type="email"
        text="Email"
        label="Email"
        onChange={(e: any) => setEmail(e.target.value)}
        error={errors.email}
      />
      <InputComp
        text="Address"
        label="Address"
        onChange={(e: any) => setAddress(e.target.value)}
        error={errors.address}
      />

      <div className="flex tablet:flex-col gap-x-3">
        <InputComp
          text="City"
          label="City"
          onChange={(e: any) => setCity(e.target.value)}
          error={errors.city}
        />
        <InputComp
          text="State"
          label="State"
          onChange={(e: any) => setState(e.target.value)}
          error={errors.state}
        />
        <InputComp
          text="Postcode"
          label="Postcode"
          onChange={(e: any) => setPostcode(e.target.value)}
          error={errors.postcode}
        />
      </div>

      {/* Other Information */}

      <h1 className="text-lg font-semibold">Other Information</h1>
      <InputComp
        text="Occupation"
        label="Occupation"
        onChange={(e: any) => setOccupation(e.target.value)}
      />
      <InputComp
        text="Emergency contact"
        label="Emergency contact"
        onChange={(e: any) => setEmergencyContact(e.target.value)}
        error={errors.emergencyContact}
      />
      <InputComp
        text="Medicare number"
        label="Medicare number"
        onChange={(e: any) => setMedicareNumber(e.target.value)}
        error={errors.medicareNumber}
      />
      <InputComp
        text="Medicare reference number"
        label="Medicare reference number"
        onChange={(e: any) => setMedicareReferenceNumber(e.target.value)}
        error={errors.medicareReferenceNumber}
      />
      <InputComp
        text="DVA card number"
        label="DVA card number"
        onChange={(e: any) => setDvaCardNumber(e.target.value)}
      />
      <InputComp
        text="Reference number"
        label="Reference number"
        onChange={(e: any) => setReferenceNumber(e.target.value)}
      />
      {/* <Dropdown
        onChange={handleReferringDoctorChange}
        heading="Reffering doctor"
        Option={["Doctor1", "Doctor2", "Doctor3"]}
      /> */}
      <div>
        <h1 className="text-lg font-semibold mb-2 mt-2">
          Referral source(for marketing)
        </h1>
        {refferingType === "none" ? (
          <DropDown
            className="border-2 border-red-600 rounded-xl"
            onChange={handleReferringTypeChange}
            heading="Referring Type"
            Option={["Contact", "Other", "Patient"]}
            error={errors.referringType}
          />
        ) : (
          <DropDown
            onChange={handleReferringTypeChange}
            heading="Referring Type"
            Option={["Contact", "Other", "Patient"]}
            error={errors.referringType}
          />
        )}
        {refferingType === "none" ? (
          <p className="text-red-600 font-semibold text-sm">
            Please Select any option
          </p>
        ) : (
          <p></p>
        )}
      </div>

      {/* ------------------- Condtional Question 1 ------------------------ */}

      <div className="flex flex-col gap-4 mt-4">
        <div>
          <RadioGroup
            onChange={(e) => setRadioValue1(e.target.value)}
            label="Do you have private health insurance?"
            orientation="horizontal"
            color="warning"
          >
            <Radio value="yes">Yes</Radio>
            <Radio value="no">NO</Radio>
          </RadioGroup>
        </div>
        {radiovalue1 === "yes" && (
          <div className="flex flex-col gap-y-4">
            <h1 className="text-lg font-semibold">Private Health Insurance</h1>
            <InputComp
              text="Private Health Insurance Fund Name"
              onChange={(e: any) => setInsuranceFundName(e.target.value)}
            />
            <InputComp
              type="number"
              text="Private Health Insurance Membership Number"
              onChange={(e: any) => setMembershipNumber(e.target.value)}
            />
            <InputComp
              type="number"
              text="IRN #"
              onChange={(e: any) => setIrnNumber(e.target.value)}
            />
          </div>
        )}
      </div>

      {/* ----------------- Consitional Question 2 -------------------- */}

      <div className="flex flex-col gap-4 mt-4">
        <div>
          <RadioGroup
            onChange={(e) => setRadioValue2(e.target.value)}
            label="Are you claiming through Workers Compensation?"
            orientation="horizontal"
            color="warning"
          >
            <Radio value="yes">Yes</Radio>
            <Radio value="no">NO</Radio>
          </RadioGroup>
        </div>

        {radiovalue2 === "yes" && (
          <div className="flex flex-col gap-y-4">
            <h1 className="text-lg font-semibold">Workers Compensation</h1>
            <div>
              <InputComp
                text="Employer"
                onChange={(e: any) => setEmployer(e.target.value)}
                error={errors.Employer}
              />
            </div>
            <InputComp
              type="email"
              text="Employer Email"
              onChange={(e: any) => setEmployerEmail(e.target.value)}
            />
            <InputComp
              type="number"
              text="Employer Number"
              onChange={(e: any) => setEmployerNumber(e.target.value)}
            />
            <InputComp
              text="Insurance Company"
              onChange={(e: any) => setInsuranceCompany(e.target.value)}
              error={errors.insuranceCompany}
            />
            <InputComp
              type="email"
              text="Insurance Email"
              onChange={(e: any) => setInsuranceEmail(e.target.value)}
              error={errors.insuranceEmail}
            />
            <InputComp
              text="Case Manager Name"
              onChange={(e: any) => setCaseManager(e.target.value)}
            />
            <InputComp
              type="email"
              text="Case Manager Email"
              onChange={(e: any) => setCaseManagerEmail(e.target.value)}
            />
            <InputComp
              type="number"
              text="Case Manager Number"
              onChange={(e: any) => setCaseManagerNumber(e.target.value)}
            />
            {!day || !month || !year ? (
              <div className="flex flex-col gap-y-2 text-[#006FEE] ">
                <h1 className="font-semibold">Date Of Injury</h1>
                <div className="flex">
                  {/* Day */}
                  <select
                    className="mr-2 p-2 border border-gray-300 rounded"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                  >
                    <option value="" disabled>
                      Day
                    </option>
                    {days.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>

                  {/* Month */}
                  <select
                    className="mr-2 p-2 border border-gray-300 rounded"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                  >
                    <option value="" disabled>
                      Month
                    </option>
                    {months.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>

                  {/* Year */}
                  <select
                    className="p-2 border border-gray-300 rounded"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  >
                    <option value="" disabled>
                      Year
                    </option>
                    {years.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="text-red-400 font-semibold -mt-2 text-sm">
                  Please provide date of injury
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-y-4 text-[#006FEE] ">
                <h1 className="font-semibold">Date Of Injury</h1>
                <div className="flex">
                  {/* Day */}
                  <select
                    className="mr-2 p-2 border border-gray-300 rounded"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                  >
                    <option value="" disabled>
                      Day
                    </option>
                    {days.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>

                  {/* Month */}
                  <select
                    className="mr-2 p-2 border border-gray-300 rounded"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                  >
                    <option value="" disabled>
                      Month
                    </option>
                    {months.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>

                  {/* Year */}
                  <select
                    className="p-2 border border-gray-300 rounded"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  >
                    <option value="" disabled>
                      Year
                    </option>
                    {years.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        )}

        {radiovalue2 === "no" && <div></div>}
      </div>

      {/* ----------------- Consitional Question 3 -------------------- */}

      <div className="flex flex-col gap-4 mt-4">
        <div>
          <RadioGroup
            onChange={(e) => setRadioValue3(e.target.value)}
            label="Are you claiming through My Aged Care?"
            orientation="horizontal"
            color="warning"
          >
            <Radio value="yes">Yes</Radio>
            <Radio value="no">NO</Radio>
          </RadioGroup>
        </div>

        {radiovalue3 === "yes" && (
          <div className="flex flex-col gap-y-4">
            <h1 className="text-lg font-semibold">Aged Care</h1>
            <InputComp
              text="Provider Name"
              onChange={(e: any) => setProviderName(e.target.value)}
              error={errors.providerName}
            />
            <InputComp
              text="Case Manager Name"
              onChange={(e: any) => setCaseManagerName(e.target.value)}
            />
            <InputComp
              text="Contact Number"
              onChange={(e: any) => setContactNumber(e.target.value)}
            />
            <InputComp
              text="Case Manager Email Address"
              onChange={(e: any) => setCaseManagerEmailAgedCare(e.target.value)}
              error={errors.caseManagerEmailAgedCare}
            />
            <InputComp
              text="Account Email Address"
              onChange={(e: any) => setAccountEmail(e.target.value)}
            />
          </div>
        )}

        {radiovalue3 === "no" && <div></div>}
      </div>

      {/* ----------------- Consitional Question 4 -------------------- */}

      <div className="flex flex-col gap-4 mt-4">
        <div>
          <RadioGroup
            onChange={(e) => setRadioValue4(e.target.value)}
            label="Are you claiming through NDIS?"
            orientation="horizontal"
            color="warning"
          >
            <Radio value="yes">Yes</Radio>
            <Radio value="no">NO</Radio>
          </RadioGroup>
        </div>

        {radiovalue4 === "yes" && (
          <div className="flex flex-col gap-y-4">
            <h1 className="text-lg font-semibold">NDIS</h1>
            <InputComp
              text="NDIS Number"
              onChange={(e: any) => setNDISNumber(e.target.value)}
              error={errors.ndisNumber}
            />
            <RadioGroup
              label="Funding Management"
              orientation="horizontal"
              color="warning"
            > 
              <Radio
                onChange={(e) => handleRadioChange2(e.target.value)}
                value="Agency-Managed"
              >
                Agency Managed
              </Radio>
              <Radio
                onChange={(e) => handleRadioChange2(e.target.value)}
                value="Plan-Managed"
              >
                Plan Managed
              </Radio>
              <Radio
                onChange={(e) => handleRadioChange2(e.target.value)}
                value="Self-Managed"
              >
                Self Managed
              </Radio>
            </RadioGroup>
          </div>
        )}
        {fundingManagement === "Plan-Managed" && radiovalue4 === "yes" && (
          <div className="flex flex-col gap-y-4">
            <InputComp
              text="Plan Manager Company Name"
              onChange={(e: any) => setPlanManagerCompanyName(e.target.value)}
              error={errors.planManagerCompanyName}
            />
            <InputComp
              text="Plan Manager Contact Name"
              onChange={(e: any) => setPlanManagerContactNumber(e.target.value)}
            />
            <InputComp
              text="Plan Manager Number"
              onChange={(e: any) => setPlanManagerNumber(e.target.value)}
            />
            <InputComp
              text="Plan Manager Email"
              onChange={(e: any) => setPlanEmail(e.target.value)}
            />
            <InputComp
              text="Plan Manager Invoice Email"
              onChange={(e: any) => setPlanManagerInvoiceEmail(e.target.value)}
              error={errors.planManagerInvoiceEmail}
            />
          </div>
        )}

        {radiovalue4 === "no" && <div></div>}
      </div>
      {/* ----------------- Consitional Question 4 -------------------- */}
      <div className="flex flex-col gap-4 mt-4">
        <div>
          <RadioGroup
            onChange={(e) => setRadioValue5(e.target.value)}
            label="Do you have pensioner concession card?"
            orientation="horizontal"
            color="warning"
          >
            <Radio value="yes">Yes</Radio>
            <Radio value="no">NO</Radio>
          </RadioGroup>
        </div>

        {radiovalue5 === "yes" && (
          <div className="flex flex-col gap-y-4">
            <h1 className="text-lg font-semibold">Pensioner Concession Card</h1>
            <InputComp
              text="CRN #"
              onChange={(e: any) => setCRN(e.target.value)}
              error={errors.crn}
            />
            {!day2 || !month2 || !year2 ? (
              <div className="flex flex-col gap-y-4 text-[#006FEE] ">
                <h1 className="font-semibold">Expiry Date</h1>
                <div className="flex">
                  {/* Day */}
                  <select
                    className="mr-2 p-2 border border-gray-300 rounded"
                    value={day2}
                    onChange={(e) => setDay2(e.target.value)}
                  >
                    <option value="" disabled>
                      Day
                    </option>
                    {days2.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>

                  {/* Month */}
                  <select
                    className="mr-2 p-2 border border-gray-300 rounded"
                    value={month2}
                    onChange={(e) => setMonth2(e.target.value)}
                  >
                    <option value="" disabled>
                      Month
                    </option>
                    {months2.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>

                  {/* Year */}
                  <select
                    className="p-2 border border-gray-300 rounded"
                    value={year2}
                    onChange={(e) => setYear2(e.target.value)}
                  >
                    <option value="" disabled>
                      Year
                    </option>
                    {years2.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="text-red-400 font-semibold -mt-2 text-sm">
                  Please provide Expiry date
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-y-4 text-[#006FEE] ">
                <h1 className="font-semibold">Expiry Date</h1>
                <div className="flex">
                  {/* Day */}
                  <select
                    className="mr-2 p-2 border border-gray-300 rounded"
                    value={day2}
                    onChange={(e) => setDay2(e.target.value)}
                  >
                    <option value="" disabled>
                      Day
                    </option>
                    {days2.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>

                  {/* Month */}
                  <select
                    className="mr-2 p-2 border border-gray-300 rounded"
                    value={month2}
                    onChange={(e) => setMonth2(e.target.value)}
                  >
                    <option value="" disabled>
                      Month
                    </option>
                    {months2.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>

                  {/* Year */}
                  <select
                    className="p-2 border border-gray-300 rounded"
                    value={year2}
                    onChange={(e) => setYear2(e.target.value)}
                  >
                    <option value="" disabled>
                      Year
                    </option>
                    {years2.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        )}

        {radiovalue5 === "no" && <div></div>}
      </div>

      <div className="flex items-center justify-end ">
        <Button
          color="primary"
          onClick={handleSubmit}
          className="px-10 py-5 text-lg font-semibold"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
