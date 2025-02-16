document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.category-checkbox');
    const skillItems = document.querySelectorAll('.skill-item');
    const deselectAllButton = document.getElementById('deselect-all');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const category = checkbox.value;
            skillItems.forEach(skill => {
                if (skill.classList.contains(category)) {
                    if (checkbox.checked) {
                        skill.style.display = 'block';
                        setTimeout(() => {
                            skill.classList.remove('hidden');
                        }, 10); // Small delay to ensure display property is set before removing hidden class
                    } else {
                        skill.classList.add('hidden');
                        setTimeout(() => {
                            skill.style.display = 'none';
                        }, 300); // Delay to allow the fade-out effect
                    }
                }
            });
        });
    });

    deselectAllButton.addEventListener('click', () => {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
            const category = checkbox.value;
            skillItems.forEach(skill => {
                if (skill.classList.contains(category)) {
                    skill.classList.add('hidden');
                    setTimeout(() => {
                        skill.style.display = 'none';
                    }, 300); // Delay to allow the fade-out effect
                }
            });
        });
    });
});
