import { Button, Input as ModalInput, message } from "antd";
import { formatDistanceToNow } from "date-fns";
import "./inputs_styles.scss";

export function SearchInputModal({
  workouts,
  searchValue,
  setSearchValue,
  setopenSearchInputModal,
  setFilteredResultsByMobileModal,
  filteredResultsByMobileModal,
  openSearchInputModal,
}) {
  let result_word =
    filteredResultsByMobileModal?.length === 1 ? `result` : "results";
  const searchItemsOnOkClick = () => {
    if (searchValue !== "") {
      const filteredData = workouts?.filter((workout) => {
        const createdAtFormatted = formatDistanceToNow(
          new Date(workout?.createdAt),
          {
            addSuffix: true,
          }
        );
        return (
          Object.values(createdAtFormatted)
            .join("")
            .toLowerCase()
            .includes(searchValue.toString().toLowerCase()) ||
          Object.values(workout?.title)
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
    searchItemsOnOkClick(e.target.value);
    setopenSearchInputModal(false);
    if (searchValue) {
      message.info(
        `You have got ${filteredResultsByMobileModal?.length} ${result_word}`,
        0.6
      );
    }
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
        onClick={handleOKClick}
      >
        <span>OK</span>
      </Button>
    </div>
  );
}
