import { Button, Input as ModalInput } from "antd";
import { formatDistanceToNow } from "date-fns";
import "./inputs_styles.scss";

export function InputModal({
  workouts,
  searchValue,
  setSearchValue,
  setopenSearchInputModal,
  setFilteredResultsByMobileModal,
  openSearchInputModal,
}) {
  const searchItems = () => {
    if (searchValue !== "") {
      const filteredData = workouts?.filter((workout) => {
        const createdAtFormatted = formatDistanceToNow(
          new Date(workout.createdAt),
          {
            addSuffix: true,
          }
        );
        return (
          Object.values(createdAtFormatted)
            .join("")
            .toLowerCase()
            .includes(searchValue.toString().toLowerCase()) ||
          Object.values(workout.title)
            .join("")
            .toLowerCase()
            .includes(searchValue.toString().toLowerCase())
        );
      });
      setFilteredResultsByMobileModal(filteredData);
    } else {
      setFilteredResultsByMobileModal(workouts);
    }
  };
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleOKClick = (e) => {
    searchItems(e.target.value);
    setopenSearchInputModal(false);
  };
  const handlePressEnter = (e) => {
    handleOKClick(e);
  };

  return (
    <div className="input-modal-container">
      <ModalInput
        className="input-modal-container-input"
        value={searchValue}
        onChange={handleChange}
        suffix={null}
        placeholder=" &nbsp;Search a workout"
        onMouseOver={null}
        disabled={null}
        onPressEnter={(e) => {
          handlePressEnter(e);
        }}
      />
      <Button
        className={
          searchValue
            ? "input-modal-container-btn user-typing"
            : "input-modal-container-btn user-not-typing"
        }
        onClick={(e) => {
          handleOKClick(e);
        }}
      >
        <span>OK</span>
      </Button>
    </div>
  );
}
