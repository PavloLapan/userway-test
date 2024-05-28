(function () {
    const handleImageClick = (event) => {
        if (event.target.tagName.toLowerCase() === 'img') {
            const img = event.target;
            event.target.classList.add('border-red')

            let input = document.querySelector('.alt-input');
            if (!input) {
                input = document.createElement('input');
                input.type = 'text';
                input.classList.add('alt-input');
                document.body.appendChild(input);
            }

            input.value = img.alt;
            input.style.display = 'block';
            input.style.top = `${img.offsetTop + img.height + 5}px`;
            input.style.left = `${img.offsetLeft}px`;
            input.focus();

            input.onblur = () => {
                img.alt = input.value;
                input.style.display = 'none';
                event.target.classList.remove('border-red')
            };
        };
    };

    const observeDOMChanges = () => {
        const observer = new MutationObserver(updateAltAttributes);
        observer.observe(document.body, {childList: true, subtree: true});
    };

    document.body.addEventListener('click', handleImageClick);
    observeDOMChanges();
})();