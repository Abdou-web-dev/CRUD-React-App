import HamburgerMenu from "react-hamburger-menu";
// import "./mobile_navbar.scss";

export function HamburgerMenuComponent({
  hamburgerMenuIsOpen,
  handleHamburgerMenuClick,
}) {
  return (
    <HamburgerMenu
      className={"workout-hamburger-menu"}
      isOpen={hamburgerMenuIsOpen}
      menuClicked={handleHamburgerMenuClick}
      // width={18}
      // height={15}
      strokeWidth={2.5}
      rotate={0}
      color="black"
      borderRadius={0}
      animationDuration={0.5}
    />
  );
}
