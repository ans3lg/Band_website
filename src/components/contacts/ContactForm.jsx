import { useState } from 'react';
import Button from '../ui/Button';
import styles from './ContactForm.module.css';

const initialForm = { name: '', email: '', message: '' };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Введите имя';
  if (!form.email.trim()) {
    errors.email = 'Введите email';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Некорректный email';
  }
  if (!form.message.trim()) errors.message = 'Введите сообщение';
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setForm(initialForm);
    setErrors({});
  };

  if (submitted) {
    return (
      <div className={styles.success}>
        <h3>Спасибо!</h3>
        <p>Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.</p>
        <Button type="button" onClick={() => setSubmitted(false)} variant="outline">
          Отправить ещё
        </Button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name">Имя *</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          className={errors.name ? styles['field--error'] : ''}
          placeholder="Ваше имя"
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className={errors.email ? styles['field--error'] : ''}
          placeholder="email@example.com"
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Сообщение *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={errors.message ? styles['field--error'] : ''}
          placeholder="Ваше сообщение..."
        />
        {errors.message && (
          <span className={styles.error}>{errors.message}</span>
        )}
      </div>

      <Button type="submit" size="lg">
        Отправить
      </Button>
    </form>
  );
}
