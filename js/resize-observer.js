/**
 * Resize Observer
 *
 * per-element resize events
 */
(function useResizeObserver () {

  function callback(entries, observer) {
    entries.forEach(entry => {
      entry.target.innerHTML = `<pre>${JSON.stringify(entries[0].contentRect, null, ' ')}</pre>`;
      // console.log(entries[0].contentRect);
    });
  }

  const observer = new ResizeObserver(callback);

  // get some elements to observe
  const articles = document.querySelectorAll('.article');
  articles.forEach(article => observer.observe(article));

})()