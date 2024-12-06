const apiUrl = "https://rickandmortyapi.com/api/character/?page=1";
const characterContainer = document.getElementById("characterContainer");

async function fetchCharacterData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    data.results.forEach((character) => {
      const fallbackImage = "https://via.placeholder.com/200?text=No+Image";
      const imageUrl = character.image || fallbackImage;

      const characterCard = document.createElement("div");
      characterCard.classList.add("col");
      characterCard.innerHTML = `
        <div class="card character-card h-100 text-center">
          <img
            src="${imageUrl}" 
            class="card-img-top character-image" 
            alt="${character.name}"
          >
          <div class="card-body">
            <h5 class="card-title">${character.name}</h5>
            <p class="card-text">
              Especie: ${character.species}<br>
              Género: ${character.gender}<br>
              Estado: ${character.status}
            </p>
          </div>
        </div>
      `;
      characterContainer.appendChild(characterCard);
    });
  } catch (error) {
    console.error("Error fetching Character data:", error);
  }
}

fetchCharacterData();
