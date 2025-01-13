# task-1-and-2-demo
Task 1: Express App with MongoDB

1. Clone the repository:
  
   git clone https://github.com/shailesh10981/task-1-and-2-demo
   cd task1
   
 2.  Install backend dependencies:
     npm install
 3. Set up MongoDB:
 
 4.Run the backend server:
   node index.js




5. Use Postman or cURL to test the following endpoints

Register a User:

URL: http://localhost:5000/register
Method: POST
Body (JSON):
json
Copy code
{
  "email": "test@example.com",
  "password": "password123"
}

Login a User:

URL: http://localhost:5000/login
Method: POST
Body (JSON):
json
Copy code
{
  "email": "test@example.com",
  "password": "password123"
}

Task 2: Redux-React App

1. Clone the repository:
  
   git clone https://github.com/shailesh10981/task-1-and-2-demo
   cd task2
   
2.Install Node.js

3.Start the development server: npm start

4. Open your browser at http://localhost:3000 to see the app in action.

App Flow:
App.js: Contains the counter and buttons for incrementing, decrementing, and resetting the counter.
counterSlice.js: Defines the Redux slice and actions for managing the counter state.
store.js: Configures the Redux store using Redux Toolkit.

   
