import React, { useState } from "react";
import Lion from "./contents/lion";
import Book from "./contents/Book";
import Card from "./contents/Card";
import contacts from "../contacts";
import morecontacts from "../more_contacts";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function Main() {
  const [toggle, setToggle] = useState(false);

  function openCard() {
    setToggle(true);
  }

  function closeCards() {
    setToggle(false);
  }

  function createCard(contact) {
    return (
      <Card
        key={contact.id}
        discount1={contact.discount1}
        discount={contact.discount}
        discountOff={contact.discountOff}
        book={contact.book}
        img={contact.imgURL}
        airLine={contact.airLine}
        flightType={contact.flightType}
        tripType={contact.tripType}
        priceTag={contact.priceTag}
        price={contact.price}
      />
    );
  }

  function createMoreCards(moreContact) {
    return (
      <Card
        key={moreContact.id}
        discount1={moreContact.discount1}
        discount={moreContact.discount}
        discountOff={moreContact.discountOff}
        book={moreContact.book}
        img={moreContact.imgURL}
        airLine={moreContact.airLine}
        flightType={moreContact.flightType}
        tripType={moreContact.tripType}
        priceTag={moreContact.priceTag}
        price={moreContact.price}
      />
    );
  }

  return (
    <div className="relative flex flex-col justify-center items-center w-full 2xl:w-[1280px] my-[70px]">
      <Lion />

      <div className="relative flex flex-col justify-center items-center gap-y-9 w-full px-[15px] at500:px-[20px] md:px-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 silver:grid-cols-3 gap-x-9 gap-y-9 w-full mt-[50px]">
          {contacts.map(createCard)}
        </div>

        {toggle && (
          <div className="grid grid-cols-1 md:grid-cols-2 silver:grid-cols-3 gap-x-9 gap-y-9 w-full">
            {morecontacts.map(createMoreCards)}
          </div>
        )}

        <div className="cursor-pointer">
          {toggle ? (
            <span onClick={closeCards} className="flex justify-center items-center gap-3 text-[#F5811E] text-[20px] leading-4 font-semibold capitalize">
              see less
              <IoIosArrowUp size={30} className="text-[#F5811E]" />
            </span>
          ) : (
            <span onClick={openCard} className="flex justify-center items-center gap-3 text-[#F5811E] text-[20px] leading-4 font-semibold capitalize">
              see more
              <IoIosArrowDown size={30} className="text-[#F5811E]" />
            </span>
          )}
        </div>
      </div>
      
      <Book />
    </div>
  );
}

export default Main;
