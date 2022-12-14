<template>
    <main class="page">
  <div class="intro-text">
    <h1>Naija!</h1>
    <p>Welcome to the Naija Page! You will discover Nigeria's slang language which is called Pidgin</p>
  </div>
  <div class="img-pic">
    <img src="https://cdn.theculturetrip.com/wp-content/uploads/2018/10/ia_0116_essentialpidginnigeria_natashadzhola_final_header_web.jpg"/>
</div>
    <div class="intro2">
      <h3>What is Pidgin?</h3>
      <p>Pidgin is basically broken english. It is spoken by majority of all Nigerians.</p>
    </div>
    <div class="phrases">
      <h3>Most Common Pidgin Phrases</h3>
      <ol>
        <li>Wetin Dey?</li>
        <p>This means how are you doing?</p>
        <li>Abeg</li>
        <p>This means please</p>
        <li>I wan chop</li>
        <p>This mean I am hungry or I want to eat.</p>
      </ol>
    </div>
    <div class="quiz-text">
        <h2>Finished learning all the phrases? Take the quiz below to test your Pidgin Knowledge!</h2>
    </div>
    <div class="quiz">
    <div v-if="counter < QuizLevel1.length">
    <h2>Question No. {{counter+1}} : {{QuizLevel1[counter].question}}</h2>
    <br>
    <p>A: {{QuizLevel1[counter].answerA}}<br>
    B: {{QuizLevel1[counter].answerB}}<br>    
    C: {{QuizLevel1[counter].answerC}}<br>    
    D: {{QuizLevel1[counter].answerD}}</p>  
    <div>    
    Select the correct answer: 
    <input :title="message" id="myInput" v-model="selectedAnswer"/>
    <button @click="submitAns">Submit</button>
    <p><button @click="displayPreviousQuestion">Previous Question</button>
    <button @click="displayNextQuestion">Next Question</button>
    </p>
    </div>
    </div>
    <div v-else>
    <h3>Congratulations!! You have completed the quiz!!</h3>
    <button @click="playAgain">Play Again</button>
   </div>
   </div>
    </main>
</template>

<script>
export default {
    data:function(){
        return{
        counter:0,
      QuizLevel1: [
        {
          question: "What does wetin day mean",
          answerA: "Hi",
          answerB: "I am hungry",
          answerC: "How are you?",
          answerD: "Look at the sky",
          correctAnswer: "C"
        },
        {
          question: "What does Abeg mean?",
          answerA: "No",
          answerB: "About",
          answerC: "Please",
          answerD: "Never",
          correctAnswer: "C"
        },
        {
          question: "What does I wan chop mean?",
          answerA: "Nevermind",
          answerB: "I want to slice",
          answerC: "I am hungry",
          answerD: "How's it going?",
          correctAnswer: "C"
        }
      ],
      selectedAnswer: "default",
      message: "Enter your answer here"
        }
    },
    methods:{
        displayPreviousQuestion: function(){
            this.counter = this.counter - 1;
    },
        displayNextQuestion: function(){
            this.counter = this.counter + 1;
        },
        playAgain:function(){
            this.counter = 0;
        },
        submitAns:function(){
            if(this.selectedAnswer = QuizLevel[this.counter].correctAnswer){
                this.message = "correct"
            }
            else{
                this.message = "incorrect"
            }
            
        }
  },
  watch:{
    counter: function(){
      if (this.counter >= 3) {
        console.log('Quiz Completed')}
  }
  }
}

</script>

<style scoped>
.page {
  width: 90vw;
  max-width: 1120px;
  margin: 0 auto;
}
.page {
  padding-top: 2rem;
  min-height: calc(100vh - (6rem + 4rem));
}

.img-pic img{
  width: 100%;
  height: 400px;
}
.intro-text, .intro2{
  text-align:center;
  padding-bottom: 20px;
}

@media screen and (max-width: 655px) {
  .img-pic img {
    width:100%;
    height:265px;
  }
}

.quiz{
    background-color:#248232;
    margin:2rem;
    border-radius:2rem;
    padding:2rem;
    text-align:center;
}

.quiz-text h2{
    padding:2rem;
    text-align: center;
}

.phrases li, .intro2{
    padding:1rem 0;
}

.intro2 p{
    padding:0.5rem 0;
}
</style>

