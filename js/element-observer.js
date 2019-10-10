/**
 * Element Observer
 */
(function useElementObserver () {

  function callback (entries, observer) {
    const { width } = entries[0].contentRect;
    let size;
    if (width > 1024) {
      size = 'large';
    } else if (width > 768) {
      size = 'medium';
    } else {
      size = 'small';
    }

    entries[0].target.classList.remove('small', 'medium', 'large');
    entries[0].target.classList.add(size);
  }

  const observer = new ResizeObserver(callback);

  // Get some elements to observe
  const element = document.querySelector('.articles');
  observer.observe(element);

})()