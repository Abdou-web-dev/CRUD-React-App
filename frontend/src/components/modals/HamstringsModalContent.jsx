import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import chevron_en_bas from "../../assets/img/chevron-en-bas.png";
import "./modals_styles.scss";

export function HamstringsModalContent() {
  const [instructionsBorder2, setInstructionsBorder2] = useState("0");
  const [instructionsBorder3, setInstructionsBorder3] = useState("0");
  const [instructionsBorder4, setInstructionsBorder4] = useState("0");
  const [liClass, setliClass] = useState("");
  const [showNbr1, setshowNbr1] = useState(false);
  const [showNbr2, setshowNbr2] = useState(false);
  const [showNbr3, setshowNbr3] = useState(false);
  const [showNbr4, setshowNbr4] = useState(false);

  useEffect(() => {
    setliClass("gray-border");
    setshowNbr1(true);
    setTimeout(() => {
      setliClass("borderNone");
      setshowNbr1(false);
    }, 2000);
    //
    setTimeout(() => {
      setInstructionsBorder2("2px solid black");
      setshowNbr2(true);
    }, 2500);
    setTimeout(() => {
      setInstructionsBorder2("0px solid red");
      setshowNbr2(false);
    }, 4000);
    //
    setTimeout(() => {
      setInstructionsBorder3("2px solid black");
      setshowNbr3(true);
    }, 4500);
    setTimeout(() => {
      setInstructionsBorder3("0px solid red");
      setshowNbr3(false);
    }, 6000);
    //
    setTimeout(() => {
      setInstructionsBorder4("2px solid black");
      setshowNbr4(true);
    }, 6500);
    setTimeout(() => {
      setInstructionsBorder4("0px solid red");
      setshowNbr4(false);
    }, 8000);
  }, []);

  // set a congrats msg when the user hovers over all hamstring useSyncExternalStorehttps://www.flaticon.com/free-icon/applause_2828315?term=congratulations&page=1&position=6&page=1&position=6&related_id=2828315&origin=search

  return (
    <div className="hamstring-modal-content-container">
      <div className="hamstring-modal-intro">
        <div className="chevron_en_bas">
          <img src={chevron_en_bas} alt="" className="chevron_en_bas" />
        </div>
        <p>
          To work your inner thighs or adductor muscles and hamstrings, consider
          adding the sumo squat to your lineup of hamstring exercises. With the
          sumo squat, you get the same benefits as the traditional squat, but
          you’ll increase activation of the inner thighs and hamstrings.
          <br /> <br /> You can perform this move with or without weight.
          Step-by-Step Instructions Stand with feet slightly wider than
          hip-width. Point your toes about 45 degrees outward. Your hips will be
          rotated outward. Put your arms out in front of you at shoulder height.
          <br /> <br /> If you are using weight, hold the dumbbells securely at
          the shoulders or in a goblet position in front of your chest. Take a
          deep breath, engage your core, and push your hips back, lowering into
          a squat position. Pause at the bottom, exhale, and press back into a
          standing position.
          <br /> <br /> Keep weight evenly distributed in heel and midfoot. Do
          12 to 15 reps. You can make this move more difficult by squatting
          lower or make it easier by shortening the distance you squat down.
        </p>
        <div className="chevron_en_bas_no2">
          <img src={chevron_en_bas} alt="" className="chevron_en_bas_bottom" />
        </div>
      </div>

      <div className="h2">
        <h2>Step-by-Step Instructions : </h2>
      </div>

      <div className="hamstring-modal-instructions">
        <ul>
          <Stack
            direction={"row"}
            alignItems="center"
            className="hamstring-instr-stack"
          >
            {showNbr1 && <span className="nbr-span">1</span>}
            <li className={liClass}>
              <span>
                Stand with feet slightly wider than hip-width. Point your toes
                about 45 degrees outward. Your hips will be rotated outward.
              </span>
            </li>
          </Stack>
          <Stack
            direction={"row"}
            alignItems="center"
            className="hamstring-instr-stack"
          >
            {showNbr2 && <span className="nbr-span">2</span>}
            <li style={{ border: instructionsBorder2 }}>
              <span>
                Put your arms out in front of you at shoulder height. If you are
                using weight, hold the dumbbells securely at the shoulders or in
                a goblet position in front of your chest.
              </span>
            </li>
          </Stack>
          <Stack
            direction={"row"}
            alignItems="center"
            className="hamstring-instr-stack"
          >
            {showNbr3 && <span className="nbr-span">3</span>}
            <li style={{ border: instructionsBorder3 }}>
              <span>
                Take a deep breath, engage your core, and push your hips back,
                lowering into a squat position.
              </span>
            </li>
          </Stack>
          <Stack
            direction={"row"}
            alignItems="center"
            className="hamstring-instr-stack"
          >
            {showNbr4 && <span className="nbr-span">4</span>}
            <li style={{ border: instructionsBorder4 }}>
              <span>
                Pause at the bottom, exhale, and press back into a standing
                position. Keep weight evenly distributed in heel and midfoot.
              </span>
              <span className="nb">1 2 3 4 5 </span>
            </li>
          </Stack>
          <li>
            {/* show this as a notification little modal on top, after the instr are finished!!!! */}
            {/* Do 12 to 15 reps. */}
          </li>
        </ul>
      </div>
    </div>
  );
}

// React.useEffect(() => {
//   const over_tab = document.getElementById("overv-tab");
//   if (over_tab) {
//     over_tab.addEventListener("click", handleOvervClick);
//   }
