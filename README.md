src/
│
├── app/                 // Next.js pages and components (Presentation Layer)
│   └── users/
│       └── page.tsx
│
├── application/         // Application Layer (Service Layer)
│   └── userService.ts
│
├── domain/              // Domain Layer
│   └── entities/
│       └── People.ts      // User entity
│
└── infrastructure/      // Infrastructure Layer
    ├── fakeApi.ts
    └── userStore.ts     // Zustand store with persistence
