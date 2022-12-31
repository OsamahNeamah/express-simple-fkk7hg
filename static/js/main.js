window.onload = () => {
  let items = document.getElementsByClassName('nav-link');
  for (let item of items) {
    if (item.href == window.location.href) {
      item.parentNode.classList = 'nav-item active';
    } else {
      item.parentNode.classList = 'nav-item';
    }
  }
};
