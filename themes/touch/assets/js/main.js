(function(){
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      menu.classList.toggle('open');
    });
  }

  var themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    var root = document.documentElement;
    function sync(){
      themeToggle.checked = root.classList.contains('dark');
    }
    sync();
    themeToggle.addEventListener('change', function(){
      root.classList.toggle('dark', themeToggle.checked);
      try {
        localStorage.setItem('theme', themeToggle.checked ? 'dark' : 'light');
      } catch(e) {}
    });
  }
})();
