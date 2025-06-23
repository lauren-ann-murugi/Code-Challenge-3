# CODE-CHALLENGE-3
## Lauren's OOTD Blog

Hi! I'm **Lauren Ann**, a budding software engineer and fashion enthusiast.
This project is a submission for my **Phase 1 Code-Challenge-3**, where I built a full CRUD (Create, Read, Update, Delete) blog app from scratch using HTML, CSS, and JavaScript
___
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
git commit -m "Complete Event Guest List Manager"
```
- Push to GitHub
```
git remote add origin https://github.com/yourusername/event-guest-list-manager.git
git push -u origin main
```
