const renderUser = (user) => {
    
  const mainUserContainer = document.getElementById("main-user");
  mainUserContainer.innerHTML = `
    <img src="${user.picture}" alt="Profile Picture" />
    <h2>${user.firstName} ${user.lastName}</h2>
    <p>${user.city}, ${user.state}</p>
  `;

  const friendsList = document.getElementById("friends-list");
  friendsList.innerHTML = "";
  user.friends.forEach(friend => {
    const li = document.createElement("li");
    li.textContent = `${friend.firstName} ${friend.lastName}`;
    friendsList.appendChild(li);
  });

 const quoteDiv = document.getElementById("quote");
 quoteDiv.innerHTML = `
  <h3>Favorite Quote</h3>
  <blockquote>"${user.quote}" - Kanye</blockquote>
`;


  const pokemonDiv = document.getElementById("pokemon");
  pokemonDiv.innerHTML = `
    <h3>Favorite Pokémon: ${capitalize(user.pokemon.name)}</h3>
    <img src="${user.pokemon.image}" alt="${user.pokemon.name}" />
  `;

const aboutMeDiv = document.getElementById("about-me");
aboutMeDiv.innerHTML = `
  <h3>About Me</h3>
  <p>${user.aboutMe}</p>
`;

};

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
