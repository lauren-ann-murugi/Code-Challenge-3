# CODE-CHALLENGE-3
## Lauren's OOTD Blog

Hi! I'm **Lauren Ann**, a budding software engineer and fashion enthusiast.
This project is a submission for my **Phase 1 Code-Challenge-3**, where I built a full CRUD (Create, Read, Update, Delete) blog app from scratch using HTML, CSS, and JavaScript
___
![Screenshot 2025-06-23 183123](https://github.com/user-attachments/assets/0f84fd01-6750-45c9-9425-cff0424d13a5)
![Screenshot 2025-06-23 183448](https://github.com/user-attachments/assets/7f830d3e-e9c8-4c6d-8522-0716c3286312)



## Project Overview

**Lauren's OOTD Blog** is a fashion-forward blog platform where users can:
- View outfit-of-the-day (OOTD) blog posts
- Click on each post to read the full content
- Add their new fashion posts
- Edit existing ones
- Delete posts when needed

It uses a `json-server` as a mock backend and reflects changes on the frontend in real time through DOM manipulation.

___
## Technologies Used
- **HTML** - For page structure
- **CSS** - Styled with soft backgrounds and custom designs
- **JavaScript** – For logic and interactivity
- **JSON Server** – To mimic a restful API locally

___

## Features
- Post List Display: Loads all blog titles and images on page load.
- View Post Details: Clicking a post title shows full content, author, and timestamp.
- Add New Post: Users can submit a form to add a new post to the blog.
- Edit Post: An "Edit" button allows updates to post content and title.
- Delete Post: Posts can be deleted from the interface and server.

___

## Setup Instructions

### 1. Clone the repo
```
git clone https://github.com/your-username/Code-Challenge-3.git
cd Code-Challenge-3
```
### 2. Install JSON Server
```
npm install -g json-server
```
### 3. Start the Backend
```
json-server --watch db.json
```
This will start your mock API on:
```
http://localhost:3000/post
```

### 4. Open the Frontend
You can open `index.html` directly in the browser

# File Structure
```
CODE-CHALLENGE-3/
├── index.html          
├── css/
│   └── style.css         
├── src/
│   └── index.js          
├── db.json               
└── README.md   
```
## Submission

Once your project is complete:
Initialize a Git repository (if not already done):
```
git init
```
- Add my files
```
git add .
```
- Commit my changes
```
git commit -m "Complete challenge"
```
- Push to GitHub
```
git remote add origin git@github.com:lauren-ann-murugi/Code-Challenge-3.git
git push -u origin main
```
