document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    let currentPage = 0;

    pages.forEach((page, index) => {
        page.style.zIndex = pages.length - index;

        page.addEventListener('click', () => {
            if (index === currentPage && !page.classList.contains('flipped')) {
                page.classList.add('flipped');
                currentPage++;
            } else if (index === currentPage - 1 && page.classList.contains('flipped')) {
                page.classList.remove('flipped');
                currentPage--;
            }
        });
    });
});