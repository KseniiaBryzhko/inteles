// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.getElementById('form');
//   console.log(form);
//   form.addEventListener('submit', formSend);

//   async function formSend(e) {
//     e.preventDefault();
//     let formData = new FormData(form);
//     console.log(formData);

//     let response = await fetch('sendmail.php', {
//       method: 'POST',
//       body: formData,
//     });
//     if (response.ok) {
//       let result = await response.json();
//       alert(result.message);
//       form.reset();
//     } else {
//       alert('Error');
//     }
//   }
// });

const form = document.querySelector('.form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  sendMessage(form);
});

async function sendMessage(form) {
  const formData = new FormData(form);
  if (formData) {
    const url = 'sendmessage.php';
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      form.reset();
      alert('Form sent!');
    } else {
      alert('Error!');
    }
  }
}
