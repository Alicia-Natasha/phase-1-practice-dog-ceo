console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    // Fetch and display random dog images
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imageContainer = document.getElementById("image-container");

            data.message.forEach(imgSrc => {
                const imgElement = document.createElement("img");
                imgElement.src = imgSrc;
                imgElement.alt = "Random Dog Image";
                imgElement.style.width = "200px";
                imgElement.style.margin = "10px";

                imageContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.error("Error fetching images:", error));

    // Fetch and display dog breeds
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedList = document.getElementById("breed-list");

            Object.keys(data.message).forEach(breed => {
                const li = document.createElement("li");
                li.textContent = breed;
                breedList.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching breeds:", error));
});

