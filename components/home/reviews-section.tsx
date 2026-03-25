import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Анна Коваленко",
    role: "Украина → Польша",
    content:
      "Благодаря команде LegalPol я получила карту побыту всего за 3 месяца! Профессионалы своего дела, всегда на связи и готовы помочь.",
    rating: 5,
  },
  {
    id: 2,
    name: "Дмитрий Петров",
    role: "Беларусь → Польша",
    content:
      "Переезжал с семьёй, было много вопросов. Юристы LegalPol помогли оформить документы на всех членов семьи быстро и без проблем.",
    rating: 5,
  },
  {
    id: 3,
    name: "Мария Сидорова",
    role: "Россия → Польша",
    content:
      "Отличный сервис! Помогли открыть бизнес в Польше и получить вид на жительство. Рекомендую всем, кто планирует переезд.",
    rating: 5,
  },
] as const;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-chart-2 text-chart-2" : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Отзывы
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Что говорят наши клиенты
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Истории успеха людей, которым мы помогли начать новую жизнь в Польше
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="relative flex flex-col rounded-2xl bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/10" />
              <StarRating rating={review.rating} />
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                &ldquo;{review.content}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
