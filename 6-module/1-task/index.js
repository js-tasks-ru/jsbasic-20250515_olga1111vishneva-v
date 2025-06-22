/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.createTable();
  }

  createTable() {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerTr = document.createElement('tr');

    // Используем шаблонные строки
    headerTr.innerHTML =
    ` <th>Имя</th>
      <th>Возраст</th>
      <th>Зарплата</th>
      <th>Город</th>
      <th></th>`
    ;

    thead.appendChild(headerTr);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    this.rows.forEach(row => {
      const tr = document.createElement('tr');

      // Используем шаблонные строки
      tr.innerHTML =
    `   <td>${row.name}</td>
        <td>${row.age}</td>
        <td>${row.salary}</td>
        <td>${row.city}</td>
        <td><button>X</button></td>`

      ;

      const deleteBtn = tr.querySelector('button');
      deleteBtn.addEventListener('click', () => {
        tbody.removeChild(tr);
      });

      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    return table;
  }
}
