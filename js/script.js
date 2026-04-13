fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    });

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    });
fetch("posts/post-1.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById('post-1-placeholder').innerHTML = data;
    });
fetch("posts/post-2.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById('post-2-placeholder').innerHTML = data;
    });
fetch("posts/post-3.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById('post-3-placeholder').innerHTML = data;
    });
fetch("posts/post-4.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById('post-4-placeholder').innerHTML = data;
    });
fetch("posts/post-5.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById('post-5-placeholder').innerHTML = data;
    });