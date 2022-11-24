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
