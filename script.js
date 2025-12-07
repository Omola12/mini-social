// Post Box Functionality
const postButton = document.querySelector('.post-box button');
const postBox = document.querySelector('.post-box textarea');
const feed = document.querySelector('.feed');

postButton.addEventListener('click', () => {
    if(postBox.value.trim() === '') return;

    const newPost = document.createElement('div');
    newPost.classList.add('post-card');
    newPost.innerHTML = `
        <div class="post-header">
            <img src="https://i.pravatar.cc/40" alt="Profile">
            <h4>You</h4>
        </div>
        <p>${postBox.value}</p>
        <div class="post-actions">
            <button class="like-btn">👍 Like <span class="like-count">0</span></button>
            <button class="comment-btn">💬 Comment</button>
        </div>
        <div class="comments"></div>
    `;
    feed.insertBefore(newPost, feed.children[1]);
    postBox.value = '';

    addPostEvents(newPost);
});

// Add Like & Comment Events
function addPostEvents(post) {
  likeBtn.addEventListener('click', () => {
    if(likeBtn.classList.contains('liked')) {
        count--;
        likeBtn.classList.remove('liked');
    } else {
        count++;
        likeBtn.classList.add('liked');
    }
    likeCount.textContent = count;
});
    const likeBtn = post.querySelector('.like-btn');
    const likeCount = post.querySelector('.like-count');
    let count = 0;

    likeBtn.addEventListener('click', () => {
        count++;
        likeCount.textContent = count;
    });

    const commentBtn = post.querySelector('.comment-btn');
    const commentsDiv = post.querySelector('.comments');

    commentBtn.addEventListener('click', () => {
        const commentText = prompt("Write a comment:");
        if(commentText) {
            const newComment = document.createElement('p');
            newComment.textContent = commentText;
            commentsDiv.appendChild(newComment);
        }
    });
}

// Initialize existing posts
document.querySelectorAll('.post-card').forEach(addPostEvents);

// Dark Mode Toggle
const toggle = document.getElementById('dark-mode-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});const imageInput = document.querySelector('.image-url');

postButton.addEventListener('click', () => {
    if(postBox.value.trim() === '') return;

    const imgURL = imageInput.value.trim();
    const newPost = document.createElement('div');
    newPost.classList.add('post-card');
    newPost.innerHTML = `
        <div class="post-header">
            <img src="https://i.pravatar.cc/40" alt="Profile">
            <h4>You</h4>
        </div>
        <p>${postBox.value}</p>
        ${imgURL ? `<img src="${imgURL}" alt="Post Image" class="post-img">` : ''}
        <div class="post-actions">
            <button class="like-btn">👍 Like <span class="like-count">0</span></button>
            <button class="comment-btn">💬 Comment</button>
        </div>
        <div class="comments"></div>
    `;
    feed.insertBefore(newPost, feed.children[1]);
    postBox.value = '';
    imageInput.value = '';
    addPostEvents(newPost);
});