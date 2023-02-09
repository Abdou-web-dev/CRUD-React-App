import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { Button, Input, Select, Tooltip } from "antd";
import infoIcon from "../../assets/img/infoPNG.png";
import list from "../../assets/img/list.svg";
import recycle from "../../assets/img/recycle.png";
import "./mobile_form_styles.scss";

import {
  AbsExos,
  BackExos,
  BicepsExos,
  CalvesExos,
  ChestExos,
  ForearmsExos,
  HamstringsExos,
  ShouldersExos,
  TrapeziusExos,
  TricepsExos,
} from "../../assets/staticData/exosData";

export const MobileFormContent = ({
  handleSubmit,
  exoCategory,
  setExoCategory,
  emptyFields,
  showInputTitle,
  handleCustomExo,
  setTitle,
  title,
  load,
  setLoad,
  reps,
  setReps,
  error,
  handleResetFields,
  handleListIconClick,
  showSuggExoTitle,
}) => {
  return (
    <>
      <form className={`workouts-mobile-form`} onSubmit={handleSubmit}>
        <div className={`workouts-mobile-form-inner`}>
          <>
            <div className="mobile-form-select-exo-categ-label-and-select-component">
              <label className={"mobile-form-select-exo-categ-label"}>
                Exercise category :
              </label>
              <Select
                className={"mobile-form-exo-categ-select"}
                value={exoCategory}
                onChange={(value) => setExoCategory(value)}
                style={{ width: "200px" }}
                size={"large"}
                filterOption={(input, option) =>
                  (option?.value ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  //if optionA.value is null ou undefined then "" will be returned instead, and if it has a value , this value will be returned and used
                  (optionA?.value ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.value ?? "").toLowerCase())
                }
                options={[
                  { value: "Chest" },
                  { value: "Triceps" },
                  { value: "Trapezius" },
                  { value: "Shoulders" },
                  { value: "Hamstrings" },
                  { value: "Forearms" },
                  { value: "Calves" },
                  { value: "Biceps" },
                  { value: "Back" },
                  { value: "Abs" },
                ]}
                status={
                  emptyFields?.includes("exoCategory") &&
                  exoCategory?.length === 0
                    ? "error"
                    : ""
                }
                suffixIcon={
                  emptyFields?.includes("exoCategory") &&
                  exoCategory?.length === 0 ? (
                    <PriorityHighIcon />
                  ) : null
                }
              />
            </div>
            <div
              className={"mobile-form-select-exo-title-and-info-icon"}
              style={{
                justifyContent: "flex-start",
              }}
            >
              {/* select an exo title from a dropdown menu */}
              {showSuggExoTitle && (
                <>
                  <div
                    className={`mobile-form-title-select-label-and-component`}
                  >
                    <label className={"mobile-form-title-select-label"}>
                      Excercise Title :
                    </label>
                    <Select
                      className={"mobile-form-title-select-exo-title"}
                      disabled={!exoCategory ? true : false}
                      value={title}
                      onChange={(value) => {
                        setTitle(value);
                        console.log(value);
                      }}
                      onClick={null}
                      style={{ width: "200px" }}
                      size={"large"}
                      filterOption={(input, option) =>
                        (option?.value ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        //if optionA.value is null ou undefined then "" will be returned instead, and if it has a value , this value will be returned and used
                        (optionA?.value ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.value ?? "").toLowerCase())
                      }
                      options={
                        exoCategory === `Hamstrings`
                          ? HamstringsExos
                          : exoCategory === `Chest`
                          ? ChestExos
                          : exoCategory === `Trapezius`
                          ? TrapeziusExos
                          : exoCategory === `Shoulders`
                          ? ShouldersExos
                          : exoCategory === `Forearms`
                          ? ForearmsExos
                          : exoCategory === `Calves`
                          ? CalvesExos
                          : exoCategory === `Biceps`
                          ? BicepsExos
                          : exoCategory === `Abs`
                          ? AbsExos
                          : exoCategory === `Back`
                          ? BackExos
                          : exoCategory === `Triceps`
                          ? TricepsExos
                          : null
                      }
                      status={
                        emptyFields?.includes("title") && title?.length === 0
                          ? "error"
                          : ""
                      }
                      suffixIcon={
                        emptyFields?.includes("title") &&
                        title?.length === 0 ? (
                          <PriorityHighIcon />
                        ) : null
                      }
                    />
                  </div>

                  <Tooltip title="Type a custom exercise">
                    <Button
                      className={"mobile-form-select-exo-title-info-btn"}
                      onClick={handleCustomExo}
                      disabled={!exoCategory ? true : false}
                    >
                      <img
                        className={"mobile-form-select-exo-title-info-btn-icon"}
                        src={infoIcon}
                        alt=""
                      />
                    </Button>
                  </Tooltip>
                </>
              )}
            </div>
            <>
              {/* type the workout title */}
              {showInputTitle && (
                <div className={"mobile-form-title-label-and-input-component"}>
                  <div className={"mobile-form-input-title-and-label-wrapper"}>
                    <label className="mobile-form-title-label">
                      Excercise Title :
                    </label>
                  </div>
                  <div className={"mobile-form-input-title-icon-btn-wrapper"}>
                    <Tooltip title="Choose from a list of workouts">
                      <Button
                        className={"mobile-form-input-title-icon-btn"}
                        onClick={handleListIconClick}
                      >
                        <img
                          className={"mobile-form-input-title-list-icon"}
                          src={list}
                          alt=""
                        />
                      </Button>
                    </Tooltip>
                  </div>
                </div>
              )}
            </>
            <div className="mobile-form-load-label-and-load-input-component">
              <label className="mobile-form-load-label">Load (in kg) :</label>
              <Input
                value={load}
                onChange={(e) => setLoad(e.target.value)}
                className="mobile-form-input-load-component"
                type="number"
                status={
                  emptyFields?.includes("load") && load?.length === 0
                    ? "error"
                    : ""
                }
                placeholder={
                  emptyFields?.includes("load") && load?.length === 0
                    ? `You have forgotten to type a load`
                    : "Type a load"
                }
                prefix={
                  emptyFields?.includes("load") && load?.length === 0 ? (
                    <PriorityHighIcon />
                  ) : null
                }
                allowClear
              />
            </div>
            <div className="mobile-form-reps-label-and-reps-input-component">
              <label className="mobile-form-reps-label">Number of Reps :</label>
              <Input
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                className="mobile-form-input-reps-component"
                type="number"
                status={
                  emptyFields?.includes("reps") && reps?.length === 0
                    ? "error"
                    : ""
                }
                // reps.length === 0 means that nothing is being typed by the user
                placeholder={
                  emptyFields?.includes("reps") && reps?.length === 0
                    ? `You have forgotten to type reps`
                    : "Type reps"
                }
                prefix={
                  emptyFields?.includes("reps") && reps?.length === 0 ? (
                    <PriorityHighIcon />
                  ) : null
                }
                allowClear
              />
            </div>
            <div className={"mobile-form-btns"}>
              <button className="mobile-form-btn">
                <span>Add Workout</span>
              </button>
              <Button
                onClick={handleResetFields}
                className="mobile-form-reset-btn"
              >
                <img src={recycle} alt="" />
              </Button>
            </div>
          </>
        </div>
        {error && (
          <div className="error-msg-container">
            <div className={"mobile-form-msg-error"}>{error}</div>
          </div>
        )}
      </form>
    </>
  );
};
