document.getElementById('ajax_phones').addEventListener('click', phones);

function phones() {
    document.getElementById('close_all').style.display = "block";
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('new_popular')
                .innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'popular_category-phones.html?r=' + Math.random(), true);
    xhr.send();
}

document.getElementById('ajax_bags').addEventListener('click', numbers);

function numbers() {
    document.getElementById('close_all').style.display = "block";
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('new_popular')
                .innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'popular_category-carNumbers.html?r=' + Math.random(), true);
    xhr.send();
}

document.getElementById('ajax_cards').addEventListener('click', cards);

function cards() {
    document.getElementById('close_all').style.display = "block";
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('new_popular').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'popular_category-cards.html?r=' + Math.random(), true);
    xhr.send();
}

document.getElementById('ajax_rings').addEventListener('click', rings);

function rings() {
    document.getElementById('close_all').style.display = "block";
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('new_popular').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'popular_category-gold.html?r=' + Math.random(), true);
    xhr.send();
}

document.getElementById('ajax_documents').addEventListener('click', documents);

function documents() {
    document.getElementById('close_all').style.display = "block";
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('new_popular').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'popular_category-documents.html?r=' + Math.random(), true);
    xhr.send();
}

document.getElementById('ajax_flash').addEventListener('click', flash);

function flash() {
    document.getElementById('close_all').style.display = "block";
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('new_popular').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'popular_category-flash.html?r=' + Math.random(), true);
    xhr.send();
}

document.getElementById('ajax_keys').addEventListener('click', keys);

function keys() {
    document.getElementById('close_all').style.display = "block";
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('new_popular').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'popular_category-keys.html?r=' + Math.random(), true);
    xhr.send();
}

document.getElementById('ajax_animals').addEventListener('click', animals);

function animals() {
    document.getElementById('close_all').style.display = "block";
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('new_popular').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'popular_category-animals.html?r=' + Math.random(), true);
    xhr.send();
}

document.getElementById('ajax_another').addEventListener('click', another);

function another() {
    document.getElementById('close_all').style.display = "block";
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('new_popular').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'popular_category-another.html?r=' + Math.random(), true);
    xhr.send();
}

document.getElementById('close_all').addEventListener('click', close);
function close() {
    document.getElementById('new_popular').innerHTML = ' ';
    document.getElementById('close_all').style.display = "none";
}
