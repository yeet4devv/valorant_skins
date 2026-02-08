# V ARSENAL — VALORANT Skin Showcase

Fan-made bir **VALORANT skin arşivi** web uygulaması.  
VALORANT API üzerinden silahları, skinleri ve koleksiyonları (bundles) dinamik olarak listeler; skin detaylarında **chromas**, **levels** ve varsa **video preview** gösterir.

> Disclaimer: This is a fan-made project. VALORANT is a registered trademark of Riot Games. All skin images and data are property of Riot Games.

## Features

- Silahları kategoriye göre filtreleme (Melee, Sidearm, SMG, Rifle, Sniper, Shotgun, Heavy)
- Arama (weapon veya skin isimleri içinde)
- Featured “Popular Collections” (bundles) bölümü
- Silaha tıklayınca skin listesini modalda görüntüleme
- Skin detay modalı:
  - Favorites (localStorage)
  - Chromas
  - Levels
  - Streamed video preview (varsa)
- Skeleton loading, error state ve retry akışı
- Responsive tasarım + reduced motion desteği

## Tech Stack

- HTML / CSS / JavaScript (Vanilla)
- Data Source: https://valorant-api.com

## Project Structure

```txt
valorant_skins/
├─ index.html
├─ css/
│  └─ style.css
└─ js/
   └─ app.js
```
