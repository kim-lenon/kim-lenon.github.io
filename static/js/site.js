(() => {
  const search = document.getElementById('search');
  if (!search) return;
  const rows = [...document.querySelectorAll('.note-row')];
  const buttons = [...document.querySelectorAll('[data-filter]')];
  let active = 'all';
  function update() {
    const query = search.value.trim().toLocaleLowerCase();
    let count = 0;
    for (const row of rows) {
      const visible = (active === 'all' || row.dataset.topic === active) && row.dataset.search.toLocaleLowerCase().includes(query);
      row.hidden = !visible;
      if (visible) count++;
    }
    document.getElementById('result-count').textContent = String(count);
    document.getElementById('no-results').hidden = count !== 0;
  }
  search.addEventListener('input', update);
  buttons.forEach(button => button.addEventListener('click', () => {
    active = button.dataset.filter;
    buttons.forEach(item => {const selected = item === button; item.classList.toggle('active', selected); item.setAttribute('aria-pressed', String(selected));});
    update();
  }));
})();
