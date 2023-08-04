"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { dollar, person } from "@/assets";
import Label from "./Label";
import { motion } from "framer-motion";

const tipRates = [
  { name: "5", value: "5%" },
  { name: "10", value: "10%" },
  { name: "15", value: "15%" },
  { name: "25", value: "25%" },
  { name: "50", value: "50%" },
];

export default function Tip() {
  const [error, setError] = useState({
    name: "Can't be zero",
    isShown: false,
  });
  const [error2, setError2] = useState({
    name: "Can't be zero",
    isShown: false,
  });
  const [bill, setBill] = useState("");
  const [selectedTip, setSelectedTip] = useState(null);
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const handleTipClick = (tip) => {
    setSelectedTip(tip);
    setCustomTip("");
  };

  const handleCustomTipChange = (e) => {
    setCustomTip(e.target.value);
    setSelectedTip(null);
  };

  useEffect(() => {
    if (bill && selectedTip && people) {
      let totalTip = Number(bill) * (Number(selectedTip) / 100);
      let totalAmount = Number(bill) + totalTip;
      let tipPerPerson = totalTip / Number(people);
      let totalPerPerson = totalAmount / Number(people);

      tipPerPerson = tipPerPerson.toFixed(2);
      totalPerPerson = totalPerPerson.toFixed(2);

      setTipAmount(tipPerPerson);
      setTotal(totalPerPerson);
    } else if (bill && customTip && people) {
      let totalTip = Number(bill) * (Number(customTip) / 100);
      let totalAmount = Number(bill) + totalTip;
      let tipPerPerson = totalTip / Number(people);
      let totalPerPerson = totalAmount / Number(people);

      tipPerPerson = tipPerPerson.toFixed(2);
      totalPerPerson = totalPerPerson.toFixed(2);
      setTipAmount(tipPerPerson);
      setTotal(totalPerPerson);
    } else {
      setTipAmount(0);
      setTotal(0);
    }
  }, [bill, selectedTip, customTip, people]);

  const reset = () => {
    setBill("");
    setSelectedTip(null);
    setCustomTip("");
    setPeople("");
    setTipAmount(0);
    setTotal(0);
    setError({
      name: "Can't be zero",
      isShown: false,
    });
    setError2({
      name: "Can't be zero",
      isShown: false,
    });
  };

  return (
    <section className="rounded-[15px_15px_0_0] sm:rounded-[25px] bg-white p-8 flex flex-col sm:flex-row gap-8 sm:gap-12 sm:justify-between max-w-[920px] mx-auto w-full">
      <div className="sm:p-4 sm:max-w-[380px] flex flex-col gap-10 w-full">
        <label
          htmlFor="bill"
          className="flex flex-col gap-[6px] relative"
        >
          <Label title={"Bill"} />
          <Image
            src={dollar}
            alt="dollar"
            width={9.84}
            height={15.46}
            className="absolute left-2 transform pointer-events-none bottom-0 -translate-y-5"
          />
          <input
            type="number"
            name="bill"
            value={bill}
            onChange={(e) => {
              if (Number(e.target.value) <= 0) {
                setBill("");
                e.target.setCustomValidity("Can't be zero");
                setError2({
                  name: "Can't be zero",
                  isShown: true,
                });
              } else {
                e.target.setCustomValidity("");
                setBill(e.target.value);
                setError2({
                  name: "",
                  isShown: false,
                });
              }
            }}
            className="text-right pr-2 block w-full px-3 py-2 bg-inputBG border-[2px] outline-none border-transparent rounded-[5px] text-2xl font-bold text-inputColor shadow-sm placeholder-slate-400 focus:border-inputActive
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-invalid invalid:text-invalid
      focus:invalid:border-invalid focus:invalid:ring-invalid transition-all duration-150 ease"
            placeholder="0"
          />
          {error2.isShown && (
            <p className="text-invalid text-base font-bold absolute right-0">
              {error2.name}
            </p>
          )}
        </label>

        <div className="flex flex-col gap-4 relative">
          <Label title={"Select Tip %"} />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {tipRates.map((tipRate, index) => {
              return (
                <button
                  key={index}
                  className="bg-inputColor text-white rounded-[5px] px-4 py-2 text-2xl font-bold hover:bg-inputActive transition-all duration-200 hover:text-inputColor data-[selected='true']:bg-inputActive data-[selected='true']:text-inputColor"
                  name={tipRate.name}
                  data-selected={selectedTip === tipRate.name}
                  onClick={() => handleTipClick(tipRate.name)}
                >
                  {tipRate.value}
                </button>
              );
            })}
            <input
              type="number"
              name="customTip"
              value={customTip}
              onChange={(e) => {
                handleCustomTipChange(e);
              }}
              className="text-right bg-inputBG border-[2px] outline-none border-transparent rounded-[5px] text-2xl font-bold text-inputColor shadow-sm placeholder-slate-400 focus:border-inputActive
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 transition-all duration-150 ease"
              placeholder="Custom"
            />
          </div>
        </div>

        <label
          htmlFor="bill"
          className="flex flex-col gap-[6px] relative"
        >
          <Label title={"Number of People"} />
          <Image
            src={person}
            alt="person"
            width={9.84}
            height={15.46}
            className="absolute left-2 transform pointer-events-none bottom-0 -translate-y-5"
          />
          <input
            type="number"
            name="people"
            value={people}
            onChange={(e) => {
              if (Number(e.target.value) <= 0) {
                setPeople("");
                e.target.setCustomValidity("Can't be zero");
                setError({
                  name: "Can't be zero",
                  isShown: true,
                });
              } else {
                e.target.setCustomValidity("");
                setPeople(e.target.value);
                setError({
                  name: "",
                  isShown: false,
                });
              }
            }}
            className="text-right pr-2 block w-full px-3 py-2 bg-inputBG border-[2px] outline-none border-transparent rounded-[5px] text-2xl font-bold text-inputColor shadow-sm placeholder-slate-400 focus:border-inputActive
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-invalid invalid:text-invalid
      focus:invalid:border-invalid focus:invalid:ring-invalid transition-all duration-150 ease"
            placeholder="0"
          />
          {error.isShown && (
            <p className="text-invalid text-base font-bold absolute right-0">
              {error.name}
            </p>
          )}
        </label>
      </div>
      <div className="bg-inputColor sm:max-w-[413px] w-full rounded-[15px] sm:p-10 p-9">
        <div className="flex flex-col justify-between gap-8 sm:gap-0 sm:h-full">
          <div className="flex flex-col gap-10">
            <div className="text-white flex justify-between items-center">
              <h1 className="text-base font-bold flex flex-col gap-1">
                Tip amount
                <span className="text-labelGrey text-[13px]">/ person</span>
              </h1>
              <h1 className="text-[32px] sm:text-5xl font-bold text-inputActive">
                ${tipAmount}
              </h1>
            </div>
            <div className="text-white flex justify-between items-center">
              <h1 className="text-base font-bold flex flex-col gap-1">
                Total
                <span className="text-labelGrey text-[13px]">/ person</span>
              </h1>
              <h1 className="text-[32px] sm:text-5xl font-bold text-inputActive">${total}</h1>
            </div>
          </div>

          <motion.button
            type="button"
            className="bg-inputActive text-inputColor font-bold text-[20px] rounded-[5px] hover:bg-[#9FE8DF] transition-all duration-200 py-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            onClick={() => reset()}
          >
            RESET
          </motion.button>
        </div>
      </div>
    </section>
  );
}
