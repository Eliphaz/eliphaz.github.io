document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        "data engineer",
        "problem solver",
        "cloud architect",
        "DevOps engineer",
        "automation expert",
        "ETL pipeline pro",
        "big data specialist",
        "python wizard",
        "data wrangler",
        "endurant debugger",
        "technical innovator",
        "continuous learner",
        "debugging virtuoso",
        "adaptable engineer",
        "team player",
        "workhorse developer",
        "hard worker"
    ];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenPhrases = 2000;
    const animatedTextElement = document.querySelector('.animated-text');

    function type() {
        const currentPhrase = phrases[currentPhraseIndex];
        if (isDeleting) {
            animatedTextElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            if (currentCharIndex === 0) {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(type, deletingSpeed);
            }
        } else {
            animatedTextElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            if (currentCharIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(type, delayBetweenPhrases);
            } else {
                setTimeout(type, typingSpeed);
            }
        }
    }

    type();
});
