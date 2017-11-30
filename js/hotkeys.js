function addHotkeys() {
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.altKey) {
      switch (e.keyCode) {
        case 49:
          document.getElementById('checkbox-personal-info').checked = true;
          location.href = location.search + '#personal-info';
          break;
        case 50:
          document.getElementById('checkbox-education').checked = true;
          location.href = location.search + '#education';
          break;
        case 51:
          document.getElementById('checkbox-language-skills').checked = true;
          location.href = location.search + '#language-skills';
          break;
      }
    }
  }, false);
}

addHotkeys();
