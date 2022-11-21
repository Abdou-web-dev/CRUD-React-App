import { Route, Routes } from "react-router-dom";
// pages & components
import { ListOfExercises } from "./components/lists/ListOfExercises";
import Navbar from "./components/Navbar/Navbar";
import AbsWorkouts from "./pages/Abs";
import BackWorkouts from "./pages/Back";
import BicepsWorkouts from "./pages/Biceps";
import CalvesWorkouts from "./pages/Calves";
import ChestWorkouts from "./pages/Chest";
// import ChestVideoWorkouts from "./pages/ChestVideoWorkouts";
import ForearmsWorkouts from "./pages/Forearms";
import HamstringsWorkouts from "./pages/Hamstrings";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import ShouldersWorkouts from "./pages/Shoulders";
import TrapeziusWorkouts from "./pages/Trapezius";
import TricepsWorkouts from "./pages/Triceps";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ListOfExercises></ListOfExercises>

      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index path="/chest" element={<ChestWorkouts />} />
          <Route path="/hamstrings" element={<HamstringsWorkouts />} />
          <Route path="/calves" element={<CalvesWorkouts />} />
          <Route path="/back" element={<BackWorkouts />} />
          <Route path="/shoulders" element={<ShouldersWorkouts />} />
          <Route path="/triceps" element={<TricepsWorkouts />} />
          <Route path="/biceps" element={<BicepsWorkouts />} />
          <Route path="/forearms" element={<ForearmsWorkouts />} />
          <Route path="/trapezius" element={<TrapeziusWorkouts />} />
          <Route path="/abs" element={<AbsWorkouts />} />
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
