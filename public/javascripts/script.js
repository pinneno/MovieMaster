const loadImage = (e) => {
    document.getElementById('viewImage').src = URL.createObjectURL(e.target.files[0]);
}

const editAdminDetails = (e) => {
    e.preventDefault();
    document.getElementById('name').removeAttribute('readonly');
    document.getElementById('email').removeAttribute('readonly');
    document.getElementById('save').removeAttribute('hidden');
    document.getElementById('cancel').removeAttribute('hidden');
    document.getElementById('edit').setAttribute('hidden', 'true');
}

const cancelEditAdminDetails = (e) => {
    e.preventDefault();
    document.getElementById('name').setAttribute('readonly', 'true');
    document.getElementById('email').setAttribute('readonly', 'true');
    document.getElementById('save').setAttribute('hidden', 'true');
    document.getElementById('cancel').setAttribute('hidden', 'true');
    document.getElementById('edit').removeAttribute('hidden');
}

const editTheatreDetails = (e) => {
    e.preventDefault();
    document.getElementById('ownerName').removeAttribute('readonly');
    document.getElementById('theatreName').removeAttribute('readonly');
    document.getElementById('email').removeAttribute('readonly');
    document.getElementById('phoneNumber').removeAttribute('readonly');
    document.getElementById('save').removeAttribute('hidden');
    document.getElementById('cancel').removeAttribute('hidden');
    document.getElementById('edit').setAttribute('hidden', 'true');
}

const cancelEditTheatreDetails = (e) => {
    e.preventDefault();
    document.getElementById('ownerName').setAttribute('readonly', 'true');
    document.getElementById('theatreName').setAttribute('readonly', 'true');
    document.getElementById('email').setAttribute('readonly', 'true');
    document.getElementById('phoneNumber').setAttribute('readonly', 'true');
    document.getElementById('save').setAttribute('hidden', 'true');
    document.getElementById('cancel').setAttribute('hidden', 'true');
    document.getElementById('edit').removeAttribute('hidden');
}

window.addEventListener('message', function(e) {
    if (e.data !== 'popup-done') { return; }
    window.location.reload();
});

const authPopup = (e, url) => {
    e.preventDefault();
    var width = 720, height = 580;
    var w = window.outerWidth - width, h = window.outerHeight - height;
    var left = Math.round(window.screenX + (w / 2));
    var top = Math.round(window.screenY + (h / 2.5));

    loginWindow = window.open(url, 'LogIn',
        'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top +
        ',toolbar=0,scrollbars=0,status=0,resizable=0,location=0,menuBar=0');
}

function getShows(btn, ID) {
    $('#todayShows').hide()
    $('#tomorrowShows').hide()
    $('#dayAfterTomorrowShows').hide()
    
    $('#today').removeClass('btn-info text-white')
    $('#tomorrow').removeClass('btn-info text-white')
    $('#dayAfterTomorrow').removeClass('btn-info text-white')

    $(`#${btn}`).addClass('btn-info text-white');
    $(`#${ID}`).fadeIn();
}