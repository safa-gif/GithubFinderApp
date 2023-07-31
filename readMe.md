
### Github Finder Application

- This is a finder application that uses Github Rest API to search users and get their profile data and display it nicely

#!SECTION Third Party API

- We will be using GitHub REST API

- We will usr context API, also we will be using reducers

- Our application is build with react as Frontend library, and for its styling we rare using Tailwind css and we will be instaling DaisUI `https://react.daisyui.com/?path=/story/utils-theme--with-initial-value&args=dataTheme:` which is a taiilwind plugin library that give us a bunch of compoenent classes like alerts buttons and so on.

- This is our guide to getting started with tailwind: `https://tailwindcss.com/docs/guides/create-react-app`. We need to isntall tailwind and its dependencies. 

- We will be installing React-router and react-icons.

#!SECTION Working with the Github API

- We took a look at Github API, we made some requests with Postman and we got our own token from github using `.env` file.

- Eventually we will be using a Github Context where all our state are kept. For now we are using UserResults Component (users) which is basically the results to be displayed by our search.

- We are currently making a request to display data, we want it to be right when we write, right when the component loads we use `useEffect` hook. The UseEffect hook requiresa function and an array of dependencies.

- We will be creating a spinner component that will be displayed while waiting for the components to be loaded. The spinner will be creating in the layout folder.


