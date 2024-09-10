// step 1 FETCH Get Method

document.getElementById("fetchData").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        // Bu URL jsonplaceholder API-dən bir post məlumatını çəkir.
        .then((response) => response.json())
        // cavabı JSON formatına çevirir. Bu, 'data' adlı bir dəyişəndə saxlanacaq.
        .then((data) => {
            // JSON məlumatları alındıqdan sonra bu funksiya işə düşür.
            document.getElementById("data").innerHTML = `
            <h2>${data.title}</h2>`;
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});

// step 2 Post Methodu

document.getElementById('sendData').addEventListener('click', () => {
    const data = {
        name: document.getElementById('inputData').value
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('data').innerHTML =
                `<h1>ResPonse: </h1>
                <pre>${JSON.stringify(data,null,2)}</pre>`
        })
        .catch((error) => {
            console.error("Error:", error);
        })

});





// document.getElementById('fetchData').addEventListener('click', () => {
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//         .then(response => response.json())
//         .then(data => {
//             console.log('Received data:', data); // JSON cavabını konsolda görmək
//             // `data` obyektinin içərisində `title` və `body` xüsusiyyətlərini yoxlayın.
//         })
//         .catch(error => console.error('Error:', error));
// });