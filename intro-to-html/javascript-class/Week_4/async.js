//ASYNCHRONOUS JAVASCRIPT

// fetch().then().then().catch().finally() //asynchronous - run at same time
function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            const postDiv = document.getElementById('post');
            postDiv.innerHTML = `
            <h3>${data.title}</h3>
        <p>${data.body}</p>`
        })
        .catch(error => {
            document.getElementById("post").textContent = "❌ Failed to load post.";
            console.error("Fetch error:", error);
        });
}

fetch('https://jsonplaceholder.typicode.com/todos/1') //takes in a url
    .then(response => response.json()) //for anything to move over the net, it has to be in JSON. this is for security
    .then(json => console.log(json))

