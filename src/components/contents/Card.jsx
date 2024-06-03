import React from "react";
import './styles/_cards.css'

function Card(props) {
  return (
    
    <div id="travel-card" className="travel-card rounded-[17px] relative flex flex-col justify-center items-center overflow-hidden transition-all hover:-translate-y-2 duration-300 hover:shadow-2xl py-[30px] px-[18px]">

      <img className=" absolute h-full w-full object-cover " src={props.img} alt="avatar_img" />

      <div className=" relative flex flex-col justify-center items-center w-full gap-8">

        <div className="relative right-[42px] flex items-start justify-start h-auto text-[#fff] w-full">
          <span className=" bg-[#F5811E] flex items-center justify-center w-[186.792px] text-white" style={{ fontWeight: "400", fontSize: "17px" }}>
            {props.discount1} <strong style={{ fontWeight: "600", fontSize: "16px", color: "#fff" }}>&nbsp;&nbsp;{props.discount}&nbsp;&nbsp;</strong> {props.discountOff}
          </span>
        </div>

        <span className="book-now  ">
          <a className="btn" href="http://wa.me/message/S6EJ6JIZTGGFM1">{props.book}</a>
        </span>

        <div className="place w-full ">

          <div className="flex sm:w-[337px]">
            <label className="text-left uppercase w-full">
              <strong>{props.airLine}</strong>
              <br />
              {props.flightType}
              <br />
              {props.tripType}
            </label>
          </div>

          <span className="txt text-right uppercase sm:w-[100px]">
            {props.priceTag}
            <br />
            {props.price}
          </span>

        </div>

      </div>

    </div>
    
  );
}

export default Card;
