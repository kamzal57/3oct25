# Notes App - Multifunctional Note-taking Application

A native desktop note-taking application built with Vite, ReactJS, and Tauri (Rust). This app combines the power of web technologies with native performance for a seamless note-taking experience.

![Welcome Screen](https://github.com/user-attachments/assets/df3f5dd0-db2f-44a5-9a01-6b01b537ae1e)

## ✨ Features

### 📝 Rich Note Management
- **Create & Edit Notes**: Write and organize your thoughts with an intuitive editor
- **Markdown Support**: Format your notes with full markdown syntax support
- **Auto-Save**: Your notes are automatically saved to local storage - never lose your work

![Note Editor](https://github.com/user-attachments/assets/c2b4033c-2fe5-42e3-8dc9-b32b5b293153)

### 🔍 Smart Search
- **Real-time Search**: Find notes instantly as you type
- **Content-aware**: Search through both titles and note content
- **Filter Count**: See how many notes match your search

![Search Functionality](https://github.com/user-attachments/assets/6f6b1274-0dd5-47a3-9327-79e42c2b4943)

### 👁️ Beautiful Preview
- **Markdown Rendering**: View your notes with properly formatted markdown
- **Edit/View Toggle**: Switch between editing and viewing modes
- **Responsive Design**: Clean, modern UI that adapts to your needs

![Note Viewer](https://github.com/user-attachments/assets/1301fafd-c35c-4273-9b5f-d24799b96bc9)

## 🚀 Getting Started

### Prerequisites

Before running this application, ensure you have:

- **Node.js** (v20 or higher)
- **Rust and Cargo** (latest stable version)
- **System dependencies** for Tauri (see [Tauri Prerequisites](https://tauri.app/start/prerequisites/))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kamzal57/3oct25.git
cd 3oct25
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the application in development mode with hot-reload:

```bash
npm run tauri dev
```

This will start the Vite development server and launch the Tauri application window.

### Build

Build the application for production:

```bash
npm run tauri build
```

This will create platform-specific installers in the `src-tauri/target/release/bundle` directory.

## 🛠️ Technologies

- **[Vite](https://vite.dev)** - Next-generation frontend build tool
- **[React](https://react.dev)** - JavaScript library for building user interfaces
- **[Tauri](https://tauri.app)** - Framework for building native desktop apps with web technologies
- **[Rust](https://www.rust-lang.org/)** - Systems programming language for the backend
- **[Marked](https://marked.js.org/)** - Markdown parser and compiler

## 📚 Markdown Support

The app supports all standard markdown syntax:

- **Headings**: `# H1`, `## H2`, `### H3`, etc.
- **Emphasis**: `*italic*`, `**bold**`, `***bold italic***`
- **Lists**: 
  - Unordered: `- item` or `* item`
  - Ordered: `1. item`
- **Links**: `[text](url)`
- **Images**: `![alt](url)`
- **Code**: 
  - Inline: `` `code` ``
  - Block: ` ```language `
- **Blockquotes**: `> quote`
- **Tables**: Full GFM table support
- **Horizontal Rules**: `---` or `***`

## 💾 Data Storage

Notes are stored locally in the browser's localStorage, ensuring:
- Fast access and performance
- Privacy - your data never leaves your device
- Persistence across sessions

## 🎨 Features Roadmap

- [x] Create, edit, and delete notes
- [x] Search and filter notes
- [x] Markdown support with live preview
- [x] Auto-save functionality
- [x] Responsive UI with dark mode support
- [ ] Export notes (PDF, Markdown files)
- [ ] Import notes from files
- [ ] Categories/tags for organization
- [ ] Note templates
- [ ] Keyboard shortcuts

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📧 Contact

For questions or feedback, please open an issue on GitHub.