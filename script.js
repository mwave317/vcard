console.log("Hello from Javascript");
let body = document.querySelector("body");



function content() {
let a = "";
let name = JSON.parse(this.responseText);

let info =`
<header>
<h1>${name.name}</h1>
</header>
<summary>
<section class="basics">
<h2>The Basics</h2>
<ul>
  <li>Name: ${name.name}</li>
  <li>GitHub URL ${name.url}</li>
  <li>Email: ${name.email}</li>
  <li>Company: ${name.company}</li>
  <li>Website: ${name.blog}</li>
  </ul>
</section>
<section class="story">
  <h2>The Story</h2>
  <ul>
  <li>${name.bio}</li>
  </ul>
  </section>
  <section>
    <img src="${name.avatar_url}"></img>
</section>
</summary>
`;
a += info;
body.innerHTML = a;
}
let card = new XMLHttpRequest();
card.open("GET", "http://192.168.1.12:8000/octocat");
card.send();
card.addEventListener("load", content);
