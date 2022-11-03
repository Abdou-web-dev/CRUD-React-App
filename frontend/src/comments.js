// useEffect(() => {
//   if (width >= `100px`) {
//     console.log(width, "large");
//     setWidth(`${calculateTextWidth(infos?.description)}px`);
//     setsize("large");
//   } else if (width < `16px`) {
//     console.log(width, "default");
//     setWidth(`${calculateTextWidth(infos?.description)}px`);
//     setsize("default");
//   }
// }, [width]);

// <div className={`workout-details ${workout ? "changeBGColor" : ""}`}>
// className={`workout-details-container ${
//   showBorder === true ? `border-selected` : ``
// }  ${
//   openDrawer === true ? `site-drawer-render-in-current-wrapper` : ``
// }
// `}
// getContainer={
//   index === 0
//     ? ".workout-details-container0"
//     : index === 1
//     ? ".workout-details-container1"
//     : index === 2
//     ? ".workout-details-container2"
//     : ""
// }

// className={`workout-details-container site-drawer-render-in-current-wrapper
// ${
//   index === 0
//     ? "workout-details-container0"
//     : index === 1
//     ? "workout-details-container1"
//     : index === 2
//     ? "workout-details-container2"
//     : ""
// }
//  ${
//    openDrawer === true ? `site-drawer-render-in-current-wrapper` : ``
//  }//we can delete this line because this class is added before

// <div className={`workout-details ${workout ? "changeBGColor" : ""}`}>
// className={`workout-details-container ${
//   showBorder === true ? `border-selected` : ``
// }  ${
//   openDrawer === true ? `site-drawer-render-in-current-wrapper` : ``
// }
// `}
// getContainer={
//   index === 0
//     ? ".workout-details-container0"
//     : index === 1
//     ? ".workout-details-container1"
//     : index === 2
//     ? ".workout-details-container2"
//     : ""
// }

// className={`workout-details-container site-drawer-render-in-current-wrapper
// ${
//   index === 0
//     ? "workout-details-container0"
//     : index === 1
//     ? "workout-details-container1"
//     : index === 2
//     ? "workout-details-container2"
//     : ""
// }
//  ${
//    openDrawer === true ? `site-drawer-render-in-current-wrapper` : ``
//  }//we can delete this line because this class is added before

//so the solution to the scrolling prb is either to set the height of the container to 1500px min, or to put the pagination before the container
//add a Skeleton component for the form and the list of btns in Chest page!!!!!
// var A = ["Ram", "Z", "k", "geeksforgeeks"];
// var iterator = A.values();
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// console.log(workoutsTitlesArray.values(), "workoutsTitlesArray");
// console.log(Array.isArray(workoutsTitlesArray), "workoutsTitlesArray");
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find(element => element > 100);
//this amazing line of code returns an array composed of titles of all workouts without duplicates
// ['Barbell Incline Bench Press', 'Barbell Flat Bench Pressa', '   Barbell Flat Bench Press', 'Barbell Decline Bench Press', 'Chest Flye', ' Pause Push-Up', 'Barbell Flat Bench Press', 'Barbell Test', ' Cable Iron Cross', ' Close-Grip Push-Up', ' Chest Flye', ' Chaos Push-Up', 'Dip', ' Side-to-Side Landmine Press']
// const workoutsTitlesArray = [
//   ...new Set(workouts?.map((workout) => workout.title)),
// ];

//How can I compare two strings ignoring new line characters, white spaces, non-breaking space?
//const pureString = str.replace(/(?:\r\n|\r|\n)/g, '');
// Since the drawer component is nested deep inside <ChestWorkouts />, it's not going to render when you aren't rendering <ChestWorkouts /> anymore.

// The key here is to structure your components such that the drawer component is not nested within any of the routes, so it doesn't disappear when its parent component does. Perhaps you could place the drawer component outside <Routes /> like you've done with <Navbar /> (which is the reason why Navbar doesn't disappear on route changes).

// You can place the drawer at the root of your component tree and manage its state by passing it down other routed components or perhaps through redux.
const [value, setValue] = useState(50);
const [inputValue, setinputValue] = useState(5000);

useEffect(() => {
  const data = localStorage.getItem("valueKey");
  console.log(data);
  if (data !== null) setValue(JSON.parse(data));
}, []);
useEffect(() => {
  localStorage.setItem("valueKey", JSON.stringify(inputValue));
}, [inputValue]);


<div>
<span>{value}</span>
</div>
<input value={inputValue} type="number" />
<Button onClick={() => setinputValue(200)}>+</Button>