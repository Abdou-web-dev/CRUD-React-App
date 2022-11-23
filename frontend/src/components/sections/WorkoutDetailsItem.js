import { WorkoutDetails } from "../details/WorkoutDetails";
export function WorkoutDetailsItem({
  workout,
  filteredResult,
  index,
  setbg,
  detailsContClass,
  setdetailsContClass,
  setcontainerClass,
  currentPage,
  layoutGrid,
  showItemsPage1,
  showItemsPage2,
  showItemsPage3,
  showItemsPage4,
  showItemsPage5,
  showItemsPage6,
  searchInput,
  showItemsPage7,
  showItemsPage8,
  showItemsPage9,
  showItemsPage10,
}) {
  return (
    <div
      style={{
        position: "relative",
        bottom:
          currentPage === 2 && layoutGrid
            ? "30px"
            : currentPage === 3 && layoutGrid
            ? "70px"
            : currentPage === 4 && layoutGrid
            ? "110px"
            : currentPage === 5 && layoutGrid
            ? "150px"
            : currentPage === 6 && layoutGrid
            ? "190px"
            : currentPage === 7 && layoutGrid
            ? "230px"
            : currentPage === 8 && layoutGrid
            ? "270px"
            : currentPage === 9 && layoutGrid
            ? "310px"
            : currentPage === 10 && layoutGrid
            ? "350px"
            : "",
      }}
    >
      {showItemsPage1(index) && currentPage === 1 ? (
        <WorkoutDetails
          {...{
            index,
            setbg,
            detailsContClass,
            setdetailsContClass,
            setcontainerClass,
            searchInput,
          }}
          workout={
            searchInput?.length === 0
              ? workout
              : searchInput?.length !== 0
              ? filteredResult
              : null
          }
        />
      ) : showItemsPage2(index) && currentPage === 2 ? (
        <WorkoutDetails
          {...{
            index,
            setbg,
            detailsContClass,
            setdetailsContClass,
            setcontainerClass,
            searchInput,
          }}
          workout={
            searchInput?.length === 0
              ? workout
              : searchInput?.length !== 0
              ? filteredResult
              : null
          }
        />
      ) : showItemsPage3(index) && currentPage === 3 ? (
        <WorkoutDetails
          {...{
            index,
            setbg,
            detailsContClass,
            setdetailsContClass,
            setcontainerClass,
            searchInput,
          }}
          workout={
            searchInput?.length === 0
              ? workout
              : searchInput?.length !== 0
              ? filteredResult
              : null
          }
        />
      ) : showItemsPage4(index) && currentPage === 4 ? (
        <WorkoutDetails
          {...{
            index,
            setbg,
            detailsContClass,
            setdetailsContClass,
            setcontainerClass,
            searchInput,
          }}
          workout={
            searchInput?.length === 0
              ? workout
              : searchInput?.length !== 0
              ? filteredResult
              : null
          }
        />
      ) : showItemsPage5(index) && currentPage === 5 ? (
        <WorkoutDetails
          {...{
            index,
            setbg,
            detailsContClass,
            setdetailsContClass,
            setcontainerClass,
            searchInput,
          }}
          workout={
            searchInput?.length === 0
              ? workout
              : searchInput?.length !== 0
              ? filteredResult
              : null
          }
        />
      ) : showItemsPage6(index) && currentPage === 6 ? (
        <WorkoutDetails
          {...{
            index,
            setbg,
            detailsContClass,
            setdetailsContClass,
            setcontainerClass,
            searchInput,
          }}
          workout={
            searchInput?.length === 0
              ? workout
              : searchInput?.length !== 0
              ? filteredResult
              : null
          }
        />
      ) : showItemsPage7(index) && currentPage === 7 ? (
        <WorkoutDetails
          {...{
            index,
            setbg,
            detailsContClass,
            setdetailsContClass,
            setcontainerClass,
            searchInput,
          }}
          workout={
            searchInput?.length === 0
              ? workout
              : searchInput?.length !== 0
              ? filteredResult
              : null
          }
        />
      ) : showItemsPage8(index) && currentPage === 8 ? (
        <WorkoutDetails
          {...{
            index,
            setbg,
            detailsContClass,
            setdetailsContClass,
            setcontainerClass,
            searchInput,
          }}
          workout={
            searchInput?.length === 0
              ? workout
              : searchInput?.length !== 0
              ? filteredResult
              : null
          }
        />
      ) : showItemsPage9(index) && currentPage === 9 ? (
        <WorkoutDetails
          {...{
            index,
            setbg,
            detailsContClass,
            setdetailsContClass,
            setcontainerClass,
            searchInput,
          }}
          workout={
            searchInput?.length === 0
              ? workout
              : searchInput?.length !== 0
              ? filteredResult
              : null
          }
        />
      ) : showItemsPage10(index) && currentPage === 10 ? (
        <WorkoutDetails
          {...{
            index,
            setbg,
            detailsContClass,
            setdetailsContClass,
            setcontainerClass,
            searchInput,
          }}
          workout={
            searchInput?.length === 0
              ? workout
              : searchInput?.length !== 0
              ? filteredResult
              : null
          }
        />
      ) : null}
    </div>
  );
}