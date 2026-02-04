async function getNews() {
    const query = document.getElementById("search").value || "latest";
    const apiKey = "pub_2abb341ef22c4c05a739515af3f620f8";

    const url = `https://newsdata.io/api/1/latest?q=${query}&language=en&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        let output = "";

        // ✅ CORRECT FIELD: data.results
        data.results.slice(0, 6).forEach(article => {
            output += `
                <div class="card">
                    <h3>${article.title}</h3>
                    <p>${article.description || "No description available"}</p>
                    <a href="${article.link}" target="_blank">Read more</a>
                </div>
            `;
        });

        document.getElementById("news-container").innerHTML = output;
    } catch (error) {
        document.getElementById("news-container").innerHTML =
            "<p>Error loading news.</p>";
        console.error(error);
    }
}
