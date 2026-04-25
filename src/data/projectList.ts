import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    name: "Real Banking Manager",
    description:
      "Scalable finance manager with real bank connectivity through Open Banking API (PSD2) and JWT-secured microservices.",
    tags: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Apache Kafka",
      "JWT",
      "Open Banking API",
      "Auth",
    ],
    category: "backend",
    href: "https://github.com/2002kani/home-banking-tracker",
  },
  {
    name: "Ticket Booking System",
    description:
      "Ticket booking system featuring a complete backend implementation with a microservice architecture",
    tags: ["Java", "Spring Boot", "Flyway", "Keycloak"],
    category: "backend",
    href: "https://github.com/2002kani/booking-system-microservice",
  },
  {
    name: "Asteroid alert notifier",
    description:
      "Hazardous Asteroid Alarm system with realtime notification if an asteroid gets close to the earth informed by the NASA NeoWs API. (WIP)",
    tags: [
      "Java",
      "Spring Boot",
      "Mailtrap",
      "Hibernate",
      "PostgreSQL",
      "NASA API",
    ],
    category: "backend",
    href: "https://github.com/2002kani/asteroid-alert-notifier",
  },
  {
    name: "Weeknotes",
    description:
      "Minimalistic, Apples 'Reminders' like day planning application with a java backend and react frontend",
    tags: ["React", "Typescript", "Java", "Spring Boot", "PostgreSQL"],
    category: "fullstack",
    href: "https://github.com/2002kani/weeknotes",
  },
  {
    name: "Prayspot",
    description:
      "A Google Maps–like app for nearby prayer spots and more (WIP)",
    tags: ["Java", "Typescript", "React", "Spring Boot", "PostgreSQL", "ngrok"],
    category: "fullstack",
    href: "https://github.com/2002kani/prayspot",
  },
  {
    name: "planen",
    description:
      "Smart task management application with ai managed task handling and more..",
    tags: ["Legacy", "TypeScript", "React", "Nodejs", "Appwrite", "GeminiAI"],
    category: "fullstack",
    href: "https://github.com/2002kani/planen",
  },
  {
    name: "Rivals Multiplayer",
    description:
      "Multiplayer game to learn and get more in-depth into websockets (unfinished)",
    tags: ["Legacy", "Nodejs", "Websockets", "React"],
    category: "fullstack",
    href: "https://github.com/2002kani/rivals-multiplayer",
  },
];
