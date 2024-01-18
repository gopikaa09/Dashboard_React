import React from "react";

function CardComponent(props) {
  console.log(props);
  return (
    <div
      className={`bg-${props.bgcolor} py-3 px-4 rounded-xl leading-9 shadow`}
    >
      <div className="flex justify-between items-center">
        <p className="text-tiny opacity-50">
          <span className={`text-${props.bgcolor} opacity-50`}>Start: </span>
          {props.date}
        </p>
        <p>
          <ion-icon
            name="calendar-outline"
            className={`bg-grey-default p-12 rounded-3xl size-10 text-indigo-dark`}
          ></ion-icon>
        </p>
      </div>
      <p className={`text-${props.color} font-extrabold mb-2.5 text-sm`}>
        {props.heading}
      </p>
      <h6 className="text-xs font-bold leading-4 mr-5">{props.subHeading}</h6>
      <p className="text-tiny opacity-70 my-2.5 leading-4">
        Finally a comprehensive guide to using sketch for designing...
      </p>

      <div className="w-full rounded-full h-0.5 bg-red-100">
        <div
          className={`h-0.5 rounded-full after:content-[] bg-${props.color}`}
          style={{ width: `${props.progress}` }}
        ></div>
      </div>
      <div className="flex justify-between text-xs -mb-2.5">
        <p className="font-semibold">Progress</p>
        <p>{props.progress}</p>
      </div>
    </div>
  );
}

export default CardComponent;
