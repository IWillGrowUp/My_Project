document.getElementById('ajax_phones')
    .addEventListener('click', phones);
    
function phones() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('new_popular')
                .innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'popular_category-phones.html?r='+Math.random(), true);
    xhr.send();
}

document.getElementById('ajax_bags')
    .addEventListener('click', bags);
    
function bags() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('new_popular')
                .innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'popular_category-bags.html?r='+Math.random(), true);
    xhr.send();
}