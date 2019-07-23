# GitHub Search (API experimentation)

Experimental application created to experiment with GitHub API and UI Component Libraries. In this stage the application allows users to search for GitHub usernames and see a rendered view of their profile and latest repositories. There is so much more you can do with the GitHub API and in the current state the application barely scratches the surface.

The application is built with React and utilizes the latest features such as Hooks and Context. The UI is built with components from [Ant Design](https://ant.design/). While creating this application I've experimented with both UI libraries and CSS frameworks as practise.

## Run the app with `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

Note: The app requires a GitHub API key configured as an enviromental variable (.env.local file).
<br>
Inside the .env.local file the variables below should be set with the keys:
<br>
<br>
REACT_APP_GITHUB_CLIENT_ID=''
<br>
REACT_APP_GITHUB_CLIENT_SECRET=''
