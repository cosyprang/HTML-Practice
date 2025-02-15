const dataContainer = document.getElementById('user-data');

fetch ('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(post => {
            console.log(post);
            const postElement = document.createElement("p");
            postElement.innerHTML = `
                Post ID: ${post.id} <br>
                Name: ${post.name}  <br>
                Email: ${post.email}
            `;
            dataContainer.appendChild(postElement);
        });
    })
    .catch(error => console.error('Error fetching data', error));


document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('show');
})
    
// ****************** Function linktoPage ****************** //
function gotoTeam(){
    window.location.href = './teamPage';
}

function goBack(){
    window.history.back();
}