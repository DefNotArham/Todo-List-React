# 📝 Todo List React

![React](https://img.shields.io/badge/React-19-blue)

![Vite](https://img.shields.io/badge/Vite-Frontend-purple)

A simple Todo List application built with React and Vite that allows users to create, complete, and delete tasks while displaying real-time task statistics.

---

## ✨ Features

- ➕ Add new todo items
- ✅ Mark todos as completed
- 🗑️ Delete existing todos
- 📊 Display total number of todos
- ✔️ Display completed todos count
- ⚡ Real-time UI updates
- 🧩 Component-based architecture using React

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React | Frontend UI |
| Vite | Build Tool |
| JavaScript (ES6+) | Programming Language |
| CSS3 | Styling |
| ESLint | Code Quality |

---

## 📂 Project Structure

```text
Todo-List-React/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── components/
│   │   ├── TodoHeader.jsx
│   │   ├── TodoHeader.css
│   │   ├── TodoInput.jsx
│   │   ├── TodoInput.css
│   │   ├── Todos.jsx
│   │   └── Todos.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/DefNotArham/Todo-List-React.git
```

Move into the project directory:

```bash
cd Todo-List-React
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run the Development Server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

---

## 📦 Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🎯 How to Use

1. Enter a task in the input field.
2. Click the **Add** button.
3. Mark a task as completed using the **✔️** button.
4. Remove a task using the **🗑️** button.
5. View the live statistics showing:
   - Total Todos
   - Completed Todos

---

## 🤝 Contributing

Contributions are welcome!

If you'd like to improve this project:

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/your-feature-name
```

3. Commit your changes

```bash
git commit -m "Add your feature"
```

4. Push your branch

```bash
git push origin feature/your-feature-name
```

5. Open a Pull Request
