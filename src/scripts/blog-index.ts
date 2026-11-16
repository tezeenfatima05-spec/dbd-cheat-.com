/** Blog index search (?q=), topic filters, and sort. */
export function initBlogIndexFilters(emptyMessage: string) {
  const grid = document.getElementById('blog-grid');
  const emptyEl = document.getElementById('blog-empty');
  const sortRoot = document.getElementById('blog-sort-select');
  const searchInput = document.getElementById('blog-search') as HTMLInputElement | null;
  if (!grid) return;

  const filters = document.querySelectorAll<HTMLElement>('[data-blog-filter]');
  const allCards = () => [...document.querySelectorAll<HTMLElement>('[data-blog-card]')];
  const gridCards = () => [...grid.querySelectorAll<HTMLElement>('[data-blog-card]')];

  if (searchInput) {
    const initial = new URLSearchParams(window.location.search).get('q') ?? '';
    if (initial) searchInput.value = initial;
  }

  const activeTag = () =>
    document.querySelector<HTMLElement>('[data-blog-filter][aria-pressed="true"]')?.getAttribute(
      'data-blog-filter',
    ) ?? 'all';

  const getSortSelectRoot = () => sortRoot?.querySelector<HTMLElement>('[data-sw-select]');

  const getSort = () => {
    const root = getSortSelectRoot();
    const fromAttr = root?.getAttribute('data-value');
    if (fromAttr) return fromAttr;
    const input = sortRoot?.querySelector<HTMLInputElement>('[data-sw-select-input]');
    return input?.value || 'newest';
  };

  const isBlogSortEvent = (event: Event) => {
    const root = getSortSelectRoot();
    if (!root || !sortRoot) return false;
    return event.target === root || root.contains(event.target as Node);
  };

  const query = () => searchInput?.value.trim().toLocaleLowerCase() ?? '';

  const haystack = (el: HTMLElement) =>
    `${el.getAttribute('data-title') ?? ''} ${el.getAttribute('data-desc') ?? ''} ${el.getAttribute('data-tag') ?? ''}`
      .toLocaleLowerCase();

  const compareCards = (a: HTMLElement, b: HTMLElement, sort: string) => {
    const tsA = Number(a.getAttribute('data-ts') ?? 0);
    const tsB = Number(b.getAttribute('data-ts') ?? 0);
    const readA = Number(a.getAttribute('data-read-minutes') ?? 0);
    const readB = Number(b.getAttribute('data-read-minutes') ?? 0);
    const titleA = (a.getAttribute('data-title') ?? '').toLocaleLowerCase();
    const titleB = (b.getAttribute('data-title') ?? '').toLocaleLowerCase();
    if (sort === 'oldest') return tsA - tsB;
    if (sort === 'short') return readA - readB;
    if (sort === 'long') return readB - readA;
    if (sort === 'az') return titleA.localeCompare(titleB);
    if (sort === 'za') return titleB.localeCompare(titleA);
    return tsB - tsA;
  };

  const syncQueryString = () => {
    if (!searchInput) return;
    const params = new URLSearchParams(window.location.search);
    const value = searchInput.value.trim();
    if (value) params.set('q', value);
    else params.delete('q');
    const qs = params.toString();
    const next = `${window.location.pathname}${qs ? `?${qs}` : ''}${window.location.hash}`;
    window.history.replaceState(null, '', next);
  };

  const apply = () => {
    const tag = activeTag();
    const q = query();
    const sort = getSort();
    const sorted = [...gridCards()].sort((a, b) => compareCards(a, b, sort));
    sorted.forEach((el) => grid.appendChild(el));

    let visibleCount = 0;
    allCards().forEach((el) => {
      const tagMatch = tag === 'all' || el.getAttribute('data-tag') === tag;
      const queryMatch = !q || haystack(el).includes(q);
      const match = tagMatch && queryMatch;
      el.classList.toggle('hidden', !match);
      if (match) visibleCount += 1;
    });

    if (emptyEl) {
      emptyEl.classList.toggle('hidden', visibleCount > 0);
      emptyEl.textContent = emptyMessage;
    }
  };

  filters.forEach((btn) => {
    btn.addEventListener('click', () => {
      filters.forEach((b) => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
      apply();
    });
  });

  searchInput?.addEventListener('input', () => {
    syncQueryString();
    apply();
  });

  const onSortChange = (event: Event) => {
    if (!isBlogSortEvent(event)) return;
    apply();
  };

  document.addEventListener('starwind:value-change', onSortChange);
  sortRoot?.addEventListener('change', onSortChange);

  requestAnimationFrame(apply);
  window.setTimeout(apply, 0);
}
