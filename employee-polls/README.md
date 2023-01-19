# Employee Polls Project

| --------- Created by: Aneesh Bist

- this app is a basic representation of Polls created by employees.

# installing the app

- open the console and type: npm install
- once installation finished successfully, type: npm start.
  -- the app is ready to go as it launches the login screen

# Functionality of the app

- Pages

  - LOGIN
    -This is the first page which opens when the app runs > Page requires both username and passowrd to be valid for login, otherwise it shows an error message on clicking login button > When correct username and passowrd is provided. upon clicking login, the Dashboard is chown and user is logged in
  - DASHBOARD
    - This is the Home screen of user showing pending polls by default
      > a toggle button is present under the username and profile avatar - clicking on it shows the list mentioned
      > 1: "click to show Answered" - on click, shows all the polls user have answered
      > 2: "click to show Pending" - on click, shows all the polls pending for user
      > clicking on button hides current button (say 1) and shows the other (say 2) and vice versa
      > The arrangement of the polls are formed such : recently created appears first and oldest created appears last
      > on top user see the app's name and three clickable links to left: DASHBOARD(current), LEADERBOARD and NEW. > on top right user can see his user name and "logout" button, upon clicking which user would be logged out of the app. > On clicking "view" button of any poll, the app redirects to the poll page where user can answer question accordingly.
  - POLL
    > > Once the user has clicked the "View" button, they are redirected to that poll page
    > > user can see the poll question as "Would you rather?" and has two options, the number of users answered the vote and submit button beneath it.
    > > The total number of users who have answered and their percentage is shown at the bottom
    > > if the poll was on "answered" list in DASHBOARD, the options and button is disabled and user answer is shown at the bottom
    > > if the poll was on "pending" list in DASHBOARD, user has to select from either of two option provided and click submit
    > > not providing an option and clicking submit would show error message and no response would be recorded
    > > when one option is selected and upon successful submit the options and submit button are disabled. the number of votes has been increased by 1 and user's answer is displayed at the bottom
  - LEADERBOARD > This is just a display page which shows details of users in app: all users along with number of their polls created and answered. > the ranking is based on total of polls created and answered by a user in Descending order: top user has highest score > creating more polls and answering pending polls, increases chance of user to move up on the leaderboard
  - NEW > User can create their own poll by entering two options for question "Would you rather?", and clicking on submit button > It requires both options to be submitted successfully otherwise error message is displayed > On creating a poll, user is redirected to the DASHBOARD where they can see their created poll in pending list

- Navigation > once logged in user can navigate to any of the pages (except login) by clicking on navigation bar at top or "view" button of poll > clicking on "Logout" button would logout the user and they will be redirected to LOGIN page > once logged in, >> user can type in URL >>> "/dashboard" for DASHBOARD >>> "/leaderboard" for LEADERBOARD >>> "/add" for NEW poll page >>> "/questions/(id)" for exisitng poll page >> the app is designed as such on entering a valid url as above will ask user to authenticate send user to login page. >> on successfull login, the user is redirected to page which is searched for in url >> the url is invalid (not from above mentioned), the user is logged out and directed to error page with button link to login page >> if a new poll is created and then tried to access via url, user is logged out for authentication and then on login, 404 error page is shown

## Data

There are two types of objects stored in our database:

- Users
- Questions

### Users

Users include:

| Attribute | Type   | Description                                                                                                                                                                                                    |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id        | String | The user’s unique identifier                                                                                                                                                                                   |
| password  | String | The user’s password in order to log in the application                                                                                                                                                         |
| name      | String | The user’s first name and last name                                                                                                                                                                            |
| avatarURL | String | The path to the image file                                                                                                                                                                                     |
| questions | Array  | A list of ids of the polling questions this user created                                                                                                                                                       |
| answers   | Object | The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options. |

### Questions

Questions include:

| Attribute | Type   | Description                            |
| --------- | ------ | -------------------------------------- |
| id        | String | The question’s unique identifier       |
| author    | String | The author’s unique identifier         |
| timestamp | String | The time when the question was created |
| optionOne | Object | The first voting option                |
| optionTwo | Object | The second voting option               |

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type   | Description                                                        |
| --------- | ------ | ------------------------------------------------------------------ |
| votes     | Array  | A list that contains the id of each user who voted for that option |
| text      | String | The text of the option                                             |

Your code will talk to the database via 4 methods:

- `_getUsers()`
- `_getQuestions()`
- `_saveQuestion(question)`
- `_saveQuestionAnswer(object)`

1. `_getUsers()` Method

_Description_: Get all of the existing users from the database.  
_Return Value_: Object where the key is the user’s id and the value is the user object.

2. `_getQuestions()` Method

_Description_: Get all of the existing questions from the database.  
_Return Value_: Object where the key is the question’s id and the value is the question object.

3. `_saveQuestion(question)` Method

_Description_: Save the polling question in the database. If one of the parameters are missing, an error is thrown.
_Parameters_: Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute     | Type   | Description                                |
| ------------- | ------ | ------------------------------------------ |
| author        | String | The id of the user who posted the question |
| optionOneText | String | The text of the first option               |
| optionTwoText | String | The text of the second option              |

_Return Value_: An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type   | Description                                                                                                                  |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| id        | String | The id of the question that was posted                                                                                       |
| author    | String | The id of the user who posted the question                                                                                   |
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option |
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option |
| timestamp | String | The time when the question was created                                                                                       |

4. `_saveQuestionAnswer(object)` Method

_Description_: Save the answer to a particular polling question in the database. If one of the parameters are missing, an error is thrown.
_Parameters_: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute  | Type   | Description                                                                             |
| ---------- | ------ | --------------------------------------------------------------------------------------- |
| authedUser | String | The id of the user who answered the question                                            |
| qid        | String | The id of the question that was answered                                                |
| answer     | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"` |
