import React from "react";

function MentorCard(props) {
  return (
    <div className="flex justify-between items-center gap-2 bg-grey-default p-2.5 rounded-2xl shadow">
      <div className="flex items-center gap-2 flex-1">
        <img
          src="../images/person456.jpg"
          alt="person"
          className="size-8 rounded-2xl"
        />
        <p className="font-semibold">{props.mentorName}</p>
      </div>
      <p className="flex-1">{props.CourseName}</p>
      <p className="flex-1">{props.CourseCount}</p>
      <p className="flex-1">{props.FollowerCount}</p>
      <div className="flex justify-between flex-1 items-center gap-2">
        <button className="bg-yellow-dark py-2 px-5 rounded-md">Follow</button>
        <ion-icon
          name="mail-outline"
          className="bg-yellow-light size-4 p-1.5 rounded"
        ></ion-icon>
        <ion-icon
          name="ellipsis-vertical-outline"
          className="py-2 size-4"
        ></ion-icon>
      </div>
    </div>
  );
}

export default MentorCard;
