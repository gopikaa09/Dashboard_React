// import logo from "./logo.svg";
import "./App.css";
import MainApiComponent from "./Apicomponents/MainApiComponent";
import CardComponent from "./Components/CardComponent";
import CourseCard from "./Components/CourseCard";
import MentorCard from "./Components/MentorCard";
import SideContaine from "./Sections/SideContaine";

function App() {
  return (
    // <div className="App grid grid-cols-5 gap-4 mr-4">
    //   <SideNav />
    //   <SideContaine />
    // </div>
    <div>
      <MainApiComponent />
    </div>
  );
}

export default App;
