import {
  FileText,
  Briefcase,
  Users,
  Building2,
  GraduationCap,
  Plane,
} from "lucide-react";
import { ServiceCard, type ServiceCardProps } from "./service-card";

const services: Omit<ServiceCardProps, "imagePosition">[] = [
  {
    icon: FileText,
    title: "Вид на жительство (Карта побыту)",
    description:
      "Полное сопровождение процесса получения временного или постоянного вида на жительство в Польше. Подготовка документов, запись на приём, представительство в воеводстве.",
    features: [
      "Временный ВНЖ (до 3 лет)",
      "Постоянный ВНЖ",
      "Карта резидента ЕС",
      "Продление и смена основания",
    ],
  },
  {
    icon: Briefcase,
    title: "Рабочая виза и разрешения",
    description:
      "Оформление рабочих виз и разрешений на работу для специалистов всех уровней. Поможем с Poland Business Harbour, Blue Card EU и стандартными рабочими визами.",
    features: [
      "Разрешение на работу типа A",
      "Blue Card EU",
      "Poland Business Harbour",
      "Oświadczenie о намерении трудоустройства",
    ],
  },
  {
    icon: Users,
    title: "Воссоединение семьи",
    description:
      "Помогаем воссоединиться с семьёй в Польше. Оформление документов для супругов, детей и других членов семьи граждан Польши или обладателей ВНЖ.",
    features: [
      "ВНЖ для супругов",
      "Документы на детей",
      "Воссоединение с родителями",
      "Легализация совместного проживания",
    ],
  },
  {
    icon: Building2,
    title: "Регистрация бизнеса",
    description:
      "Открытие компании в Польше и получение бизнес-визы. Полное сопровождение от регистрации фирмы до получения ВНЖ на основании ведения бизнеса.",
    features: [
      "Регистрация Sp. z o.o.",
      "Jednoosobowa działalność",
      "ВНЖ для предпринимателей",
      "Бухгалтерское сопровождение",
    ],
  },
  {
    icon: GraduationCap,
    title: "Студенческие визы",
    description:
      "Помощь в получении студенческих виз и ВНЖ для обучения в польских университетах. Консультации по выбору учебного заведения и подготовке документов.",
    features: [
      "Виза для обучения",
      "ВНЖ студента",
      "Продление на время учёбы",
      "Смена статуса после выпуска",
    ],
  },
  {
    icon: Plane,
    title: "Гражданство Польши",
    description:
      "Консультации и сопровождение процесса получения польского гражданства. Помогаем с натурализацией, признанием гражданства и Картой поляка.",
    features: [
      "Натурализация",
      "Признание гражданства",
      "Карта поляка",
      "Подготовка к экзамену",
    ],
  },
];

export function ServicesList() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Наши услуги
          </span>
          <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Полный спектр услуг по легализации
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-lg text-muted-foreground">
            Предоставляем комплексную помощь на всех этапах легализации: от консультации 
            до получения документов. Работаем прозрачно и эффективно.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-8 lg:mt-16">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              imagePosition={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
