"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-card p-8 text-center shadow-sm">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-foreground">
          Заявка отправлена!
        </h3>
        <p className="mt-2 text-muted-foreground">
          Мы свяжемся с вами в течение 24 часов
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 text-sm font-medium text-primary hover:text-primary/80"
        >
          Отправить ещё одну заявку
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-card p-6 shadow-sm sm:p-8"
    >
      <h3 className="text-xl font-semibold text-foreground">
        Оставьте заявку
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Заполните форму, и мы свяжемся с вами для бесплатной консультации
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground"
          >
            Имя *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Ваше имя"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-foreground"
          >
            Телефон *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="mt-1 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="+48 XXX XXX XXX"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="email@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-foreground"
          >
            Интересующая услуга
          </label>
          <select
            id="service"
            name="service"
            className="mt-1 block w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="">Выберите услугу</option>
            <option value="residence">Вид на жительство</option>
            <option value="work">Рабочая виза</option>
            <option value="family">Воссоединение семьи</option>
            <option value="business">Регистрация бизнеса</option>
            <option value="student">Студенческая виза</option>
            <option value="citizenship">Гражданство</option>
            <option value="other">Другое</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground"
          >
            Сообщение
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Опишите вашу ситуацию или вопрос..."
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
            Отправка...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Отправить заявку
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        Нажимая кнопку, вы соглашаетесь с{" "}
        <a href="#" className="text-primary hover:underline">
          политикой конфиденциальности
        </a>
      </p>
    </form>
  );
}
