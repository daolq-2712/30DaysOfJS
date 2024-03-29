document.body.style.fontFamily = 'san-serif, helvetica';

let generateColor = () => {
    let alphanums = '0123456789abcdef';
    
    let colorArr = [];
    for(let i=0; i<6; i++) {
      let index = Math.floor(Math.random() * 15);
      colorArr.push(alphanums[index]);
    }
    return '#' + colorArr.join('');
  }

let getDate = () => {
    let d = new Date();

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let monthIndex = d.getMonth();
    let year = d.getFullYear()
    let date = d.getDate();
    let hour = d.getHours();
    let mins = d.getMinutes();

    date = date < 10? '0'+date.toString(): date;
    hour = hour < 10? '0'+hour.toString(): hour;  
    mins = mins < 10? '0'+mins.toString():mins; 

    return `${months[monthIndex]} ${date}, ${year}  ${hour}:${mins}`;
}

let wrapper = document.querySelector('.wrapper');

// headings   
let h1 = document.createElement('h1');
h1.innerHTML = 'Dao Le Challenges in <strong>2023</strong>';
h1.style.textAlign = 'center';
h1.style.fontSize = '20px';
h1.style.fontWeight = '400';
h1.style.marginBottom = '5px';
h1.style.padding = '5px';
wrapper.appendChild(h1);

let yearText = document.querySelector('strong');
yearText.style.fontSize = '40px';

setInterval(() => yearText.style.color = generateColor(), 1000);

let h3 = document.createElement('h3');
h3.textContent = '30DaysOfJavaScript Challenge';
h3.style.fontWeight = '370';
h3.style.fontSize = '15px';
h3.style.textDecoration = 'underline';
h3.style.textAlign = 'center';
h3.style.padding = '3px';
h3.style.margin = '0px';

wrapper.appendChild(h3);

// date headings     
let date = document.createElement('h4');
date.textContent = getDate();
date.style.fontSize = '12px';
date.style.padding = '6px';
date.style.margin = 'auto';
date.style.textAlign = 'center';
date.style.width = '15%';
date.style.fontWeight = '400';
date.style.marginBottom = '5px';

setInterval(() => {
    date.style.backgroundColor = generateColor();
}, 1000);

wrapper.appendChild(date);

// prereuisites end  
let list = document.createElement('ul');
list.style.listStyleType = 'none';
list.style.width = '80%';
list.style.margin = 'auto';

asabenehChallenges2023.challenges.forEach(e => {
    let item = document.createElement('li');

    // innerHTML live
    // 1
    let titleSpan = document.createElement('span');
    let title = document.createTextNode(e.name);
    titleSpan.appendChild(title);

    // 2
    let dropdown = document.createElement('details');
    let dropdownSpan = document.createElement('span');
    dropdownSpan.appendChild(dropdown);

    // modify detail
    let summary = document.createElement('summary');
    summary.textContent = e.name.split(' ')[e.name.split(' ').length - 1];
    // add the topics
    let topics = document.createElement('ul');

    e.topics.forEach(e1 => {
        let item = document.createElement('li')
        item.textContent = e1;

        topics.appendChild(item);

        // styling    
        item.style.padding='5px';
        item.style.width = '90%';
        item.style.marginTop ='3px';
        item.style.marginBottom = '3px';
    });

    // styling   
    topics.style.listStyleType = 'none';
    topics.style.width = '80%';
    topics.style.margin = 'auto';

    // 3
    let status = document.createTextNode(e.status);
    let statusSpan = document.createElement('span');
    statusSpan.appendChild(status);

    // appends
    item.appendChild(titleSpan);
    dropdown.appendChild(summary);
    dropdown.appendChild(topics);
    item.appendChild(dropdownSpan);
    item.appendChild(statusSpan);

    // styling     
    item.style.border='1px blue solid'; 
    item.style.padding='5px';
    item.style.width = '90%';
    item.style.marginTop ='3px';
    item.style.marginBottom = '3px';
    
    list. appendChild(item);
});

wrapper.appendChild(list);
