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
            input.style.top = `${img.offsetTop + img.height + 15}px`;
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

    function addNewSection() {
        const newSection = document.createElement('section');
        newSection.classList.add('section');
        newSection.innerHTML = `
            <div class="flex">
               <h2>New Section</h2>
               <button class="remove-section-button">Remove Section</button>
            </div>
           
           
            <div class="section-main">
                <img src="https://via.placeholder.com/150" alt="new">
                <p>Newly added section content goes here.</p>
            </div>
        `;
        document.querySelector('.main-container').prepend(newSection);
        newSection.querySelector('.remove-section-button').addEventListener('click', function() {
            newSection.remove();
        });
    }

    document.body.addEventListener('click', handleImageClick);
    document.querySelector('.add-section-button').addEventListener('click', addNewSection);
    observeDOMChanges();
})();