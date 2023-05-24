document.getElementById('searchButton').addEventListener('click', function() {
    let postId = document.getElementById('postIdInput').value;
    let commentsContainer = document.getElementById('commentsContainer');
    commentsContainer.innerHTML = '';

    if (postId < 1 || postId > 100 || isNaN(postId)) {
        alert('Введіть ID поста від 1 до 100');
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Такого посту немає!');
            } else {
                return response.json();
            }
        })
        .then(post => {
            document.getElementById('postTitle').textContent = post.title;
            document.getElementById('postBody').textContent = post.body;
            document.getElementById('postContainer').style.display = 'block';
        })
        .catch(error => {
            console.log(error.message);
        });
});


document.getElementById('commentsButton').addEventListener('click', function() {
    let postId = document.getElementById('postIdInput').value;

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => {
            if (!response.ok) {
                throw new Error('У даного посту відсутні коментарі.');
            } else {
                return response.json();
            }
        })
        .then(comments => {
            comments.forEach(comment => {
                let commentElement = document.createElement('div');
                commentElement.innerHTML = '<h2>' + comment.name + '</h2><p>' + comment.body + '</p>';
                commentsContainer.appendChild(commentElement);
            });
        })
        .catch(error => {
            console.log(error.message);
        });
});