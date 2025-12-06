# CookBook – Your Virtual Kitchen Assistant

CookBook is a fully-featured frontend recipe application built with **React + Vite**.

It simulates a real full‑stack app using **LocalStorage** and a custom **Fake API layer**, allowing full **CRUD operations** on recipes, **user authentication**, **favorites**, **advanced filtering**, and a beautiful **responsive UI** – all **without a real backend**.

---

## Live Demo

Live Demo: **CookBook**  
(Add your deployed URL here, e.g. Netlify / Vercel.)

### Video Walkthrough & Code Explanation

Watch the full project explanation + live demo here:  
[CookBook – Demo / Code Walkthrough](https://drive.google.com/drive/folders/1aIhFvDnZR6YQasQe10rKeJ2YsGojeyyn?usp=drive_link
  )  
_(Replace `#` with your actual video link.)_

---

## Demo Login (Instant Access)

You can log in instantly using this demo account:

- **Email:** `demo@cookbook.app`  
- **Password:** `demo123`

You can also register a new account – everything is saved in **LocalStorage**.

---

## Features

### Authentication

- **Login & Register** forms  
- **Protected routes** (only accessible when logged in)  
- **Persistent session** via LocalStorage  
- **Logout** with state cleanup  

### Recipe Management

- **Add, Edit, Delete** recipes  
- **View detailed recipe page**  
- Track **user‑created recipes**  
- Separate **"My Recipes"** area for recipes created by the logged‑in user  

### My Cookbook (Favorites)

- Save / unsave recipes per user  
- `cb_favorites` stored per user in LocalStorage  
- Dedicated **"My Cookbook"** page for quick access to favorite recipes  

### Smart Filtering & Search

- Search by **title**  
- Filter by **category** (Breakfast, Lunch, Dinner, Dessert, etc.)  
- Filter by **difficulty** (Easy, Medium, Hard)  
- Combine multiple filters for powerful recipe discovery  

### UI / UX

- **Modern Tailwind CSS** design  
- Fully **responsive** (mobile‑first)  
- Clean recipe cards & detail layout  
- **Toast notifications** (React Hot Toast) for actions like login, CRUD, favorites, etc.

---

## Tech Stack

- **React + Vite** – Fast frontend bundler & dev server  
- **React Router v6** – Client-side routing  
- **Context API** – Global state (Auth & Recipes)  
- **Tailwind CSS** – Styling & layout  
- **React Hot Toast** – Toast notifications  
- **LocalStorage** – Acts as the "database"  
- **Custom Fake API** – Simulated backend with async helpers

---

## Project Structure

```bash
src/
├── components/
│   ├── layout/          # Navbar, Footer, Layout components
│   └── recipes/         # RecipeCard, RecipeGrid, RecipeForm, Filters, etc.
│
├── pages/               # All page components
│   ├── Home.jsx
│   ├── Recipes.jsx
│   ├── RecipeDetail.jsx
│   ├── AddRecipe.jsx
│   ├── EditRecipe.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── MyCookbook.jsx
│   ├── MyRecipes.jsx
│   └── Profile.jsx
│
├── context/             # Global state management
│   ├── AuthContext.jsx
│   └── RecipesContext.jsx
│
├── data/
│   └── sampleRecipes.json   # Initial seeded recipes
│
├── utils/
│   └── fakeApi.js           # Simulated backend with LocalStorage
│
├── App.jsx              # All routes + ProtectedRoute wrapper
├── main.jsx             # Root providers (AuthProvider, RecipesProvider) + Toaster
└── index.css            # Global styles + Tailwind base, components, utilities
```

---

## Installation & Run

```bash
git clone https://github.com/y-kanchan/CookBook.git
cd CookBook   # or your project folder name

npm install
npm run dev
```

Then open:

```text
http://localhost:5173
```

---

## Routing

### Protected Routes (Require Authentication)

These pages are only accessible when logged in.  
Unauthenticated users are redirected to `/login`.

| Route          | Description                 |
| -------------- | --------------------------- |
| `/add`         | Add a new recipe            |
| `/edit/:id`    | Edit an existing recipe     |
| `/my-cookbook` | Current user's favorites    |
| `/my-recipes`  | Recipes created by the user |
| `/profile`     | View & edit user profile    |

### Public Routes (No Login Required)

- `/` – Home  
- `/recipes` – All recipes  
- `/recipes/:id` – Recipe detail  
- `/login` – Login page  
- `/register` – Register page  

---

## Fake Backend & LocalStorage Keys

All data is persisted in the browser’s **LocalStorage** under these keys:

- `cb_recipes`  
  All recipes (seeded + user‑created).

- `cb_users`  
  Registered users (email + hashed password).

- `cb_user`  
  Currently logged‑in user object.

- `cb_favorites`  
  Object map of favorites, e.g.:
  ```json
  {
    "user@email.com": [1, 5, 23]
  }
  ```

- `cb_seeded`  
  Boolean flag to prevent re‑seeding sample data more than once.

---


## Future Enhancements

Planned / potential improvements:

- Real backend with **Node.js/Express + MongoDB** (or **Firebase**)  
- **Image upload** for recipes (Cloudinary / Firebase Storage)  
- **Recipe ratings & comments** system  
- User comments and reviews  
- **Dark mode** toggle  
- **Shopping list** generator  
- **Print recipe** feature  
- **PWA** support (offline, installable)  
- **Unit converter** in ingredients  

---

## Notes

- This is a frontend-only app. No real backend or network calls are required.  
- Tailwind warnings in some editors are normal until PostCSS runs via Vite.

---

## Contributing

Contributions are very welcome!

You can:

- **Open issues** for bugs or feature requests  
- **Submit pull requests** with improvements or new features  
- **Suggest new recipes** for the sample data  

Please feel free to fork the repo and open a PR.

---

## License

This project is open-source and licensed under the **MIT License**.

See the [`LICENSE`](./LICENSE) file for details.

---

## Author

Developed with passion by **[Manchikanti Jogith](https://github.com/Jogith123)**.  
Happy cooking!

