import React, { useState } from "react";
import OptionField from "@/components/OptionField";

function Pronounce() {
  const [showPronounce, setShowPronounce] = useState(false);

  const handleChange = (value: any) => {
    setShowPronounce(!showPronounce);
  };

  return (
    <div className="">
      <h1 className="text-md tablet:mb-3 font-semibold text-[#006FEE]">Pronounce</h1>
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
                heading="Nominative (subject)"
                Option={["e", "he", "she", "they", "xe", "ze"]}
              />
              <p className="mt-2">
                <span className="font-bold">They </span>booked an appoinment
              </p>
            </div>
            <div>
              <OptionField
                heading="Accusative (object)"
                Option={["em", "her", "him", "hir", "them", "xem", "xir", "xyr", "zir"]}
              />
              <p className="mt-2">
                I called <span className="font-bold">them </span>to confirm.
              </p>
            </div>
            <div>
              <OptionField
                heading="possessive (pronominal)"
                Option={["eir", "her", "hir", "his", "their", "xir", "xyr", "zir"]}
              />
              <p className="mt-2">
                They called to confirm <span className="font-bold">their </span>
                appoinment
              </p>
            </div>
            <div>
              <OptionField
                heading="possessive (predicative)"
                Option={["eirs", "hers", "hirs", "his", "their", "xirs", "xyrs", "zirs"]}
              />
              <p className="mt-2">
                The appoinment is <span className="font-bold">Theirs</span>
              </p>
            </div>
            <div>
              <OptionField
                heading="Reflexive"
                Option={["emself", "herself", "himself", "hirself", "theirself", "theirselves", "themself", "themsleves", "xemself", "xirself", "xyreself", "zirself"]}
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
  );
}

export default Pronounce;