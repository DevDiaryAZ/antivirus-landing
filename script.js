const anchorLinks = document.querySelectorAll('a[href*="#"]');

anchorLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const targetID = link.getAttribute('href').substring(1);

    const targetBlock = document.getElementById(targetID);
    if (targetBlock) {
      targetBlock.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});