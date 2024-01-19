import React from "react";
import useApicall from "../CustomHooks/useApicall";
import SideNav from "../Sections/SideNav";

function MainApiComponent() {
  const url = "http://localhost:5005";
  const { data: CourseData } = useApicall(`${url}/PresentCourses`);
  const { data: CategoriesData } = useApicall(`${url}/categories`);
  const { data: MentorsData } = useApicall(`${url}/Topmentors`);
  console.log(CourseData, CategoriesData, MentorsData);
  return (
    <div className="grid grid-cols-5 gap-4 mr-4 xs:grid-cols-3 xs:m-2 sm:grid-cols-3 sm:mx-5 lg:grid-cols-4">
      <SideNav />
      <div className="sideContainer col-span-4 grid grid-cols-4 gap-x-5 gap-y-4 py-4 sm:grid-cols-4 lg:grid-cols-3 lg:col-span-3">
        <div className="col-span-full">
          <div className="flex justify-between gap-4 items-center mt-1">
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

        {CourseData &&
          CourseData.map((val, ind) => {
            console.log(val);
            return (
              <div
                // className={` py-3 px-4 rounded-xl leading-8 shadow
                // ${
                //   ind === 0
                //     ? "bg-indigo-light"
                //     : ind === 1
                //     ? "bg-red-light"
                //     : "bg-blue-light"
                // }
                // sm:col-span-2
                // xs:col-span-full`}
                className={`py-3 px-4 rounded-xl leading-8 shadow
                 bg-${val.bgcolor}
                  sm:col-span-2
                  xs:col-span-full`}
              >
                <div className="flex justify-between items-center">
                  <p className="text-tiny opacity-50 mb-2.5">
                    <span
                      // class={`opacity-50 ${
                      //   ind === 0
                      //     ? "text-indigo-dark"
                      //     : ind === 1
                      //     ? "text-red-dark"
                      //     : "text-blue-dark"
                      // }`}
                      className={`opacity-50 text-${val.color}`}
                    >
                      Start:
                    </span>
                    {val.startDate}
                  </p>
                  <p>
                    <ion-icon
                      name={val.CourseIcon}
                      // class={`bg-grey-default p-2 rounded-3xl size-5 ${
                      //   ind === 0
                      //     ? "text-indigo-dark"
                      //     : ind === 1
                      //     ? "text-red-dark"
                      //     : "text-blue-dark"
                      // }`}
                      class={`bg-grey-default p-2 rounded-3xl size-5 text-${val.color}`}
                    ></ion-icon>
                  </p>
                </div>
                <p
                  // className={` font-extrabold mb-2.5 text-sm ${
                  //   ind === 0
                  //     ? "text-indigo-dark"
                  //     : ind === 1
                  //     ? "text-red-dark"
                  //     : "text-blue-dark"
                  // }`}
                  className={`font-extrabold mb-2.5 text-sm text-${val.color}`}
                >
                  {val.title}
                </p>
                <h6 className="text-xs font-bold leading-4 mr-5">
                  {val.description}
                </h6>
                <p className="text-tiny opacity-70 my-2.5 leading-4">
                  {val.about}
                </p>

                <div
                  // className={`w-full rounded-full h-0.5 ${
                  //   ind === 0
                  //     ? "bg-indigo-200"
                  //     : ind === 1
                  //     ? "bg-red-200"
                  //     : "bg-blue-200"
                  // }`}
                  className={`w-full rounded-full h-0.5 bg-${val.default}`}
                >
                  <div
                    // className={`h-0.5 rounded-full after:content-[] ${
                    //   ind === 0
                    //     ? "bg-indigo-dark"
                    //     : ind === 1
                    //     ? "bg-red-dark"
                    //     : "bg-blue-dark"
                    // }`}
                    className={`h-0.5 rounded-full bg-${val.color}`}
                    style={{ width: val.progress }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs -mb-2.5">
                  <p className="font-semibold">Progress</p>
                  <p>{val.progress}</p>
                </div>
              </div>
            );
          })}
        <div className="bg-yellow-light rounded-xl shadow sm:col-span-2 xs:col-span-full">
          <div className="flex flex-col gap-5 justify-between items-center p-4">
            <ion-icon
              name="calendar-number-outline"
              class="size-8 bg-grey-light p-2 rounded-2xl text-yellow-dark"
            ></ion-icon>
            <p className="text-center text-sm">
              You have 5 days left on your subsciption
            </p>
            <button className="bg-yellow-dark px-6 py-2 rounded-md text-sm">
              Upgrade to Pro
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 bg-green-light p-4 text-tiny rounded-xl shadow sm:col-span-full xs:col-span-full lg:col-span-2">
          <h3 className="font-extrabold text-sm">Popular Categories</h3>
          {CategoriesData &&
            CategoriesData.map((val) => {
              return (
                <div class="flex justify-between items-center bg-grey-default rounded-2xl px-3.5 py-1.5 shadowl">
                  <div class="leading-5">
                    <p class="font-semibold text-sm">{val.courseName}</p>
                    <p class="opacity-70">{val.NoOfSections}</p>
                  </div>
                  <div>
                    <ion-icon
                      name={val.courseIcon}
                      class="bg-green-100 p-2 rounded-3xl size-5"
                    ></ion-icon>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="bg-sky-light flex flex-col gap-2 p-4 rounded-xl col-span-3 text-xs sm:col-span-full xs:col-span-full ">
          <div className="flex justify-between">
            <h3 className="text-sm font-extrabold">Top Mentors</h3>
            <p className="viewall">View All</p>
          </div>
          {MentorsData &&
            MentorsData.map((val) => {
              return (
                <div className="flex justify-between items-center gap-2 bg-grey-default p-2.5 rounded-2xl shadow xs:flex-col sm:flex-col mentorscard">
                  <div className="flex items-center gap-2 flex-1 xs:flex-col ">
                    <picture className="bg-center">
                      <img
                        src={val.MentorImg}
                        alt="person"
                        className="size-8 rounded-3xl xs:size-12 "
                      />
                    </picture>
                    <p className="font-semibold text-xs">{val.name}</p>
                  </div>
                  <p className="flex-1">{val.courseName}</p>
                  <p className="flex-1">{val.NoOfSections}</p>
                  <p className="flex-1">{val.Followers}</p>
                  <div className="flex justify-between flex-1 items-center gap-2 xs:justify-center">
                    <button className="bg-yellow-dark py-2 px-5 rounded-md">
                      Follow
                    </button>
                    <ion-icon
                      name="mail-outline"
                      class="bg-yellow-light size-4 p-1.5 rounded"
                    ></ion-icon>
                    <ion-icon
                      name="ellipsis-vertical-outline"
                      class="py-2 size-4"
                    ></ion-icon>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default MainApiComponent;
