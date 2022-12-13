import { Stack } from "@mui/material";
import * as React from "react";
import close_btn from "../../../../assets/images/leadEdge/close_btn.svg";
import LeadEdgeButton from "../buttons/LeadEdgeButton";

import ScrollDownText from "../moderator/ScrollDownText";
import Student from "../moderator/Student";

import "./styles2.scss";

export default function SelectMembersModal(props) {
  const students = props.students;
  const [selectedStudents, setSelectedStudents] = React.useState(
    props.selectedStudents
  );

  const addOrRemoveStudent = (studentId, isChecked) => {
    let newSelectedStudents = [...selectedStudents];
    // Case 1 : The user checks the box
    if (isChecked) {
      newSelectedStudents.push(studentId); // ===   newSelectedStudents = [...selectedStudents, studentId];
    }
    // Case 2 : The user unchecks the box
    else {
      newSelectedStudents.splice(newSelectedStudents.indexOf(studentId), 1);
    }
    setSelectedStudents(newSelectedStudents);
    console.log(selectedStudents);
  };

  //send StudentsSelected data with post request to the backend

  const handleOkClick = () => {
    props.onAddMembers(selectedStudents);
  };

  return (
    <div className="select-team-modal-container" spacing={0} direction="row">
      <Stack
        className="header"
        direction="row"
        spacing={0}
        justifyContent="space-between"
        alignItems="center"
      >
        <span className="text">Affect members to the team :</span>
        <button onClick={props.handleClose} className="close-btn">
          <img className="close-btn" src={close_btn} alt="" />
        </button>
      </Stack>

      <Stack className="body" alignItems="center">
        <div className="students">
          {students.map &&
            students?.map((student, index) => {
              return (
                <div className="student-element">
                  <Student
                    key={index}
                    checked={selectedStudents.indexOf(student.id) >= 0}
                    firstName={student.firstName}
                    lastName={student.lastName}
                    status={student.actif}
                    avatar={student.avatarPath}
                    studentId={student.id}
                    addOrRemoveStudent={addOrRemoveStudent}
                    showStatus={false}
                  />
                </div>
              );
            })}
        </div>
        <ScrollDownText />
      </Stack>

      <Stack
        className="select-members-modal-footer"
        direction="row"
        spacing={0}
        justifyContent="space-between"
        alignItems="center"
      >
        <div className="modal-btns">
          <LeadEdgeButton
            type="small-gray"
            title="cancel"
            onClick={props.cancelClick}
          />
          <LeadEdgeButton type="blue" title="OK" onClick={handleOkClick} />
        </div>
      </Stack>
    </div>
  );
}

import { Button, Input, Modal } from "@mui/material";
import * as React from "react";
import * as React from "react";
import green_icon from "../../../../assets/images/leadEdge/green_icon.svg";
import red_icon from "../../../../assets/images/leadEdge/red_icon.svg";
import { addCompany } from "../../../../helpers/LeadEdge/services/moderator";
import Logo from "../modals/Logo";
import LogoTeamModal from "../modals/LogoTeamModal ";
import SelectMembersModal from "../modals/SelectMembersModal.js";
import PopupCheckDelete from "../popups/PopupCheckDelete";
import PopupDeleted from "../popups/PopupDeleted";
import CustomizedCheckbox from "./CustomizedCheckbox";
import DeleteIcon from "./DeleteIcon.js";
import StudentSelected from "./StudentSelected.js";
import "./styles.scss";

export function Team({ data, filteredResults, students }) {
  let inputStyles = {
    fontFamily: "Karla",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "13.5px",
    lineHeight: "12px",
    position: "relative",
    left: "15px",
    color: "#969696",
  };
  //here, we are recieving the data and filteredResults as prop

  //prompt delete modal
  const [openPrompt, setOpenPrompt] = React.useState(false);

  const [currentSelectedStudents, setCurrentSelectedStudents] = React.useState(
    []
  );
  const [companyData, setCompanyData] = React.useState(data);

  const handleOpenPrompt = () => {
    setOpenPrompt(true);
  };
  const handleClosePrompt = () => {
    setOpenPrompt(false);
  };

  //success delete modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // this method is called when the user clicks on the trash icon
  const handleDeleteTeam = (team) => {
    handleOpenPrompt();
    setTimeout(() => {
      alert("not yet deleted");
    }, 1000);
  };
  // whereas this method is called when the user clicks on the delete btn
  const deleteTeam = () => {
    handleOpen();
    setTimeout(() => {
      alert("not yet deleted");
    }, 1000);
    setOpenPrompt(false);
  };

  const [openLogoModal, setOpenLogoModal] = React.useState(false);
  const handleClickLogo = () => {
    setOpenLogoModal(true);
  };
  const handleCloseLogo = () => {
    setOpenLogoModal(false);
  };

  //add member modal
  const [openAddMemberModal, setOpenAddMemberModal] = React.useState(false);

  const handleClickAddMember = () => {
    setCurrentSelectedStudents(data.players.map((player) => player.user.id));
    setOpenAddMemberModal(true);
  };
  const handleCloseMember = () => {
    setCurrentSelectedStudents([]);
    setOpenAddMemberModal(false);
  };

  const handleAddMember = (selectedStudents) => {
    let newData = { ...companyData };
    newData.players = selectedStudents;
    addCompany(newData)
      .then((result) => {
        setCompanyData(result);
      })
      .catch((error) => console.error(`Error:${error}`));
  };

  const handleOKClick = () => {
    // alert("ok")
  };

  return (
    <Stack
      className="team-list-container"
      justifyContent="space-evenly"
      spacing={7}
      direction="row"
      sx={{ border: filteredResults ? "" : "" }}
    >
      {companyData && (
        <>
          <div className="logo-wrapper" style={{ maxWidth: "150px" }}>
            {/* this rule of 150px maxwidth I added here makes the 'add members' btns align centered vertically */}
            <Logo
              logo={companyData.logo_path}
              brand={companyData.name}
              displayBrandName="d_block"
            />
          </div>
          <Stack
            id="team-students"
            className="students"
            justifyContent="space-evenly"
            direction="row"
          >
            <div className="student-selected">
              {companyData.players.map &&
                companyData.players?.map((player, index) => (
                  <StudentSelected
                    key={index}
                    firstName={player.user.firstName}
                    lastName={player.user.lastName}
                    avatar={player.user.avatarPath}
                  />
                ))}
            </div>
          </Stack>
        </>
      )}

      {filteredResults && (
        <>
          <div className="logo-wrapper" style={{ maxWidth: "150px" }}>
            <Logo
              logo={filteredResults.logo_path}
              brand={filteredResults.name}
              displayBrandName="d_block"
            />
          </div>
          <Stack
            id="team-students"
            className="students"
            justifyContent="space-evenly"
            direction="row"
          >
            <div className="student-selected">
              {filteredResults.players.map &&
                filteredResults.players?.map((player, index) => (
                  <StudentSelected
                    key={index}
                    firstName={player.user.firstName}
                    lastName={player.user.lastName}
                    avatar={player.user.avatarPath}
                  />
                ))}
            </div>
          </Stack>
        </>
      )}

      <Stack
        className={
          filteredResults || companyData
            ? "team-btns-filtered-data"
            : !companyData
            ? "team-btns"
            : ""
        }
        direction="row"
        spacing={6}
        alignItems="center"
      >
        <Stack className="left-content" direction="column" alignItems="center">
          {filteredResults ? null : companyData ? null : !companyData ? (
            <>
              <Button
                variant="contained"
                component="span"
                className="add-logo-btn"
                onClick={handleClickLogo}
              >
                <span className="text">+ Add &nbsp;logo</span>
              </Button>
              <Input
                className="input-team"
                placeholder="Team name"
                disableUnderline={true}
                sx={{
                  input: {
                    height: "25px",
                    "&::placeholder": { ...inputStyles },
                  },
                }}
              />
            </>
          ) : null}
        </Stack>

        <div className="right-content">
          <Button
            variant="contained"
            component="span"
            className="add-members-btn"
            onClick={handleClickAddMember}
            style={{
              width: companyData
                ? "152px"
                : filteredResults
                ? "152px" //when there is no data yet
                : "380px",
              position: companyData || filteredResults ? "relative" : "",
              left: companyData ? "-250px" : filteredResults ? "-250px" : "",
            }}
          >
            {filteredResults ? (
              <span
                className="text-add-team"
                style={{ margin: "0 8px", whiteSpace: "nowrap" }}
              >
                + Add &nbsp;member
              </span>
            ) : companyData ? (
              <span
                className="text-add-team"
                style={{ margin: "0 8px", whiteSpace: "nowrap" }}
              >
                + Add &nbsp;member
              </span>
            ) : !companyData ? (
              <span className="text-add-team" style={{ whiteSpace: "nowrap" }}>
                + Add members to the team
              </span>
            ) : null}
          </Button>
        </div>

        <div
          className="delete-icon"
          style={{
            position: companyData || filteredResults ? "relative" : "",
            left: companyData || filteredResults ? "-270px" : "",
          }}
        >
          {(companyData || filteredResults) && (
            <DeleteIcon onClick={handleDeleteTeam} />
          )}
        </div>
      </Stack>

      <div className="add-member-modal">
        <Modal
          open={openAddMemberModal}
          onClose={handleCloseMember}
          hideBackdrop={false}
        >
          <div style={{ position: "relative", top: "1%", left: "594px" }}>
            <SelectMembersModal
              selectedStudents={currentSelectedStudents}
              students={students}
              handleClose={handleCloseMember}
              cancelClick={handleCloseMember}
              onAddMembers={handleAddMember}
            />
          </div>
        </Modal>
      </div>

      <div className="logo-modal">
        <Modal
          open={openLogoModal}
          onClose={handleCloseLogo}
          hideBackdrop={false}
        >
          <div style={{ position: "relative", top: "6%", left: "594px" }}>
            <LogoTeamModal
              handleClose={handleCloseLogo}
              cancelClick={handleCloseLogo}
              blueBtnClick={handleOKClick}
            />
            {/* JS map method is used in this component to loop through logos, retrieved from json server by axios call */}
          </div>
        </Modal>
      </div>

      {/* these modals are for confirmation of the delete operation */}
      <Modal className="modal" open={openPrompt} onClose={handleClosePrompt}>
        {/* Do you really want to delete the scenario? This process cannot be undone. */}
        <PopupCheckDelete
          CancelOnClick={handleClosePrompt}
          DeleteOnClick={deleteTeam}
          onClose={handleClosePrompt}
          style={{ position: "relative", top: "20%", left: "30%" }}
          msg1="Are you sure?"
          number="1st"
        />
      </Modal>

      <Modal className="modal" open={open} onClose={handleClose}>
        {/* Your scenario was succefully deleted! */}
        <PopupDeleted
          onOKClick={handleClose}
          onClick={handleClose}
          style={{ position: "relative", top: "20%", left: "30%" }}
        />
      </Modal>
    </Stack>
  );
}

export function Student({
  status,
  avatar,
  showStatus,
  firstName,
  lastName,
  addOrRemoveStudent,
  checked,
  studentId,
}) {
  let marginRight,
    position,
    left,
    bottom = "";
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  if (status === true) {
    status = green_icon;
  } else if (status === false) {
    status = red_icon;
  }
  if (showStatus === undefined || showStatus === false) {
    marginRight = "-20px";
    position = "relative";
    left = "108px";
    bottom = "10px";
  }

  const onCheckBoxChange = (e) => {
    addOrRemoveStudent(studentId, e.target.checked);
  };

  return (
    <div className="student-container" spacing={0} direction="row">
      <Stack
        className="inner"
        direction="row"
        spacing={0}
        justifyContent="space-between"
        alignItems="center"
      >
        <div className="avatar">
          <img
            src={avatar}
            alt=""
            style={{ width: "53px", height: "53px", borderRadius: "50%" }}
          />
        </div>

        <div className="student-infos" style={{ marginRight: marginRight }}>
          <div className="infos">
            <span className="firstname">{firstName}</span>&nbsp;
            <span className="lastname">{lastName}</span>
          </div>
          {/* <span className='team'>{team}</span> */}
        </div>

        {/* status or Checkbox */}
        {showStatus === false || showStatus === undefined ? (
          <CustomizedCheckbox
            onChange={onCheckBoxChange}
            checked={checked}
            style={{ position: position, left: left, bottom: bottom }}
          />
        ) : (
          <div className="student-list-status">
            <img className="student-list-img" src={status} alt="" />
          </div>
        )}
      </Stack>
    </div>
  );
}
