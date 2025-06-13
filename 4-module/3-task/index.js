function highlight(table) {
  const rows = table.querySelectorAll('tbody tr');

  rows.forEach(row => {
    if (row.cells.length < 4) return;

    const status = row.cells[3];
    const gender = row.cells[2];
    const age = row.cells[1];

    const available = status.getAttribute('data-available');

    if (available === 'true') {
      row.classList.add('available');
    } else if (available === 'false') {
      row.classList.add('unavailable');
    } else {
      row.setAttribute('hidden', '');
    }

    if (gender.textContent.trim() === 'm') {
      row.classList.add('male');
    } else {
      row.classList.add('female');
    }

    if (parseInt(age.textContent.trim(), 10) < 18) {
      row.style.textDecoration = 'line-through';
    }
  });
}