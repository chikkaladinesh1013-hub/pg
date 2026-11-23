document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('.enquire').forEach(button => button.addEventListener('click', () => {
  const room = button.dataset.room;
  document.getElementById('complaintForm').scrollIntoView({behavior:'smooth'});
  document.querySelector('#complaintForm textarea').value = `I am interested in the ${room} room. Please share availability and details.`;
}));
document.getElementById('complaintForm').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  document.getElementById('complaintMessage').textContent = `Thank you, ${data.get('name')}! Your ${data.get('type').toLowerCase()} request has been recorded in this demo.`;
  event.currentTarget.reset();
});