// This script can be used for any future interactivity or more complex animations
// that cannot be achieved with pure CSS.
// For the current requirements, all animations are handled via CSS keyframes.

// Example of a simple JS interaction if needed:
document.addEventListener("DOMContentLoaded", () => {
  const viewGamesButton = document.querySelector(".view-games-button")
  if (viewGamesButton) {
    viewGamesButton.addEventListener("click", (event) => {
      // Optional: Add a class for a one-time animation on click if CSS :active is not enough
      // event.target.classList.add('clicked-animation');
      // setTimeout(() => {
      //     event.target.classList.remove('clicked-animation');
      // }, 600); // Match animation duration
    })
  }

  // For card hover animations, CSS :hover is generally sufficient.
  // If more complex JS-driven hover effects were needed:
  // const gameCards = document.querySelectorAll('.game-card');
  // gameCards.forEach(card => {
  //     card.addEventListener('mouseenter', () => {
  //         card.classList.add('hovered');
  //     });
  //     card.addEventListener('mouseleave', () => {
  //         card.classList.remove('hovered');
  //     });
  // });
})
