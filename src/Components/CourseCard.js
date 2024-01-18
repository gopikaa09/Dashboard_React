import React from "react";

function CourseCard(props) {
  return (
    <div class="flex justify-between items-center bg-grey-default rounded-2xl px-3.5 py-1.5 shadow">
      <div class="leading-5">
        <p class="font-semibold">{props.coursename}</p>
        <p class="opacity-70">{props.CourseCount}</p>
      </div>
      <div>
        <ion-icon
          name="desktop-outline"
          class="bg-green-100 p-2 rounded-3xl size-4"
        ></ion-icon>
      </div>
    </div>
  );
}

export default CourseCard;
