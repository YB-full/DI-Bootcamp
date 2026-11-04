const drums = [
  { letter: "A", name: "Boom", sound: "./sounds/boom.wav" },
  { letter: "S", name: "Clap", sound: "./sounds/clap.wav" },
  { letter: "D", name: "HiHat", sound: "./sounds/hihat.wav" },
  { letter: "F", name: "Kick", sound: "./sounds/kick.wav" },
  {letter: "G", name: "OpenHat", sound: "./sounds/openhat.wav" },
  {letter: "H", name: "Ride", sound: "./sounds/ride.wav" },
  {letter: "J", name: "Snare", sound: "./sounds/snare.wav" },
  {letter: "K", name: "Tink", sound: "./sounds/tink.wav" },
  {letter: "L", name: "Tom", sound: "./sounds/tom.wav" },
  
];

const drumKit=document.querySelector(".drumKit")

drums.forEach((drum)=>{
    const drumDiv=document.createElement("div");
    drumDiv.classList.add("drums");

    const myKbd=document.createElement("kbd");
    myKbd.textContent=drum.letter;

    const mySpan=document.createElement("span");
    mySpan.textContent=drum.name;

    drumDiv.id=drum.letter;

    drum.audio = new Audio(drum.sound);
    drum.audio.addEventListener("ended", () => {
        drumDiv.classList.remove("playing");
    })

    drumDiv.appendChild(myKbd);
    drumDiv.appendChild(mySpan);

    drumKit.appendChild(drumDiv);

})

document.addEventListener("keydown",(event)=>{
    const drum = drums.find(
        (drum) => event.key.toLowerCase() === drum.letter.toLowerCase()
    );
    if (!drum || event.repeat) return;
    
    const cellDrum=document.querySelector("#"+drum.letter);
    cellDrum.classList.add("playing");
            
    drum.audio.currentTime = 0;
    drum.audio.play();
        
     
});

document.addEventListener("keyup",(event)=>{
    const drum = drums.find(
        (drum) => event.key.toLowerCase() === drum.letter.toLowerCase()
    );
    if (!drum) return;
    drum.audio.pause();
    drum.audio.currentTime = 0;

    const cellDrum = document.querySelector("#" + drum.letter);
    cellDrum.classList.remove("playing");
})