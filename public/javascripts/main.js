const currentURL = window.location.pathname

function btnControlClicked(currentURL) {
  if (currentURL === '/about') {
    const aboutBtn = document.querySelector('.btn-about')
    aboutBtn.classList.add('active')
  } else if (currentURL === '/portfolio') {
    const portfolioBtn = document.querySelector('.btn-portfolio')
    portfolioBtn.classList.add('active')
  } else if (currentURL === '/contact') {
    const contactBtn = document.querySelector('.btn-contact')
    contactBtn.classList.add('active')
  }
}

btnControlClicked(currentURL)
