import { Button } from "antd";
import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import restore from "../../assets/img/restore.svg";
import trashIconDark from "../../assets/img/trashIconDark.svg";
import trashIconRed from "../../assets/img/trashIconRed.svg";

import "./fav_work.scss";

export function StarredItem({ favoriteWorkout, index }) {
  const [showTrash, setshowTrash] = useState(false);
  const [trashIcon, setTrashIcon] = useState(trashIconDark);
  const [showFavItem, setshowFavItem] = useState(true);
  const [showRestoreBtn, setshowRestoreBtn] = useState(false);

  function handleHover() {
    setshowTrash(true);
  }
  function handleLeave() {
    setshowTrash(false);
  }

  const handleTrashClick = () => {
    setshowFavItem(!showFavItem);
    setshowRestoreBtn(true);
    //set this usf boolean variable to be true
  };

  useEffect(() => {
    if (showRestoreBtn) {
      setTimeout(() => {
        setshowRestoreBtn(false);
      }, 1500);
    }
  }, [showRestoreBtn]);

  if (!showFavItem) {
    return (
      <div>
        {/* change the position of this btn to the top next to the site logo , but move the logo to the left and decrease its zize when the btn is displayed */}
        {showRestoreBtn && (
          <Button
            className={`
          fav-work-restore-btn`}
            //rather type ${index === 0 ? "fav-work-restore-btn-ind0" : ""} and not ${index === 0 && "fav-work-restore-btn-ind0" }
            //because a className 'false' is added when the condition is not satisfied
            onClick={() => {
              setshowFavItem(true);
              setTrashIcon(trashIconDark);
            }}
          >
            <img src={restore} alt="" />
            <span>Restore it</span>
          </Button>
        )}
      </div>
    );
  } else {
    return (
      <div
        className="fav-work-container"
        onMouseOver={handleHover}
        onMouseLeave={handleLeave}
      >
        {showTrash && (
          <div className="fav-work-trash-icon">
            <Button
              className="fav-work-trash-icon-btn"
              onClick={handleTrashClick}
              onMouseOver={() => {
                setTrashIcon(trashIconRed);
              }}
              onMouseLeave={() => {
                setTrashIcon(trashIconDark);
              }}
            >
              <img src={trashIcon} alt="" />
            </Button>
          </div>
        )}
        <div className="fav-work-title">
          <span>{favoriteWorkout?.title}</span>
        </div>
        <div className="fav-work-reps">
          <span>{favoriteWorkout?.reps}</span>
        </div>
        <div className="fav-work-load">
          <span>{favoriteWorkout?.load}</span>
        </div>
        <div className="fav-work-date">
          <span>
            {formatDistanceToNow(new Date(favoriteWorkout?.createdAt), {
              addSuffix: true,
            })}
          </span>
        </div>
      </div>
    );
  }
}
