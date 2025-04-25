/**
 * Smoothly scrolls to a specific element on the page
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Optional offset from the top of the element (default: 80px)
 */
export function scrollToElement(elementId, offset = 80) {
  const element = document.getElementById(elementId)
  if (!element) return

  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.scrollY - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  })
}

/**
 * Determines if an element is in the viewport
 * @param {HTMLElement} element - The element to check
 * @param {number} offset - Optional offset to consider element in view (default: 100px)
 * @returns {boolean} Whether the element is in view
 */
export function isElementInView(element, offset = 100) {
  const rect = element.getBoundingClientRect()
  return rect.top <= window.innerHeight - offset && rect.bottom >= offset
} 