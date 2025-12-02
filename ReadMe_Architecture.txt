🏛️ 1. Project Level Architecture
nyayabharat/
│
├── src/
│   ├── app/
│   │   ├── core/
│   │   ├── shared/
│   │   ├── features/
│   │   ├── data/
│   │   ├── layouts/
│   │   ├── config/
│   │   └── app-routing.module.ts
│   │
│   ├── assets/
│   │   ├── data/
│   │   │   ├── ipc/
│   │   │   ├── crpc/
│   │   │   ├── constitution/
│   │   │   ├── languages/
│   │   │   └── quizzes/
│   │   └── icons/
│   │
│   ├── environments/
│   └── index.html

🔥 2. Core Folder (Application Brain)
Purpose: Single place for app-wide logic
core/
│── services/
│     ├── http.service.ts
│     ├── section-loader.service.ts
│     ├── translation.service.ts
│     ├── bookmark.service.ts
│     ├── stats.service.ts
│     └── voice-reader.service.ts
│
│── interceptors/
│── guards/
│── models/
│── constants/
│── utils/
│── animations/

⭐ Responsibilities

Load JSON (IPC/CrPC)

Global translation handling

Audio reader support

SEO meta service

Bookmarking

Analytics (views, shares)

🌐 3. Shared Module (Reusable UI Kit)
shared/
│── components/
│     ├── navbar/
│     ├── footer/
│     ├── breadcrumb/
│     ├── voice-button/
│     ├── section-card/
│     ├── chapter-card/
│     ├── quiz-modal/
│     ├── related-laws/
│     └── stats-trends/
│
│── directives/
│── pipes/
│── ui/
│     ├── badge/
│     ├── button/
│     ├── tab/
│     ├── accordion/


🔥 All components use Bootstrap + AOS + Misard Theme (#144164).

📚 4. Feature Modules (Lazy Loaded)
features/
│── home/
│── ipc/
│── crpc/
│── constitution/
│── search/
│── quiz/
│── multilingual/
│── legal-aid/
│── admin-panel/


Each module contains:

home/
│── pages/
│── components/
│── services/
│── home-routing.module.ts

⚖️ 5. IPC Module (Flagship Module)
ipc/
│── pages/
│     ├── ipc-home/
│     ├── section-viewer/
│     └── chapter-viewer/
│
│── components/
│     ├── explanation/
│     ├── punishment/
│     ├── history/
│     ├── examples/
│     ├── judgments/
│     ├── related-laws/
│     ├── chapter-navigator/
│     ├── smart-filters/
│     └── stats-trends/
│
│── services/
│     └── ipc-data.service.ts

🗂️ 6. JSON Data Structure
One place: assets/data/ipc/ipc-sections.json

Each section contains:

{
  sectionNumber: 302,
  sectionTitle: "Punishment for Murder",
  chapter: { number: 16, title: "Offenses affecting human body" },
  language: {
      en: {...},
      hi: {...},
      te: {...}
  },
  content: {
      explanation: [...],
      punishment: "...",
      history: "...",
      examples: [...]
  },
  tags: ["murder", "homicide"],
  stats: { views: 3418, saved: 192, quizAttempts: 412 }
}


✔️ Already matches your chosen format.

🎨 7. Layout Architecture
layouts/
│── main-layout/
│── auth-layout/
│── minimal-layout/


Main-layout includes:

Navbar

Header

Body

Footer

🧠 8. Smart Filter Architecture
smart-filters/
│── filter-accordion/
│── filter-tags/
│── sort-controls/
│── search-bar/
│── language-switcher/


Filters support:

Section number

Chapter

Keyword

Crime type

Punishment severity

Tags

Amendment year

🎧 9. Voice Reader Architecture
voice-reader.service.ts
voice-button.component.ts


Features:

Play / Pause / Stop

Highlight text while reading

Multiple languages

Reads Explanation, Punishment, Examples

📊 10. Quiz Architecture
quiz/
│── quiz-home/
│── quiz-section/
│── quiz-modal/
│── leaderboard/
│── quiz-history/
│── feedback/

🔐 11. Admin Panel Architecture
admin/
│── add-law/
│── edit-law/
│── translations/
│── upload-examples/
│── analytics/
│── login/