import BlogService from "./BlogService.js";

const blog = new BlogService('https://jsonplaceholder.typicode.com');

blog.renderPosts();

const submitButton = document.getElementById('submit-button');
const newPostForm = document.getElementById('new-post-form');

newPostForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    try {
        await blog.createPost();
    }
    catch (error) {
        console.log(error);
    }
});

