This file is a merged representation of a subset of the codebase, containing specifically included files, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:

1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:

- File path as an attribute
- Full contents of the file
  </file_format>

<usage_guidelines>

- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
  </usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: index.html, css/**, js/**
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure>
css/style.css
index.html
js/app.js
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="css/style.css">
/* ===== RESET & BASE ===== */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
--primary: #ff4655;
--primary-dark: #bd3944;
--primary-glow: rgba(255, 70, 85, 0.3);
--bg-dark: #0a0a0f;
--bg-card: #12121a;
--bg-card-hover: #1a1a28;
--bg-surface: #16161f;
--text-primary: #ffffff;
--text-secondary: #8b8b9e;
--text-muted: #4a4a5e;
--border: #2a2a3a;
--gradient-1: linear-gradient(135deg, #ff4655, #ff6b6b);
--gradient-2: linear-gradient(135deg, #0a0a0f, #1a1a2e);
--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

html {
scroll-behavior: smooth;
scrollbar-width: thin;
scrollbar-color: var(--primary) var(--bg-dark);
}

body {
font-family: 'Rajdhani', sans-serif;
background-color: var(--bg-dark);
color: var(--text-primary);
overflow-x: hidden;
line-height: 1.6;
}

::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: var(--bg-dark); }
::-webkit-scrollbar-thumb { background: var(--primary); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: var(--primary-dark); }

/_ ===== CURSOR GLOW ===== _/
.cursor-glow {
position: fixed;
width: 300px;
height: 300px;
border-radius: 50%;
background: radial-gradient(circle, rgba(255, 70, 85, 0.08) 0%, transparent 70%);
pointer-events: none;
z-index: 9999;
transform: translate(-50%, -50%);
transition: opacity 0.3s;
opacity: 0;
}

body:hover .cursor-glow { opacity: 1; }

/_ ===== LOADER ===== _/
.loader {
position: fixed;
inset: 0;
background: var(--bg-dark);
display: flex;
align-items: center;
justify-content: center;
z-index: 100000;
transition: opacity 0.5s, visibility 0.5s;
}

.loader.hidden { opacity: 0; visibility: hidden; }

.loader-content {
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
}

.loader-logo {
margin-bottom: 30px;
animation: pulse 1.5s ease-in-out infinite;
}

.valorant-logo-svg { width: 80px; height: 80px; display: block; }

.valorant-logo-svg polygon {
stroke-dasharray: 300;
stroke-dashoffset: 300;
animation: drawLogo 2s ease forwards;
}

@keyframes drawLogo { to { stroke-dashoffset: 0; } }
@keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }

.loader-bar {
width: 200px;
height: 3px;
background: var(--border);
border-radius: 3px;
overflow: hidden;
margin-bottom: 15px;
}

.loader-bar-fill {
height: 100%;
background: var(--gradient-1);
border-radius: 3px;
animation: loadBar 2s ease-in-out forwards;
}

@keyframes loadBar { 0% { width: 0%; } 50% { width: 70%; } 100% { width: 100%; } }

.loader-text {
color: var(--text-secondary);
font-size: 14px;
letter-spacing: 3px;
text-transform: uppercase;
animation: blink 1s ease-in-out infinite;
}

@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }

/_ ===== NAVBAR ===== _/
.navbar {
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 1000;
background: rgba(10, 10, 15, 0.85);
backdrop-filter: blur(20px);
border-bottom: 1px solid rgba(255, 70, 85, 0.1);
transition: all var(--transition-normal);
}

.navbar.scrolled {
background: rgba(10, 10, 15, 0.95);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
}

.nav-container {
max-width: 1400px;
margin: 0 auto;
padding: 0 30px;
height: 70px;
display: flex;
align-items: center;
justify-content: space-between;
gap: 20px;
}

.nav-logo {
display: flex;
align-items: center;
gap: 12px;
cursor: pointer;
flex-shrink: 0;
}

.logo-icon {
transition: transform var(--transition-normal);
display: flex;
align-items: center;
}

.nav-logo:hover .logo-icon { transform: rotate(15deg); }

.logo-text {
font-family: 'Oswald', sans-serif;
font-size: 24px;
font-weight: 700;
letter-spacing: 4px;
background: var(--gradient-1);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
}

.nav-links { display: flex; align-items: center; gap: 5px; }

.nav-link {
text-decoration: none;
color: var(--text-secondary);
font-size: 14px;
font-weight: 600;
letter-spacing: 1px;
text-transform: uppercase;
padding: 8px 14px;
border-radius: 6px;
transition: all var(--transition-fast);
position: relative;
white-space: nowrap;
}

.nav-link:hover, .nav-link.active {
color: var(--primary);
background: rgba(255, 70, 85, 0.1);
}

.nav-link.active::after {
content: '';
position: absolute;
bottom: 2px;
left: 50%;
transform: translateX(-50%);
width: 20px;
height: 2px;
background: var(--primary);
border-radius: 2px;
}

.nav-search { flex-shrink: 0; }

.search-box { position: relative; display: flex; align-items: center; }

.search-box i {
position: absolute;
left: 12px;
color: var(--text-muted);
font-size: 14px;
transition: color var(--transition-fast);
}

.search-box input {
background: var(--bg-surface);
border: 1px solid var(--border);
border-radius: 8px;
padding: 10px 16px 10px 38px;
color: var(--text-primary);
font-family: 'Rajdhani', sans-serif;
font-size: 14px;
width: 200px;
transition: all var(--transition-normal);
outline: none;
}

.search-box input:focus {
border-color: var(--primary);
box-shadow: 0 0 0 3px var(--primary-glow);
width: 260px;
}

.search-box input:focus ~ i, .search-box:hover i { color: var(--primary); }
.search-box input::placeholder { color: var(--text-muted); }

.mobile-menu-btn {
display: none;
flex-direction: column;
gap: 5px;
background: none;
border: none;
cursor: pointer;
padding: 5px;
z-index: 1001;
}

.mobile-menu-btn span {
display: block;
width: 25px;
height: 2px;
background: var(--text-primary);
transition: all var(--transition-normal);
border-radius: 2px;
}

.mobile-menu-btn.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.mobile-menu-btn.active span:nth-child(2) { opacity: 0; }
.mobile-menu-btn.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

.mobile-menu {
display: none;
flex-direction: column;
padding: 15px 30px 20px;
border-top: 1px solid var(--border);
}

.mobile-menu.active { display: flex; }
.mobile-search { margin-bottom: 15px; }
.mobile-search .search-box input { width: 100%; }

.mobile-link {
text-decoration: none;
color: var(--text-secondary);
font-size: 15px;
font-weight: 600;
letter-spacing: 1px;
text-transform: uppercase;
padding: 10px 14px;
border-radius: 6px;
transition: all var(--transition-fast);
}

.mobile-link:hover, .mobile-link.active {
color: var(--primary);
background: rgba(255, 70, 85, 0.1);
}

/_ ===== HERO ===== _/
.hero {
position: relative;
width: 100%;
min-height: 100vh;
overflow: hidden;
}

.hero::before {
content: '';
position: absolute;
inset: 0;
background:
radial-gradient(ellipse at 20% 50%, rgba(255, 70, 85, 0.08) 0%, transparent 60%),
radial-gradient(ellipse at 80% 20%, rgba(100, 50, 255, 0.05) 0%, transparent 50%);
z-index: 1;
}

.hero::after {
content: '';
position: absolute;
bottom: 0;
left: 0;
right: 0;
height: 200px;
background: linear-gradient(to top, var(--bg-dark), transparent);
z-index: 2;
}

.hero-particles { position: absolute; inset: 0; overflow: hidden; z-index: 0; }

.particle {
position: absolute;
width: 2px;
height: 2px;
background: var(--primary);
border-radius: 50%;
opacity: 0;
animation: particleFloat 4s ease-in-out infinite;
}

@keyframes particleFloat {
0% { opacity: 0; transform: translateY(100vh) scale(0); }
50% { opacity: 0.6; }
100% { opacity: 0; transform: translateY(-10vh) scale(1); }
}

.hero-bg-image {
position: absolute;
right: 5%;
top: 50%;
transform: translateY(-50%);
z-index: 1;
opacity: 0.12;
pointer-events: none;
}

.hero-bg-image img {
max-width: 600px;
width: 100%;
filter: drop-shadow(0 0 60px rgba(255, 70, 85, 0.3));
animation: floatSkin 4s ease-in-out infinite;
}

@keyframes floatSkin {
0%, 100% { transform: translateY(0) rotate(-5deg); }
50% { transform: translateY(-20px) rotate(-3deg); }
}

.hero-inner {
position: relative;
z-index: 3;
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 100px 30px 80px;
}

.hero-content {
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
max-width: 700px;
width: 100%;
}

/_ ===== HERO CINEMATIC CLIP-PATH REVEAL ===== _/

.hero-badge {
display: inline-flex;
align-items: center;
gap: 8px;
padding: 8px 20px;
border: 1px solid rgba(255, 70, 85, 0.3);
border-radius: 50px;
font-size: 12px;
font-weight: 600;
letter-spacing: 3px;
color: var(--primary);
margin-bottom: 30px;
opacity: 0;
clip-path: inset(0 100% 0 0);
animation: clipReveal 0.7s cubic-bezier(0.77, 0, 0.175, 1) 0.1s forwards;
}

.badge-dot {
width: 6px;
height: 6px;
background: var(--primary);
border-radius: 50%;
flex-shrink: 0;
animation: dotPulse 2s ease-in-out infinite;
}

@keyframes dotPulse {
0%, 100% { opacity: 1; transform: scale(1); }
50% { opacity: 0.5; transform: scale(1.5); }
}

.hero-title {
font-family: 'Oswald', sans-serif;
font-size: clamp(40px, 7vw, 80px);
font-weight: 700;
line-height: 1.05;
margin-bottom: 24px;
letter-spacing: 2px;
width: 100%;
}

.title-line {
display: block;
position: relative;
opacity: 0;
clip-path: inset(0 100% 0 0);
animation: clipReveal 0.9s cubic-bezier(0.77, 0, 0.175, 1) forwards;
}

.title-line:nth-child(1) { animation-delay: 0.3s; }
.title-line:nth-child(2) { animation-delay: 0.6s; }
.title-line:nth-child(3) { animation-delay: 0.9s; }

.title-line::after {
content: '';
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: var(--primary);
transform: scaleX(0);
transform-origin: left center;
animation: wipeCursor 0.9s cubic-bezier(0.77, 0, 0.175, 1) forwards;
z-index: 1;
pointer-events: none;
}

.title-line:nth-child(1)::after { animation-delay: 0.3s; }
.title-line:nth-child(2)::after { animation-delay: 0.6s; }
.title-line:nth-child(3)::after { animation-delay: 0.9s; }

.title-line.highlight {
position: relative;
z-index: 0;
background: var(--gradient-1);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
}

.title-line.highlight::after {
background: linear-gradient(90deg, #ff4655, #ff6b6b);
opacity: 0.85;
}

.hero-description {
color: var(--text-secondary);
font-size: 18px;
line-height: 1.7;
margin-bottom: 40px;
max-width: 540px;
width: 100%;
opacity: 0;
clip-path: inset(0 100% 0 0);
animation: clipReveal 0.8s cubic-bezier(0.77, 0, 0.175, 1) 1.2s forwards;
}

.hero-stats {
display: flex;
align-items: center;
justify-content: center;
gap: 30px;
margin-bottom: 40px;
opacity: 0;
animation: riseReveal 0.6s cubic-bezier(0.4, 0, 0.2, 1) 1.5s forwards;
}

.stat { display: flex; flex-direction: column; align-items: center; text-align: center; }

.stat-number {
display: block;
font-family: 'Oswald', sans-serif;
font-size: 36px;
font-weight: 700;
color: var(--primary);
line-height: 1;
}

.stat-label {
font-size: 13px;
color: var(--text-muted);
text-transform: uppercase;
letter-spacing: 2px;
}

.stat-divider { width: 1px; height: 40px; background: var(--border); flex-shrink: 0; }

.hero-cta {
display: inline-flex;
align-items: center;
justify-content: center;
gap: 12px;
padding: 14px 36px;
background: var(--gradient-1);
color: white;
text-decoration: none;
font-family: 'Oswald', sans-serif;
font-size: 16px;
font-weight: 600;
letter-spacing: 3px;
text-transform: uppercase;
border-radius: 8px;
transition: box-shadow var(--transition-normal), transform var(--transition-normal);
opacity: 0;
animation: ctaBounceIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 1.7s forwards;
position: relative;
overflow: hidden;
}

.hero-cta::before {
content: '';
position: absolute;
inset: 0;
background: linear-gradient(135deg, transparent, rgba(255,255,255,0.2), transparent);
transform: translateX(-100%);
transition: transform 0.6s;
}

.hero-cta:hover::before { transform: translateX(100%); }

.hero-cta:hover {
transform: translateY(-3px);
box-shadow: 0 10px 40px rgba(255, 70, 85, 0.4);
}

.hero-cta i { animation: bounceDown 1.5s ease-in-out infinite; }

@keyframes bounceDown {
0%, 100% { transform: translateY(0); }
50% { transform: translateY(5px); }
}

.scroll-indicator {
margin-top: auto;
padding-top: 40px;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
opacity: 0;
animation: riseReveal 0.5s ease 2.1s forwards;
}

.mouse {
width: 24px;
height: 38px;
border: 2px solid var(--text-muted);
border-radius: 12px;
display: flex;
justify-content: center;
padding-top: 8px;
}

.mouse-wheel {
width: 3px;
height: 8px;
background: var(--primary);
border-radius: 3px;
animation: scrollWheel 2s ease-in-out infinite;
}

@keyframes scrollWheel {
0% { opacity: 1; transform: translateY(0); }
100% { opacity: 0; transform: translateY(12px); }
}

.scroll-indicator span {
font-size: 11px;
color: var(--text-muted);
text-transform: uppercase;
letter-spacing: 3px;
}

/_ ===== HERO REVEAL KEYFRAMES ===== _/

@keyframes clipReveal {
0% { opacity: 0; clip-path: inset(0 100% 0 0); }
25% { opacity: 1; }
100% { opacity: 1; clip-path: inset(0 0% 0 0); }
}

@keyframes wipeCursor {
0% { transform: scaleX(0); transform-origin: left center; }
50% { transform: scaleX(1); transform-origin: left center; }
50.01% { transform-origin: right center; }
100% { transform: scaleX(0); transform-origin: right center; }
}

@keyframes riseReveal {
0% { opacity: 0; transform: translateY(20px); }
100% { opacity: 1; transform: translateY(0); }
}

@keyframes ctaBounceIn {
0% { opacity: 0; transform: translateY(25px) scale(0.85); }
60% { opacity: 1; transform: translateY(-4px) scale(1.03); }
80% { transform: translateY(2px) scale(0.99); }
100% { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes fadeInUp {
from { opacity: 0; transform: translateY(30px); }
to { opacity: 1; transform: translateY(0); }
}

/_ ===== SECTIONS ===== _/
.section-container { max-width: 1400px; margin: 0 auto; padding: 0 30px; }
.section-header { text-align: center; margin-bottom: 50px; }

.section-tag {
display: inline-block;
padding: 4px 16px;
background: rgba(255, 70, 85, 0.1);
border: 1px solid rgba(255, 70, 85, 0.2);
border-radius: 50px;
font-size: 12px;
font-weight: 700;
letter-spacing: 3px;
color: var(--primary);
margin-bottom: 16px;
}

.section-title {
font-family: 'Oswald', sans-serif;
font-size: clamp(32px, 5vw, 48px);
font-weight: 700;
letter-spacing: 2px;
margin-bottom: 12px;
}

.section-subtitle {
color: var(--text-secondary);
font-size: 16px;
max-width: 500px;
margin: 0 auto;
}

/_ ===== BUNDLES ===== _/
.bundles-section { padding: 80px 0; position: relative; }

.bundles-carousel {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap: 24px;
}

.bundle-card {
background: var(--bg-card);
border: 1px solid var(--border);
border-radius: 16px;
overflow: hidden;
cursor: pointer;
transition: all var(--transition-slow);
position: relative;
}

.bundle-card::before {
content: '';
position: absolute;
inset: 0;
background: linear-gradient(135deg, rgba(255, 70, 85, 0.05), transparent);
opacity: 0;
transition: opacity var(--transition-normal);
z-index: 1;
}

.bundle-card:hover::before { opacity: 1; }

.bundle-image {
width: 100%;
height: 180px;
object-fit: contain;
padding: 20px;
transition: transform var(--transition-slow);
background: linear-gradient(135deg, rgba(255,70,85,0.03), rgba(100,50,255,0.03));
}

.bundle-info { padding: 20px; position: relative; z-index: 2; }

.bundle-name {
font-family: 'Oswald', sans-serif;
font-size: 20px;
font-weight: 600;
letter-spacing: 1px;
margin-bottom: 8px;
transition: color var(--transition-fast);
}

.bundle-card:hover .bundle-name { color: var(--primary); }

.bundle-meta {
display: flex;
align-items: center;
gap: 8px;
font-size: 13px;
color: var(--text-muted);
}

/_ ===== WEAPONS GRID ===== _/
.skins-section { padding: 80px 0 120px; }

.weapons-grid {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
gap: 20px;
}

.weapon-card {
background: var(--bg-card);
border: 1px solid var(--border);
border-radius: 16px;
padding: 24px;
cursor: pointer;
position: relative;
overflow: hidden;
opacity: 0;
transform: translateY(40px) scale(0.97);
transition:
opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
border-color 0.3s ease,
box-shadow 0.3s ease;
}

.weapon-card.visible { opacity: 1; transform: translateY(0) scale(1); }

.weapon-card::before {
content: '';
position: absolute;
top: 0; left: 0; right: 0;
height: 3px;
background: var(--gradient-1);
transform: scaleX(0);
transition: transform var(--transition-normal);
transform-origin: left;
}

.weapon-card:hover::before { transform: scaleX(1); }

.weapon-card::after {
content: '';
position: absolute;
inset: 0;
background: radial-gradient(circle at 50% 0%, rgba(255, 70, 85, 0.06), transparent 70%);
opacity: 0;
transition: opacity var(--transition-normal);
}

.weapon-card:hover::after { opacity: 1; }
.weapon-card:hover { box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3); }

.weapon-card-image {
width: 100%;
height: 120px;
object-fit: contain;
margin-bottom: 16px;
transition: all var(--transition-slow);
filter: brightness(0.9);
position: relative;
z-index: 1;
}

.weapon-card:hover .weapon-card-image {
filter: brightness(1) drop-shadow(0 10px 20px rgba(255, 70, 85, 0.2));
}

.weapon-card-info { position: relative; z-index: 1; }

.weapon-card-name {
font-family: 'Oswald', sans-serif;
font-size: 20px;
font-weight: 600;
letter-spacing: 1px;
margin-bottom: 4px;
transition: color var(--transition-fast);
}

.weapon-card:hover .weapon-card-name { color: var(--primary); }

.weapon-card-category {
font-size: 13px;
color: var(--text-muted);
text-transform: uppercase;
letter-spacing: 2px;
}

.weapon-card-count {
display: inline-flex;
align-items: center;
gap: 6px;
margin-top: 12px;
padding: 4px 12px;
background: rgba(255, 70, 85, 0.1);
border-radius: 50px;
font-size: 12px;
font-weight: 600;
color: var(--primary);
}

/_ ===== MODALS ===== _/
.modal-overlay {
position: fixed;
inset: 0;
background: rgba(0, 0, 0, 0.85);
backdrop-filter: blur(10px);
z-index: 10000;
display: flex;
align-items: center;
justify-content: center;
padding: 30px;
opacity: 0;
visibility: hidden;
transition: all var(--transition-normal);
}

.modal-overlay.active { opacity: 1; visibility: visible; }

.modal-close {
position: absolute;
top: 16px; right: 16px;
width: 40px; height: 40px;
border-radius: 50%;
background: rgba(255, 255, 255, 0.1);
border: none;
color: var(--text-primary);
font-size: 18px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
transition: all var(--transition-fast);
z-index: 10;
}

.modal-close:hover { background: var(--primary); transform: rotate(90deg); }

.modal {
background: var(--bg-card);
border: 1px solid var(--border);
border-radius: 20px;
max-width: 900px;
width: 100%;
max-height: 90vh;
overflow-y: auto;
transform: scale(0.9) translateY(20px);
transition: transform var(--transition-slow);
position: relative;
}

.modal-overlay.active .modal { transform: scale(1) translateY(0); }
.modal-content { padding: 0; }

.modal-hero {
padding: 40px;
background: linear-gradient(135deg, rgba(255,70,85,0.05), rgba(100,50,255,0.03));
border-bottom: 1px solid var(--border);
display: flex;
align-items: center;
justify-content: center;
min-height: 250px;
}

.modal-image-container { display: flex; align-items: center; justify-content: center; }

.modal-image {
max-width: 100%;
max-height: 200px;
object-fit: contain;
filter: drop-shadow(0 10px 40px rgba(255, 70, 85, 0.2));
animation: modalImageIn 0.6s ease;
}

@keyframes modalImageIn {
from { opacity: 0; transform: scale(0.8) translateY(20px); }
to { opacity: 1; transform: scale(1) translateY(0); }
}

.modal-info { padding: 30px 40px 40px; }

.modal-title {
font-family: 'Oswald', sans-serif;
font-size: 32px;
font-weight: 700;
letter-spacing: 2px;
margin-bottom: 4px;
}

.modal-weapon {
color: var(--text-muted);
font-size: 14px;
text-transform: uppercase;
letter-spacing: 3px;
margin-bottom: 30px;
}

.modal-chromas h3, .modal-levels h3 {
font-family: 'Oswald', sans-serif;
font-size: 18px;
font-weight: 600;
letter-spacing: 1px;
margin-bottom: 16px;
color: var(--text-secondary);
}

.chromas-grid {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
gap: 12px;
margin-bottom: 30px;
}

.chroma-item {
background: var(--bg-surface);
border: 1px solid var(--border);
border-radius: 12px;
padding: 12px;
cursor: pointer;
transition: all var(--transition-normal);
text-align: center;
}

.chroma-item:hover, .chroma-item.active {
border-color: var(--primary);
background: rgba(255, 70, 85, 0.05);
}

.chroma-item img { width: 100%; height: 60px; object-fit: contain; margin-bottom: 8px; }

.chroma-item span {
font-size: 12px;
color: var(--text-secondary);
display: block;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}

.chroma-swatch {
width: 20px; height: 20px;
border-radius: 50%;
margin: 0 auto 6px;
border: 2px solid var(--border);
}

.levels-list { display: flex; flex-direction: column; gap: 8px; }

.level-item {
display: flex;
align-items: center;
gap: 12px;
padding: 12px 16px;
background: var(--bg-surface);
border: 1px solid var(--border);
border-radius: 10px;
transition: all var(--transition-fast);
cursor: pointer;
}

.level-item:hover { border-color: var(--primary); background: rgba(255, 70, 85, 0.05); }

.level-number {
width: 32px; height: 32px;
background: rgba(255, 70, 85, 0.1);
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Oswald', sans-serif;
font-weight: 700;
color: var(--primary);
flex-shrink: 0;
}

.level-info { flex: 1; min-width: 0; }
.level-name { font-size: 14px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.level-type { font-size: 12px; color: var(--text-muted); }
.level-video { color: var(--primary); font-size: 16px; flex-shrink: 0; }

.weapon-modal {
background: var(--bg-card);
border: 1px solid var(--border);
border-radius: 20px;
max-width: 1200px;
width: 100%;
max-height: 90vh;
overflow-y: auto;
transform: scale(0.9) translateY(20px);
transition: transform var(--transition-slow);
position: relative;
padding: 30px;
}

.modal-overlay.active .weapon-modal { transform: scale(1) translateY(0); }

.weapon-modal-header {
display: flex;
align-items: center;
gap: 24px;
margin-bottom: 30px;
padding-bottom: 20px;
border-bottom: 1px solid var(--border);
}

.weapon-modal-img { height: 60px; object-fit: contain; filter: brightness(0.8); }

.weapon-modal-header h2 {
font-family: 'Oswald', sans-serif;
font-size: 32px;
font-weight: 700;
letter-spacing: 2px;
}

.weapon-skins-grid {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
gap: 16px;
}

.skin-card {
background: var(--bg-surface);
border: 1px solid var(--border);
border-radius: 14px;
padding: 20px;
cursor: pointer;
transition: all var(--transition-normal);
position: relative;
overflow: hidden;
}

.skin-card::before {
content: '';
position: absolute;
inset: 0;
background: radial-gradient(circle at 50% 0, rgba(255,70,85,0.08), transparent 70%);
opacity: 0;
transition: opacity var(--transition-normal);
}

.skin-card:hover::before { opacity: 1; }
.skin-card:hover { box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); }

.skin-card-image {
width: 100%;
height: 80px;
object-fit: contain;
margin-bottom: 12px;
transition: transform var(--transition-slow);
position: relative;
z-index: 1;
}

.skin-card-name {
font-size: 14px;
font-weight: 600;
letter-spacing: 0.5px;
position: relative;
z-index: 1;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}

.skin-card:hover .skin-card-name { color: var(--primary); }

.skin-card-tier {
display: inline-flex;
align-items: center;
gap: 4px;
margin-top: 6px;
font-size: 11px;
color: var(--text-muted);
text-transform: uppercase;
letter-spacing: 1px;
}

.tier-icon { width: 16px; height: 16px; object-fit: contain; }

/_ ===== BACK TO TOP ===== _/
.back-to-top {
position: fixed;
bottom: 30px; right: 30px;
width: 48px; height: 48px;
border-radius: 12px;
background: var(--primary);
border: none;
color: white;
font-size: 18px;
cursor: pointer;
z-index: 999;
opacity: 0;
visibility: hidden;
transform: translateY(20px);
transition: all var(--transition-normal);
box-shadow: 0 4px 20px rgba(255, 70, 85, 0.4);
display: flex;
align-items: center;
justify-content: center;
}

.back-to-top.visible { opacity: 1; visibility: visible; transform: translateY(0); }
.back-to-top:hover { transform: translateY(-3px); box-shadow: 0 8px 30px rgba(255, 70, 85, 0.5); }

/_ ===== FOOTER ===== _/
.footer {
background: var(--bg-surface);
border-top: 1px solid var(--border);
padding: 40px 0;
}

.footer-container { max-width: 1400px; margin: 0 auto; padding: 0 30px; }

.footer-content {
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
}

.footer-logo {
display: flex;
align-items: center;
justify-content: center;
gap: 12px;
margin-bottom: 16px;
}

.footer-logo svg { display: block; }

.footer-logo span {
font-family: 'Oswald', sans-serif;
font-size: 22px;
font-weight: 700;
letter-spacing: 4px;
color: var(--primary);
}

.footer-text { color: var(--text-muted); font-size: 14px; max-width: 500px; margin-bottom: 10px; }
.footer-credit { color: var(--text-muted); font-size: 13px; }
.footer-credit a { color: var(--primary); text-decoration: none; transition: opacity var(--transition-fast); }
.footer-credit a:hover { opacity: 0.8; }

/_ ===== NO RESULTS ===== _/
.no-results {
grid-column: 1 / -1;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
padding: 60px 20px;
}

.no-results i { font-size: 48px; color: var(--text-muted); margin-bottom: 16px; }
.no-results h3 { font-family: 'Oswald', sans-serif; font-size: 24px; margin-bottom: 8px; }
.no-results p { color: var(--text-muted); font-size: 15px; }

/_ ===== SKELETON LOADING ===== _/

@keyframes shimmer {
0% { background-position: 200% 0; }
100% { background-position: -200% 0; }
}

.skeleton {
background: linear-gradient(
90deg,
var(--bg-surface) 25%,
var(--bg-card-hover) 50%,
var(--bg-surface) 75%
);
background-size: 200% 100%;
animation: shimmer 1.8s ease-in-out infinite;
border-radius: 8px;
}

/_ Skeleton card — mimics the shape of a real card _/
.skeleton-card {
background: var(--bg-card);
border: 1px solid var(--border);
border-radius: 16px;
overflow: hidden;
position: relative;
}

/_ Subtle red top accent like real cards _/
.skeleton-card::before {
content: '';
position: absolute;
top: 0;
left: 0;
right: 0;
height: 3px;
background: linear-gradient(90deg, transparent, rgba(255, 70, 85, 0.15), transparent);
}

.skeleton-info {
padding: 20px;
display: flex;
flex-direction: column;
gap: 10px;
}

/_ Bundle skeleton _/
.bundle-skeleton .skeleton-image {
width: 100%;
height: 180px;
border-radius: 0;
background: linear-gradient(
135deg,
rgba(255,70,85,0.02),
rgba(100,50,255,0.02)
);
position: relative;
}

.bundle-skeleton .skeleton-image::after {
content: '';
position: absolute;
inset: 0;
background: linear-gradient(
90deg,
var(--bg-surface) 25%,
var(--bg-card-hover) 50%,
var(--bg-surface) 75%
);
background-size: 200% 100%;
animation: shimmer 1.8s ease-in-out infinite;
}

.skeleton-title {
height: 20px;
width: 70%;
}

.skeleton-text {
height: 14px;
width: 45%;
}

/_ Weapon skeleton _/
.weapon-skeleton {
padding: 24px;
}

.skeleton-weapon-image {
width: 100%;
height: 120px;
margin-bottom: 6px;
}

.skeleton-text-short {
height: 12px;
width: 35%;
}

.skeleton-badge {
height: 24px;
width: 80px;
border-radius: 50px;
margin-top: 4px;
}

/_ Skin skeleton inside weapon modal _/
.skin-skeleton {
padding: 20px;
}

.skeleton-skin-image {
width: 100%;
height: 80px;
margin-bottom: 8px;
}

.skeleton-skin-title {
height: 14px;
width: 80%;
}

.skeleton-skin-tier {
height: 16px;
width: 60px;
border-radius: 4px;
margin-top: 6px;
}

/_ Staggered shimmer timing for visual depth _/
.skeleton-card:nth-child(2) .skeleton,
.skeleton-card:nth-child(2) .skeleton-image::after { animation-delay: 0.15s; }

.skeleton-card:nth-child(3) .skeleton,
.skeleton-card:nth-child(3) .skeleton-image::after { animation-delay: 0.3s; }

.skeleton-card:nth-child(4) .skeleton,
.skeleton-card:nth-child(4) .skeleton-image::after { animation-delay: 0.45s; }

.skeleton-card:nth-child(5) .skeleton,
.skeleton-card:nth-child(5) .skeleton-image::after { animation-delay: 0.6s; }

.skeleton-card:nth-child(6) .skeleton,
.skeleton-card:nth-child(6) .skeleton-image::after { animation-delay: 0.75s; }

.skeleton-card:nth-child(7) .skeleton,
.skeleton-card:nth-child(7) .skeleton-image::after { animation-delay: 0.9s; }

.skeleton-card:nth-child(8) .skeleton,
.skeleton-card:nth-child(8) .skeleton-image::after { animation-delay: 1.05s; }

/_ Fade out skeletons when real content loads _/
.skeleton-card {
transition: opacity 0.4s ease, transform 0.4s ease;
}

/_ ===== STAGGERED CARD ANIMATIONS ===== _/

.weapon-card.visible:hover { transform: none; }
.weapon-card:hover .weapon-card-image { transform: none; }

.skin-card-hidden { opacity: 0; transform: translateY(24px) scale(0.95); }

.skin-card-visible {
opacity: 1;
transform: translateY(0) scale(1);
transition:
opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),
transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.skin-card-visible:hover { transform: none; }

/_ ===== 3D TILT EFFECT ===== _/

.weapon-card, .skin-card, .bundle-card {
transform-style: preserve-3d;
will-change: transform;
isolation: isolate;
}

.weapon-card-info, .skin-card-name, .skin-card-tier, .bundle-info {
transform: translateZ(30px);
transform-style: preserve-3d;
}

.weapon-card-image, .skin-card-image, .bundle-image { will-change: transform; }

.tilt-glare {
position: absolute;
inset: 0;
border-radius: inherit;
pointer-events: none;
z-index: 5;
opacity: 0;
transition: opacity 0.3s ease;
mix-blend-mode: overlay;
}

.weapon-card:hover { transform: none; }

.bundle-card:hover {
transform: none;
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(255, 70, 85, 0.1);
}

.bundle-card:hover .bundle-image { transform: none; }
.skin-card:hover { transform: none; }
.skin-card:hover .skin-card-image { transform: none; }

/_ ===== GLOWING BORDER TRAIL ===== _/

.glow-border {
position: absolute;
inset: -1px;
border-radius: inherit;
z-index: -1;
opacity: 0;
transition: opacity 0.4s ease;
overflow: hidden;
pointer-events: none;
}

.glow-border::before {
content: '';
position: absolute;
top: 50%; left: 50%;
width: 150%; height: 150%;
transform: translate(-50%, -50%);
background: conic-gradient(
from 0deg,
transparent 0deg, transparent 60deg,
var(--primary) 100deg,
rgba(255, 107, 107, 0.8) 140deg,
rgba(255, 70, 85, 0.4) 180deg,
transparent 240deg, transparent 360deg
);
animation: glowSpin 3s linear infinite;
animation-play-state: paused;
}

.glow-border::after {
content: '';
position: absolute;
inset: 2px;
border-radius: inherit;
background: var(--bg-card);
z-index: 1;
}

.skin-card .glow-border::after { background: var(--bg-surface); }
.glow-border.active { opacity: 1; }
.glow-border.active::before { animation-play-state: running; }

.glow-border-shadow {
position: absolute;
inset: -6px;
border-radius: inherit;
z-index: -2;
opacity: 0;
transition: opacity 0.5s ease;
pointer-events: none;
background: conic-gradient(
from 0deg,
transparent 0deg, transparent 60deg,
rgba(255, 70, 85, 0.25) 100deg,
rgba(255, 107, 107, 0.15) 140deg,
rgba(255, 70, 85, 0.08) 180deg,
transparent 240deg, transparent 360deg
);
filter: blur(12px);
animation: glowSpin 3s linear infinite;
animation-play-state: paused;
}

.glow-border-shadow.active { opacity: 1; animation-play-state: running; }

@keyframes glowSpin {
from { transform: translate(-50%, -50%) rotate(0deg); }
to { transform: translate(-50%, -50%) rotate(360deg); }
}

.bundle-card .glow-border::after { inset: 2px; }
.bundle-card .glow-border-shadow { inset: -8px; filter: blur(16px); }

.weapon-card:hover { border-color: transparent; }
.bundle-card:hover { border-color: transparent; }
.skin-card:hover, .skin-card-visible:hover { border-color: transparent; }

/_ ===== SEARCH ACTIVE STATE ===== _/

.search-box input.has-value {
border-color: rgba(255, 70, 85, 0.4);
background: rgba(255, 70, 85, 0.03);
}

.search-box input.has-value ~ i { color: var(--primary); }
.search-box input.has-value::placeholder { color: transparent; }

.search-box input.has-value ~ i {
animation: searchPulse 0.6s ease;
}

@keyframes searchPulse {
0% { transform: scale(1); }
50% { transform: scale(1.2); }
100% { transform: scale(1); }
}

/_ ===== TOUCH FALLBACKS ===== _/
@media (hover: none) {
.weapon-card.visible:hover { transform: translateY(-5px) scale(1); }
.weapon-card:hover .weapon-card-image { transform: scale(1.08) translateY(-5px); }
.weapon-card:hover { border-color: rgba(255, 70, 85, 0.2); }
.bundle-card:hover { transform: translateY(-8px); border-color: rgba(255, 70, 85, 0.3); }
.bundle-card:hover .bundle-image { transform: scale(1.05); }
.skin-card:hover, .skin-card-visible:hover { transform: translateY(-4px); border-color: rgba(255, 70, 85, 0.3); }
.skin-card:hover .skin-card-image { transform: scale(1.1); }
}

/_ ===== REDUCED MOTION ===== _/
@media (prefers-reduced-motion: reduce) {
.hero-badge, .title-line, .hero-description,
.hero-stats, .hero-cta, .scroll-indicator {
animation: none !important;
opacity: 1 !important;
clip-path: none !important;
transform: none !important;
}
.title-line::after { animation: none !important; transform: scaleX(0) !important; }
.particle { animation: none !important; }
.glow-border::before, .glow-border-shadow { animation: none !important; }
.skeleton { animation: none !important; }
}

/_ ===== RESPONSIVE ===== _/
@media (max-width: 1024px) {
.nav-links { display: none; }
.nav-search { display: none; }
.mobile-menu-btn { display: flex; }
.hero-bg-image { display: none; }
}

@media (max-width: 768px) {
.nav-container { padding: 0 20px; }
.hero-inner { padding: 100px 20px 80px; }
.hero-stats { gap: 20px; }
.stat-number { font-size: 28px; }
.section-container { padding: 0 20px; }
.bundles-carousel { grid-template-columns: 1fr; }
.weapons-grid { grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; }
.modal { border-radius: 16px; }
.modal-hero { padding: 30px 20px; min-height: 180px; }
.modal-info { padding: 20px; }
.modal-title { font-size: 24px; }
.weapon-modal { padding: 20px; border-radius: 16px; }
.weapon-modal-header h2 { font-size: 24px; }
.weapon-skins-grid { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); }
.chromas-grid { grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); }
}

@media (max-width: 480px) {
.weapons-grid { grid-template-columns: 1fr; }
.weapon-skins-grid { grid-template-columns: 1fr 1fr; }
.hero-stats { flex-direction: column; gap: 16px; }
.stat-divider { width: 40px; height: 1px; }
}

/_ ===== VIDEO PLAYER ===== _/

.modal-video-section {
margin-bottom: 30px;
display: none; /_ shown by JS when videos exist _/
}

.modal-video-section h3 {
font-family: 'Oswald', sans-serif;
font-size: 18px;
font-weight: 600;
letter-spacing: 1px;
margin-bottom: 16px;
color: var(--text-secondary);
}

/_ Player container _/
.video-player {
position: relative;
width: 100%;
border-radius: 14px;
overflow: hidden;
background: #000;
aspect-ratio: 16 / 9;
cursor: pointer;
border: 1px solid var(--border);
transition: border-color var(--transition-normal);
}

.video-player:hover {
border-color: rgba(255, 70, 85, 0.3);
}

.video-player video {
width: 100%;
height: 100%;
object-fit: contain;
display: block;
}

/_ Initial overlay — shown before first play _/
.video-overlay {
position: absolute;
inset: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 12px;
background: rgba(0, 0, 0, 0.6);
backdrop-filter: blur(4px);
z-index: 3;
transition: opacity 0.3s ease, visibility 0.3s ease;
}

.video-overlay.hidden {
opacity: 0;
visibility: hidden;
pointer-events: none;
}

.video-play-btn {
width: 70px;
height: 70px;
border-radius: 50%;
background: var(--primary);
border: none;
color: white;
font-size: 24px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
transition: all var(--transition-normal);
box-shadow: 0 0 40px rgba(255, 70, 85, 0.4);
padding-left: 4px; /_ visual center for play icon _/
}

.video-play-btn:hover {
transform: scale(1.1);
box-shadow: 0 0 60px rgba(255, 70, 85, 0.6);
}

.video-play-btn:active {
transform: scale(0.95);
}

.video-hint {
color: var(--text-secondary);
font-size: 13px;
letter-spacing: 1px;
text-transform: uppercase;
}

/_ Controls bar _/
.video-controls {
position: absolute;
bottom: 0;
left: 0;
right: 0;
display: flex;
align-items: center;
gap: 10px;
padding: 10px 14px;
background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 70%, transparent 100%);
z-index: 4;
opacity: 0;
transform: translateY(4px);
transition: opacity 0.3s ease, transform 0.3s ease;
}

.video-player:hover .video-controls,
.video-player.playing .video-controls,
.video-controls.force-show {
opacity: 1;
transform: translateY(0);
}

.video-ctrl-btn {
background: none;
border: none;
color: white;
font-size: 14px;
cursor: pointer;
width: 32px;
height: 32px;
border-radius: 6px;
display: flex;
align-items: center;
justify-content: center;
transition: all var(--transition-fast);
flex-shrink: 0;
}

.video-ctrl-btn:hover {
background: rgba(255, 255, 255, 0.15);
color: var(--primary);
}

/_ Progress bar _/
.video-progress {
flex: 1;
height: 4px;
background: rgba(255, 255, 255, 0.2);
border-radius: 4px;
cursor: pointer;
position: relative;
transition: height 0.15s ease;
}

.video-player:hover .video-progress,
.video-progress:hover {
height: 6px;
}

.video-progress-filled {
height: 100%;
background: var(--primary);
border-radius: 4px;
width: 0%;
position: relative;
transition: none;
}

.video-progress-handle {
position: absolute;
top: 50%;
right: -6px;
width: 12px;
height: 12px;
background: var(--primary);
border-radius: 50%;
transform: translateY(-50%) scale(0);
transition: transform 0.15s ease;
box-shadow: 0 0 8px rgba(255, 70, 85, 0.5);
pointer-events: none;
}

.video-progress:hover .video-progress-handle,
.video-progress.dragging .video-progress-handle {
transform: translateY(-50%) scale(1);
}

.video-time {
color: var(--text-secondary);
font-size: 12px;
font-family: 'Rajdhani', sans-serif;
font-weight: 600;
white-space: nowrap;
min-width: 75px;
text-align: center;
flex-shrink: 0;
}

/_ Loading spinner _/
.video-loading {
position: absolute;
inset: 0;
display: flex;
align-items: center;
justify-content: center;
background: rgba(0, 0, 0, 0.4);
z-index: 5;
opacity: 0;
visibility: hidden;
transition: opacity 0.2s ease, visibility 0.2s ease;
}

.video-loading.visible {
opacity: 1;
visibility: visible;
}

.video-spinner {
width: 40px;
height: 40px;
border: 3px solid rgba(255, 255, 255, 0.15);
border-top-color: var(--primary);
border-radius: 50%;
animation: videoSpin 0.8s linear infinite;
}

@keyframes videoSpin {
to { transform: rotate(360deg); }
}

/_ Level tabs — switch between video levels _/
.video-level-tabs {
display: flex;
gap: 8px;
margin-top: 12px;
flex-wrap: wrap;
}

.video-level-tab {
padding: 6px 16px;
background: var(--bg-surface);
border: 1px solid var(--border);
border-radius: 8px;
color: var(--text-secondary);
font-family: 'Rajdhani', sans-serif;
font-size: 13px;
font-weight: 600;
letter-spacing: 0.5px;
cursor: pointer;
transition: all var(--transition-fast);
display: flex;
align-items: center;
gap: 6px;
}

.video-level-tab:hover {
border-color: rgba(255, 70, 85, 0.3);
color: var(--text-primary);
background: rgba(255, 70, 85, 0.05);
}

.video-level-tab.active {
border-color: var(--primary);
color: var(--primary);
background: rgba(255, 70, 85, 0.1);
}

.video-level-tab i {
font-size: 11px;
}

.video-level-tab .tab-level-num {
width: 20px;
height: 20px;
border-radius: 5px;
background: rgba(255, 70, 85, 0.15);
display: flex;
align-items: center;
justify-content: center;
font-family: 'Oswald', sans-serif;
font-weight: 700;
font-size: 11px;
color: var(--primary);
flex-shrink: 0;
}

/_ Fullscreen styles _/
.video-player:fullscreen,
.video-player:-webkit-full-screen {
border-radius: 0;
border: none;
}

.video-player:fullscreen video,
.video-player:-webkit-full-screen video {
height: 100vh;
}

.video-player:fullscreen .video-controls,
.video-player:-webkit-full-screen .video-controls {
padding: 16px 24px;
}

/_ Responsive _/
@media (max-width: 768px) {
.video-play-btn {
width: 56px;
height: 56px;
font-size: 20px;
}

    .video-controls {
        padding: 8px 10px;
        gap: 6px;
    }

    .video-time {
        font-size: 11px;
        min-width: 65px;
    }

    .video-ctrl-btn {
        width: 28px;
        height: 28px;
        font-size: 12px;
    }

    .video-level-tabs {
        gap: 6px;
    }

    .video-level-tab {
        padding: 5px 12px;
        font-size: 12px;
    }

}

/_ ===== ERROR STATE UI ===== _/

.error-state {
grid-column: 1 / -1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
padding: 60px 20px;
min-height: 300px;
}

.error-icon {
width: 80px;
height: 80px;
border-radius: 50%;
background: rgba(255, 70, 85, 0.1);
border: 2px solid rgba(255, 70, 85, 0.2);
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 24px;
animation: errorPulse 2s ease-in-out infinite;
}

.error-icon i {
font-size: 32px;
color: var(--primary);
}

@keyframes errorPulse {
0%, 100% { transform: scale(1); border-color: rgba(255, 70, 85, 0.2); }
50% { transform: scale(1.05); border-color: rgba(255, 70, 85, 0.4); }
}

.error-state h3 {
font-family: 'Oswald', sans-serif;
font-size: 24px;
font-weight: 700;
letter-spacing: 1px;
margin-bottom: 8px;
}

.error-state p {
color: var(--text-muted);
font-size: 15px;
max-width: 400px;
margin-bottom: 24px;
line-height: 1.6;
}

.error-retry-btn {
display: inline-flex;
align-items: center;
gap: 8px;
padding: 12px 28px;
background: var(--primary);
color: white;
border: none;
border-radius: 8px;
font-family: 'Oswald', sans-serif;
font-size: 15px;
font-weight: 600;
letter-spacing: 2px;
text-transform: uppercase;
cursor: pointer;
transition: all var(--transition-normal);
position: relative;
overflow: hidden;
}

.error-retry-btn::before {
content: '';
position: absolute;
inset: 0;
background: linear-gradient(135deg, transparent, rgba(255,255,255,0.2), transparent);
transform: translateX(-100%);
transition: transform 0.6s;
}

.error-retry-btn:hover::before {
transform: translateX(100%);
}

.error-retry-btn:hover {
transform: translateY(-2px);
box-shadow: 0 8px 25px rgba(255, 70, 85, 0.4);
}

.error-retry-btn:active {
transform: translateY(0);
}

.error-retry-btn.loading {
pointer-events: none;
opacity: 0.7;
}

.error-retry-btn.loading i {
animation: retrySpin 0.8s linear infinite;
}

@keyframes retrySpin {
to { transform: rotate(360deg); }
}

.error-details {
margin-top: 16px;
padding: 10px 16px;
background: rgba(255, 70, 85, 0.05);
border: 1px solid rgba(255, 70, 85, 0.1);
border-radius: 8px;
font-size: 12px;
color: var(--text-muted);
font-family: monospace;
max-width: 400px;
word-break: break-all;
}

/_ Toast notification for retry feedback _/
.toast {
position: fixed;
bottom: 30px;
left: 50%;
transform: translateX(-50%) translateY(80px);
padding: 12px 24px;
background: var(--bg-card);
border: 1px solid var(--border);
border-radius: 10px;
color: var(--text-primary);
font-size: 14px;
font-weight: 600;
z-index: 100001;
display: flex;
align-items: center;
gap: 10px;
box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
opacity: 0;
visibility: hidden;
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
pointer-events: none;
}

.toast.visible {
opacity: 1;
visibility: visible;
transform: translateX(-50%) translateY(0);
}

.toast.success {
border-color: rgba(76, 175, 80, 0.3);
}

.toast.success i {
color: #4caf50;
}

.toast.error {
border-color: rgba(255, 70, 85, 0.3);
}

.toast.error i {
color: var(--primary);
}

/_ ===== FAVORITES SYSTEM ===== _/

/_ Favorite button on weapon cards _/
.favorite-btn {
position: absolute;
top: 12px;
right: 12px;
width: 36px;
height: 36px;
border-radius: 50%;
background: rgba(0, 0, 0, 0.4);
backdrop-filter: blur(8px);
border: 1px solid rgba(255, 255, 255, 0.08);
color: var(--text-muted);
font-size: 14px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
z-index: 6;
transition: all var(--transition-normal);
padding: 0;
line-height: 1;
}

.favorite-btn:hover {
background: rgba(255, 70, 85, 0.15);
border-color: rgba(255, 70, 85, 0.3);
color: var(--primary);
transform: scale(1.1);
}

.favorite-btn.active {
color: var(--primary);
background: rgba(255, 70, 85, 0.2);
border-color: rgba(255, 70, 85, 0.4);
}

.favorite-btn.active i {
animation: heartPop 0.4s cubic-bezier(0.17, 0.89, 0.32, 1.49);
}

@keyframes heartPop {
0% { transform: scale(1); }
40% { transform: scale(1.4); }
70% { transform: scale(0.9); }
100% { transform: scale(1); }
}

/_ Burst particles on favorite _/
.favorite-btn .fav-burst {
position: absolute;
inset: -8px;
pointer-events: none;
}

.favorite-btn .fav-burst span {
position: absolute;
width: 4px;
height: 4px;
border-radius: 50%;
background: var(--primary);
top: 50%;
left: 50%;
opacity: 0;
}

.favorite-btn.burst .fav-burst span {
animation: burstOut 0.5s ease forwards;
}

.favorite-btn.burst .fav-burst span:nth-child(1) { animation-delay: 0s; --bx: -14px; --by: -14px; }
.favorite-btn.burst .fav-burst span:nth-child(2) { animation-delay: 0.03s; --bx: 14px; --by: -14px; }
.favorite-btn.burst .fav-burst span:nth-child(3) { animation-delay: 0.06s; --bx: -14px; --by: 14px; }
.favorite-btn.burst .fav-burst span:nth-child(4) { animation-delay: 0.09s; --bx: 14px; --by: 14px; }
.favorite-btn.burst .fav-burst span:nth-child(5) { animation-delay: 0.04s; --bx: 0px; --by: -18px; }
.favorite-btn.burst .fav-burst span:nth-child(6) { animation-delay: 0.07s; --bx: 0px; --by: 18px; }

@keyframes burstOut {
0% { opacity: 1; transform: translate(0, 0) scale(1); }
100% { opacity: 0; transform: translate(var(--bx), var(--by)) scale(0); }
}

/_ Favorite button on skin cards _/
.skin-card .favorite-btn {
top: 10px;
right: 10px;
width: 30px;
height: 30px;
font-size: 12px;
}

/_ Favorite button in skin detail modal _/
.modal-favorite-btn {
display: inline-flex;
align-items: center;
gap: 8px;
padding: 8px 20px;
background: var(--bg-surface);
border: 1px solid var(--border);
border-radius: 8px;
color: var(--text-secondary);
font-family: 'Rajdhani', sans-serif;
font-size: 14px;
font-weight: 600;
cursor: pointer;
transition: all var(--transition-normal);
margin-bottom: 24px;
}

.modal-favorite-btn:hover {
border-color: rgba(255, 70, 85, 0.3);
color: var(--primary);
background: rgba(255, 70, 85, 0.05);
}

.modal-favorite-btn.active {
border-color: var(--primary);
color: var(--primary);
background: rgba(255, 70, 85, 0.1);
}

.modal-favorite-btn i {
font-size: 14px;
transition: transform var(--transition-fast);
}

.modal-favorite-btn.active i {
animation: heartPop 0.4s cubic-bezier(0.17, 0.89, 0.32, 1.49);
}

/_ Favorites nav tab badge _/
.nav-fav-count {
display: inline-flex;
align-items: center;
justify-content: center;
min-width: 18px;
height: 18px;
padding: 0 5px;
border-radius: 50px;
background: var(--primary);
color: white;
font-size: 10px;
font-weight: 700;
margin-left: 4px;
line-height: 1;
transition: all var(--transition-fast);
transform: scale(0);
}

.nav-fav-count.visible {
transform: scale(1);
}

.nav-fav-count.bump {
animation: countBump 0.3s ease;
}

@keyframes countBump {
0% { transform: scale(1); }
50% { transform: scale(1.3); }
100% { transform: scale(1); }
}

/_ Favorites empty state _/
.favorites-empty {
grid-column: 1 / -1;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
padding: 60px 20px;
}

.favorites-empty i {
font-size: 48px;
color: var(--text-muted);
margin-bottom: 16px;
opacity: 0.5;
}

.favorites-empty h3 {
font-family: 'Oswald', sans-serif;
font-size: 24px;
margin-bottom: 8px;
color: var(--text-secondary);
}

.favorites-empty p {
color: var(--text-muted);
font-size: 15px;
max-width: 400px;
}

/_ Favorite card glow accent _/
.weapon-card.is-favorite::after {
background: radial-gradient(circle at 50% 0%, rgba(255, 70, 85, 0.1), transparent 70%);
opacity: 1;
}

.skin-card.is-favorite {
border-color: rgba(255, 70, 85, 0.15);
}
</file>

<file path="index.html">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VALORANT Skin Showcase</title>
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="preconnect" href="https://valorant-api.com">
    <link rel="preconnect" href="https://media.valorant-api.com" crossorigin>
</head>
<body>
    <div id="loader" class="loader">
        <div class="loader-content">
            <div class="loader-logo">
                <svg viewBox="0 0 100 100" class="valorant-logo-svg">
                    <polygon points="50,5 95,30 95,70 50,95 5,70 5,30" fill="none" stroke="#ff4655" stroke-width="2"/>
                    <text x="50" y="58" text-anchor="middle" fill="#ff4655" font-size="24" font-family="Oswald">V</text>
                </svg>
            </div>
            <div class="loader-bar"><div class="loader-bar-fill"></div></div>
            <p class="loader-text">Loading Arsenal...</p>
        </div>
    </div>

    <div class="cursor-glow" id="cursorGlow"></div>

    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <div class="logo-icon">
                    <svg viewBox="0 0 100 100" width="40" height="40">
                        <polygon points="50,5 95,30 95,70 50,95 5,70 5,30" fill="none" stroke="#ff4655" stroke-width="3"/>
                        <text x="50" y="60" text-anchor="middle" fill="#ff4655" font-size="28" font-family="Oswald" font-weight="700">V</text>
                    </svg>
                </div>
                <span class="logo-text">ARSENAL</span>
            </div>
            <div class="nav-links">
                <a href="#" class="nav-link active" data-filter="all">All Skins</a>
                <a href="#" class="nav-link" data-filter="favorites"><i class="fas fa-heart" style="font-size:12px;margin-right:4px"></i>Favorites<span class="nav-fav-count" id="navFavCount">0</span></a>
                <a href="#" class="nav-link" data-filter="melee">Melee</a>
                <a href="#" class="nav-link" data-filter="sidearm">Sidearm</a>
                <a href="#" class="nav-link" data-filter="smg">SMG</a>
                <a href="#" class="nav-link" data-filter="rifle">Rifle</a>
                <a href="#" class="nav-link" data-filter="sniper">Sniper</a>
                <a href="#" class="nav-link" data-filter="shotgun">Shotgun</a>
                <a href="#" class="nav-link" data-filter="heavy">Heavy</a>
            </div>
            <div class="nav-search">
                <div class="search-box">
                    <i class="fas fa-search"></i>
                    <input type="text" id="searchInput" placeholder="Search skins...">
                </div>
            </div>
            <button class="mobile-menu-btn" id="mobileMenuBtn"><span></span><span></span><span></span></button>
        </div>
        <div class="mobile-menu" id="mobileMenu">
            <div class="mobile-search"><div class="search-box"><i class="fas fa-search"></i><input type="text" id="mobileSearchInput" placeholder="Search skins..."></div></div>
            <a href="#" class="mobile-link active" data-filter="all">All Skins</a>
            <a href="#" class="mobile-link" data-filter="favorites"><i class="fas fa-heart" style="font-size:12px;margin-right:4px"></i>Favorites<span class="nav-fav-count" id="mobileFavCount">0</span></a>
            <a href="#" class="mobile-link" data-filter="melee">Melee</a>
            <a href="#" class="mobile-link" data-filter="sidearm">Sidearm</a>
            <a href="#" class="mobile-link" data-filter="smg">SMG</a>
            <a href="#" class="mobile-link" data-filter="rifle">Rifle</a>
            <a href="#" class="mobile-link" data-filter="sniper">Sniper</a>
            <a href="#" class="mobile-link" data-filter="shotgun">Shotgun</a>
            <a href="#" class="mobile-link" data-filter="heavy">Heavy</a>
        </div>
    </nav>

    <section class="hero" id="hero">
        <div class="hero-particles" id="heroParticles"></div>
        <div class="hero-bg-image" id="heroFeatured"></div>
        <div class="hero-inner">
            <div class="hero-content">
                <div class="hero-badge"><span class="badge-dot"></span>VALORANT COLLECTION</div>
                <h1 class="hero-title">
                    <span class="title-line">EXPLORE THE</span>
                    <span class="title-line highlight">ULTIMATE</span>
                    <span class="title-line">SKIN ARSENAL</span>
                </h1>
                <p class="hero-description">Browse through every weapon skin in VALORANT. Discover rare collections, stunning designs, and find your next favorite skin.</p>
                <div class="hero-stats">
                    <div class="stat"><span class="stat-number" id="totalSkins">0</span><span class="stat-label">Total Skins</span></div>
                    <div class="stat-divider"></div>
                    <div class="stat"><span class="stat-number" id="totalWeapons">0</span><span class="stat-label">Weapons</span></div>
                    <div class="stat-divider"></div>
                    <div class="stat"><span class="stat-number" id="totalBundles">0</span><span class="stat-label">Collections</span></div>
                </div>
                <a href="#skins" class="hero-cta"><span>Explore Skins</span><i class="fas fa-arrow-down"></i></a>
            </div>
            <div class="scroll-indicator"><div class="mouse"><div class="mouse-wheel"></div></div><span>Scroll Down</span></div>
        </div>
    </section>

    <section class="bundles-section" id="bundles">
        <div class="section-container">
            <div class="section-header">
                <span class="section-tag">FEATURED</span>
                <h2 class="section-title">Popular Collections</h2>
                <p class="section-subtitle">Discover the most iconic weapon skin bundles in VALORANT</p>
            </div>
            <div class="bundles-carousel" id="bundlesCarousel">
                <div class="skeleton-card bundle-skeleton"><div class="skeleton skeleton-image"></div><div class="skeleton-info"><div class="skeleton skeleton-title"></div><div class="skeleton skeleton-text"></div></div></div>
                <div class="skeleton-card bundle-skeleton"><div class="skeleton skeleton-image"></div><div class="skeleton-info"><div class="skeleton skeleton-title"></div><div class="skeleton skeleton-text"></div></div></div>
                <div class="skeleton-card bundle-skeleton"><div class="skeleton skeleton-image"></div><div class="skeleton-info"><div class="skeleton skeleton-title"></div><div class="skeleton skeleton-text"></div></div></div>
                <div class="skeleton-card bundle-skeleton"><div class="skeleton skeleton-image"></div><div class="skeleton-info"><div class="skeleton skeleton-title"></div><div class="skeleton skeleton-text"></div></div></div>
            </div>
        </div>
    </section>

    <section class="skins-section" id="skins">
        <div class="section-container">
            <div class="section-header">
                <span class="section-tag">WEAPONS</span>
                <h2 class="section-title">Weapon Skins</h2>
                <p class="section-subtitle">Select a weapon to explore all available skins</p>
            </div>
            <div class="weapons-grid" id="weaponsGrid">
                <div class="skeleton-card weapon-skeleton"><div class="skeleton skeleton-weapon-image"></div><div class="skeleton-info"><div class="skeleton skeleton-title"></div><div class="skeleton skeleton-text-short"></div><div class="skeleton skeleton-badge"></div></div></div>
                <div class="skeleton-card weapon-skeleton"><div class="skeleton skeleton-weapon-image"></div><div class="skeleton-info"><div class="skeleton skeleton-title"></div><div class="skeleton skeleton-text-short"></div><div class="skeleton skeleton-badge"></div></div></div>
                <div class="skeleton-card weapon-skeleton"><div class="skeleton skeleton-weapon-image"></div><div class="skeleton-info"><div class="skeleton skeleton-title"></div><div class="skeleton skeleton-text-short"></div><div class="skeleton skeleton-badge"></div></div></div>
                <div class="skeleton-card weapon-skeleton"><div class="skeleton skeleton-weapon-image"></div><div class="skeleton-info"><div class="skeleton skeleton-title"></div><div class="skeleton skeleton-text-short"></div><div class="skeleton skeleton-badge"></div></div></div>
                <div class="skeleton-card weapon-skeleton"><div class="skeleton skeleton-weapon-image"></div><div class="skeleton-info"><div class="skeleton skeleton-title"></div><div class="skeleton skeleton-text-short"></div><div class="skeleton skeleton-badge"></div></div></div>
                <div class="skeleton-card weapon-skeleton"><div class="skeleton skeleton-weapon-image"></div><div class="skeleton-info"><div class="skeleton skeleton-title"></div><div class="skeleton skeleton-text-short"></div><div class="skeleton skeleton-badge"></div></div></div>
                <div class="skeleton-card weapon-skeleton"><div class="skeleton skeleton-weapon-image"></div><div class="skeleton-info"><div class="skeleton skeleton-title"></div><div class="skeleton skeleton-text-short"></div><div class="skeleton skeleton-badge"></div></div></div>
                <div class="skeleton-card weapon-skeleton"><div class="skeleton skeleton-weapon-image"></div><div class="skeleton-info"><div class="skeleton skeleton-title"></div><div class="skeleton skeleton-text-short"></div><div class="skeleton skeleton-badge"></div></div></div>
            </div>
        </div>
    </section>

    <div class="modal-overlay" id="modalOverlay">
        <div class="modal" id="skinModal">
            <button class="modal-close" id="modalClose"><i class="fas fa-times"></i></button>
            <div class="modal-content">
                <div class="modal-hero"><div class="modal-image-container"><img src="" alt="" id="modalImage" class="modal-image"></div></div>
                <div class="modal-info">
                    <h2 class="modal-title" id="modalTitle"></h2>
                    <p class="modal-weapon" id="modalWeapon"></p>
                    <button class="modal-favorite-btn" id="modalFavoriteBtn"><i class="far fa-heart"></i><span>Add to Favorites</span></button>
                    <div class="modal-video-section" id="modalVideoSection">
                        <h3>Preview</h3>
                        <div class="video-player" id="videoPlayer">
                            <video id="videoElement" preload="metadata" playsinline><source id="videoSource" src="" type="video/mp4"></video>
                            <div class="video-overlay" id="videoOverlay"><button class="video-play-btn" id="videoPlayBtn"><i class="fas fa-play"></i></button><p class="video-hint">Click to play preview</p></div>
                            <div class="video-controls" id="videoControls">
                                <button class="video-ctrl-btn" id="videoCtrlPlay"><i class="fas fa-play"></i></button>
                                <div class="video-progress" id="videoProgress"><div class="video-progress-filled" id="videoProgressFilled"></div><div class="video-progress-handle" id="videoProgressHandle"></div></div>
                                <span class="video-time" id="videoTime">0:00 / 0:00</span>
                                <button class="video-ctrl-btn" id="videoCtrlMute"><i class="fas fa-volume-up"></i></button>
                                <button class="video-ctrl-btn" id="videoCtrlFullscreen"><i class="fas fa-expand"></i></button>
                            </div>
                            <div class="video-loading" id="videoLoading"><div class="video-spinner"></div></div>
                        </div>
                        <div class="video-level-tabs" id="videoLevelTabs"></div>
                    </div>
                    <div class="modal-chromas" id="modalChromas"><h3>Chromas</h3><div class="chromas-grid" id="chromasGrid"></div></div>
                    <div class="modal-levels" id="modalLevels"><h3>Levels</h3><div class="levels-list" id="levelsList"></div></div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal-overlay" id="weaponModalOverlay">
        <div class="weapon-modal" id="weaponModal">
            <button class="modal-close" id="weaponModalClose"><i class="fas fa-times"></i></button>
            <div class="weapon-modal-header"><img src="" alt="" id="weaponModalImage" class="weapon-modal-img"><h2 id="weaponModalTitle"></h2></div>
            <div class="weapon-skins-grid" id="weaponSkinsGrid"></div>
        </div>
    </div>

    <button class="back-to-top" id="backToTop"><i class="fas fa-chevron-up"></i></button>

    <footer class="footer">
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-logo">
                    <svg viewBox="0 0 100 100" width="50" height="50"><polygon points="50,5 95,30 95,70 50,95 5,70 5,30" fill="none" stroke="#ff4655" stroke-width="3"/><text x="50" y="60" text-anchor="middle" fill="#ff4655" font-size="28" font-family="Oswald" font-weight="700">V</text></svg>
                    <span>ARSENAL</span>
                </div>
                <p class="footer-text">This is a fan-made project. VALORANT is a registered trademark of Riot Games. All skin images and data are property of Riot Games.</p>
                <p class="footer-credit">Powered by <a href="https://valorant-api.com" target="_blank">valorant-api.com</a></p>
            </div>
        </div>
    </footer>

    <script src="js/app.js"></script>

</body>
</html>
</file>

<file path="js/app.js">
// ===== VALORANT SKIN SHOWCASE APP =====

const API_BASE = 'https://valorant-api.com/v1';

const state = {
weapons: [],
bundles: [],
allSkins: 0,
currentFilter: 'all',
searchQuery: '',
loadError: null,
favorites: JSON.parse(localStorage.getItem('valorant_favorites') || '[]'),
};

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

async function fetchData(endpoint) {
const res = await fetch(`${API_BASE}${endpoint}`);
if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
const data = await res.json();
if (!data.data) throw new Error('Invalid API response');
return data.data;
}

function animateNumber(el, target, dur = 1500) {
let s = 0;
const step = (t) => { if (!s) s = t; const p = Math.min((t - s) / dur, 1); el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) \* target); if (p < 1) requestAnimationFrame(step); };
requestAnimationFrame(step);
}

function debounce(fn, d) { let t; return function (...a) { clearTimeout(t); t = setTimeout(() => fn.apply(this, a), d); }; }

// ===== FAVORITES =====
function saveFavorites() {
localStorage.setItem('valorant_favorites', JSON.stringify(state.favorites));
updateFavoriteCounts();
}

function isFavorite(skinUuid) {
return state.favorites.includes(skinUuid);
}

function toggleFavorite(skinUuid) {
const idx = state.favorites.indexOf(skinUuid);
if (idx > -1) {
state.favorites.splice(idx, 1);
} else {
state.favorites.push(skinUuid);
}
saveFavorites();
return isFavorite(skinUuid);
}

function updateFavoriteCounts() {
const count = state.favorites.length;
const navCount = $('#navFavCount');
const mobileCount = $('#mobileFavCount');

    [navCount, mobileCount].forEach(el => {
        if (!el) return;
        el.textContent = count;
        el.classList.toggle('visible', count > 0);
        // Bump animation
        el.classList.remove('bump');
        void el.offsetWidth; // force reflow
        el.classList.add('bump');
    });

}

function createFavoriteButton(skinUuid, size = 'normal') {
const isActive = isFavorite(skinUuid);
const iconClass = isActive ? 'fas fa-heart' : 'far fa-heart';
return `         <button class="favorite-btn ${isActive ? 'active' : ''}" data-fav-skin="${skinUuid}" title="${isActive ? 'Remove from favorites' : 'Add to favorites'}">
            <i class="${iconClass}"></i>
            <div class="fav-burst"><span></span><span></span><span></span><span></span><span></span><span></span></div>
        </button>
    `;
}

function initFavoriteHandlers() {
// Delegated click handler for all favorite buttons
document.addEventListener('click', (e) => {
const btn = e.target.closest('.favorite-btn');
if (!btn) return;

        e.stopPropagation(); // Don't trigger card click
        e.preventDefault();

        const skinUuid = btn.dataset.favSkin;
        const nowFav = toggleFavorite(skinUuid);

        // Update this button
        btn.classList.toggle('active', nowFav);
        btn.querySelector('i').className = nowFav ? 'fas fa-heart' : 'far fa-heart';
        btn.title = nowFav ? 'Remove from favorites' : 'Add to favorites';

        // Burst effect
        if (nowFav) {
            btn.classList.remove('burst');
            void btn.offsetWidth;
            btn.classList.add('burst');
            setTimeout(() => btn.classList.remove('burst'), 600);
        }

        // Sync all other buttons with the same skin UUID
        $$(`[data-fav-skin="${skinUuid}"]`).forEach(otherBtn => {
            if (otherBtn !== btn) {
                otherBtn.classList.toggle('active', nowFav);
                otherBtn.querySelector('i').className = nowFav ? 'fas fa-heart' : 'far fa-heart';
                otherBtn.title = nowFav ? 'Remove from favorites' : 'Add to favorites';
            }
        });

        // Sync modal favorite button
        const modalFavBtn = $('#modalFavoriteBtn');
        if (modalFavBtn && modalFavBtn.dataset.favSkin === skinUuid) {
            modalFavBtn.classList.toggle('active', nowFav);
            modalFavBtn.querySelector('i').className = nowFav ? 'fas fa-heart' : 'far fa-heart';
            modalFavBtn.querySelector('span').textContent = nowFav ? 'Remove from Favorites' : 'Add to Favorites';
        }

        // Show toast
        showToast(nowFav ? 'Added to favorites' : 'Removed from favorites', nowFav ? 'success' : 'error', 1500);

        // If viewing favorites filter and removed, re-render
        if (!nowFav && state.currentFilter === 'favorites') {
            renderWeapons();
        }
    });

    // Modal favorite button
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('#modalFavoriteBtn');
        if (!btn) return;

        const skinUuid = btn.dataset.favSkin;
        if (!skinUuid) return;

        const nowFav = toggleFavorite(skinUuid);

        btn.classList.toggle('active', nowFav);
        btn.querySelector('i').className = nowFav ? 'fas fa-heart' : 'far fa-heart';
        btn.querySelector('span').textContent = nowFav ? 'Remove from Favorites' : 'Add to Favorites';

        // Sync card buttons
        $$(`[data-fav-skin="${skinUuid}"]`).forEach(otherBtn => {
            otherBtn.classList.toggle('active', nowFav);
            otherBtn.querySelector('i').className = nowFav ? 'fas fa-heart' : 'far fa-heart';
        });

        showToast(nowFav ? 'Added to favorites' : 'Removed from favorites', nowFav ? 'success' : 'error', 1500);
    });

    // Initialize counts
    updateFavoriteCounts();

}

// Find a skin by UUID across all weapons
function findSkinByUuid(uuid) {
for (const weapon of state.weapons) {
if (!weapon.skins) continue;
const skin = weapon.skins.find(s => s.uuid === uuid);
if (skin) return { skin, weaponName: weapon.displayName };
}
return null;
}

// ===== TOAST =====
function showToast(msg, type = 'success', dur = 3000) {
const existing = $('.toast');
    if (existing) existing.remove();
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i><span>${msg}</span>`;
document.body.appendChild(t);
requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('visible')));
setTimeout(() => { t.classList.remove('visible'); setTimeout(() => t.remove(), 400); }, dur);
}

// ===== ERROR STATE =====
function generateErrorHTML(target, errorMsg) {
return `<div class="error-state" data-error-target="${target}"><div class="error-icon"><i class="fas fa-exclamation-triangle"></i></div><h3>Failed to Load ${target === 'weapons' ? 'Weapons' : 'Collections'}</h3><p>We couldn't connect to the VALORANT API. Check your connection and try again.</p><button class="error-retry-btn" data-retry="${target}"><i class="fas fa-redo"></i><span>Retry</span></button>${errorMsg ? `<div class="error-details">${errorMsg}</div>` : ''}</div>`;
}

// ===== SKELETONS =====
function generateWeaponSkeletons(n = 8) {
let h = '';
for (let i = 0; i < n; i++) h += `<div class="skeleton-card weapon-skeleton"><div class="skeleton skeleton-weapon-image"></div><div class="skeleton-info"><div class="skeleton skeleton-title"></div><div class="skeleton skeleton-text-short"></div><div class="skeleton skeleton-badge"></div></div></div>`;
return h;
}
function generateSkinSkeletons(n = 8) {
let h = '';
for (let i = 0; i < n; i++) h += `<div class="skeleton-card skin-skeleton"><div class="skeleton skeleton-skin-image"></div><div class="skeleton-info"><div class="skeleton skeleton-skin-title"></div><div class="skeleton skeleton-skin-tier"></div></div></div>`;
return h;
}

// ===== CURSOR GLOW =====
function initCursorGlow() { const g = $('#cursorGlow'); document.addEventListener('mousemove', (e) => { g.style.left = e.clientX + 'px'; g.style.top = e.clientY + 'px'; }); }

// ===== PARTICLES =====
function initParticles() { const c = $('#heroParticles'); for (let i = 0; i < 40; i++) { const p = document.createElement('div'); p.className = 'particle'; p.style.left = Math.random()*100+'%'; p.style.animationDelay = Math.random()*4+'s'; p.style.animationDuration = (3+Math.random()*3)+'s'; p.style.width = (1+Math.random()*3)+'px'; p.style.height = p.style.width; c.appendChild(p); } }

// ===== 3D TILT =====
function initTiltEffect() {
let active = null, raf = null, mouse = { x: 0, y: 0 }; const MAX = 12, GL = 0.15;
const gc = (t) => t.closest('.weapon-card,.skin-card,.bundle-card');
const eg = (c) => { if (!c.querySelector('.tilt-glare')) { const g = document.createElement('div'); g.className = 'tilt-glare'; c.appendChild(g); } };
function ap(c, mx, my) { const r = c.getBoundingClientRect(); const nx = Math.max(-1, Math.min(1, ((mx-r.left)/r.width)*2-1)); const ny = Math.max(-1, Math.min(1, ((my-r.top)/r.height)*2-1)); c.style.transform = `perspective(800px) rotateX(${-ny*MAX}deg) rotateY(${nx*MAX}deg) scale3d(1.03,1.03,1.03)`; const img = c.querySelector('.weapon-card-image,.skin-card-image,.bundle-image'); if(img) img.style.transform = `translateX(${nx*8}px) translateY(${ny*8}px) scale(1.08)`; const gl = c.querySelector('.tilt-glare'); if(gl){gl.style.background=`radial-gradient(circle at ${((mx-r.left)/r.width)*100}% ${((my-r.top)/r.height)*100}%, rgba(255,255,255,${GL}), transparent 60%)`;gl.style.opacity='1';} }
function rs(c) { c.style.transform='';c.style.transition='transform 0.5s cubic-bezier(0.4,0,0.2,1)'; const img=c.querySelector('.weapon-card-image,.skin-card-image,.bundle-image');if(img){img.style.transform='';img.style.transition='transform 0.5s cubic-bezier(0.4,0,0.2,1)';} const gl=c.querySelector('.tilt-glare');if(gl)gl.style.opacity='0'; setTimeout(()=>{if(c!==active){c.style.transition='';if(img)img.style.transition='';}},500); }
function loop(){if(active)ap(active,mouse.x,mouse.y);raf=requestAnimationFrame(loop);}
document.addEventListener('mousemove',(e)=>{mouse.x=e.clientX;mouse.y=e.clientY;const c=gc(e.target);if(c&&c!==active){if(active)rs(active);active=c;eg(c);c.style.transition='none';const img=c.querySelector('.weapon-card-image,.skin-card-image,.bundle-image');if(img)img.style.transition='none';}else if(!c&&active){rs(active);active=null;}});
document.addEventListener('mouseleave',()=>{if(active){rs(active);active=null;}});
raf=requestAnimationFrame(loop); window.addEventListener('touchstart',()=>cancelAnimationFrame(raf),{once:true});
}

// ===== GLOW BORDER =====
function initGlowBorder() {
let active=null;const gc=(t)=>t.closest('.weapon-card,.skin-card,.bundle-card');
function en(c){if(!c.querySelector('.glow-border')){const b=document.createElement('div');b.className='glow-border';c.insertBefore(b,c.firstChild);const s=document.createElement('div');s.className='glow-border-shadow';c.insertBefore(s,c.firstChild);}}
function on(c){en(c);c.querySelector('.glow-border')?.classList.add('active');c.querySelector('.glow-border-shadow')?.classList.add('active');}
function off(c){c.querySelector('.glow-border')?.classList.remove('active');c.querySelector('.glow-border-shadow')?.classList.remove('active');}
document.addEventListener('mousemove',(e)=>{const c=gc(e.target);if(c&&c!==active){if(active)off(active);active=c;on(c);}else if(!c&&active){off(active);active=null;}});
document.addEventListener('mouseleave',()=>{if(active){off(active);active=null;}});
window.addEventListener('touchstart',()=>{if(active){off(active);active=null;}},{once:true});
}

// ===== VIDEO PLAYER =====
function initVideoPlayer() {
const video=$('#videoElement'),player=$('#videoPlayer'),overlay=$('#videoOverlay'),playBtn=$('#videoPlayBtn'),controls=$('#videoControls'),ctrlPlay=$('#videoCtrlPlay'),progress=$('#videoProgress'),filled=$('#videoProgressFilled'),handle=$('#videoProgressHandle'),timeEl=$('#videoTime'),ctrlMute=$('#videoCtrlMute'),ctrlFs=$('#videoCtrlFullscreen'),loading=$('#videoLoading');
    let isDrag=false,hideT=null;
    function fmt(s){if(isNaN(s))return'0:00';return`${Math.floor(s/60)}:${Math.floor(s%60).toString().padStart(2,'0')}`;}
    function upd(){if(!video.duration)return;const p=(video.currentTime/video.duration)*100;filled.style.width=p+'%';handle.style.left=`calc(${p}% - 6px)`;timeEl.textContent=`${fmt(video.currentTime)} / ${fmt(video.duration)}`;}
    function toggle(){video.paused?video.play():video.pause();}
    function upIcon(){ctrlPlay.innerHTML=`<i class="fas ${video.paused?'fa-play':'fa-pause'}"></i>`;player.classList.toggle('playing',!video.paused);}
    function seek(e){const r=progress.getBoundingClientRect();const cx=e.clientX??e.touches?.[0]?.clientX??0;video.currentTime=Math.max(0,Math.min(1,(cx-r.left)/r.width))*video.duration;upd();}
    function showC(){controls.classList.add('force-show');clearTimeout(hideT);hideT=setTimeout(()=>{if(!video.paused)controls.classList.remove('force-show');},3000);}
    playBtn.addEventListener('click',(e)=>{e.stopPropagation();overlay.classList.add('hidden');video.play();});
    player.addEventListener('click',(e)=>{if(e.target.closest('.video-controls,.video-overlay'))return;if(overlay.classList.contains('hidden')){toggle();showC();}});
    ctrlPlay.addEventListener('click',(e)=>{e.stopPropagation();toggle();showC();});
    ctrlMute.addEventListener('click',(e)=>{e.stopPropagation();video.muted=!video.muted;ctrlMute.innerHTML=`<i class="fas ${video.muted?'fa-volume-mute':'fa-volume-up'}"></i>`;});
    ctrlFs.addEventListener('click',(e)=>{e.stopPropagation();document.fullscreenElement?document.exitFullscreen():(player.requestFullscreen?.()??player.webkitRequestFullscreen?.());});
    progress.addEventListener('mousedown',(e)=>{e.stopPropagation();isDrag=true;progress.classList.add('dragging');seek(e);});
    document.addEventListener('mousemove',(e)=>{if(isDrag)seek(e);});document.addEventListener('mouseup',()=>{if(isDrag){isDrag=false;progress.classList.remove('dragging');}});
    progress.addEventListener('touchstart',(e)=>{isDrag=true;progress.classList.add('dragging');seek(e);},{passive:true});
    document.addEventListener('touchmove',(e)=>{if(isDrag)seek(e);},{passive:true});document.addEventListener('touchend',()=>{if(isDrag){isDrag=false;progress.classList.remove('dragging');}});
    video.addEventListener('timeupdate',upd);video.addEventListener('play',upIcon);video.addEventListener('pause',upIcon);video.addEventListener('ended',()=>{upIcon();controls.classList.add('force-show');});
    video.addEventListener('waiting',()=>loading.classList.add('visible'));video.addEventListener('canplay',()=>loading.classList.remove('visible'));video.addEventListener('loadedmetadata',()=>{upd();loading.classList.remove('visible');});
    player.addEventListener('mousemove',showC);
    player.addEventListener('dblclick',(e)=>{if(e.target.closest('.video-controls'))return;document.fullscreenElement?document.exitFullscreen():(player.requestFullscreen?.()??player.webkitRequestFullscreen?.());});
    player.setAttribute('tabindex','0');
    player.addEventListener('keydown',(e)=>{if(!overlay.classList.contains('hidden'))return;switch(e.key){case' ':case'k':e.preventDefault();toggle();showC();break;case'ArrowRight':e.preventDefault();video.currentTime=Math.min(video.duration,video.currentTime+5);showC();break;case'ArrowLeft':e.preventDefault();video.currentTime=Math.max(0,video.currentTime-5);showC();break;case'm':video.muted=!video.muted;ctrlMute.innerHTML=`<i class="fas ${video.muted?'fa-volume-mute':'fa-volume-up'}"></i>`;break;case'f':document.fullscreenElement?document.exitFullscreen():player.requestFullscreen?.();break;}});
}
function loadVideo(url){const v=$('#videoElement'),s=$('#videoSource'),o=$('#videoOverlay'),l=$('#videoLoading'),c=$('#videoControls'),f=$('#videoProgressFilled'),h=$('#videoProgressHandle'),t=$('#videoTime'),p=$('#videoPlayer');v.pause();o.classList.remove('hidden');l.classList.remove('visible');c.classList.remove('force-show');p.classList.remove('playing');f.style.width='0%';h.style.left='-6px';t.textContent='0:00 / 0:00';s.src=url;v.load();}

// ===== NAVBAR =====
function initNavbar() {
const navbar=$('#navbar'),mBtn=$('#mobileMenuBtn'),mMenu=$('#mobileMenu');
    window.addEventListener('scroll',()=>{navbar.classList.toggle('scrolled',window.scrollY>50);$('#backToTop').classList.toggle('visible',window.scrollY>500);});
mBtn.addEventListener('click',()=>{mBtn.classList.toggle('active');mMenu.classList.toggle('active');});

    $$('.nav-link').forEach(l=>{l.addEventListener('click',(e)=>{e.preventDefault();$$('.nav-link').forEach(x=>x.classList.remove('active'));l.classList.add('active');state.currentFilter=l.dataset.filter;renderWeapons();});});
    $$('.mobile-link').forEach(l=>{l.addEventListener('click',(e)=>{e.preventDefault();$$('.mobile-link').forEach(x=>x.classList.remove('active'));l.classList.add('active');$$('.nav-link').forEach(x=>x.classList.toggle('active',x.dataset.filter===l.dataset.filter));state.currentFilter=l.dataset.filter;mBtn.classList.remove('active');mMenu.classList.remove('active');renderWeapons();});});

    const exec=debounce((v)=>{state.searchQuery=v.toLowerCase().trim();renderWeapons();},250);
    const dI=$('#searchInput'),mI=$('#mobileSearchInput');
    dI.addEventListener('input',(e)=>{const v=e.target.value;mI.value=v;dI.classList.toggle('has-value',v.length>0);exec(v);});
    mI.addEventListener('input',(e)=>{const v=e.target.value;dI.value=v;mI.classList.toggle('has-value',v.length>0);exec(v);});
    const cs=(i,o)=>{i.addEventListener('keydown',(e)=>{if(e.key==='Escape'&&i.value.length>0){e.stopPropagation();i.value='';o.value='';i.classList.remove('has-value');state.searchQuery='';renderWeapons();}});};
    cs(dI,mI);cs(mI,dI);
    $('#backToTop').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

}

function getWeaponCategory(c){if(!c)return'other';const l=c.toLowerCase();if(l.includes('melee'))return'melee';if(l.includes('sidearm')||l.includes('pistol'))return'sidearm';if(l.includes('smg')||l.includes('submachine'))return'smg';if(l.includes('rifle')||l.includes('assault'))return'rifle';if(l.includes('sniper'))return'sniper';if(l.includes('shotgun'))return'shotgun';if(l.includes('heavy')||l.includes('machine'))return'heavy';return'other';}

function createStaggerObserver(sel){let q=[],t=null;const flush=()=>{q.forEach((c,i)=>{const con=document.querySelector(sel);let cols=1;if(con){const s=getComputedStyle(con).getPropertyValue('grid-template-columns');if(s&&s!=='none')cols=s.split(' ').length;}const d=Math.floor(i/cols)*120+(i%cols)*60;c.style.transitionDelay=`${d}ms`;c.classList.add('visible');setTimeout(()=>c.style.transitionDelay='',d+600);});q=[];};return new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){q.push(e.target);e.target&&e.target.parentNode;}});clearTimeout(t);t=setTimeout(flush,50);},{threshold:0.05,rootMargin:'0px 0px -40px 0px'});}

// Fix stagger
function createStaggerObserver(containerSelector){let rq=[],rt=null;const fq=()=>{rq.forEach((card,i)=>{const con=document.querySelector(containerSelector);let cols=1;if(con){const t=getComputedStyle(con).getPropertyValue('grid-template-columns');if(t&&t!=='none')cols=t.split(' ').length;}const d=Math.floor(i/cols)*120+(i%cols)*60;card.style.transitionDelay=`${d}ms`;card.classList.add('visible');setTimeout(()=>card.style.transitionDelay='',d+600);});rq=[];};return new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){rq.push(e.target);e.target.closest&&0;/_unobserve handled below_/}});clearTimeout(rt);rt=setTimeout(fq,50);},{threshold:0.05,rootMargin:'0px 0px -40px 0px'});}

// ===== RETRY =====
function initRetryHandlers(){document.addEventListener('click',async(e)=>{const btn=e.target.closest('.error-retry-btn');if(!btn)return;const target=btn.dataset.retry;btn.classList.add('loading');btn.querySelector('i').className='fas fa-spinner';btn.querySelector('span').textContent='Retrying...';try{if(target==='weapons'||target==='all'){const w=await fetchData('/weapons');state.weapons=w||[];let sc=0;state.weapons.forEach(w=>{if(w.skins)sc+=w.skins.filter(s=>s.displayIcon&&!s.displayName.toLowerCase().includes('standard')&&!s.displayName.toLowerCase().includes('random')).length;});state.allSkins=sc;animateNumber($('#totalSkins'),sc);animateNumber($('#totalWeapons'),state.weapons.length);setHeroFeatured();renderWeapons();}if(target==='bundles'||target==='all'){const b=await fetchData('/bundles');state.bundles=(b||[]).filter(b=>b.displayIcon);animateNumber($('#totalBundles'),state.bundles.length);renderBundles();}state.loadError=null;showToast('Data loaded successfully!','success');}catch(err){console.error('Retry failed:',err);btn.classList.remove('loading');btn.querySelector('i').className='fas fa-redo';btn.querySelector('span').textContent='Retry';showToast('Retry failed — please try again','error');}});}

// ===== LOAD DATA =====
async function loadData(){let wErr=null,bErr=null;try{state.weapons=await fetchData('/weapons')||[];}catch(e){console.error('Failed:',e);wErr=e.message;state.weapons=[];}try{state.bundles=(await fetchData('/bundles')||[]).filter(b=>b.displayIcon);}catch(e){console.error('Failed:',e);bErr=e.message;state.bundles=[];}
let sc=0;state.weapons.forEach(w=>{if(w.skins)sc+=w.skins.filter(s=>s.displayIcon&&!s.displayName.toLowerCase().includes('standard')&&!s.displayName.toLowerCase().includes('random')).length;});state.allSkins=sc;
setTimeout(()=>$('#loader').classList.add('hidden'),2000);
setTimeout(()=>{animateNumber($('#totalSkins'),sc);animateNumber($('#totalWeapons'),state.weapons.length);animateNumber($('#totalBundles'),state.bundles.length);},2200);
if(wErr&&bErr){state.loadError='all';$('#bundlesCarousel').innerHTML=generateErrorHTML('bundles',bErr);$('#weaponsGrid').innerHTML=generateErrorHTML('weapons',wErr);}else{bErr?$('#bundlesCarousel').innerHTML=generateErrorHTML('bundles',bErr):renderBundles();if(wErr){$('#weaponsGrid').innerHTML=generateErrorHTML('weapons',wErr);}else{setHeroFeatured();renderWeapons();}}
updateFavoriteCounts();}

function setHeroFeatured(){const c=$('#heroFeatured');const w=state.weapons.find(w=>w.displayName==='Vandal')||state.weapons[5];if(w?.skins){const s=w.skins.find(s=>s.displayIcon&&!s.displayName.toLowerCase().includes('standard'));if(s?.displayIcon)c.innerHTML=`<img src="${s.displayIcon}" alt="${s.displayName}">`;}}

function renderBundles(){const c=$('#bundlesCarousel');const f=state.bundles.slice(0,8);if(!f.length){c.innerHTML=generateErrorHTML('bundles','No bundle data');return;}c.innerHTML=f.map((b,i)=>`<div class="bundle-card" style="animation:fadeInUp 0.5s ease ${i*0.1}s forwards;opacity:0;"><img src="${b.displayIcon}" alt="${b.displayName}" class="bundle-image" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 180%22><rect fill=%22%2316161f%22 width=%22300%22 height=%22180%22/><text x=%22150%22 y=%2295%22 fill=%22%234a4a5e%22 text-anchor=%22middle%22 font-size=%2214%22>No Image</text></svg>'"><div class="bundle-info"><h3 class="bundle-name">${b.displayName}</h3><div class="bundle-meta"><i class="fas fa-layer-group"></i><span>Collection Bundle</span></div></div></div>`).join('');}

function renderWeapons(){
const container=$('#weaponsGrid');

    // Favorites filter — show individual skins, not weapons
    if(state.currentFilter==='favorites'){
        renderFavorites(container);
        return;
    }

    let weapons=[...state.weapons];
    if(!weapons.length&&!state.loadError){container.innerHTML=generateWeaponSkeletons(8);return;}
    if(!weapons.length&&state.loadError){if(!container.querySelector('.error-state'))container.innerHTML=generateErrorHTML('weapons','No weapon data');return;}

    if(state.currentFilter!=='all')weapons=weapons.filter(w=>{const cat=w.shopData?.categoryText||w.category?.replace('EEquippableCategory::','')||'';return getWeaponCategory(cat)===state.currentFilter;});
    if(state.searchQuery)weapons=weapons.filter(w=>w.displayName.toLowerCase().includes(state.searchQuery)||w.skins?.some(s=>s.displayName.toLowerCase().includes(state.searchQuery)));
    if(!weapons.length){container.innerHTML=`<div class="no-results"><i class="fas fa-search"></i><h3>No weapons found</h3><p>Try a different search or filter</p></div>`;return;}

    container.innerHTML=weapons.map(w=>{const sc=w.skins?w.skins.filter(s=>s.displayIcon&&!s.displayName.toLowerCase().includes('standard')&&!s.displayName.toLowerCase().includes('random')).length:0;const cat=w.shopData?.categoryText||w.category?.replace('EEquippableCategory::','')||'Weapon';const img=w.displayIcon||w.killStreamIcon||'';return`<div class="weapon-card" data-weapon-id="${w.uuid}"><img src="${img}" alt="${w.displayName}" class="weapon-card-image" loading="lazy" onerror="this.style.display='none'"><div class="weapon-card-info"><h3 class="weapon-card-name">${w.displayName}</h3><p class="weapon-card-category">${cat}</p><div class="weapon-card-count"><i class="fas fa-paint-brush"></i>${sc} skins</div></div></div>`;}).join('');

    const obs=createStaggerObserver('#weaponsGrid');
    $$('.weapon-card').forEach(card=>{obs.observe(card);card.addEventListener('click',()=>{const w=state.weapons.find(w=>w.uuid===card.dataset.weaponId);if(w)openWeaponModal(w);});});

}

// ===== RENDER FAVORITES =====
function renderFavorites(container) {
if (state.favorites.length === 0) {
container.innerHTML = `             <div class="favorites-empty">
                <i class="far fa-heart"></i>
                <h3>No Favorites Yet</h3>
                <p>Click the heart icon on any skin to add it to your favorites collection. Your picks are saved locally.</p>
            </div>
        `;
return;
}

    // Gather favorite skins
    const favSkins = [];
    for (const uuid of state.favorites) {
        const result = findSkinByUuid(uuid);
        if (result) favSkins.push(result);
    }

    if (favSkins.length === 0) {
        container.innerHTML = `
            <div class="favorites-empty">
                <i class="far fa-heart"></i>
                <h3>No Favorites Yet</h3>
                <p>Your favorited skins will appear here once weapon data loads.</p>
            </div>
        `;
        return;
    }

    // Filter by search
    let filtered = favSkins;
    if (state.searchQuery) {
        filtered = favSkins.filter(f =>
            f.skin.displayName.toLowerCase().includes(state.searchQuery) ||
            f.weaponName.toLowerCase().includes(state.searchQuery)
        );
    }

    if (filtered.length === 0) {
        container.innerHTML = `<div class="no-results"><i class="fas fa-search"></i><h3>No matching favorites</h3><p>Try a different search term</p></div>`;
        return;
    }

    container.innerHTML = filtered.map(({ skin, weaponName }) => {
        const tier = skin.contentTierUuid ? getTierInfo(skin.contentTierUuid) : null;
        const img = skin.displayIcon || '';
        return `
            <div class="weapon-card is-favorite" data-fav-click-skin="${skin.uuid}" data-fav-click-weapon="${weaponName}">
                ${createFavoriteButton(skin.uuid)}
                <img src="${img}" alt="${skin.displayName}" class="weapon-card-image" loading="lazy" onerror="this.style.display='none'">
                <div class="weapon-card-info">
                    <h3 class="weapon-card-name">${skin.displayName}</h3>
                    <p class="weapon-card-category">${weaponName}</p>
                    ${tier ? `<div class="weapon-card-count"><img src="${tier.icon}" class="tier-icon" alt="" style="width:14px;height:14px;margin-right:2px">${tier.name}</div>` : ''}
                </div>
            </div>
        `;
    }).join('');

    // Stagger animation
    const obs = createStaggerObserver('#weaponsGrid');
    $$('.weapon-card').forEach(card => {
        obs.observe(card);
        card.addEventListener('click', (e) => {
            if (e.target.closest('.favorite-btn')) return;
            const skinUuid = card.dataset.favClickSkin;
            const weaponName = card.dataset.favClickWeapon;
            if (skinUuid) {
                const result = findSkinByUuid(skinUuid);
                if (result) openSkinModal(result.skin, result.weaponName);
            }
        });
    });

}

// ===== WEAPON MODAL =====
function openWeaponModal(weapon){
const overlay=$('#weaponModalOverlay');$('#weaponModalImage').src=weapon.displayIcon||weapon.killStreamIcon||'';$('#weaponModalTitle').textContent=weapon.displayName;
    const grid=$('#weaponSkinsGrid');const skins=(weapon.skins||[]).filter(s=>s.displayIcon&&!s.displayName.toLowerCase().includes('random'));
grid.innerHTML=generateSkinSkeletons(skins.length||6);overlay.classList.add('active');document.body.style.overflow='hidden';
setTimeout(()=>{grid.innerHTML=skins.map(skin=>{const tier=skin.contentTierUuid?getTierInfo(skin.contentTierUuid):null;return`<div class="skin-card" data-skin-id="${skin.uuid}">${createFavoriteButton(skin.uuid)}<img src="${skin.displayIcon}" alt="${skin.displayName}" class="skin-card-image" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 80%22><rect fill=%22%2316161f%22 width=%22200%22 height=%2280%22/><text x=%22100%22 y=%2245%22 fill=%22%234a4a5e%22 text-anchor=%22middle%22 font-size=%2212%22>No Preview</text></svg>'"><p class="skin-card-name">${skin.displayName}</p>${tier?`<div class="skin-card-tier"><img src="${tier.icon}" class="tier-icon" alt=""><span>${tier.name}</span></div>`:''}</div>`;}).join('');
grid.querySelectorAll('.skin-card').forEach((card,i)=>{card.classList.add('skin-card-hidden');const t=getComputedStyle(grid).getPropertyValue('grid-template-columns');let cols=1;if(t&&t!=='none')cols=t.split(' ').length;const d=Math.floor(i/cols)*100+(i%cols)*50;setTimeout(()=>{card.classList.remove('skin-card-hidden');card.classList.add('skin-card-visible');},50+d);card.addEventListener('click',(e)=>{if(e.target.closest('.favorite-btn'))return;const s=skins.find(s=>s.uuid===card.dataset.skinId);if(s){closeWeaponModal();setTimeout(()=>openSkinModal(s,weapon.displayName),300);}});});},300);
}

function closeWeaponModal(){$('#weaponModalOverlay').classList.remove('active');document.body.style.overflow='';}

function getTierInfo(uuid){const t={'12683d76-48d7-84a3-4e09-6985571f8f36':{name:'Select',icon:'https://media.valorant-api.com/contenttiers/12683d76-48d7-84a3-4e09-6985571f8f36/displayicon.png'},'0cebb8be-46d7-c12a-d306-e9907bfc5a25':{name:'Deluxe',icon:'https://media.valorant-api.com/contenttiers/0cebb8be-46d7-c12a-d306-e9907bfc5a25/displayicon.png'},'60bca009-4182-7998-dee7-b8a2558dc369':{name:'Premium',icon:'https://media.valorant-api.com/contenttiers/60bca009-4182-7998-dee7-b8a2558dc369/displayicon.png'},'e046854e-406c-37f4-6607-19a9ba8426fc':{name:'Ultra',icon:'https://media.valorant-api.com/contenttiers/e046854e-406c-37f4-6607-19a9ba8426fc/displayicon.png'},'411e4a55-4e59-7757-41f0-86a53f101bb5':{name:'Exclusive',icon:'https://media.valorant-api.com/contenttiers/411e4a55-4e59-7757-41f0-86a53f101bb5/displayicon.png'}};return t[uuid]||null;}

// ===== SKIN DETAIL MODAL =====
function openSkinModal(skin, weaponName) {
const overlay = $('#modalOverlay');
$('#modalImage').src = skin.displayIcon || '';
$('#modalTitle').textContent = skin.displayName;
$('#modalWeapon').textContent = weaponName;

    // Modal favorite button
    const modalFavBtn = $('#modalFavoriteBtn');
    const fav = isFavorite(skin.uuid);
    modalFavBtn.dataset.favSkin = skin.uuid;
    modalFavBtn.classList.toggle('active', fav);
    modalFavBtn.querySelector('i').className = fav ? 'fas fa-heart' : 'far fa-heart';
    modalFavBtn.querySelector('span').textContent = fav ? 'Remove from Favorites' : 'Add to Favorites';

    // Video
    const videoSection = $('#modalVideoSection');
    const tabsContainer = $('#videoLevelTabs');
    const lvlVid = (skin.levels || []).filter(l => l.streamedVideo);
    if (lvlVid.length > 0) {
        videoSection.style.display = 'block';
        tabsContainer.innerHTML = lvlVid.map((l, i) => { const li = skin.levels.indexOf(l); const type = l.levelItem ? l.levelItem.replace('EEquippableSkinLevelItem::', '').replace(/([A-Z])/g, ' $1').trim() : ''; return `<button class="video-level-tab ${i === 0 ? 'active' : ''}" data-video-url="${l.streamedVideo}"><span class="tab-level-num">${li + 1}</span><span>${type || l.displayName || `Level ${li + 1}`}</span></button>`; }).join('');
        loadVideo(lvlVid[0].streamedVideo);
        tabsContainer.querySelectorAll('.video-level-tab').forEach(tab => { tab.addEventListener('click', () => { tabsContainer.querySelectorAll('.video-level-tab').forEach(t => t.classList.remove('active')); tab.classList.add('active'); loadVideo(tab.dataset.videoUrl); }); });
    } else { videoSection.style.display = 'none'; }

    // Chromas
    const chromasC = $('#modalChromas'), chromasG = $('#chromasGrid');
    if (skin.chromas && skin.chromas.length > 1) {
        chromasC.style.display = 'block';
        chromasG.innerHTML = skin.chromas.map((ch, i) => { const img = ch.displayIcon || ch.fullRender || skin.displayIcon || ''; const sw = ch.swatch ? `background-image:url(${ch.swatch})` : ''; return `<div class="chroma-item ${i === 0 ? 'active' : ''}" data-img="${img}">${ch.swatch ? `<div class="chroma-swatch" style="${sw};background-size:cover"></div>` : ''}<img src="${img}" alt="${ch.displayName}" loading="lazy" onerror="this.style.display='none'"><span>${ch.displayName.replace(skin.displayName, '').trim() || 'Default'}</span></div>`; }).join('');
        chromasG.querySelectorAll('.chroma-item').forEach(item => { item.addEventListener('click', () => { chromasG.querySelectorAll('.chroma-item').forEach(c => c.classList.remove('active')); item.classList.add('active'); const ni = item.dataset.img; if (ni) { const mi = $('#modalImage'); mi.style.opacity = '0'; mi.style.transform = 'scale(0.9)'; setTimeout(() => { mi.src = ni; mi.style.opacity = '1'; mi.style.transform = 'scale(1)'; }, 200); } }); });
    } else { chromasC.style.display = 'none'; }

    // Levels
    const levelsC = $('#modalLevels'), levelsL = $('#levelsList');
    if (skin.levels && skin.levels.length > 1) {
        levelsC.style.display = 'block';
        levelsL.innerHTML = skin.levels.map((l, i) => { const type = l.levelItem ? l.levelItem.replace('EEquippableSkinLevelItem::', '').replace(/([A-Z])/g, ' $1').trim() : ''; const hv = !!l.streamedVideo; return `<div class="level-item ${hv ? 'has-video' : ''}" ${hv ? `data-video="${l.streamedVideo}"` : ''}><div class="level-number">${i + 1}</div><div class="level-info"><div class="level-name">${l.displayName || `Level ${i + 1}`}</div>${type ? `<div class="level-type">${type}</div>` : ''}</div>${hv ? '<div class="level-video"><i class="fas fa-play-circle"></i></div>' : ''}</div>`; }).join('');
        levelsL.querySelectorAll('.level-item[data-video]').forEach(item => { item.addEventListener('click', () => { const url = item.dataset.video; tabsContainer.querySelectorAll('.video-level-tab').forEach(t => t.classList.toggle('active', t.dataset.videoUrl === url)); loadVideo(url); videoSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }); });
    } else { levelsC.style.display = 'none'; }

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    $('#modalImage').style.transition = 'opacity 0.3s ease, transform 0.3s ease';

}

function closeSkinModal() { $('#modalOverlay').classList.remove('active'); document.body.style.overflow = ''; const v = $('#videoElement'); if (v) { v.pause(); v.currentTime = 0; } }

function initModals() {
$('#modalClose').addEventListener('click', closeSkinModal);
$('#modalOverlay').addEventListener('click', (e) => { if (e.target === $('#modalOverlay')) closeSkinModal(); });
$('#weaponModalClose').addEventListener('click', closeWeaponModal);
$('#weaponModalOverlay').addEventListener('click', (e) => { if (e.target === $('#weaponModalOverlay')) closeWeaponModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeSkinModal(); closeWeaponModal(); } });
}

function initSmoothScroll() { $$('a[href^="#"]').forEach(a => { a.addEventListener('click', function (e) { const h = this.getAttribute('href'); if (h === '#') return; const t = document.querySelector(h); if (t) { e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' }); } }); }); }

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
initCursorGlow();
initParticles();
initTiltEffect();
initGlowBorder();
initVideoPlayer();
initNavbar();
initModals();
initSmoothScroll();
initRetryHandlers();
initFavoriteHandlers();
loadData();
});
</file>

</files>
