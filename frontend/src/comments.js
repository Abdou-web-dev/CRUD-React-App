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
// const [value, setValue] = useState(50);
// const [inputValue, setinputValue] = useState(5000);

// useEffect(() => {
//   const data = localStorage.getItem("valueKey");
//   console.log(data);
//   if (data !== null) setValue(JSON.parse(data));
// }, []);
// useEffect(() => {
//   localStorage.setItem("valueKey", JSON.stringify(inputValue));
// }, [inputValue]);

// <div>
// <span>{value}</span>
// </div>
// <input value={inputValue} type="number" />
// <Button onClick={() => setinputValue(200)}>+</Button>
// rather make 3 btns , one for grid layout , one for list layout the 2nd
// view of list layout will display the workouts' elements compacted with
//a different bg color and with a scrollbar on the right , between the workouts section and the form
// const slicedArray1 = workouts.slice(0, 10);
// const slicedArray2 = workouts.slice(10, 20);
// const slicedArray3 = workouts.slice(20, 30);
// console.log(slicedArray3);
// let wokroutspg2 = workouts.slice(6, 12);
// let wokroutspg3 = workouts.slice(12, 18);
// let wokroutspg4 = workouts.slice(18, 24);
// let wokroutspg5 = workouts.slice(24, 30);
// let wokroutspg6 = workouts.slice(36, 42);
/* <div>
        <video width="30%" height="20%" autoPlay muted loop id="navbar-video">
          <source src={workoutVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div> */

/* <VideoPlayer
  className="video-test"
  src={
    "https://player.vimeo.com/external/435674703.sd.mp4?s=01ad1ba21dc72c1d34728e1b77983805b34daad7&profile_id=165&oauth2_token_id=57447761"
  }
  autoPlay={true}
  muted={true}
/>; */

/* <img src={logOutIcon} alt="" /> */
//users login and pwd
// hamada66@gmail.com
// FF%T4L(#M@nARek)

// hassna.chama@gmail.com
// (GLUXJqeyE*7W6#5dd4d4dAA

// Kamal.saif@gmail.com
// Kamal Saif
// Kamalkamal2020++**-

/* can use both {userStored?.fullName} or {user?.fullName} 
              <span>{user.email}</span> <br />  */

// console.log(nameAndGender, nameAndGender2, "here");

// onClick={(category) => {
//   handleFilterWorkouts(category.exoTitle);
// }}
// wont trigger the click , because of the category argument pased to the function, it must recieve no arg

// const EmailInput = () => {
//   return (
//     <Input
//       className={emailClass}
//       type="email"
//       onChange={(e) => setEmail(e.target.value)}
//       value={email}
//       placeholder="Email"
//       allowClear
//     />
//   );
// };
// // ===========> use       <EmailInput></EmailInput>

// const EmailInput = (
//   <Input
//     className={emailClass}
//     type="email"
//     onChange={(e) => setEmail(e.target.value)}
//     value={email}
//     placeholder="Email"
//     allowClear
//   />
// );
// // ===========> use {EmailInput}

// {
//   /* pagination of Filtered Results , composed only of two arrows , without the pages' numbers */
// }
// {
//   searchInput?.length > 0 && isLargeScreen ? (
//     <Pagination
//       className={`pagination-filtered-results
//     ${layoutGrid && "pagination-filtered-results-grid"}
//     ${layoutList && "pagination-filtered-results-list"}
//     ${
//       filteredResults?.length >= 1 &&
//       filteredResults?.length <= 3 &&
//       "pagination-filtered-results-less-than4"
//     }
//     ${filteredResults?.length === 0 && "pagination-filtered-results-none"}`}
//       prevIcon={
//         paginationClassName === "pagination-content-loaded-grid" ? (
//           <Tooltip title="Previous page">
//             <div>
//               <PrevArrow />
//             </div>
//           </Tooltip>
//         ) : (
//         //pagination-content-loaded-list
//         <Tooltip title="Previous page">
//           <div>
//             <PrevArrowList />
//           </div>
//         </Tooltip>
//       )
//     }
//     nextIcon={
//       paginationClassName === "pagination-content-loaded-grid" ? (
//         <Tooltip title="Next page">
//           <div>
//             <NextArrow />
//           </div>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Next page">
//           <div>
//             <NextArrowList />
//           </div>
//         </Tooltip>
//       )
//     }
//     current={currentPage}
//     onChange={(page, e) => {
//       setCurrentPage(page);
//     }}
//     total={`30`}
//   />
// ) : null;
// }
// *************************
// persist data after refresh
// const [setSelectedAvatarIcon, setsetSelectedAvatarIcon] = useState();
//   useEffect(() => {
//     setSelectedAvatarIcon(JSON.parse(localStorage.getItem("selectedAvatar"))); //an icon
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("selectedAvatar", JSON.stringify(avatar));
//   }, [avatar]);
