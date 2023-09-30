document.addEventListener("DOMContentLoaded", function () {
  // Desabilita a função de cortar, copiar e colar
  document.body.addEventListener("cut", function (e) {
      e.preventDefault();
  });

  document.body.addEventListener("copy", function (e) {
      e.preventDefault();
  });

  document.body.addEventListener("paste", function (e) {
      e.preventDefault();
  });

  // Desabilita o clique direito do mouse
  document.body.addEventListener("contextmenu", function (e) {
      e.preventDefault();
  });

  // Desabilita a tecla F12
  document.addEventListener("keydown", function (event) {
      if (event.keyCode === 123) {
          event.preventDefault();
      }
  });

  // Desabilita o atalho CTRL+SHIFT+I
  document.addEventListener("keydown", function (event) {
      if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
          event.preventDefault();
      }
  });

  // Desabilita o atalho CTRL+SHIFT+C
  document.addEventListener("keydown", function (event) {
      if (event.ctrlKey && event.shiftKey && event.keyCode === 67) {
          event.preventDefault();
      }
  });

  // Impede o menu de contexto aparecer quando clicar com o botão direito
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
}, false);

// Desabilita o atalho CTRL+U
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.keyCode === 85) { // 85 é o código da tecla U
      event.preventDefault();
  }
});

// Desabilita o atalho CTRL+F
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.keyCode === 70) { // 70 é o código da tecla F
      event.preventDefault();
  }
});

// Desabilita o atalho CTRL+P
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.keyCode === 80) { // 80 é o código da tecla P
      event.preventDefault();
  }
});
// Desabilita o atalho CTRL+S
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.keyCode === 83) { // 83 é o código da tecla S
      event.preventDefault();
  }
});


});