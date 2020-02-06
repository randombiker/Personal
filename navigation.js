function gohome() {
  let elem = document.getElementById('clean');
  if ((elem.style.display = 'none')) {
    elem.style.display = 'block';
    document.getElementById('cvb').style.display = 'none';
    document.getElementById('aboutB').style.display = 'none';
    document.getElementById('tehno').style.display = 'none';
    document.getElementById('portofolio').style.display = 'none';
  }
}

function displayAbout() {
  let elem = document.getElementById('cvb');
  if ((elem.style.display = 'none')) {
    elem.style.display = 'block';
    document.getElementById('clean').style.display = 'none';
    document.getElementById('aboutB').style.display = 'none';
    document.getElementById('tehno').style.display = 'none';
    document.getElementById('portofolio').style.display = 'none';
  } else if (elem.style.display == 'block') {
    elem.display = 'none';
  }
}

function displayCv() {
  let elem = document.getElementById('aboutB');
  if ((elem.style.display = 'none')) {
    elem.style.display = 'block';
    document.getElementById('clean').style.display = 'none';
    document.getElementById('cvb').style.display = 'none';
    document.getElementById('tehno').style.display = 'none';
    document.getElementById('portofolio').style.display = 'none';
  } else if (elem.style.display == 'block') {
    elem.display = 'none';
  }
}

function displayPortofolio() {
  let elem = document.getElementById('portofolio');
  if ((elem.style.display = 'none')) {
    elem.style.display = 'block';
    document.getElementById('clean').style.display = 'none';
    document.getElementById('cvb').style.display = 'none';
    document.getElementById('tehno').style.display = 'none';
    document.getElementById('aboutB').style.display = 'none';
  } else if (elem.style.display == 'block') {
    elem.display = 'none';
  }
}

function displayTech() {
  let elem = document.getElementById('tehno');
  if ((elem.style.display = 'none')) {
    elem.style.display = 'block';
    document.getElementById('clean').style.display = 'none';
    document.getElementById('cvb').style.display = 'none';
    document.getElementById('aboutB').style.display = 'none';
    document.getElementById('portofolio').style.display = 'none';
  } else if (elem.style.display == 'block') {
    elem.display = 'none';
  }
}
