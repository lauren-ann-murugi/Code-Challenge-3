// Constants
const BASE_URL = "http://localhost:3000/post";
const postListDiv = document.getElementById("post-list");
const postDetail = document.getElementById("post-detail");
const newPostForm = document.getElementById("new-post-form");

let currentPostId = null; // Track currently selected post


// Fetch and display all posts function
 function displayPosts() {
  fetch(BASE_URL)
    .then(res => res.json())
    .then(posts => {
      postListDiv.innerHTML = "";
      posts.forEach(post => renderPostTitle(post));
    });
}

// Render a single post title as a clickable item in the post list
function renderPostTitle(post) {
  const postItem = document.createElement("div");
  postItem.className = "post-title clickable";
  postItem.dataset.id = post.id;
  postItem.textContent = post.title;
  postItem.addEventListener("click", () => handlePostClick(post.id));
  postListDiv.appendChild(postItem);
}

// Render a styled card version of a post title
function renderPostCard(post) {
  const postCard = document.createElement("div");
  postCard.className = "post-card";
  postCard.innerHTML = `
    <h3 class="post-title" data-id="${post.id}">${post.title}</h3>
  `;
  postCard.querySelector(".post-title").addEventListener("click", () => {
    handlePostClick(post.id);
  });
  postListDiv.appendChild(postCard);
}

// Show full post in detail section (title, content, author, timestamp)
function handlePostClick(postId) {
  fetch(`${BASE_URL}/${postId}`)
    .then(res => res.json())
    .then(post => {
      currentPostId = post.id; // Update the current post ID tracker
      postDetail.innerHTML = `
        <h3>${post.title}</h3>
        <p><strong>By:</strong> ${post.author}</p>
        <p><strong>Date:</strong> ${post.timestamp || "Unknown"}</p>
        <p>${post.content}</p>
        <img src="${post.image}" alt="${post.title}" class="post-image-thumb" />
        <div class="btn-group">
          <button id="edit-btn">Edit</button>
          <button id="delete-btn">Delete</button>
        </div>
      `;
      addEditDeleteListeners(post);
    });
}

// Add functionality to submit a new post via the form
function addNewPostListener() {
  newPostForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const newPost = {
      title: document.getElementById("title").value,
      author: document.getElementById("author").value,
      image: document.getElementById("image").value,
      content: document.getElementById("content").value,
      timestamp: new Date().toLocaleString()
    };

    // Send the new post to the server
    fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost)
    })
      .then(res => res.json())
      .then(post => {
        renderPostTitle(post);
        newPostForm.reset();
      });
  });
}

// Add Edit and Delete button functionality
function addEditDeleteListeners(post) {
  //Edit functionality
  document.getElementById("edit-btn").addEventListener("click", () => {
    const newTitle = prompt("Edit Title:", post.title);
    const newContent = prompt("Edit Content:", post.content);

    if (newTitle && newContent) {
      const updatedPost = {
        title: newTitle,
        content: newContent,
        timestamp: new Date().toLocaleString()
      };
       
      //send updated post data to server
      fetch(`${BASE_URL}/${post.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPost)
      })
        .then(res => res.json())
        .then(updated => {
          displayPosts();
          handlePostClick(updated.id);
        });
    }
  });
   //delete functionality
  document.getElementById("delete-btn").addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this post?")) {
      fetch(`${BASE_URL}/${post.id}`, { method: "DELETE" })
        .then(() => {
          displayPosts();
          postDetail.innerHTML = "<p>Select a post to see details.</p>";
        });
    }
  });
}

// App initializer- called when DOM is fully loaded
function main() {
  displayPosts(); //load and show all posts on page load
  addNewPostListener();  // Enable form submission functionality
}

// Wait until page loads before running any JavaScript
document.addEventListener("DOMContentLoaded", main);
