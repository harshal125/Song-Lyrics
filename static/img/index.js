
const searchYoutubers = () => {
    // to convert string into uppercase 
    let filter = document.getElementById('myInput').value.toUpperCase();


    // Enter into nav
    let nav = document.getElementById('vertical-menu')

    // Enter into ul
    let ul = document.getElementById('myUL')

    // Enter into li
    let li = ul.getElementsByTagName('li');

    // for loop to feaching all li in the DOM
    for (var i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];

        // To getting inner HTML
        let textvalue = a.textContent || a.innerHTML;


        if (textvalue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }

    }


}
const search = () => {
    // to convert string into uppercase 
    let filter = document.getElementById('inner').value.toUpperCase();


    // Enter into nav
    let nav = document.getElementById('vertical-menu')

    // Enter into ul
    let ul = document.getElementById('myUL')

    // Enter into li
    let li = ul.getElementsByTagName('li');

    // for loop to feaching all li in the DOM
    for (var i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];

        // To getting inner HTML
        let textvalue = a.textContent || a.innerHTML;


        if (textvalue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }

    }


}



// barger = document.querySelector('.barger')
// navbar = document.querySelector('.vertical-menu')
// opacity = document.querySelector('opacity')


function replace(){

    var x = document.getElementById('vertical-menu');
    if(x.style.display === "block"){
        x.style.display = "none";
    }
    else{
        x.style.display = "block";
    }
    
    // x.classList.toggle('opacity')
 }