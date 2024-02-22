let blogs = JSON.parse(localStorage.getItem('blogs')) || [];

function renderBlogs() {
  const blogsContainer = document.querySelector('.blog-container1');
  blogsContainer.innerHTML = '';

  blogs.forEach((blog, index) => {
    const blogItem = document.createElement('div');
    
    blogItem.classList.add('blog');
    blogItem.innerHTML = `
      <h2>${blog.title}</h2>
      <p>${blog.content}</p>
      <img src="${blog.image}" alt="Blog Image">
      <button onclick="editBlog(${index})">Edit</button>
      <button onclick="deleteBlog(${index})">Delete</button>
    `;
    blogsContainer.appendChild(blogItem);
  });
}

function addBlog() {
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const image = document.getElementById('image').files[0];

  if (title.trim() === '' || content.trim() === '') {
    showMessage('Please enter both title and content.', 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(event) {
    const imageUrl = event.target.result;
    const newBlog = { title, content, image: imageUrl };
    blogs.push(newBlog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    renderBlogs();
    showMessage('Blog added successfully.', 'success');
  };
  reader.readAsDataURL(image);

  document.getElementById('title').value = '';
  document.getElementById('content').value = '';
  document.getElementById('image').value = '';
}

function editBlog(index) {
  const blog = blogs[index];
  const newTitle = prompt('Enter new title:', blog.title);
  const newContent = prompt('Enter new content:', blog.content);
  const newImage = prompt('Enter new image URL:', blog.image);
  
  if (newTitle !== null && newContent !== null && newImage !== null) {
    blogs[index] = { title: newTitle, content: newContent, image: newImage };
    localStorage.setItem('blogs', JSON.stringify(blogs));
    renderBlogs();
    showMessage('Blog updated successfully.', 'success');
  }
}

function deleteBlog(index) {
  if (confirm('Are you sure you want to delete this blog?')) {
    blogs.splice(index, 1);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    renderBlogs();
    showMessage('Blog deleted successfully.', 'success');
  }
}

function showMessage(message, type) {
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = message;
  messageDiv.classList.remove('error', 'success');
  messageDiv.classList.add(type);
  setTimeout(() => {
    messageDiv.textContent = '';
  }, 3000);
}

renderBlogs();
