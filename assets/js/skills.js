document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.category-checkbox');
    const skillItems = document.querySelectorAll('.skill-item');
    const deselectAllButton = document.getElementById('deselect-all');

    checkboxes.forEach(checkbox => {
        const category = checkbox.value;
        const label = document.querySelector(`label[for="${checkbox.id}"]`);
        if (checkbox.checked) {
            label.classList.add(category);
        }

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                skillItems.forEach(skill => {
                    if (skill.classList.contains(category)) {
                        skill.style.display = 'block';
                        setTimeout(() => {
                            skill.classList.remove('hidden');
                        }, 10); // Small delay to ensure display property is set before removing hidden class
                    }
                });
                label.classList.add(category);
            } else {
                skillItems.forEach(skill => {
                    if (skill.classList.contains(category)) {
                        skill.classList.add('hidden');
                        setTimeout(() => {
                            skill.style.display = 'none';
                        }, 300); // Delay to allow the fade-out effect
                    }
                });
                label.classList.remove(category);
            }
        });
    });

    deselectAllButton.addEventListener('click', () => {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
            const category = checkbox.value;
            const label = document.querySelector(`label[for="${checkbox.id}"]`);
            skillItems.forEach(skill => {
                if (skill.classList.contains(category)) {
                    skill.classList.add('hidden');
                    setTimeout(() => {
                        skill.style.display = 'none';
                    }, 300); // Delay to allow the fade-out effect
                }
            });
            label.classList.remove(category);
        });
    });
});
