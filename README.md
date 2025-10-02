# Deepfake Guard

> **AI-Powered Deepfake Detection for Video & Audio**

Advanced deepfake detection system using ResNeXt + LSTM neural networks. Production-ready SPA built with React, TypeScript, and Tailwind CSS.

![Deepfake Guard](https://lovable.dev/opengraph-image-p98pqg.png)

## 🚀 Features

### Core Capabilities
- **Video Deepfake Detection** - Analyze video files for face manipulation and synthetic content
- **Audio Deepfake Detection** - Detect voice cloning and synthetic audio generation
- **Frame Extraction** - Automatic sampling and thumbnail generation from video
- **Waveform & Spectrogram** - Real-time audio visualization with WaveSurfer.js
- **Analysis Settings** - Configurable frame rates, chunk sizes, and preprocessing options

### UI/UX Highlights
- **Glassmorphism Design** - Modern glass-card effects with backdrop blur
- **Animated Gradients** - Smooth gradient animations throughout
- **Dark Mode** - Persistent theme toggle with localStorage
- **Drag & Drop Upload** - react-dropzone integration for file uploads
- **Real-time Preview** - Video player and audio waveform/spectrogram visualization
- **Empty States** - Clear guidance when no data is present (no fake metrics)
- **Toast Notifications** - User feedback for all actions
- **Fully Responsive** - Mobile-first design with breakpoint optimization

### Technical Features
- **Code Splitting** - Lazy-loaded routes for optimal performance
- **Type Safety** - Full TypeScript coverage with strict types
- **Accessibility** - ARIA labels, keyboard navigation, focus management
- **SEO Optimized** - Semantic HTML, meta tags, Open Graph support
- **Design System** - Centralized tokens in Tailwind config and CSS
- **Validation** - Client-side file type and size validation

## 🎨 Design System

### Color Palette
- **Primary**: Indigo (HSL: 239, 84%, 67%)
- **Secondary**: Cyan (HSL: 189, 94%, 43%)
- **Base**: Slate/Ink tones for backgrounds

### Key Utilities
```css
/* Animated gradient */
.bg-gradient-hero

/* Glassmorphism */
.glass-card
.glass-card-strong

/* Animations */
.animate-gradient-shift
.animate-fade-in
.animate-scale-in
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Tabs.tsx
│   ├── UploadDropzone.tsx
│   ├── MediaPreviewVideo.tsx
│   ├── MediaPreviewAudio.tsx
│   ├── ResultPanel.tsx
│   ├── SettingsPanel.tsx
│   ├── Toast.tsx
│   ├── Modal.tsx
│   └── EmptyState.tsx
├── layouts/            # Layout components
│   └── AppLayout.tsx
├── pages/              # Route pages (lazy-loaded)
│   ├── Home.tsx
│   ├── VideoDetect.tsx
│   ├── AudioDetect.tsx
│   ├── Accounts.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── lib/                # Utilities and helpers
│   ├── storage.ts      # Theme & upload history
│   ├── validators.ts   # File validation
│   └── utils.ts        # Formatting & frame extraction
├── router.tsx          # Route configuration
├── App.tsx             # Root component
├── main.tsx            # Entry point
└── index.css           # Design system tokens
```

## 🛠️ Tech Stack

### Core
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling

### Libraries
- **react-router-dom** - Client-side routing with code splitting
- **@headlessui/react** - Accessible UI primitives (Tabs, Dialog)
- **react-dropzone** - Drag & drop file uploads
- **wavesurfer.js** - Audio waveform & spectrogram visualization
- **lucide-react** - Icon library

### Additional Tools
- **@tanstack/react-query** - Data fetching & caching (ready for backend)
- **clsx + tailwind-merge** - Conditional class composition

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ and npm/pnpm/yarn

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd deepfake-guard

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
```

## 🧭 Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with features & approach |
| `/video` | VideoDetect | Video deepfake detection interface |
| `/audio` | AudioDetect | Audio deepfake detection interface |
| `/accounts` | Accounts | Login/Register/Profile tabs |
| `/about` | About | Mission, pipeline, architecture |
| `/contact` | Contact | Contact form & info cards |
| `*` | NotFound | 404 page |

## 📝 Usage Guide

### Video Detection
1. Navigate to `/video`
2. Drag & drop or click to upload a video file (.mp4, .mov, .mkv, .webm)
3. Adjust settings (frame sampling rate, face focus, clip duration)
4. Click "Analyze Video"
5. View results in the result panel (UI simulation only - no backend yet)

### Audio Detection
1. Navigate to `/audio`
2. Upload an audio file (.wav, .mp3, .m4a, .flac)
3. Configure settings (chunk size, spectrogram mode, noise reduction)
4. Click "Analyze Audio"
5. Review waveform, spectrogram, and results

### Theme Toggle
- Click the sun/moon icon in the navbar
- Theme persists in localStorage
- Applies to all components via CSS variables

## 🔒 Important Notes

### UI-Only Implementation
This is a **frontend-only implementation**. The "Analyze" buttons simulate processing with a 3-second delay. No actual deepfake detection occurs yet.

### No Fake Metrics
- **No placeholder percentages** or fake confidence scores
- Result panels show labels only ("Decision will appear here after analysis")
- EmptyState components guide users clearly

### File Validation
- **Video**: Max 1GB, types: .mp4, .mov, .mkv, .webm
- **Audio**: Max 100MB, types: .wav, .mp3, .m4a, .flac
- Validation errors shown via toast notifications

## 🎯 Next Steps (Backend Integration)

To make this a fully functional deepfake detector:

1. **Backend API**
   - Python/FastAPI server
   - ResNeXt model loading (PyTorch/TensorFlow)
   - LSTM sequence processing
   - File upload handling

2. **Model Integration**
   - Pre-trained ResNeXt weights
   - LSTM temporal analysis
   - Feature extraction pipeline
   - Confidence scoring

3. **Database** (optional)
   - Store analysis results
   - User authentication
   - Upload history

4. **Deployment**
   - Frontend: Vercel, Netlify, or Cloudflare Pages
   - Backend: AWS Lambda, Google Cloud Run, or dedicated server
   - CDN for static assets

## 🤝 Contributing

This is a demonstration project. For production use:
- Add comprehensive tests (Jest, React Testing Library)
- Implement error boundaries
- Add rate limiting for uploads
- Set up CI/CD pipeline
- Add monitoring & analytics

## 📄 License

This project is for educational and demonstration purposes.

## 🙏 Acknowledgments

Built with:
- shadcn/ui for component inspiration
- Tailwind Labs for design utilities
- Lucide for beautiful icons
- WaveSurfer.js team for audio visualization

---

**Project URL**: https://lovable.dev/projects/ef043070-e7db-4394-a836-8e81cede7c66
