import { useLocation } from "react-router-dom";
import exercisesData from "../../assets/staticData/chestExercises.json";
import { HamstringsExosList } from "./exosLists/HamstringsExosList";

export function ListOfExercises({}) {
  const currentLocation = useLocation();
  let currentLocat = currentLocation.pathname;
  const hamstringsExos = exercisesData.exercises.hamstrings_Exercises;

  return (
    <>
      {currentLocat === "/hamstrings" ? (
        <HamstringsExosList hamstringsExos={hamstringsExos} />
      ) : null}
    </>
  );
}

// console.log(exercisesData.exercises.chest_Exercises); //===  console.log(exos.exercises.["chest_Exercises"]);
//this is how to eventually solve the problem : move ListofExercises component into the form component
//and apply this solution of dropdown : https://stackoverflow.com/questions/70706295/react-dropdown-value-to-text-field
