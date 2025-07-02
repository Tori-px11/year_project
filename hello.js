document.addEventListener("DOMContentLoaded", () => {
  const fadeItems = document.querySelectorAll(".fade-item")
  fadeItems.forEach((item, index) => {
    // Задержка для каждого элемента, чтобы они появлялись по очереди
    setTimeout(
      () => {
        item.classList.add("fade-in")
      },
      index * 300 + 700,
    ) // Начинаем анимацию через 0.7 секунды после загрузки
  })
})
