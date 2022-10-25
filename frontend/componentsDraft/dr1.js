// WorkoutForm
const TheForm = () => {
  const currentLocation = useLocation();
  let currentLocat = currentLocation.pathname;
  const chestExos = exercisesData.exercises.chest_Exercises;

  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const [suggestiveListBorder, setSuggestiveListBorder] = useState("");
  const [showFormNewWindow, setShowFormNewWindow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setEmptyFields([]);
      setError(null);
      setTitle("");
      setLoad("");
      setReps("");
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="chest-workout-form-container">
      <>
        {showFormNewWindow && (
          <form className="chest-workouts-form" onSubmit={handleSubmit}>
            <div className="chest-workouts-form-inner">
              <h3>Add a New Workout</h3>
              <label>Excercise Title : </label>

              <Tooltip
                title={
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <span style={{ fontSize: "12px" }}>
                      You can always pick the exercise you want from the list
                      above !
                    </span>
                  </div>
                }
                color="#1aac83"
              >
                <Input
                  value={title}
                  onMouseOver={() => {
                    setSuggestiveListBorder(
                      "0.5px solid rgba(26, 172, 131,0.25)"
                    );
                  }}
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  status={
                    emptyFields.includes("title") && title.length === 0
                      ? "error"
                      : ""
                  }
                  // title.length === 0 means that nothing is being typed by the user
                  placeholder={
                    emptyFields.includes("title") && title.length === 0
                      ? `You have forgotten to type a title`
                      : "Type a title"
                  }
                  prefix={
                    emptyFields.includes("title") && title.length === 0 ? (
                      <PriorityHighIcon />
                    ) : null
                  }
                  allowClear
                />
              </Tooltip>

              <label>Load (in kg) :</label>
              <Input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                status={
                  emptyFields.includes("load") && load.length === 0
                    ? "error"
                    : ""
                }
                placeholder={
                  emptyFields.includes("load") && load.length === 0
                    ? `You have forgotten to type a load`
                    : "Type a load"
                }
                prefix={
                  emptyFields.includes("load") && load.length === 0 ? (
                    <PriorityHighIcon />
                  ) : null
                }
                allowClear
              />

              <label>Number of Reps :</label>
              <Input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                status={
                  emptyFields.includes("reps") && reps.length === 0
                    ? "error"
                    : ""
                }
                // reps.length === 0 means that nothing is being typed by the user
                placeholder={
                  emptyFields.includes("reps") && reps.length === 0
                    ? `You have forgotten to type reps`
                    : "Type reps"
                }
                prefix={
                  emptyFields.includes("reps") && reps.length === 0 ? (
                    <PriorityHighIcon />
                  ) : null
                }
                allowClear
              />

              <button className="chest-form-btn">Add Workout</button>
            </div>
            <div className="error-msg-container">
              {error && <div className="form-msg-error">{error}</div>}
            </div>
          </form>
        )}
      </>
      <>
        <div className="chest-suggest-btns">
          {currentLocat === "/chest" && (
            <ChestExosList
              setTitle={setTitle}
              chestExos={chestExos}
              suggestiveListBorder={suggestiveListBorder}
            />
          )}
        </div>
      </>
      {/* to open the form in a modal window */}
      <Button
        disableRipple
        onClick={() => setShowFormNewWindow(!showFormNewWindow)}
        className="up-btn-link"
        sx={{
          "&:hover": { background: "none" },
        }}
      >
        <Tooltip
          title={
            <div style={{ display: "flex", justifyContent: "center" }}>
              <span style={{ fontSize: "10px" }}>
                Open this form in a new window.
              </span>
            </div>
          }
        >
          <svg
            className="up-svg-icon"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            viewBox="0 0 14 14"
            role="img"
            width={`34px`}
            height={`34px`}
          >
            <path d="M12 7.252h2V14H0V0h6.602v2.014H2v9.971h10V7.252zM8.602 0v2.014h2.088L6.795 5.935l1.414 1.424L12 3.54v1.898h2V0H8.602z"></path>
          </svg>
        </Tooltip>
      </Button>
    </div>
  );
};

// if (title) {
//   setTitle(e.target.value);
// }
// if (inputValue) {
//   setInputValue(e.target.value);
// }

// Not a 100% sure, but it might be related to your input having 2 states. I'm not sure why there is the inputValue and the title state
//  You should only have one state which controls what the input value is. And call that same state setter in the input onChange and on button click –
//add clear field icon on the input , and do : setValue("") onClick on the clear icon

// <Button type="secondary" onClick={(e) => setTitle(e.target.innerText)}>
// {`btn1`}
// </Button>
// <Button type="secondary" onClick={(e) => setTitle(e.target.innerText)}>
// {`btn2`}
// </Button>
// <Button type="secondary" onClick={(e) => setTitle(e.target.innerText)}>
// {`btn3`}
// </Button>

/* <input
                  onMouseOver={() => {
                    setSuggestiveListBorder("1.5px solid #1aac83");
                  }}
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  className={
                    emptyFields.includes("title") ? "form-msg-error" : ""
                  }
                /> */

/* <IconButton
                  className="close-icon-container"
                  onClick={(e) => setTitle(``)}
                >
                  <ClearIcon className="close-icon" />
                </IconButton> */
