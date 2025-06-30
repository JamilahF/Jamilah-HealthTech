function searchImages() {
      const ACCESS_KEY = "rwuA8Qw5U_JwTnuvg6vrz6Q8kD4g5XydI_cHsa-Jjy4"; // Replace this with access key!
      const query = document.getElementById("query").value;
      const results = document.getElementById("results");

      results.innerHTML = "🔄 Searching...";

      fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=6&client_id=${ACCESS_KEY}`)
        .then(response => {
          if (!response.ok) {
            throw new Error("API error: " + response.status);
          }
          return response.json();
           
        })
        .then(data => {
           console.log(data);
          results.innerHTML = "";

          if (data.results.length === 0) {
            results.innerHTML = "❌ No images found.";
            return;
          }
data.results.forEach(photo => {
            const img = document.createElement("img");
            img.src = photo.urls.small;
            img.alt = photo.alt_description || "Unsplash photo";
            img.style.width = "200px";
            img.style.border = "2px solid #ccc";
            img.style.borderRadius = "6px";

            results.appendChild(img);
          });
        })
        .catch(error => {
          results.innerHTML = "❌ Failed to load images: " + error.message;
          console.error(error);
        });
    }