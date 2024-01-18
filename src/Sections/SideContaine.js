import React from "react";
// import CardsContainer from "./CardsContainer";
import CategoriesContainer from "./CategoriesContainer";
import MentorContainer from "./MentorContainer";
import CardComponent from "../Components/CardComponent";

function SideContaine() {
  return (
    <div className="col-span-4 grid grid-cols-4 gap-x-5 gap-y-4 py-4">
      <div className="col-span-full">
        <div className="flex justify-between gap-4 items-center mt-4">
          <input
            type="text"
            className="bg-grey-light w-5/12 rounded-xl px-2 py-2 text-tiny shadow-sm"
            placeholder="&#xF002; Search here"
            style={{ fontFamily: "Arial, FontAwesome" }}
          />

          <div className="flex justify-around items-center gap-4">
            <ion-icon name="notifications-outline"></ion-icon>
            <img
              src="../images/person456.jpg"
              className="w-7 h-7 rounded-2xl"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="col-span-full flex justify-between">
        <h5 className="text-base font-bold">Course in Progress</h5>
        <p className="text-sm">View All</p>
      </div>
      <CardComponent
        date="Dec,15,2020"
        heading="App Design"
        subHeading="Learn App design from our expert trainer"
        progress="20%"
        color="indigo-dark"
        bgcolor="indigo-light"
      />
      <CardComponent
        date="Dec,16,2020"
        heading="Web Design"
        subHeading="Learn Web design from our expert trainer"
        progress="50%"
        // color="red-dark"
        // bgcolor="red-light"
        color="red-dark"
        bgcolor="red-light"
      />
      <CardComponent
        date="Dec,17,2020"
        heading="Dashboard"
        subHeading="Learn Typography from our expert trainer"
        progress="80%"
        color="blue-dark"
        bgcolor="blue-light"
      />
      <div className="bg-yellow-light rounded-xl shadow">
        <div className="flex flex-col gap-5 justify-between items-center p-4">
          <ion-icon
            name="calendar-number-outline"
            className="size-10 bg-grey-light p-2 rounded-2xl text-yellow-dark"
          ></ion-icon>
          <p className="text-center text-sm">
            You have 5 days left on your subsciption
          </p>
          <button className="bg-yellow-dark px-6 py-2 rounded-md text-sm">
            Upgrade to Pro
          </button>
        </div>
      </div>
      <CategoriesContainer />
      <MentorContainer />
    </div>
  );
}

export default SideContaine;
