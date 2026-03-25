import { CheckCircle } from "lucide-react";

const benefits = [
  "Полное юридическое сопровождение",
  "Помощь с переводом документов",
  "Подготовка к собеседованию",
  "Отслеживание статуса заявки",
] as const;

export function AboutSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl bg-secondary">
              <div className="aspect-[4/3] w-full bg-gradient-to-br from-primary/10 via-secondary to-accent/10 p-8">
                <div className="flex h-full flex-col items-center justify-center rounded-xl bg-card p-6 shadow-sm">
                  <p className="text-center text-lg font-medium text-foreground">
                    Офис в центре Варшавы
                  </p>
                  <p className="mt-2 text-center text-sm text-muted-foreground">
                    Удобное расположение для личных встреч
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                    <div className="rounded-lg bg-secondary p-4">
                      <p className="text-2xl font-bold text-primary">10+</p>
                      <p className="text-xs text-muted-foreground">Лет опыта</p>
                    </div>
                    <div className="rounded-lg bg-secondary p-4">
                      <p className="text-2xl font-bold text-primary">98%</p>
                      <p className="text-xs text-muted-foreground">Успешных дел</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              О нашей компании
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ваш надёжный партнёр в процессе легализации
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              LegalPol — это команда профессиональных юристов и консультантов, специализирующихся 
              на миграционном праве Польши. Мы понимаем, насколько важен для вас процесс легализации, 
              и делаем всё возможное, чтобы он прошёл максимально гладко.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Наша миссия — помочь вам начать новую жизнь в Польше без лишних переживаний 
              и бюрократических сложностей.
            </p>

            {/* Benefits List */}
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
