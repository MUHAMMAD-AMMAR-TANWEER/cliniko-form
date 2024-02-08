"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { TbMathGreater } from "react-icons/tb";
import OptionField from "@/components/OptionField";
import DatePicker from "@/components/DatePicker";
import InputComp from "@/components/InputComp";
import React, { useState } from "react";
import TextArea from "@/components/TextArea";
import RadioButton from "@/components/RadioButton";
import Pronounce from "@/components/Pronounce";
import { Button } from "@nextui-org/react";
import DropDown from "@/components/DropDown";
import ConditionalRadioButton from "@/components/CondtionalRadioButton";
import ConditionalRadioButton2 from "@/components/ConditionalRadioButton2";
import ConditionalRadioButton3 from "@/components/ConditionalRadioButton3";
import ConditionalRadioButton4 from "@/components/ConditionalRadioButton4";
import ConditionalRadioButton5 from "@/components/ConditionalRadioButton5";
import PhoneNumberInput from "@/components/PhoneNumberInput";

function Page1() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showPronounce, setShowPronounce] = useState(false);
  //@ts-ignore
  const patientId: any = searchParams.get("patientId");
  console.log("here is the search", patientId);

  const [formData, setFormData] = useState<any>({});

  const [RefferalTypeError, setRefferalTypeError] = useState<string | null>(
    null
  );

  const handleRefferalTypeChange = (
    selectedOption: string,
    error: string | null
  ) => {
    setRefferalTypeError(error);
    // Handle the selected option as needed
  };

  const handleChange = (value: any) => {
    setShowPronounce(!showPronounce);
  };

  const [phoneNumberError, setPhoneNumberError] = useState<string | null>(null);

  const handlePhoneNumberError = (error: string | null) => {
    console.log(error, "error is here");
    setPhoneNumberError(error);
  };

  const [dobError, setDOBError] = useState<string | null>(null);

  const handleDOBError = (error: string | null) => {
    setDOBError(error);
  };
  const [optionFieldError, setOptionFieldError] = useState<string | null>(null);

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

    // Add other fields here with initial empty strings
    // ...
  });

  const [radioValue, setRadioValue] = useState(""); // State to store radioValue

  const [title, setTitle] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [preferredFirstname, setPreferredFirstname] = useState("");
  const [sex, setSex] = useState("");
  const [sexSpecify, setSexSpacify] = useState("");
  const [genderIdentity, setGenderIdentity] = useState("");
  const [GenderIdentitySpecify, setGenderIdentitySpacify] = useState("");
  const [pronoun, setPronoun] = useState(""); // Assuming Pronounce component returns a string
  const [extraInformation, setExtraInformation] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState("");
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
  const [referringDoctor, setReferringDoctor] = useState("");
  const [referralSource, setReferralSource] = useState("");
  const [referringType, setReferringType] = useState("");

  // Pronounce
  const [selectedPronounceValues, setSelectedPronounceValues] = useState<
    Record<string, string>
  >({});

  const [nominative, setnominative] = useState("");
  const [accusative, setaccusative] = useState("");
  const [possessivePronomial, setpossessivePronomial] = useState("");
  const [possessivePredicative, setpossessivePredicative] = useState("");
  const [reflexive, setreflexive] = useState("");

  // ConditionalRadioButton
  const [insuranceFundName, setInsuranceFundName] = useState("");
  const [insuranceMembershipNumber, setInsuranceMembershipNumber] =
    useState("");
  const [IRN, setIRN] = useState("");

  // ConditionalRadioButton2
  const [employer, setEmployer] = useState("");
  const [employerError, setEmployerError] = useState<string>("");

  const [employerEmail, setEmployerEmail] = useState("");
  const [employerNumber, setEmployerNumber] = useState("");
  const [caseManager, setCaseManager] = useState("");
  const [caseManagerNumber, setCaseManagerNumber] = useState("");
  const [caseManagerEmail, setCaseManagerEmail] = useState("");
  const [insuranceCompany, setInsuranceCompany] = useState("");
  const [insuranceEmail, setInsuranceEmail] = useState("");

  // ConditionalRadioButton3
  const [providerName, setproviderName] = useState("");
  const [caseManagerName, setcaseManagerName] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [caseManagerEmail2, setcaseManagerEmail2] = useState("");
  const [accountEmail, setaccountEmail] = useState("");

  // ConditionalRadioButton4
  const [ndisNumber, setndisNumber] = useState("");
  const [planManagerCompanyName, setplanManagerCompanyName] = useState("");
  const [planManagerContactNumber, setplanManagerContactNumber] = useState("");
  const [planManagerNumber, setplanManagerNumber] = useState("");
  const [planManagerEmail, setplanManagerEmail] = useState("");
  const [planManagerInvoiceEmail, setplanManagerInvoiceEmail] = useState("");

  // ConditionalRadioButton5
  const [crn, setcrn] = useState("");

  const dob = useSelector((state: any) => state.dob);
  const phoneNumber = useSelector((state: any) => state.phoneNumber);
  const finalPhoneNumber = phoneNumber.slice(-1);
  const expiryDate = useSelector((state: any) => state.expiryDate);
  const dateOfInjury = useSelector((state: any) => state.dateOfInjury);

  const handleRadioButtonChange = (value: any) => {
    setPrivacyPolicy(value);
  };

  const handleReferringDoctorChange = (value: any, error: string | null) => {
    setRefferalTypeError(error);
    setReferringDoctor(value);
  };

  const handleReferringTypeChange = (value: any) => {
    setReferringType(value);
  };

  const handleConditionalFieldsChange = (fields: any) => {
    setInsuranceFundName(fields.insuranceFundName);
    setInsuranceMembershipNumber(fields.membershipNumber);
    setIRN(fields.irnNumber);

    console.log("ConditionalRadio", fields.insuranceFundName);
  };

  const handleConditional2FieldsChange = (fields: any) => {
    setFormData((prevFormData: any) => ({ ...prevFormData, ...fields }));
    setEmployer(fields.Employer);
    setEmployerEmail(fields.EmployerEmail);
    setCaseManager(fields.caseManager);
    setCaseManagerNumber(fields.caseManagerNumber);
    setCaseManagerEmail(fields.caseManagerEmail);
    setEmployerNumber(fields.employerNumber);
    setInsuranceCompany(fields.insuranceCompany);
    setInsuranceEmail(fields.insuranceEmail);
  };

  const handleConditional3FieldsChange = (fields: any) => {
    setproviderName(fields.providerName);
    setcaseManagerName(fields.caseManagerName);
    setcontactNumber(fields.contactNumber);
    setcaseManagerEmail2(fields.caseManagerEmail);
    setaccountEmail(fields.accountEmail);
  };
  const handleConditional4FieldsChange = (fields: any) => {
    setndisNumber(fields.ndisNumber);
    setplanManagerCompanyName(fields.planManagerCompanyName);
    setplanManagerContactNumber(fields.planManagerContactNumber);
    setplanManagerNumber(fields.planManagerNumber);
    setplanManagerEmail(fields.planManagerEmail);
    setplanManagerInvoiceEmail(fields.planManagerInvoiceEmail);
  };

  const handleConditional5FieldsChange = (fields: any) => {
    setcrn(fields.crn);
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

  console.log("privacypolicy", privacyPolicy);

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


    if (!sex) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        sex: "Sex is Required!",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, sex: "" }));
    }

    if (!phoneNumber) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Phone Number is Required!",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: "" }));
    }

    if (!email) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "email is Required!",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    if (!address) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        address: "address is Required!",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, address: "" }));
    }

    if (!city) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        city: "City is Required!",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, city: "" }));
    }

    if (!state) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        state: "state is Required!",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, state: "" }));
    }

    if (!postcode) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        postcode: "postcode is Required!",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, postcode: "" }));
    }

    if (!emergencyContact) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        emergencyContact: "Emergency Contact is Required!",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, emergencyContact: "" }));
    }

    if (!medicareNumber) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        medicareNumber: "Medicare Number is Required!",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, medicareNumber: "" }));
    }

    if (!medicareReferenceNumber) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        medicareReferenceNumber: "Medicare Reference Number is Required!",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        medicareReferenceNumber: "",
      }));
    }

    if (!referringType) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        referringType: "Referring Type is Required!",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, referringType: "" }));
    }

    // Add similar validation logic for other fields

    return formIsValid;
  };

  const handleSubmit = async () => {
    // Access the form values and perform necessary actions
    //@ts-ignore
    // const requiredFields = [
    //   "title",
    //   "firstname",
    //   "lastname",
    //   "dob",
    //   "sex",
    //   "email",
    //   "address",
    //   "city",
    //   "state",
    //   "postcode",
    //   "emergencyContact",
    //   "medicareNumber",
    //   "medicareReferenceNumber",
    //   "referringType",
    // ];
    // const newErrors: Record<string, string> = {};

    // requiredFields.forEach((field) => {
    //   if (!eval(field)) {
    //     newErrors[field] = `Please fill in ${field}`;
    //   }
    // });

    // // Check if any errors occurred
    // if (Object.keys(newErrors).length > 0) {
    //   setErrors(newErrors);
    //   return;
    // }

    const isFormValid = validateFields();
console.log( "Radio VAlue ",radioValue)
  

    const patientId: any = searchParams.get("patientId");
    console.log("here is the search", patientId);
    if (privacyPolicy === "accepted") {
      console.log("Submitted Successfully!");
    } else {
      console.log("Please accept privacy policy!", patientId);
    }
    const requestBody = {
      patientId,
      nominative,
      accusative,
      possessivePronomial,
      possessivePredicative,
      reflexive,
      crn,
      ndisNumber,
      planManagerCompanyName,
      planManagerContactNumber,
      planManagerNumber,
      planManagerInvoiceEmail,
      providerName,
      caseManagerName,
      contactNumber,
      caseManagerEmail2,
      accountEmail,
      employer,
      employerEmail,
      caseManager,
      caseManagerNumber,
      caseManagerEmail,
      employerNumber,
      insuranceCompany,
      insuranceEmail,
      title,
      firstname,
      planManagerEmail,
      lastname,
      preferredFirstname,
      dob,
      expiryDate,
      sex,
      genderIdentity,
      pronoun,
      extraInformation,
      privacyPolicy,
      finalPhoneNumber,
      dateOfInjury,
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
      referringDoctor,
      referralSource,
      referringType,

      insuranceFundName,
      insuranceMembershipNumber,
      IRN,
    };
    // router.push(`/addpayment?patientId=${patientId}&&name=${firstname}+${lastname}&&email=${email}&&city${city}&&state=${state}`);
    console.log(requestBody);
    if (privacyPolicy === "accepted" && isFormValid) {
      try {
        const response = await fetch(
          "https://d875-2406-d00-cccf-b461-cba-91b3-e1f2-f925.ngrok-free.app/updatePaitent",
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
  console.log("SEXXXX", sex);
  return (
    <div>
      <div className="relative flex flex-col gap-y-6">
        <div className="flex tablet:flex-col gap-x-3">
          <InputComp
            text="Title"
            label="Title"
            onChange={(e: any) => setTitle(e.target.value)}
            error={errors.title}
          />
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
          {dobError && (
            <p className="text-red-500 text-xs italic">{dobError}</p>
          )}
        </div>
        <div>
          <OptionField
            onChange={handleOptionFieldSexChange}
            heading="sex"
            Option={["Male", "Female", "AFAB", "AMAB"]}
          />
          {optionFieldError && (
            <p className="text-red-500">{optionFieldError}</p>
          )}
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
          <RadioButton onChange={handleRadioButtonChange} />
        </div>
        {/* Related Patient */}
        <div>
          <PhoneNumberInput onError={handlePhoneNumberError} />
          {phoneNumberError && (
            <p className="text-red-500">{phoneNumberError}</p>
          )}
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

        {/* <DropDown
          onChange={handleReferringDoctorChange}
          heading="Reffering doctor"
          Option={["Doctor1", "Doctor2", "Doctor3"]}
        /> */}

        <div>
          <h1 className="text-lg font-semibold mb-2 mt-2">
            Referral source(for marketing)
          </h1>
          <DropDown
            onChange={handleReferringTypeChange}
            heading="Referring Type"
            Option={["Contact", "Other", "Patient"]}
          />
        </div>

        {/* <ConditionalRadioButton5
          onFieldsChange={handleConditional5FieldsChange}
        />
        <ConditionalRadioButton
          onFieldsChange={handleConditionalFieldsChange}
        />
        <ConditionalRadioButton2
          onFieldsChange={handleConditional2FieldsChange}
          setRadioValue={setRadioValue}
        />
        <ConditionalRadioButton3
          onFieldsChange={handleConditional3FieldsChange}
        />
        <ConditionalRadioButton4
          onFieldsChange={handleConditional4FieldsChange}
        /> */}

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
    </div>
  );
}

export default Page1;
