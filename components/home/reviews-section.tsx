"use client";

import { Star, Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

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
  const { t } = useI18n();

  const reviews = [
    {
      id: 1,
      name: t("reviews.review1.name"),
      role: t("reviews.review1.role"),
      content: t("reviews.review1.content"),
      rating: 5,
    },
    {
      id: 2,
      name: t("reviews.review2.name"),
      role: t("reviews.review2.role"),
      content: t("reviews.review2.content"),
      rating: 5,
    },
    {
      id: 3,
      name: t("reviews.review3.name"),
      role: t("reviews.review3.role"),
      content: t("reviews.review3.content"),
      rating: 5,
    },
  ];

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            {t("reviews.label")}
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("reviews.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            {t("reviews.subtitle")}
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
