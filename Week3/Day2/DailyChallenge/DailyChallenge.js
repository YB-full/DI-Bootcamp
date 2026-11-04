class Video {
    constructor(title,uploader,time){
        this.title=title
        this.uploader=uploader
        this.time=time
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title} !`)
    }
}
const myVideo= new Video("Pets video","John",1200);
myVideo.watch();
const myVideo2= new Video("Art video","Mary",30);

let listVideos=[
    {title :"Funny dogs" , uploader:"Alice" , time :60},
    {title:"Make cookies", uploader:"jane",time:1200},
    {title:"Art Video" , uploader:"Pete" ,time:400},
    {title:"Javascript course",uploader:"Mike",time:3600},
    {title:"Zen Sounds", uploader:"Mary",time:1800}

]
for (const data of listVideos){
    const myNewVideo= new Video (data.title , data.uploader,data.time) 
    myNewVideo.watch();
    
}
