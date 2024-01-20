<h1>React App</h1>

  <p>Welcome to the React App! This application is a React-based frontend that incorporates global state management,
        custom form elements, and permissions-based features.</p>

  <h2>Table of Contents</h2>

  <ul>
  <li><a href="#prerequisites">Prerequisites</a></li>
 <li><a href="#getting-started">Getting Started</a></li>
 <li><a href="#application-structure">Application Structure</a></li>
  <li><a href="#permissions-based-features">Permissions-Based Features</a></li>
   <li><a href="#testing">Testing</a></li>
   <li><a href="#contributing">Contributing</a></li>
   <li><a href="#license">License</a></li>
   </ul>

   <h2 id="prerequisites">Prerequisites</h2>

  <p>Before you begin, ensure you have the following installed:</p>

  <ul>
  <li><a href="https://nodejs.org/">Node.js</a> (version X.X.X)</li>
  <li><a href="https://www.npmjs.com/">npm</a></li>
   </ul>

  <h2 id="getting-started">Getting Started</h2>

   <ol>
  <li><strong>Clone the repository:</strong></li>
  <code>git clone https://github.com/JeanSilva08/react-app.git</code>

  <li><strong>Navigate to the project directory:</strong></li>
  <code>cd react-app</code>

  <li><strong>Install dependencies:</strong></li>
   <code>npm install</code>

 <li><strong>Start the development server:</strong></li>
  <code>npm start</code>
   </ol>

   <p>The application will be running at <a href="http://localhost:3000">http://localhost:3000</a>.</p>
  <h2 id="application-structure">Application Structure</h2>

   <p>The project follows the structure outlined below:</p>

   <pre>
react-app/
|-- src/
|   |-- components/
|   |   |-- CustomInput.js
|   |   |-- UserProfileForm.js
|   |-- redux/
|   |   |-- actions/
|   |   |   |-- userActions.js
|   |   |-- reducers/
|   |   |   |-- index.js
|   |   |   |-- userReducer.js
|   |   |-- store.js
|   |-- services/
|   |   |-- userService.js
|   |-- App.js
|   |-- index.js
|-- public/
|-- node_modules/
|-- package.json
|-- README.md
|-- .gitignore
|-- .eslintrc.js
|-- .prettierrc
|-- jest.config.js
|-- tsconfig.json
    </pre>

   <h2 id="permissions-based-features">Permissions-Based Features</h2>

  <p>The application includes the following permissions-based features:</p>

   <ul>
  <li><strong>user:profile:view:</strong> User can view the profile form in a readonly state.</li>
   <li><strong>user:profile:edit:</strong> User can edit the profile form.</li>
  <li><strong>[user:profile:view, user:profile:name:edit]:</strong> User can view the profile form and edit only
            the name field.</li>
  </ul>

   <p>All fields are hidden by default and only shown based on user permissions.</p>

  <h2 id="testing">Testing</h2>

 <ol>
<li>Ensure the application is running.</li>
  <li>Open your web browser and navigate to <a href="http://localhost:3000">http://localhost:3000</a>.</li>
 <li>Interact with the application, updating the profile form based on your permissions.</li>
  </ol>
