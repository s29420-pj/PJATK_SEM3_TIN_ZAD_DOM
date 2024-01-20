function toggleAccordion(header) {
    const accordionItem = header.parentElement;
    const content = accordionItem.querySelector('.accordion-content');

    const allAccordionContents = document.querySelectorAll('.accordion-content');
    allAccordionContents.forEach(item => {
        if (item !== content) {
            item.classList.add('accordion-content-hide');
            item.classList.remove('accordion-content-show');
        }
    });

    if (content.classList.contains('accordion-content-show')) {
        content.classList.remove('accordion-content-show');
        content.classList.add('accordion-content-hide');
    } else {
        content.classList.remove('accordion-content-hide');
        content.classList.add('accordion-content-show');
    }
}
