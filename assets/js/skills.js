document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.category-checkbox');
    const skillItems = document.querySelectorAll('.skill-item');
    const toggleAllButton = document.getElementById('deselect-all');

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

    toggleAllButton.addEventListener('click', () => {
        const isDeselecting = toggleAllButton.textContent === 'Deselect All';
        checkboxes.forEach(checkbox => {
            checkbox.checked = !isDeselecting;
            const category = checkbox.value;
            const label = document.querySelector(`label[for="${checkbox.id}"]`);
            skillItems.forEach(skill => {
                if (skill.classList.contains(category)) {
                    if (isDeselecting) {
                        skill.classList.add('hidden');
                        setTimeout(() => {
                            skill.style.display = 'none';
                        }, 300); // Delay to allow the fade-out effect
                    } else {
                        skill.style.display = 'block';
                        setTimeout(() => {
                            skill.classList.remove('hidden');
                        }, 10); // Small delay to ensure display property is set before removing hidden class
                    }
                }
            });
            if (isDeselecting) {
                label.classList.remove(category);
            } else {
                label.classList.add(category);
            }
        });
        toggleAllButton.textContent = isDeselecting ? 'Select All' : 'Deselect All';
    });
});
