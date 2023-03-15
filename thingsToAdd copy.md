// Work on the Skeleton's responsivness!!!
//user's avatar on hambrurger menu
//deploy on AWS
Mettre une veste et une chemise pr l'entretien de jeudi
//do the same , when the user tries to register through a device mobile
const loggedAvatarMobile = JSON.parse(
localStorage.getItem("avatarMobileScreen")
);
//add toggle btn for the color of the background of the app ------ implemet a dark mode.

---

If your shells array is a prop, it looks like you're trying to use it before the prop is defined. This is a common situation, and the usual approach it to guard against the error by first testing if your array is defined or not. The easiest method is to use a shortcut conditional:
