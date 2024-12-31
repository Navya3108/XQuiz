// Sample data
const questions = [
    {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2
},
{
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0
},
{
    text: "In which language is memory management provided by JVM?",
    options: ["Java", "C", "C++", "Python"],
    correct: 0
},
{
    text: "What does HTML stand for?",
    options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
    correct: 2
},
{
    text: "Which of the following is not a valid variable name in Python?",
    options: ["_myVar", "myVar2", "2myVar", "my_var"],
    correct: 2
},
{
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3
},
{
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0
},
{
    text: "In which data structure, elements are added at one end and removed from the other?",
    options: ["Array", "Stack", "Queue", "LinkedList"],
    correct: 2
},
{
    text: "What is the primary use of the Git command 'clone'?",
    options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
    correct: 1
},
{
    text: "What does API stand for in the context of programming?",
    options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
    correct: 1
}
];
const body=document.getElementsByTagName("body")[0];
const container = document.querySelector(".quiz-container");
//onst container = document.querySelector(".container"); 
body.style.background =
  "linear-gradient(to right, #ff7e5f -10%, #8e44ad 50%, #ff7e5f 110%)";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.padding = "50px";
container.style.backgroundColor = "white";
container.style.height = "60vh";
container.style.width = "350px";
container.style.textAlign = "center";
container.style.fontFamily = "'Open Sans', Arial, sans-serif";
container.style.padding = "20px";

let currentQuestionIndex=0;
//const quizcontainer=document.getElementsByClassName("quiz-container")[0];
container.style.display="none";
const form_container=document.querySelector(".form");
form_container.style.backgroundColor="white";
form_container.style.height="30vh";
form_container.style.width = "350px";
form_container.style.textAlign = "center";
form_container.style.fontFamily = "'Open Sans', Arial, sans-serif";
form_container.style.padding = "20px";
let nameValue="";
let instituteValue="";

displayForm();
//displayQuestion();
function displayForm(){
    // Create a form element
    const form = document.createElement("form");
    form.setAttribute("id", "myForm");
    form.style.listStyle="none";
    form.style.textAlign="start";
    // Create input for name
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.textContent = "Name: ";
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name");
    nameInput.setAttribute("name", "name");

    // Create input for institute
    const instituteLabel = document.createElement("label");
    instituteLabel.setAttribute("for", "institute");
    instituteLabel.textContent = "Institute: ";
    const instituteInput = document.createElement("input");
    instituteInput.setAttribute("type", "text");
    instituteInput.setAttribute("id", "institute");
    instituteInput.setAttribute("name", "institute");

    // Create submit button
    const submitButton1 = document.createElement("button");
    submitButton1.setAttribute("type", "submit");
    submitButton1.textContent = "Submit";

    // Append all elements to the form
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(instituteLabel);
    form.appendChild(instituteInput);
    form.appendChild(document.createElement("br"));
    form.appendChild(submitButton1);

    // Append form to the container
    document.getElementById("person-form").appendChild(form);
   /* form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission 
        nameValue = document.getElementById("name").value;
        instituteValue = document.getElementById("institute").value;
        console.log(nameValue,instituteValue);
        
    });*/
    form.addEventListener("submit", function(event) { 
        event.preventDefault(); 
        nameValue = document.getElementById("name").value; 
        instituteValue = document.getElementById("institute").value; form_container.style.display = "none"; 
        container.style.display = "block";
        displayQuestion();
        });
}

function displayQuestion(){
    //const questionno=questions[currentQuestionIndex].text;
     // Clear previous question and answer option
     document.getElementById('question').innerHTML = '';
     document.getElementById('answer-list').innerHTML = '';
 
    const question=document.createElement("p");
    question.textContent=questions[currentQuestionIndex].text;;
    document.getElementById("question").appendChild(question);
    const answeroptions=document.getElementById("answer-list");
    answeroptions.style.listStyle = "none";
    answeroptions.style.textAlign = "start";

    for(let i=0;i<4;i++){
        const li = document.createElement('li');
    
    // Create the radio button input
    const radio = document.createElement('input');
    radio.style.marginRight = "10px";
    radio.setAttribute("name", "option");
    radio.setAttribute("value", "option"+i);
    radio.setAttribute("type", "radio");
    li.appendChild(radio);
    li.appendChild(document.createTextNode(questions[currentQuestionIndex].options[i]));
    // Add hover effect using event listeners
    li.addEventListener("mouseover", () => {
        li.style.backgroundColor = "rgb(245, 245, 245)";
        li.style.cursor = "pointer";
    
        });
        li.addEventListener("mouseout", () => {
            li.style.backgroundColor = ""
    });

    answeroptions.appendChild(li);
    answeroptions.style.listStyleType = 'none';
    }
    
}
const submitButton = document.getElementById("submit");

const nextButton = document.getElementById("next");
nextButton.style.display = "none";

let score=0;
submitButton.addEventListener("click", () => {
    // Write the JS code that you want to be executed each time the Submit button is clicked.
    const selectedAnswer = document.querySelector('input[name="option"]:checked');
    if (!selectedAnswer) {
        alert('Please select an answer!');
    }
   else {
    // Move to the next question if available
        nextButton.style.display = "block";
        submitButton.style.display = "none";
        const temp = questions[currentQuestionIndex].correct;
const value = selectedAnswer.getAttribute("value");
if ("option" + temp === value) {
    score++;
  }

  const scoreHighlight = document.querySelector(`input[value=option${temp}]`);
scoreHighlight.parentNode.style.backgroundColor = "rgb(144, 238, 144)";
scoreHighlight.parentNode.addEventListener("mouseover", () => {
  scoreHighlight.parentNode.style.backgroundColor = "rgb(144, 238, 144)";
});
scoreHighlight.parentNode.addEventListener("mouseout", () => {
  scoreHighlight.parentNode.style.backgroundColor = "rgb(144, 238, 144)";
});
}

});
nextButton.addEventListener("click", () => {
    // Write the JS code that you want to be executed each time the Next button is clicked.
    currentQuestionIndex++;
    // console.log(currentQuestion);
    if (currentQuestionIndex == questions.length) {
      alert(`Quiz finished!${nameValue}, your score is: ${score}/${questions.length}`);
      nextButton.style.display = "block";
      submitButton.style.display = "none";
      nextButton.style.marginLeft = "auto";
      nextButton.style.marginRight = "auto";
      currentquestionIndex = 0;
      score = 0;

      form_container.style.display = "block"; 
      container.style.display = "none"; 
      // Clear previous form content 
      document.getElementById("person-form").innerHTML = ""; 
      // Display form again displayForm
      displayForm();
    }
   
    if (currentQuestionIndex < questions.length) {
      nextButton.style.display = "none";
      submitButton.style.display = "block";
      submitButton.style.marginLeft = "auto";
      submitButton.style.marginRight = "auto";
    }
  
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    }

});