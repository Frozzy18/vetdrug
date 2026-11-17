document.addEventListener('DOMContentLoaded', () => {

  // ===== Форма заказа (index.html) =====
  const orderForm = document.forms['orderForm'];
  if (orderForm) {
    orderForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(orderForm);

      console.log('=== Данные заказа ===');
      for (const [key, value] of data.entries()) {
        console.log(`${key}: ${value}`);
      }

      const password = data.get('password') || '';
      const quantity = Number(data.get('quantity'));

      if (password.length < 6) {
        Swal.fire({
          icon: 'error',
          title: 'Ошибка',
          text: 'Пароль должен быть не короче 6 символов',
        });
        return;
      }

      if (!Number.isFinite(quantity) || quantity <= 0) {
        Swal.fire({
          icon: 'error',
          title: 'Ошибка',
          text: 'Количество товара должно быть положительным числом',
        });
        return;
      }

      Swal.fire({
        icon: 'success',
        title: 'Заказ оформлен',
        text: `Спасибо, ${data.get('username')}! Мы свяжемся с вами.`,
      });

      orderForm.reset();
    });
  }

  // ===== Форма контактов (contacts.html) =====
  const contactForm = document.forms['contactForm'];
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(contactForm);

      console.log('=== Данные сообщения ===');
      for (const [key, value] of data.entries()) {
        console.log(`${key}: ${value}`);
      }

      const email = data.get('email') || '';
      const message = data.get('message') || '';

      if (!email.includes('@')) {
        Swal.fire({
          icon: 'error',
          title: 'Ошибка',
          text: 'Введите корректный email',
        });
        return;
      }

      if (message.trim().length < 5) {
        Swal.fire({
          icon: 'error',
          title: 'Ошибка',
          text: 'Сообщение слишком короткое (минимум 5 символов)',
        });
        return;
      }

      Swal.fire({
        icon: 'success',
        title: 'Отправлено',
        text: 'Спасибо! Мы ответим на вашу почту.',
      });

      contactForm.reset();
    });
  }

});