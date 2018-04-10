document.getElementById('found_first').addEventListener('click', function(e) {
    alert("What's Your Name");
});

document.getElementById('found_second').addEventListener('click', function (e) {
    window.open("first_found_new_window.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=500,width=288,height=600");
});
