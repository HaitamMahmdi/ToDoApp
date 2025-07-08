# ToDoApp

A modern, real-time, and highly interactive task management application built using **Vue 3**, **Vite**, **Pinia**, and **Firebase**. ToDoApp helps you organize, track, and manage your daily tasks efficiently, with features for categorization, prioritization, scheduling, and synchronization across devices.

## Features

- **User Authentication**: Secure sign up, sign in, and account management via Firebase Auth.
- **Real-Time Task Sync**: All your tasks are instantly synchronized across devices using Firestore.
- **Task Management**:
  - Add, edit, and remove tasks.
  - Mark tasks as not started, in progress, done, or failed.
  - Set deadlines, priorities, descriptions, steps, and categories.
  - Attach color-code categories.
- **Task Views**:
  - View today's tasks, finished, failed, in-progress, and not started tasks.
  - Progress dashboard to visualize completion stats.
- **Themes**: Toggle between light and dark modes. User-specific theme preference saved.
- **FAQ & Help**: Built-in FAQ page to guide users through common questions and features.
- **Responsive Design**: Fully responsive interface for desktop and mobile.
- **Persistent Storage**: Tasks are stored on Firestore for logged-in users

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Firebase account (if deploying your own backend)

3. **Configure Firebase:**
   - Copy the example Firebase config in `src/firebase.js` and replace it with your own Firebase project credentials if deploying your own instance.

## Technologies Used

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/)
- [Firebase (Firestore, Auth)](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/) (optional, based on class usage)

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change or add.

## License

[MIT](LICENSE)

---

> Made with ❤️ using Vue 3, Pinia, and Firebase.
