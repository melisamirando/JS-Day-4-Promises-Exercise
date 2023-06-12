const answerBtn = document.getElementById('answer-btn');
const questionInput = document.getElementById('question-input');
const answerText = document.getElementById('answer-text');

answerBtn.addEventListener('click', () => {
  const question = questionInput.value;

  if (question.trim() === '') {
    answerText.textContent = 'Please ask a question.';
  } else {
    fetch('https://eightballapi.com/api' + encodeURIComponent(question))
      .then(response => response.json())
      .then(data => {
        console.log(data[0])
        if (data && data.magic && data.magic.answer) {
          answerText.textContent = data.magic.answer;
        } else {
          answerText.textContent = 'Sorry, something went wrong. Please try again.';
        }
      })
      .catch(error => {
        console.log(error);
        answerText.textContent = 'Sorry, something went wrong. Please try again.';
      });
  }
});
