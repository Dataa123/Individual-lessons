const search = document.getElementById("search");
const gitName = document.getElementById("git-name");
const avatar = document.getElementById("avatar");
const name = document.getElementById("name");
const username = document.getElementById("username");
const bio = document.getElementById("bio");
const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const joined = document.getElementById("joined"); 

const userLocation = document.getElementById("location");
const website = document.getElementById("website");
const twitter = document.getElementById("twitter");
const company = document.getElementById("company");

const fetchData = async (name) => {
    try{
       const response = await fetch(`https://api.github.com/users/${name}`);
        const result = await response.json();
        return result; 
    }
    catch(error){
        console.error(error);
        return [];
    }
}

search.addEventListener('click', () => {
    fetchData(gitName.value).then((res) => {
        avatar.src = res.avatar_url;
        name.textContent = res.name;
        username.textContent = `@${res.login}`;
        console.log(res)
        bio.textContent = res.bio === null ? "This profile has no bio" : res.bio;
        repos.textContent = res.public_repos;
        followers.textContent = res.followers;
        following.textContent = res.following;

        const isoDate = res.created_at;
        const date = new Date(isoDate);
        const formatted = new Intl.DateTimeFormat('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        }).format(date);
        joined.textContent = `Joined ${formatted}`;

        userLocation.textContent = res.location === null ? "Not Available" : res.location;
        website.textContent = res.html_url;
        website.href = res.html_url;
        twitter.textContent = res.twitter_username === null ? "Not Available" : res.twitter_username;
        company.textContent = res.company === null ? "Not Available" : res.company;
    });
})