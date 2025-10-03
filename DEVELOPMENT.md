# Development Guide

## Project Structure

```
3oct25/
├── src/                    # React application source
│   ├── components/         # React components
│   │   ├── NoteEditor.jsx  # Note editing component
│   │   ├── NoteList.jsx    # List of notes sidebar
│   │   ├── NoteViewer.jsx  # Markdown preview component
│   │   └── SearchBar.jsx   # Search functionality
│   ├── App.jsx            # Main application component
│   └── main.jsx           # React entry point
├── src-tauri/             # Tauri/Rust backend
│   ├── src/               # Rust source files
│   ├── icons/             # Application icons
│   └── tauri.conf.json    # Tauri configuration
├── public/                # Static assets
└── package.json           # Node.js dependencies

```

## Available Scripts

### Development
```bash
npm run dev          # Start Vite dev server only
npm run tauri dev    # Start full Tauri application with hot-reload
```

### Building
```bash
npm run build        # Build frontend only
npm run tauri build  # Build full desktop application
```

### Preview
```bash
npm run preview      # Preview production build
```

## Component Overview

### App.jsx
Main application component that manages:
- Application state (notes, selected note, edit/view modes)
- localStorage persistence
- Search filtering
- Note CRUD operations

### NoteEditor
Handles note creation and editing:
- Title and content input
- Form validation
- Save/Cancel actions
- Markdown syntax hints

### NoteList
Displays list of notes in sidebar:
- Note preview with truncation
- Delete functionality
- Active note highlighting
- Timestamp display

### NoteViewer
Renders notes with markdown:
- Full markdown syntax support
- Edit/Close actions
- Styled markdown output
- Code syntax highlighting

### SearchBar
Provides search functionality:
- Real-time filtering
- Clear search button
- Search across title and content

## State Management

The app uses React's built-in useState and useEffect hooks:

```javascript
const [notes, setNotes] = useState([]);           // All notes
const [selectedNote, setSelectedNote] = useState(null);  // Current note
const [isEditing, setIsEditing] = useState(false);      // Edit mode
const [isViewing, setIsViewing] = useState(false);      // View mode
const [searchTerm, setSearchTerm] = useState("");       // Search filter
```

## Data Structure

Notes are stored as objects:

```javascript
{
  id: number,          // Timestamp-based unique ID
  title: string,       // Note title
  content: string,     // Note content (markdown)
  updatedAt: string    // ISO timestamp
}
```

## localStorage Schema

- **Key**: `notes`
- **Value**: JSON stringified array of note objects

## Styling

The app uses CSS modules with these key files:
- `App.css` - Main layout and theme
- `NoteEditor.css` - Editor styles
- `NoteList.css` - Sidebar and list styles
- `NoteViewer.css` - Markdown rendering styles
- `SearchBar.css` - Search component styles

### Theme Support
- Light mode (default)
- Dark mode (via `prefers-color-scheme: dark`)

## Adding New Features

### To add a new component:

1. Create component file in `src/components/`
2. Create corresponding CSS file
3. Import and use in `App.jsx`
4. Update state management as needed

### To add new Tauri commands:

1. Update `src-tauri/src/main.rs` or `lib.rs`
2. Define the command function with `#[tauri::command]`
3. Register in `tauri::Builder`
4. Call from React using `invoke()` from `@tauri-apps/api/core`

## Building for Distribution

### Windows
```bash
npm run tauri build
```
Output: `src-tauri/target/release/bundle/msi/`

### macOS
```bash
npm run tauri build
```
Output: `src-tauri/target/release/bundle/dmg/`

### Linux
```bash
npm run tauri build
```
Output: `src-tauri/target/release/bundle/appimage/` or `/deb/`

## Debugging

### Frontend
- Use browser DevTools (available in dev mode)
- Check console for React errors
- Use React DevTools extension

### Backend
- Check Rust console output
- Use `println!` for debugging
- View Tauri logs in terminal

## Performance Tips

1. Notes are filtered client-side - suitable for hundreds of notes
2. localStorage has 5-10MB limit - sufficient for thousands of text notes
3. Markdown rendering is optimized with `marked.js`
4. React optimizations via memoization can be added for large lists

## Future Enhancements

Consider implementing:
- Export to PDF/Markdown files
- Import from files
- Tags/categories system
- Note templates
- Keyboard shortcuts
- Rich text editor alternative
- Cloud sync (optional)
- Encrypted notes
- Note sharing

## Troubleshooting

### Build fails
- Ensure Rust is installed: `rustc --version`
- Update dependencies: `npm install`
- Clear cache: `rm -rf node_modules dist src-tauri/target`

### App won't start
- Check Tauri prerequisites for your OS
- Verify port 1420 is available
- Check for conflicting processes

### Notes not saving
- Check browser console for localStorage errors
- Verify localStorage is enabled
- Check available storage space

## Contributing

When contributing:
1. Keep components focused and single-purpose
2. Follow existing code style
3. Update documentation
4. Test on multiple platforms if possible
5. Consider accessibility (WCAG guidelines)
