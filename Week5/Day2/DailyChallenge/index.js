const express=require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.listen(5000,()=>{
    console.log("The server is running");
});

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    {emoji:'👍',name:'Thumbs up'},
    {emoji:'🎉',name:'Party popper'},
    {emoji:'❤️',name:'Heart'},
    {emoji:'🔥',name:'Fire'},
    {emoji:'✌',name:'Victory'}
   
];
const randomIndex=Math.floor(Math.random()* emojis.length);
const correctEmoji=emojis[randomIndex]