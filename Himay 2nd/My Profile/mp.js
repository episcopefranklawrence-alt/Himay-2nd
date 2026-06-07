document.addEventListener('DOMContentLoaded', () => {
  const saveBtn = document.getElementById('sp-save-btn');
  const toast = document.getElementById('sp-toast');
  const firstInput = document.getElementById('sp-first');
  const lastInput = document.getElementById('sp-last');
  const fullNameDisplay = document.getElementById('sp-fullname-display');
  const avatarDisplay = document.getElementById('sp-avatar-display');

  // Basic interaction to mimic profile update
  saveBtn.addEventListener('click', () => {
    // Basic validation
    if (!firstInput.value.trim() || !lastInput.value.trim()) {
      alert('First and Last name cannot be empty.');
      return;
    }

    // Update Header visually
    const newFirstName = firstInput.value.trim();
    const newLastName = lastInput.value.trim();
    
    fullNameDisplay.textContent = `${newFirstName} ${newLastName}`;
    avatarDisplay.textContent = (newFirstName[0] + (newLastName[0] || '')).toUpperCase();

    // Show Success Toast
    toast.classList.remove('hidden');
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 3000);
  });
});