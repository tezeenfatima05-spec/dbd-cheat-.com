(() => {
  const grid = document.getElementById('blog-grid');
  const emptyEl = document.getElementById('blog-empty');
  const sortRoot = document.getElementById('blog-sort-select');
  const searchInput = document.getElementById('blog-search');
  if (!grid) return;

  const filters = [...document.querySelectorAll('[data-blog-filter]')];
  const allCards = () => [...document.querySelectorAll('[data-blog-card]')];
  const gridCards = () => [...grid.querySelectorAll('[data-blog-card]')];
  const activeTag = () =>
    document.querySelector('[data-blog-filter][aria-pressed="true"]')?.getAttribute('data-blog-filter') || 'all';
  const getSortRoot = () => sortRoot?.querySelector('[data-sw-select]');
  const getSort = () =>
    getSortRoot()?.getAttribute('data-value') ||
    sortRoot?.querySelector('[data-sw-select-input]')?.value ||
    'newest';

  if (searchInput) {
    searchInput.value = new URLSearchParams(window.location.search).get('q') || '';
  }

  const compareCards = (a, b, sort) => {
    const number = (card, key) => Number(card.getAttribute(key) || 0);
    const title = (card) => (card.getAttribute('data-title') || '').toLocaleLowerCase();
    if (sort === 'oldest') return number(a, 'data-ts') - number(b, 'data-ts');
    if (sort === 'short') return number(a, 'data-read-minutes') - number(b, 'data-read-minutes');
    if (sort === 'long') return number(b, 'data-read-minutes') - number(a, 'data-read-minutes');
    if (sort === 'az') return title(a).localeCompare(title(b));
    if (sort === 'za') return title(b).localeCompare(title(a));
    return number(b, 'data-ts') - number(a, 'data-ts');
  };

  const apply = () => {
    const tag = activeTag();
    const query = (searchInput?.value || '').trim().toLocaleLowerCase();
    gridCards().sort((a, b) => compareCards(a, b, getSort())).forEach((card) => grid.appendChild(card));
    let visible = 0;
    allCards().forEach((card) => {
      const text = `${card.getAttribute('data-title') || ''} ${card.getAttribute('data-desc') || ''} ${card.getAttribute('data-tag') || ''}`.toLocaleLowerCase();
      const matches = (tag === 'all' || card.getAttribute('data-tag') === tag) && (!query || text.includes(query));
      card.classList.toggle('hidden', !matches);
      if (matches) visible += 1;
    });
    if (emptyEl) {
      emptyEl.classList.toggle('hidden', visible > 0);
      emptyEl.textContent = 'No posts in this filter.';
    }
  };

  filters.forEach((button) => button.addEventListener('click', () => {
    filters.forEach((item) => item.setAttribute('aria-pressed', 'false'));
    button.setAttribute('aria-pressed', 'true');
    apply();
  }));

  searchInput?.addEventListener('input', () => {
    const params = new URLSearchParams(window.location.search);
    const query = searchInput.value.trim();
    if (query) params.set('q', query); else params.delete('q');
    window.history.replaceState(null, '', `${window.location.pathname}${params.size ? `?${params}` : ''}${window.location.hash}`);
    apply();
  });

  const onSortChange = (event) => {
    const root = getSortRoot();
    if (root && (event.target === root || root.contains(event.target))) apply();
  };
  document.addEventListener('starwind:value-change', onSortChange);
  sortRoot?.addEventListener('change', onSortChange);
  requestAnimationFrame(apply);
})();
