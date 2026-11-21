const express = require('express');
const router = express.Router();

const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];
let score=0;
let currentIndex = 0; 

//Start the quiz and display the first question
router.get('/quiz',(req,res)=>{
    score=0;
    currentIndex=0;

    res.json(triviaQuestions[currentIndex].question);
});
//Submit an answer to the current question and move to the next question.
router.post('/quiz',(req,res)=>{
    if (currentIndex >= triviaQuestions.length) {
        return res.json({ message: "Quiz already finished! Call GET /quiz to start again." });
    }
   
    const userAnswer=req.body.answer;
     if (!userAnswer) {return res.status(400).json({ message: "Please provide an answer" })};
    let feedback="";
    if (userAnswer.trim().toLowerCase() === triviaQuestions[currentIndex].answer.toLowerCase())
    {
        score++;
        feedback="Correct!"
    }else{
        feedback="Incorrect! The right answer was: " + triviaQuestions[currentIndex].answer;

    }
    currentIndex++;
    if (currentIndex<triviaQuestions.length){
        res.json({feedback:feedback,nextQuestion:triviaQuestions[currentIndex].question});
    }else{
        
        res.json({feedback:feedback,message:"Quiz finished!"})
    }
    
});
//Display the user’s final score at the end of the quiz.
router.get('/quiz/score',(req,res)=>{
    if(currentIndex<triviaQuestions.length){
        return res.json({message:"Quiz not completed"});
    }
    res.json({score:score,total:triviaQuestions.length});
});

module.exports=router;