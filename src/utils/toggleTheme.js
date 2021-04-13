export const toggleTheme = theme => {
  const HTML = document.documentElement;
  HTML.classList.add('transition');
  HTML.dataset.theme = theme;
  saveTheme(theme);
  HTML.addEventListener('transitionend', function() {
    this.classList.remove('transition');
  }, {once: true});
}

export const saveTheme = theme => {
  localStorage.setItem('theme', theme)
};

