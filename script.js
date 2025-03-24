// You can add interactivity here, such as smooth scrolling or animations
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#0056b3';
      });
      button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#007bff';
      });
    });
  });
  