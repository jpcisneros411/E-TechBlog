async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const content = document.querySelector('#content').value;



const post = await fetch (`/api/BlogPost`, {
    method: 'POST',
    body: JSON.stringify({
        title,
        author,
        content
    }),
    headers: {
        'Content-Type': 'application/json',
    },
});

if (post.ok){
    document.location.replace('/');
    } else {
        alert('Unable to add blog post.');
    } 
}

document
    .querySelector('.blogPostForm')
    .addEventListener('submit', newFormHandler);