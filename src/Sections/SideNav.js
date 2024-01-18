import React from "react";

function SideNav() {
  return (
    <div class="font-sans bg-sidenav-dark p-4 xs:hidden sm:hidden">
      <h1 class="text-3xl font-bold mt-2">Eduhouse</h1>

      <p class="text-xs mt-6 opacity-30 uppercase">Main Menu</p>
      <ul class="flex flex-col justify-center text-xs font-semibold p-3 leading-10">
        <li class="flex items-center gap-1 text-yellow-dark font-bold bg-grey-default -ml-10 px-10 rounded-2xl">
          <ion-icon name="home" class=""></ion-icon>
          <a href="">Overview</a>
        </li>
        <li class="flex items-center gap-1">
          <ion-icon name="bookmark-outline" class=""></ion-icon>
          <a href="">E-Book</a>
        </li>
        <li class="flex items-center gap-1">
          <ion-icon name="heart-outline" class=""></ion-icon>
          <a href="">My Courses</a>
        </li>
        <li class="flex items-center gap-1">
          <ion-icon name="card-outline" class=""></ion-icon>
          <a href="">Purchase Course</a>
        </li>
        <li class="flex items-center gap-1">
          <ion-icon name="document-text-outline" class=""></ion-icon>
          <a href="">Completed Courses</a>
        </li>
        <li class="flex items-center gap-1">
          <ion-icon name="chatbubble-ellipses-outline" class=""></ion-icon>
          <a href="">Community</a>
        </li>
      </ul>
      <p class="text-xs opacity-30 uppercase">setting</p>
      <ul class="flex flex-col justify-center text-xs font-semibold p-3 leading-10">
        <li class="flex items-center gap-1">
          <ion-icon name="person-outline" class="nav-icon"></ion-icon>
          <a href="">Profile</a>
        </li>
        <li class="flex items-center gap-1">
          <ion-icon name="settings-outline" class="nav-icon"></ion-icon>
          <a href="">Setting</a>
        </li>
        <li class="flex items-center gap-1">
          <ion-icon name="log-out-outline" class="nav-icon"></ion-icon>
          <a href="">Logout</a>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;

// import React from "react";
// import ListComponent from "../Components/ListComponent";

// function SideNav() {
//   return (
//     <div className="font-sans bg-sidenav-dark p-4 xs:hidden sm:hidden">
//       <h1 className="text-3xl font-bold mt-2">Eduhouse</h1>
//       <p className="text-xs mt-6 opacity-30">MAIN MENU</p>
//       <ul className="flex flex-col justify-center text-xs font-semibold p-3 leading-10">
//         <ListComponent ListItem="OverView" iconName="home" />
//         <ListComponent ListItem="E-book" iconName="bookmark-outline" />
//         <ListComponent ListItem="My Courses" iconName="heart-outline" />
//         <ListComponent ListItem="Purchase Course" iconName="card-outline" />
//         <ListComponent
//           ListItem="Completed Courses"
//           iconName="document-text-outline"
//         />
//         <ListComponent
//           ListItem="Community"
//           iconName="chatbubble-ellipses-outline"
//         />
//       </ul>
//       <p className="text-xs opacity-30">SETTING</p>
//       <ul className="flex flex-col justify-center text-xs font-semibold p-3 leading-10">
//         <ListComponent ListItem="Profile" iconName="person-outline" />
//         <ListComponent ListItem="Setting" iconName="settings-outline" />
//         <ListComponent ListItem="Logout" iconName="log-out-outline" />
//       </ul>
//     </div>
//   );
// }

// export default SideNav;
