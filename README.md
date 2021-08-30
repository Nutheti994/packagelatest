##Component details 

InstructorApp.jsx : React Component representing the high-level structure of the application. Routing is defined in this file.
ListCoursesComponent.jsx - React Component for listing all the courses for an instructor.
CourseComponent.jsx - React Component for editing Course Details and creating a new course
CourseDataService.js - Service using axios framework to make the Backend REST API Calls.


#packages needed
1.npm add axios
Axios is a Promise based HTTP client for the browser and node.js
2.npm add react-router-dom
When the user clicks the update course button on the course listing page, we would want to route to the course page. How do we do it? That’s where Routing comes into the picture
3.npm add formik
Formik is a small group of React components and hooks for building forms in React and React Native. It helps with the three most annoying parts: Getting values in and out of form state. Validation and error messages. Handling form submission.
