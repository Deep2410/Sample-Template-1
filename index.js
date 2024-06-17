var collapseElement = document.getElementById('answer1');
collapseElement.addEventListener('show.bs.collapse', function () {
    // Update button icon to indicate collapse is shown
    document.querySelector('.drop_down').classList.remove('bi-box-arrow-down');
    document.querySelector('.drop_down').classList.add('bi-box-arrow-up');
});
collapseElement.addEventListener('hide.bs.collapse', function () {
    // Update button icon to indicate collapse is hidden
    document.querySelector('.drop_down').classList.remove('bi-box-arrow-up');
    document.querySelector('.drop_down').classList.add('bi-box-arrow-down');
});


var collapseElement = document.getElementById('answer2');
collapseElement.addEventListener('show.bs.collapse', function () {
    // Update button icon to indicate collapse is shown
    document.querySelector('.drop_down2').classList.remove('bi-box-arrow-down');
    document.querySelector('.drop_down2').classList.add('bi-box-arrow-up');
});
collapseElement.addEventListener('hide.bs.collapse', function () {
    // Update button icon to indicate collapse is hidden
    document.querySelector('.drop_down2').classList.remove('bi-box-arrow-up');
    document.querySelector('.drop_down2').classList.add('bi-box-arrow-down');
});


var collapseElement = document.getElementById('answer3');
collapseElement.addEventListener('show.bs.collapse', function () {
    // Update button icon to indicate collapse is shown
    document.querySelector('.drop_down3').classList.remove('bi-box-arrow-down');
    document.querySelector('.drop_down3').classList.add('bi-box-arrow-up');
});
collapseElement.addEventListener('hide.bs.collapse', function () {
    // Update button icon to indicate collapse is hidden
    document.querySelector('.drop_down3').classList.remove('bi-box-arrow-up');
    document.querySelector('.drop_down3').classList.add('bi-box-arrow-down');
});
