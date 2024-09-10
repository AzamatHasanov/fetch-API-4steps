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