const { response } = require("express");

const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value();
    const content = document.querySelector('#content').value();
    const author = document.querySelector('#author').value();

    if (title && content && author){
        const post = await fetch('/api/BlogPost', {
            method: 'POST',
            body: JSON.stringify({
                title,
                content,
                author
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (post.ok) {
            document.location.replace('/dashboard');
        } else {
            alert("post failed.");
        }
    }
};

document
    .querySelector('.blogPostForm')
    .addEventListener('submit', blogPostForm);