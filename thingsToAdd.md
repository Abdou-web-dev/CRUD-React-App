1)++add updte functionality to workouts

2)++add fnct : if a workout already exists , dont add it , show a msg saying that it already exists . ......

3)++https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-react-app-with-react-i18next

4)++add auth0 authentication 5) add a search input for fetching a specific workout in the list
Note: files tracked before can be untracked by running git rm --cached filename

5- authentication , maybe use Firebase or JWT ?? auth0 is not completely free and is changing rapidly

6- in the frontend , create a page divided into 2 parts : left part allows users to signup to the website, the right part allows them to login into their account.
if the visitor clicks on signup , the left part will then occup 85% of the full width of the screen, the rest 15% and some kind of greyish background will partially hide the content behind, vice versa for the right part...

in the signup form , add an input for the gender and a btn for choosing an avatar icon from a list of avatars that are displayed in a modal, oncloick on this btn
once the user is logged in , add a btn to view the user infos once the user hovers over a small icon for each info and make them modifiable

if you want to use custom db from mongoDB db's , you need to type the name of the db after the ".net/" in this URI :
MONGO_URI=mongodb+srv://avdelmounim:condemerde22@cluster0.iswlhxp.mongodb.net/dbAbdel?retryWrites=true&w=majority
this db should already be present among your list of dbs , otherwise it wont work
if we dont specify any name, a default db named 'test' is created

if (!validator.isAlpha(fullName)) {
throw Error("Invalid full name"); //resolve space problem
}

      //when the user clicks on filter btn, decrease the size of the form and of all inputs and select
      //components inside...



      ****************************************************

usecallback hook is used when you have a component in which a child is rendering repeatedly without the need for it.

Which cases should you use the useRef?
A very common use case for using useRef is for when, suppose you click on a button, and then on its click you want an input to come into focus. To do this, we would need to access the DOM element of input and then call its function focus() to focus the input.

The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.

The most important thing to remember here is that both useMemo and useCallback are useful only during the re-renders phase. During the initial render, they are not only useless but even harmful: they make React do some additional work. This means that your app will become slightly slower during the initial render.13 jui. 2022

JS vs TS :::::::::::
I wrote an app in JavaScript, released it, then for the second release ported it to TypeScript. My experience was that I preferred TypeScript. The better intelli-sense made coding faster when using objects and it definitely prevented mistakes. One simple mistake anybody who has written JavaScript has made is an accidental casing typo. For example, if an object variable name is mySharona, and you accidentally typed mySHarona. JavaScript allows this and treats the two as separate variables on the object since it is case-sensitive. This leads to defects as most places expect the correct spelling except for the place you made the mistake. This kind of stuff is even hard to catch in code-reviews.

For this reason alone, TypeScript is superior. It catches stupid mistakes.

This was glossed over in the video as the error category of static type checking.
