# Opgave: Lav en Blog side

Du skal i denne opgave lave en Blog i HyGraphs headless CMS system og fetche dataen i frontenden med GraphQL.
Formålet er at kombinere koncepterne: Headless CMS, GraphQL og Queries til at bygge en dynamisk side, hvor alt content styres automatisk fra et CMS system.

## Krav

- ✅ I skal bygge en content model i HyGraph for jeres blog indlæg
- ✅ Der skal optræde mindst 5 blog indlæg
- ✅ I skal kunne fetche og vise jeres blog posts i frontenden med GraphQL
- ✅ Siden skal være stylet med Material UI og være responsiv

### Bonus

- Man skal kunne søge efter en bestemt blog efter titel
- Man skal kunne klikke ind på en sektion og kun hente de nyeste posts (dem fra dags dato)
- Man skal kunne sortere sine blog posts efter Dato og Navn i en drop down menu

### Vigtig regel

Må ikke benytte mig af class names til stylingen — brug Material UI styling i stedet.

---

## Mappestruktur

```
.
├── pages/                 # Next.js side-komponenter
│   ├── _app.tsx          # App wrapper med global styles
│   ├── index.tsx         # Startside (viser BlogList)
│   └── api/              # API routes (hvis nødvendigt senere)
├── components/           # Genbrugelige React-komponenter
│   ├── BlogCard.tsx      # Enkelt blog-post komponent
│   └── BlogList.tsx      # Liste af alle blog posts
├── hooks/                # Custom React hooks
│   └── useFetchBlogs.ts  # Hook til at hente blog data fra HyGraph
├── utils/                # Hjælpefunktioner og konfiguration
│   ├── graphql-client.ts # GraphQL client konfiguration
│   └── queries.ts        # GraphQL queries
├── types/                # TypeScript type definitioner
│   └── blog.ts           # Blog data types
├── styles/               # Global styles
│   └── globals.scss      # Global SCSS styling
├── package.json          # Project dependencies
└── tsconfig.json         # TypeScript konfiguration
```

---

## Komponent-Oversigt

### `BlogList` (`components/BlogList.tsx`)
- Bruger `useFetchBlogs` hook til at hente data
- Håndterer loading og error states
- Viser liste af `BlogCard` komponenter

### `BlogCard` (`components/BlogCard.tsx`)
- Viser en enkelt blog post
- Modtager `Blog` data som prop
- Kan styles med Material UI senere

### `useFetchBlogs` (`hooks/useFetchBlogs.ts`)
- Custom hook der henter blog posts fra HyGraph API
- Returnerer: `blogs`, `loading`, `error` states
- Autorun ved komponent mount

---

## Konfiguration

### GraphQL API
- **Endpoint**: `https://eu-west-2.cdn.hygraph.com/content/cmoiq4jxn00q407wdyikjhoec/master`
- **Query eksempel**:
  ```graphql
  query GetBlogs {
    blogs {
      heading
      description {
        text
      }
    }
  }
  ```

### Installerede packages
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **SCSS** - Styling (global styles)
- **Material UI** - Component library (styling senere)
- **graphql-request** - GraphQL client

---

## Kom i gang

### 1. Installer dependencies
```bash
npm install
```

### 2. Start dev server
```bash
npm run dev
```

### 3. Åbn http://localhost:3000

---

## Code Forklaring

### `types/blog.ts`
Definerer TypeScript interfaces for data fra HyGraph API.

### `utils/graphql-client.ts`
Initialiserer `GraphQLClient` med API-endpointet.

### `utils/queries.ts`
Indeholder GraphQL queries som `GET_BLOGS` (returnerer blogs med heading og description).

### `hooks/useFetchBlogs.ts`
Custom React hook der:
1. Bruger `useEffect` til at hente data når komponenten mounter
2. Styrer loading, error og success states
3. Returnerer blogs array samt status

### `components/BlogList.tsx` & `components/BlogCard.tsx`
- `BlogList` = Container der henter og viser data
- `BlogCard` = Dumb komponent der modtager og viser én blog

---

## Næste skridt

1. **Styling**: Integrer Material UI styling i `BlogCard` og `BlogList` komponenter
2. **Søgning**: Tilføj `SearchBar` komponent til at søge efter blog titel
3. **Filtering**: Tilføj `FilterDropdown` komponent til at sortere/filtrere posts
4. **Detaljeside**: Lav `[slug].tsx` side til at vise individuelle blog posts
##### husk at lave kode forklaring under vejs sådan der ikke glemmes hvad koden præcis gør
##### må ikke benytte mig af class names til stylingen