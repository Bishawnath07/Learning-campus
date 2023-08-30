import AppArchitecture from "./pages/AppArchitecture";
import AppScreens from "./pages/AppScreens";
import LearningCampus from "./pages/LearningCampus";

function App() {
  return <div className="bg-black">
    <LearningCampus></LearningCampus>
    <AppArchitecture></AppArchitecture>
    <AppScreens></AppScreens>
  </div>;
}

export default App;
