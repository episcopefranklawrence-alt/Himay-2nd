document.addEventListener('DOMContentLoaded', () => {
  // Select all 'View' buttons in the history table
  const viewButtons = document.querySelectorAll('.ac-action');
  
  viewButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      // Find the row that contains the clicked button
      const row = e.target.closest('tr');
      
      // Extract the assignment name from the first column
      const assignmentName = row.querySelector('strong').textContent;
      
      // Trigger a mock action (you can replace this with actual modal/routing logic)
      alert(`Opening submission draft for:\n${assignmentName}`);
    });
  });
});