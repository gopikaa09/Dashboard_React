import React from "react";
import MentorCard from "../Components/MentorCard";

function MentorContainer() {
  return (
    <div className="bg-sky-light flex flex-col gap-2 p-4 rounded-xl col-span-3 text-tiny">
      <div className="flex justify-between">
        <h3 className="text-sm font-bold">Top Mentors</h3>
        <p className="viewall">View All</p>
      </div>
      <MentorCard
        mentorName="Shine Smith"
        CourseName="UI/UX Designer"
        CourseCount="18 Course"
        FollowerCount="1200 Follower"
      />
      <MentorCard
        mentorName="Mikel"
        CourseName="Marketer"
        CourseCount="24 Course"
        FollowerCount="900 Follower"
      />
      <MentorCard
        mentorName="Tohid golakar"
        CourseName="Android Developer"
        CourseCount="64 Course"
        FollowerCount="1590 Follower"
      />
      <MentorCard
        mentorName="Md Sakib"
        CourseName="Frontend Devloper"
        CourseCount="85 Course"
        FollowerCount="3400 Follower"
      />
    </div>
  );
}

export default MentorContainer;
