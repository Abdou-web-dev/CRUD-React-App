import { ChestExosBtnsList } from "../lists/exosLists/ChestExosBtnsList";

export const ChestExosList = ({
  currentLocat,
  paginationClassName,
  setTitle,
  chestExos,
  suggestiveListBorder,
}) => {
  return (
    <div className="chest-suggest-btns">
      {currentLocat === "/workouts" && (
        <ChestExosBtnsList
          paginationClassName={paginationClassName}
          setTitle={setTitle}
          chestExos={chestExos}
          suggestiveListBorder={suggestiveListBorder}
        />
      )}
    </div>
  );
};
