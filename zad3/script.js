var cars = [
    { rok: 2020, przebieg: 15000, cena_wyjsciowa: 50000, cena_koncowa: 48000 },
    { rok: 2018, przebieg: 25000, cena_wyjsciowa: 45000, cena_koncowa: 42000 },
    { rok: 2022, przebieg: 10000, cena_wyjsciowa: 55000, cena_koncowa: 52000 }
];

var table = document.createElement('table');
var thead = document.createElement('thead');
var tbody = document.createElement('tbody');

var headers = ['Rok', 'Przebieg', 'Cena wyjściowa', 'Cena końcowa'];
var headerRow = document.createElement('tr');
headers.forEach(function(header) {
    var th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);

cars.forEach(function(car) {
    var row = document.createElement('tr');
    for (var key in car) {
        var td = document.createElement('td');
        td.textContent = car[key];
        row.appendChild(td);
    }
    tbody.appendChild(row);
});

table.appendChild(tbody);

document.body.appendChild(table);