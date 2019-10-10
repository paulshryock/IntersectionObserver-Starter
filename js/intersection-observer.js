/**
 * Intersection Observer
 */
(function useIntersectionObserver () {

  const options = {
    // Specify the intersection root, uses viewport if omitted
    // root: document.querySelector('.article-1'),
    // Optional margin offset
    // rootMargin: '100px',
    // Thresholds as to when you'd like it to alert you
    // off, half, and totally on
    threshold: [0, 0.5, 1.0]
  };

  const callback = (entries, observer) => {
    // Entries are elements that are within view
    entries.forEach(entry => {
      console.log(entry);
      // only using 1.0 threshold here
      if (entry.isIntersecting && entry.intersectionRatio >= 1) {
        // If visible, do something
        entry.target.classList.add('is-visible');
      } else {
        // If not visible, do something else
        entry.target.classList.remove('is-visible');
      }
      // at this point you can also un-observe, so the observer only runs once
      // observer.unobserve(entry.target);
    });
  };

  const observer = new IntersectionObserver(callback, options);

  // Get some elements to observe
  const headers = document.querySelectorAll('.article-header');
  // Observe each of those elements
  headers.forEach(header => observer.observe(header));

})()