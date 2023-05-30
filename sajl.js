document.getElementById('sajalni-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var imei1 = document.getElementById('imei1').value;
  var imei2 = document.getElementById('imei2').value;
  var serial = document.getElementById('serial').value;
  var modal = document.getElementById('modal').value;
  var email = document.getElementById('email').value;

  var message = 'Imei1: ' + imei1 + '\n';
  message += 'Imei2: ' + imei2 + '\n';
  message += 'Serial: ' + serial + '\n';
  message += 'Modal: ' + modal + '\n';
  message += 'Adresse email: ' + email;

  var mailtoLink = 'mailto:aymenbarkaoui19@gmail.com?subject=sajalni&body=' + encodeURIComponent(message);
  window.location.href = mailtoLink;
});


