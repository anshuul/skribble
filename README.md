![Skribble](docs/banner.png)

# Skribble

[![Website](https://img.shields.io/badge/website-up-green?style=for-the-badge&logo=react&url)](https://notes.theoctagon.in/) 

## Technologies Used <a name="technologies-used"></a>

| Name        | Description |
| ----------- | ---------------- |
| ReactJS | React is an open-source, front end, JavaScript library for building user interfaces or UI components.|
| MaterializeCSS | A modern responsive front-end framework based on Google's Material Design.|
| Redux | Redux is an open-source JavaScript library for managing application state.|
| Cloud Firestore | Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud.|
| Firebase Auth | Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.|
| Formik | Formik is an open source form library for React.|
| React Router | React Router is a collection of navigational components that compose declaratively with your application.|

## Project Structure

The website follows a simple structure where any user can view a demo page where they can add new notes which get stored temporarily in the local app state. These notes get deleted when the user reloads the page. Alternatively, a user can sign up using email and password authentication or login using their Google account and can add notes which get saved in the cloud firestore database. A user can only view their own notes and no other user can view the notes created by other users.

The pages visible to unauthenticated and authenticated users are as follows.

- [Unauthenticated User](#unauthenticated-user)
  - [Demo Page](#demo-page)
    - [Add Note](#demo-page-add-note)
  - [Sign In Page](#sign-in-page)
    - [Email and Password Sign In](#email-and-password-sign-in)
    - [Google Sign In](#google-sign-in)
  - [Sign Up Page](#sign-up-page)
    - [Email and Password Sign Up](#email-and-password-signup)
- [Authenticated User](#authenticated-user)
  - [User Notes Page](#user-notes-page)
    - [Add Note](#user-notes-page-add-note)

## Unauthenticated User <a name="unauthenticated-user"></a>

### Demo Page <a name="demo-page"></a>
![Demo Page](docs/demo-page.png)

This page is displayed when an unauthenticated user opens the application. Here, the user can access the notes system but the notes that are added will not be stored anywhere. An initial note is also displayed to the user as an example. If the user refreshes the page, the notes will be deleted and only the initial note will remain.

### Add Note <a name="demo-page-add-note"></a>
The first card on the Demo Page is the 'Add New Note' Card. This allows the user to add new notes to the list of notes. This note is stored in the state of the application which is handled using Redux. Because of this, the data is lost if the user leaves the page or refreshes it.


## Sign In  Page <a name="sign-in-page"></a>
![Sign In Page](docs/sign-in-page.png)

This page allows the user to sign in to the application. The user can either decide to sign in using their email and password or choose to sign in with Google.


### Email and Password Sign In <a name="email-and-password-sign-in"></a>
If the user chooses to sign in with their email and password, their `email` and `password` inputs are validated using Firebase Authentication. If the email and password are correct, the user is redirected to the user Notes page and their existing notes are fetched from the Cloud Firestore Database.

If the user does not have an account or enters the wrong email or password, an error message is displayed.


### Google Sign In <a name="google-sign-in"></a>
If the user chooses to sign in with their Google ID, a pop-up is shown where the user can choose the ID with which they want to continue to the rest of the application.

Note: Even if a user does not have an existing ID, a new entry is created in the database and their account is automatically registered when using the Google Sign In.


## Sign Up  Page <a name="sign-up-page"></a>
![Sign Up Page](docs/sign-up-page.png)
This page allows the user to sign up for the application. The user can use the Email and Password to sign up or they can directly log in using the Google Sign In option.

### Email and Password Sign Up <a name="email-and-password-signup"></a>
If the user chooses to sign up using their email and password, they will be asked to enter their `full-name`, `email` and `password`. This information will be used to create an account and to obtain other details like initials.


## Authenticated User <a name="authenticated-user"></a>

### User Notes Page <a name="user-notes-page"></a>
![User Notes Page](docs/notes-page.png)

The notes page will allow an authenticated user to view their saved notes and add new ones. This page fetches the notes from Cloud Firestore and displays it to the user in a neat list of cards. If the user hasn't added any notes, a 'Your Notes List is Empty' message to the user. Additionally, the user can delete a note and it will be deleted from the database as well.


### Add Note <a name="user-notes-page-add-note"></a>
The first card on the User notes Page is the 'Add New Note' Card. This allows the user to add new notes to their existing list of notes. The data entered in the title and content fields is stored as a new entry in the Cloud Firestore database.




