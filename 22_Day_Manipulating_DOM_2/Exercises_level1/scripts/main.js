// helper function - check prime number
let isPrime = num => {
    if (num == 1 || num == 0) return false;
    if (num == 2 || num == 3)
      return true;
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) return false;
    }
    return true;
  }

let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');

h1.className = 'header';
h2.className = 'header';
h3.className = 'header';

// headers styling
let stdFontWeight = 400;
document.querySelectorAll('.header').forEach (e => {
    e.style.textAlign = 'center';
    e.style.fontWeight=`${stdFontWeight}`;
    e.style.fontFamily = 'san-serif, helvetica';
    e.style.padding = '2px';
    e.style.margin = '0px';

    stdFontWeight -= 30;
});
h2.style.textDecoration = 'underline';

// create a div container and a table within    
let container = document.createElement('div');
let table = document.createElement('table');

let nums = 0;
while (nums <= 101) {
    // create table row
    let row = document.createElement('tr');

    for (let i = 1; i <= 6; i++) {
        // create table data
        let data = document.createElement('td');
        data.textContent = nums;

        // styling the data element
        data.style.margin = '2px';
        data.style.padding = '5px';

        // selective styling
        if (isPrime(nums)) {
            data.style.backgroundColor = '#f76262';
        } else if (nums % 2 !== 0) {
           data.style.backgroundColor = '#fee904';
        } else { 
           data.style.backgroundColor = '#42b845';
        }

        row.appendChild(data);
        nums++;
    }
    // add row to table
    table.appendChild(row);
}

// table styling
table.style.width = '60%';
table.style.marginRight = '20%';
table.style.marginLeft = '20%';
table.style.marginTop = '1pc';
table.style.textAlign = 'center';
table.style.color = 'white';
table.style.fontFamily = 'ariel';
table.style.font = '15px';
table.style.fontWeight = 'bold';

container.appendChild(table);
document.body.appendChild(container);