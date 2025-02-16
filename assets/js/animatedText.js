document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        "data engineer",
        "DevOps engineer",
        "cloud architect",
        "automation expert",
        "CI/CD pipeline master",
        "ETL pipeline architect",
        "big data specialist",
        "system scalability expert",
        "AWS/Azure cloud ninja",
        "Python and Bash scripting wizard",
        "problem solver",
        "troubleshooting genius",
        "technical innovator",
        "optimization mastermind",
        "continuous learner",
        "data pipeline perfectionist",
        "debugging virtuoso",
        "highly adaptable engineer",
        "team player",
        "mentorship-driven professional",
        "workhorse  developer",
        "automation-obsessed engineer",
        "hard worker",
        "relentless problem solver",
        "24/7 reliability mindset"
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
