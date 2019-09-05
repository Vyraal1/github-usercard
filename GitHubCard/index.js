// * What's the require function?
//const axios = require("axios");

const cardContainer = document.querySelector(".cards");
const followersArray = [];
let username = "vyraal1";

/* Step 1: using axios, send a GET request to the following URL
           (replacing the placeholder with your Github name):
           https://api.github.com/users/vyraal1
   Step 2: Inspect and study the data coming back, this is YOUR
            github info! You will need to understand the structure of this
            data in order to use it to build your component function
*/
axios
  .get(`https://api.github.com/users/${username}`)
  .then(response => {
    /* Step 4: Pass the data received from Github into your function,
       create a new component and add it to the DOM as a child of .cards */
    cardContainer.appendChild(createCard(response.data));

    console.log("Pulling the followers from " + response.data.followers_url);
    axios.get(response.data.followers_url).then(followers => {
      // the array is within the data field
      followers.data.forEach(follower => {
        //now its just an object with the inputs
        cardContainer.appendChild(createCard(follower));
      });
    });

    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

// Sample Test object to prevent Rate Limiting
// let test = {
//   data: {
//     login: "Vyraal1",
//     id: 26587049,
//     node_id: "MDQ6VXNlcjI2NTg3MDQ5",
//     avatar_url: "https://avatars2.githubusercontent.com/u/26587049?v=4",
//     gravatar_id: "",
//     avatar_url: "https://avatars2.githubusercontent.com/u/26587049?v=4",
//     bio: "Former accountant studying Full Stack Web Development",
//     blog: "",
//     company: null,
//     created_at: "2017-03-22T02:00:36Z",
//     email: null,
//     events_url: "https://api.github.com/users/Vyraal1/events{/privacy}",
//     followers: 10,
//     followers_url: "https://api.github.com/users/Vyraal1/followers",
//     following: 6,
//     following_url:
//       "https://api.github.com/users/Vyraal1/following{/other_user}",
//     gists_url: "https://api.github.com/users/Vyraal1/gists{/gist_id}",
//     gravatar_id: "",
//     hireable: null,
//     html_url: "https://github.com/Vyraal1",
//     id: 26587049,
//     location: "Boston, MA",
//     login: "Vyraal1",
//     name: "Kevin Afable",
//     node_id: "MDQ6VXNlcjI2NTg3MDQ5",
//     organizations_url: "https://api.github.com/users/Vyraal1/orgs",
//     public_gists: 176,
//     public_repos: 30,
//     received_events_url: "https://api.github.com/users/Vyraal1/received_events",
//     repos_url: "https://api.github.com/users/Vyraal1/repos",
//     site_admin: false,
//     starred_url: "https://api.github.com/users/Vyraal1/starred{/owner}{/repo}",
//     subscriptions_url: "https://api.github.com/users/Vyraal1/subscriptions",
//     type: "User",
//     updated_at: "2019-09-05T21:51:37Z",
//     url: "https://api.github.com/users/Vyraal1"
//   }
// };

function createCard(user) {
  // creating the elements
  const card = document.createElement("div");
  const img = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const username = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const profileLink = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  // specifying with classes
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  username.classList.add("username");

  // content
  img.setAttribute("src", user.avatar_url);
  name.textContent = user.name;
  username.textContent = user.login;
  location.textContent = user.location;
  profile.textContent = "Profile: ";
  profileLink.setAttribute("href", user.html_url);
  followers.textContent = `Followers: ${user.followers}`;
  following.textContent = `Following: ${user.following}`;
  bio.textContent = user.bio;

  // component structure
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return card;
}

//console.log(createCard(request));
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

// *  I ended up
