document.addEventListener('DOMContentLoaded', () => {
  // Simple interaction for the Filter buttons just to show the UI state
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked
      btn.classList.add('active');
      
      // (Optional) Here you would normally filter the grid
      // document.querySelector('.assignment-grid').innerHTML = 'Filtered...';
    });
  });
});