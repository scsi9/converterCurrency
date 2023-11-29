import "./App.css";
import Main from "./component/Main/Main.jsx";
import CoursesUSD from "./component/Courses/CoursesUSD/CoursesUSD.jsx";
import CoursesEUR from "./component/Courses/CoursesEUR/CoursesEUR.jsx";
import CoursesCHI from "./component/Courses/CoursesCHI/CoursesCHI.jsx";
import Get from "./component/Change/Get/Get.jsx";

function App() {
  return (
    <div className="App">
      <div className="window">
        <Main />

        <div className="courses">
          <CoursesUSD />
          <CoursesEUR />
          <CoursesCHI />
        </div>
        <div className="swap">
          <Get />
        </div>
      </div>
    </div>
  );
}

export default App;
