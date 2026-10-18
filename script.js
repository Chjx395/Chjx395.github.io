document.querySelectorAll('.publication-filter').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const showYears = link.dataset.filter === 'all';
    document.querySelectorAll('.year-heading').forEach(row => { row.hidden = !showYears; });
    document.querySelectorAll('.publication-filter').forEach(item => {
      const selected = item === link;
      item.classList.toggle('active', selected);
      if (selected) item.setAttribute('aria-current', 'true');
      else item.removeAttribute('aria-current');
    });
  });
});
