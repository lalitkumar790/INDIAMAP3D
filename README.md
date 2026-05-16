# 🇮🇳 Bharat World

An interactive 3D India — drive the sacred **Rath (Chariot) with 7 horses** across every state, explore famous monuments, and experience real-time weather.

Built with **Three.js** + **Vite**. No heavy dependencies. Runs in any modern browser.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# → http://localhost:5173
```

---

## 🎮 Controls

| Key | Action |
|-----|--------|
| `↑` or `S` | Accelerate |
| `↓` or `X` | Brake / Reverse |
| `←` or `A` | Steer left |
| `→` or `D` | Steer right |
| `W` | Cycle weather (Clear → Rain → Storm → Fog) |
| `M` | Toggle minimap |

---

## 🌦️ Features

- **26 Indian states** as 3D extruded terrain with unique colours & biomes
- **7-horse Rath** with galloping animation, dust particles, suspension
- **Charioteer figure** on the Rath
- **Monument markers** — drive near one to see info popup (Taj Mahal, Red Fort, Golden Temple…)
- **Real-time weather** — clear sky, rain with splashes, lightning storm, fog
- **Wildlife** — peacocks, snakes, elephants, deer, eagles roaming the map
- **Minimap** with Rath position tracker
- **State banner** showing current state & capital

---

## 📁 Project Structure

```
bharat-world/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.js           # Entry point
    ├── style.css         # All styles
    ├── Experience.js     # Core orchestrator
    ├── world/
    │   ├── Camera.js     # Follow-cam
    │   ├── Environment.js # Sky, sun, lights, ground
    │   ├── IndiaMap.js   # States + monument markers
    │   ├── Rath.js       # Chariot + 7 horses + charioteer
    │   ├── Weather.js    # Rain, storm, fog, lightning
    │   └── Animals.js    # Peacock, snake, elephant, deer, eagle
    ├── controls/
    │   └── RathControls.js
    └── ui/
        └── HUD.js        # Speedometer, minimap, popups
```

---

## 🗺️ Roadmap (Phase 2+)

- [ ] Real India GeoJSON terrain (accurate state shapes)
- [ ] Load GLB models from Blender for Rath & monuments
- [ ] Per-state biome textures (desert sand, rainforest, snow)
- [ ] Multiplayer (other users visible as Raths)
- [ ] 3D billboard ad zones per state capital
- [ ] Analytics dashboard for advertisers
- [ ] Mobile touch controls
- [ ] Audio — hoofbeats, thunder, ambient state sounds

---

## 🌐 Deploy to GitHub Pages

```bash
npm run build
# Then push /dist to gh-pages branch
```

---

Made with ❤️ for Bharat 🪷
"# INDIAMAP3D" 
