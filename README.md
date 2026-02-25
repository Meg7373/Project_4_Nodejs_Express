# Project 4 Node.js Express

### Overview of the Project
The overview of the project is to create a question and answer forum website. It is based on a 3-tier architectural system utilizing a data layer, application layer, and a presentation layer. The coffee forum website application consists of a login page, registration page, dashboard/home page, and a question page on the selected topic. Required technology to be used in this project are as follows: consistent Github commits, MySQL, Node.js, Express, HTML, CSS, JavaScript, and a creater's choice of React, React Router, Redux, and/or Angular.

### Functionality of the Application
The website application takes users to the 'Login' page so that they can login to utilize the website and/or 'Create an Account' if they are not members yet. Once logged in, the website offers a navigation bar so that users can access the 'Home' page as well as 'Logout' anytime. The 'Home' page offers six coffee topics/forums for users to look over. If they have a question about a given topic, they click 'Enter the Discussion' button. Then they are given the option to ask a question where they will type in a 'Question Title' and 'Write their question...', and then click the 'Post Question' button. Once posting a question, it will take the user back to see their question posted and at then they can click the 'Home' or 'Logout' button on the navigation bar.

### Technologies Utilized
* Node.js
* Express
* HTML
* CSS
* Javascript
* React
* Bootstrap React
* MySQL Workbench

### Ideas for Future Improvement
1. Add a 'delete' button for each user if they decide they want to remove their question(s).
2. Add outside links and resources to add more information for users to learn and review.
3. Allow users to opt-in and receive notifications via email when their questions are answered.

### User Stories
1. As a coffee enthusiast, I want to join this coffee forum so that I can know more about coffee topics.
2. As a coffee business owner, I want to use this coffee forum so that I can learn more about Latte Art and milk-steaming techniques.
3. As a new stay-at-home parent, I want to use this coffee forum to know more about coffee machines and equipment so that I can make my own coffee at home.

### Wireframes

### Website Pages

### API Endpoints (Assumed)
* POST/auth/register - creates a new user account
* POST/auth/login - checks email and password of current user
* GET/categories - loads coffee topic list for dashboard/home page
* POST/questions: posts new question under selected category
* GET/questions/category/:id - loads all given questions for selected topic page
* GET/questions/:id - load one question on the page

### Database Schema
- Users Table
    
    CREATE TABLE users(

    id INT AUTO_INCREMENT PRIMARY KEY,

    username VARCHAR(100),

    email VARCHAR(255) UNIQUE NOT NULL,

    password VARCHAR(255) NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    );

- Categories Table

    CREATE TABLE categories(

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL

    );


- Questions Table

    CREATE TABLE questions(

    id INT AUTO_INCREMENT PRIMARY KEY,

    title VARCHAR(255) NOT NULL,

    content TEXT NOT NULL,

    category_id INT,

    user_id INT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(category_id) REFERENCES categories(id) ON DELETE SET NULL,

    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE SET NULL

    );


- Answers Table

    CREATE TABLE answers (

    id INT AUTO_INCREMENT PRIMARY KEY,

    content TEXT NOT NULL,

    user_id INT,

    question_id INT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,

    FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE

    );


### Meaghann Wallace

### LinkedIn Profile Link:
* www.linkedin.com/in/meaghann-wallace