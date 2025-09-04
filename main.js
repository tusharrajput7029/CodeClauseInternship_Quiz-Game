

    const questions = [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
      },
      {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript"
      },
      {
        question: "Who developed React.js?",
        options: ["Google", "Facebook", "Microsoft", "Twitter"],
        answer: "Facebook"
      }
    ];

    let currentQ = 0;
    let score = 0;

    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const progressEl = document.getElementById("progress");
    const scoreEl = document.getElementById("score");
    const restartBtn = document.getElementById("restartBtn");

    function loadQuestion() {
      const q = questions[currentQ];
      questionEl.textContent = q.question;
      optionsEl.innerHTML = "";
      q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => handleAnswer(option);
        optionsEl.appendChild(btn);
      });
      progressEl.textContent = `Question ${currentQ + 1} of ${questions.length}`;
      scoreEl.textContent = "";
    }

    function handleAnswer(option) {
      if (option === questions[currentQ].answer) {
        score++;
      }
      currentQ++;
      if (currentQ < questions.length) {
        loadQuestion();
      } else {
        showResult();
      }
    }

    function showResult() {
      questionEl.textContent = "Quiz Finished! 🎉";
      optionsEl.innerHTML = "";
      progressEl.textContent = "";
      scoreEl.textContent = `You scored ${score} out of ${questions.length}`;
      restartBtn.style.display = "inline-block";
    }

    function restartQuiz() {
      currentQ = 0;
      score = 0;
      restartBtn.style.display = "none";
      loadQuestion();
    }

    restartBtn.onclick = restartQuiz;

    loadQuestion();
  