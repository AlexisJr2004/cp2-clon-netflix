const API = {
  baseURL: 'https://picsum.photos',
  getPoster(seed) {
    return `${this.baseURL}/seed/${seed}/300/450`
  },
  getBackdrop(seed) {
    return `${this.baseURL}/seed/${seed}/1280/720`
  }
}
 
const categories = [
  {
    title: 'Tendencias',
    items: [
      { title: 'Stranger Things', year: 2022, rating: '16+', seasons: 4, seed: 'stranger' },
      { title: 'The Crown', year: 2023, rating: '13+', seasons: 6, seed: 'crown' },
      { title: 'Squid Game', year: 2021, rating: '18+', seasons: 1, seed: 'squid' },
      { title: 'Wednesday', year: 2022, rating: '13+', seasons: 1, seed: 'wednesday' },
      { title: 'Money Heist', year: 2021, rating: '16+', seasons: 5, seed: 'heist' },
      { title: 'Bridgerton', year: 2023, rating: '16+', seasons: 3, seed: 'bridgerton' },
      { title: 'The Witcher', year: 2023, rating: '18+', seasons: 3, seed: 'witcher' },
      { title: 'Dark', year: 2020, rating: '16+', seasons: 3, seed: 'dark' }
    ]
  },
  {
    title: 'Nuevos Lanzamientos',
    items: [
      { title: 'The Last of Us', year: 2023, rating: '18+', seasons: 1, seed: 'lastofus' },
      { title: 'One Piece', year: 2023, rating: '13+', seasons: 1, seed: 'onepiece' },
      { title: 'Fallout', year: 2024, rating: '18+', seasons: 1, seed: 'fallout' },
      { title: '3 Body Problem', year: 2024, rating: '16+', seasons: 1, seed: '3body' },
      { title: 'The Gentlemen', year: 2024, rating: '18+', seasons: 1, seed: 'gentlemen' },
      { title: 'Baby Reindeer', year: 2024, rating: '18+', seasons: 1, seed: 'reindeer' },
      { title: 'Ripley', year: 2024, rating: '16+', seasons: 1, seed: 'ripley' },
      { title: 'Avatar TLA', year: 2024, rating: '13+', seasons: 1, seed: 'avatar' }
    ]
  },
  {
    title: 'Mi Lista',
    items: [
      { title: 'Breaking Bad', year: 2013, rating: '18+', seasons: 5, seed: 'breaking' },
      { title: 'Better Call Saul', year: 2022, rating: '16+', seasons: 6, seed: 'saul' },
      { title: 'Narcos', year: 2017, rating: '18+', seasons: 3, seed: 'narcos' },
      { title: 'Ozark', year: 2022, rating: '16+', seasons: 4, seed: 'ozark' },
      { title: 'Peaky Blinders', year: 2022, rating: '18+', seasons: 6, seed: 'peaky' },
      { title: 'The Office', year: 2013, rating: '13+', seasons: 9, seed: 'office' },
      { title: 'Friends', year: 2004, rating: '13+', seasons: 10, seed: 'friends' },
      { title: 'Black Mirror', year: 2023, rating: '18+', seasons: 6, seed: 'mirror' }
    ]
  },
  {
    title: 'Solo en Netflix',
    items: [
      { title: 'The Sandman', year: 2022, rating: '16+', seasons: 1, seed: 'sandman' },
      { title: 'Sex Education', year: 2023, rating: '18+', seasons: 4, seed: 'sexed' },
      { title: 'Heartstopper', year: 2023, rating: '13+', seasons: 2, seed: 'heart' },
      { title: 'Lupin', year: 2023, rating: '13+', seasons: 3, seed: 'lupin' },
      { title: 'Alice in Borderland', year: 2022, rating: '18+', seasons: 2, seed: 'alice' },
      { title: 'Cobra Kai', year: 2024, rating: '13+', seasons: 6, seed: 'cobra' },
      { title: 'The Umbrella Acad.', year: 2024, rating: '16+', seasons: 4, seed: 'umbrella' },
      { title: 'Lucifer', year: 2021, rating: '16+', seasons: 6, seed: 'lucifer' }
    ]
  },
  {
    title: 'Películas Populares',
    items: [
      { title: 'The Gray Man', year: 2022, rating: '13+', type: 'Película', seed: 'grayman' },
      { title: 'Red Notice', year: 2021, rating: '13+', type: 'Película', seed: 'notice' },
      { title: "Don't Look Up", year: 2021, rating: '16+', type: 'Película', seed: 'lookup' },
      { title: 'The Irishman', year: 2019, rating: '18+', type: 'Película', seed: 'irish' },
      { title: 'Extraction 2', year: 2023, rating: '18+', type: 'Película', seed: 'extract' },
      { title: 'The Platform', year: 2019, rating: '18+', type: 'Película', seed: 'platform' },
      { title: 'Bird Box', year: 2018, rating: '16+', type: 'Película', seed: 'birdbox' },
      { title: 'Project Power', year: 2020, rating: '13+', type: 'Película', seed: 'power' }
    ]
  }
]

const featured = {
  title: 'Stranger Things',
  subtitle: 'SERIE',
  description: 'Cuando un niño desaparece, sus amigos, familia y la policía se ven envueltos en eventos misteriosos con experimentos secretos, fuerzas sobrenaturales y un aterrador mundo al revés que amenaza todo lo que conocen.',
  backdropUrl: 'https://nacionllanera.com/wp-content/uploads/2025/12/stranger.jpg',
  seed: 'hero-stranger',
  rating: '16+',
  releaseDate: '27 DE MAYO',
  season: 'TEMPORADA 5',
  stars: 5,
  episodes: [
    { title: 'Cap. 1 - Bienvenidos a California', seed: 'ep-st1' },
    { title: 'Cap. 2 - Vecino de al lado', seed: 'ep-st2' },
    { title: 'Cap. 3 - El monstruo y la superheroína', seed: 'ep-st3' },
    { title: 'Cap. 4 - Dear Billy', seed: 'ep-st4' }
  ]
}

function renderFeatured() {
  const container = document.getElementById('featured-content')
  if (!container) return

  const stars = Array(featured.stars)
    .fill('<i class="fas fa-star" style="color:#f5c518;font-size:1rem"></i>')
    .join('')

  container.innerHTML = `
    <div class="relative w-full h-full">
      <!-- Background image -->
      <img src="${featured.backdropUrl || API.getBackdrop(featured.seed)}" alt="${featured.title}"
           class="w-full h-full object-cover" />

      <!-- Gradient overlays -->
      <div class="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-[#141414]/80 via-[#141414]/20 to-transparent"></div>

      <!-- View toggle (top-right) -->
      <div class="absolute right-8 flex" style="top:150px;z-index:10">
        <button class="bg-black/70 border border-white/60 text-white px-4 py-2 rounded-l hover:bg-white/20 transition">
          <i class="fas fa-bars"></i>
        </button>
        <button class="bg-white/30 border border-white/60 text-white px-4 py-2 rounded-r hover:bg-white/40 transition">
          <i class="fas fa-th"></i>
        </button>
      </div>

      <!-- Volume + Rating (right side) -->
      <div class="absolute right-8 flex items-center gap-3 px-4 py-2 rounded-lg"
           style="bottom:200px;background:rgba(0,0,0,0.55)">
        <button class="action-btn" style="width:2rem;height:2rem">
          <i class="fas fa-volume-up text-sm"></i>
        </button>
        <div style="width:1px;height:20px;background:rgba(255,255,255,0.4)"></div>
        <span class="text-white font-bold text-sm">${featured.rating}</span>
      </div>

      <!-- Content (bottom-left) -->
      <div class="absolute bottom-16 left-8" style="max-width:560px">

        <!-- N + SERIE badge -->
        <div class="flex items-center gap-2 mb-3">
          <span class="text-[#e50914] font-black italic leading-none" style="font-size:2rem">N</span>
          <span class="text-white font-semibold tracking-[0.3em] text-xs mt-1">S E R I E</span>
        </div>

        <!-- Title -->
        <div class="mb-3">
          <h1 class="cursive-title text-white drop-shadow-2xl leading-none" style="font-size:clamp(2.5rem,5vw,3.8rem)">${featured.title}</h1>
        </div>

        <!-- TOP 10 + date + season + stars -->
        <div class="flex items-center gap-4 mb-4 flex-wrap">
          <div class="bg-[#e50914] text-white font-black text-center px-2.5 py-0.5 leading-tight" style="min-width:40px">
            <div style="font-size:9px">TOP</div>
            <div style="font-size:14px">10</div>
          </div>
          <span class="text-white font-bold tracking-widest text-sm">${featured.releaseDate}</span>
          <span class="text-white font-bold tracking-widest text-sm">${featured.season}</span>
          <div class="flex items-center gap-0.5">${stars}</div>
        </div>

        <!-- Description -->
        <p class="text-gray-200 leading-relaxed mb-5" style="font-size:0.88rem">${featured.description}</p>

        <!-- Buttons + action icons -->
        <div class="flex items-center gap-3 flex-wrap">
          <button class="flex items-center gap-2 bg-white hover:bg-gray-100 text-black font-bold px-7 py-2.5 rounded-full transition text-sm shadow-lg">
            <i class="fas fa-play text-xs"></i> Reproducir
          </button>
          <button class="flex items-center gap-2 text-white font-semibold px-6 py-2.5 rounded-full border border-white/35 transition text-sm hover:bg-white/15"
                  style="background:rgba(255,255,255,0.15)">
            <i class="fas fa-info-circle text-xs"></i> Más información
          </button>
          <!-- Action icons -->
          <div class="flex items-center gap-2 ml-1">
            <button class="action-btn" title="Me gusta"><i class="fas fa-thumbs-up text-sm"></i></button>
            <button class="action-btn" title="No me gusta"><i class="fas fa-thumbs-down text-sm"></i></button>
            <button class="action-btn" title="Comentar"><i class="fas fa-comment text-sm"></i></button>
            <button class="action-btn" title="Mi lista"><i class="fas fa-bookmark text-sm"></i></button>
            <button class="action-btn" title="Compartir"><i class="fas fa-share-alt text-sm"></i></button>
          </div>
        </div>
      </div>
    </div>
  `
}

function renderEpisodes() {
  const container = document.getElementById('episodes-section')
  if (!container || !featured.episodes || !featured.episodes.length) return

  container.innerHTML = `
    <h2 class="text-white text-xl font-semibold mb-4">Episodios</h2>
    <div class="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
      ${featured.episodes.map(ep => `
        <div class="flex-shrink-0 cursor-pointer group" style="width:160px">
          <div class="relative overflow-hidden rounded" style="height:220px">
            <img src="${API.getPoster(ep.seed)}" alt="${ep.title}"
                 class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition"></div>
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <div class="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center"
                   style="background:rgba(0,0,0,0.45)">
                <i class="fas fa-play text-white ml-1"></i>
              </div>
            </div>
          </div>
          <p class="text-gray-400 text-xs mt-2 truncate leading-snug">${ep.title}</p>
        </div>
      `).join('')}
    </div>
  `
}

function renderCategoryRow(category, index) {
  const container = document.getElementById('rows-container')
  const section = document.createElement('section')
  section.className = 'mb-2'
  section.innerHTML = `
    <div class="px-12 mb-2">
      <h2 class="text-white text-xl font-semibold">${category.title}</h2>
    </div>
    <div class="relative group">
      <button onclick="scrollRow(${index}, -1)"
              class="absolute left-0 top-0 bottom-0 z-10 w-12 opacity-0 group-hover:opacity-100 transition bg-black/40 hover:bg-black/60 flex items-center justify-center text-white text-2xl">
        <i class="fas fa-chevron-left"></i>
      </button>
      <div id="row-${index}" class="flex gap-1 overflow-x-auto px-12 scroll-smooth scrollbar-hide py-1">
        ${category.items.map(item => `
          <div class="flex-shrink-0 w-44 transition-transform duration-300 hover:scale-110 hover:z-20 relative group/card cursor-pointer">
            <div class="relative">
              <img src="${API.getPoster(item.seed)}" alt="${item.title}"
                   class="w-full h-64 object-cover rounded-sm" loading="lazy" />
              <div class="absolute inset-0 bg-black/0 group-hover/card:bg-black/20 transition"></div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition">
              <h3 class="text-white text-sm font-medium truncate">${item.title}</h3>
              <div class="flex items-center gap-2 text-xs text-gray-300 mt-1">
                <span>${item.year}</span>
                <span class="border border-gray-500 px-1">${item.rating}</span>
                <span>${item.seasons ? item.seasons + ' Temp' : (item.type || '')}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      <button onclick="scrollRow(${index}, 1)"
              class="absolute right-0 top-0 bottom-0 z-10 w-12 opacity-0 group-hover:opacity-100 transition bg-black/40 hover:bg-black/60 flex items-center justify-center text-white text-2xl">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  `
  container.appendChild(section)
}

function scrollRow(index, direction) {
  const row = document.getElementById(`row-${index}`)
  if (!row) return
  row.scrollBy({ left: direction * row.clientWidth * 0.75, behavior: 'smooth' })
}

function renderAllRows() {
  const container = document.getElementById('rows-container')
  container.innerHTML = ''
  categories.forEach((cat, i) => renderCategoryRow(cat, i))
}

function initNavScroll() {
  const header = document.getElementById('main-header')
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      header.classList.remove('bg-gradient-to-b', 'from-black/80', 'to-transparent')
      header.classList.add('bg-black')
    } else {
      header.classList.remove('bg-black')
      header.classList.add('bg-gradient-to-b', 'from-black/80', 'to-transparent')
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  renderFeatured()
  renderEpisodes()
  renderAllRows()
  initNavScroll()
})
