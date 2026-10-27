// let planets = ["Mercury", "Venus", "Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];
// let colors = ["red","purple","blue","yellow","green","brown","orange","pink"];
// const listPlanets=document.querySelector("section");
// for (let i=0;i<planets.length;i++){
//     let newPlanet = planets[i];
//     let newDiv=document.createElement("div");
//     newDiv.classList.add("planet");
//     newDiv.classList.add(newPlanet);
//     newDiv.style.backgroundColor = colors[i];
//     newDiv.innerText=planets[i];
//     listPlanets.appendChild(newDiv);
// }

//Bonus
let planet=[
    { name: "Mercury", color: "red", moons: 0 },
    { name: "Venus", color: "purple", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    {name: "Mars" ,color:"yellow",moons:2},
    {name: "Jupiter" ,color:"green",moons:115},
    {name: "Saturn" ,color:"brown",moons:293},
    {name: "Uranus" ,color:"orange",moons:29},
    {name: "Neptune" ,color:"pink",moons:16},
];
const listPlanets=document.querySelector("section");
for (let i=0;i<planet.length;i++){
    let newPlanet = planet[i];
    let newDiv=document.createElement("div");
    newDiv.classList.add("planet");
    newDiv.classList.add(newPlanet.name);
    newDiv.style.backgroundColor = planet[i].color;
    newDiv.innerText=planet[i].name;
    let numberOfMoons=planet[i].moons;
    for (let j=0;j<numberOfMoons;j++){
        let newMoon = document.createElement("div");
        newMoon.classList.add("moon");
        newDiv.append(newMoon);
    }
    listPlanets.appendChild(newDiv);
}