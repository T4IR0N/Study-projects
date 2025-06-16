
export default class BlogService {
    constructor(url) {
        this.url = url;
    }

    getUrl() {
        return this.url;
    }

    setUrl(url) {
        this.url = url;
        return this.url;
    }
    async getAllPosts() {
        try {
            const response = await fetch(`${this.url}/posts`);
            const data = await response.json();
            return data;
        }
        catch(error) {
            console.log(error);
        }
    }
    
    async sendPost(formData) {
        try {
            const response = await fetch(`${this.url}/posts`, {
                method: 'POST',
                headers: { 'Content-Type': 'multipart/form-data' },
                body: formData,
            });
            const result = await response.json();
            return result;
        }
        catch (error) {
            console.log(error);
        }
    }
    
    async getComments(postId) {
        try {
            const response = await fetch(`${this.url}/posts/${postId}/comments`);
            const data = await response.json();
            return data
        }
        catch(error) {
            console.log(error);
        }
    }

    async renderPosts() {
        try {
            const posts = await this.getAllPosts();
            const postsList = document.getElementById('posts');
            postsList.innerHTML = '';

            posts.forEach(post => {
                const listItem = document.createElement('li');
                listItem.setAttribute('post-id', post.id);
                listItem.setAttribute('user-id', post.userId);
                const postId = listItem.getAttribute('post-id');
                listItem.textContent = post.title;
                listItem.style.cursor = 'pointer';
                const commentsSection = document.getElementById('comments-section');
                const commentsList = document.getElementById('comments');
                listItem.addEventListener('click', () => {
                    commentsList.innerHTML = '';
                    this.loadComments(postId);
                    commentsSection.classList.add('show');
                });
                postsList.appendChild(listItem);
            });
        }
        catch (error) {
            console.error('Error fetching posts:', error);
        }
    }
    
    async loadComments(postId) {
        try {
            const comments = await this.getComments(postId);
            const comment = comments.reduce((acc, comment) => {
                acc += `<b>Пользователь <em>#${comment.name}</em> оставил комментарий:</b> ${comment.body}<br><br>`;
                return acc;
              }, ``);
            const commentsList = document.getElementById('comments');
            const commentItem = document.createElement('li');
            commentItem.innerHTML = comment;
            commentsList.appendChild(commentItem);
            const commentsSection = document.getElementById('comments-section');
            const closeCommentsButton = document.getElementById('close-comments');
            closeCommentsButton.addEventListener('click', () => {
                commentsSection.classList.remove('show');
                commentsList.innerHTML = '';
            });
        }
        catch (error) {
            console.error('Error fetching comment:', error);
        }
    }

    async createPost() {
        try {
            const form = new FormData(document.getElementById('new-post-form'));
            const response = await this.sendPost(form);
            console.log(response);
        }
        catch(error) {
            console.log(error);

       }
}
}









