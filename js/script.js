document.querySelectorAll('.amount button').forEach(function (button) {
    button.addEventListener('click', function () {
        const parent = this.closest('.amount');
        const input = parent.querySelector('input');
        let count = parseInt(input.value);
        if (this.classList.contains('amount__add')) { count++; }
        else { count--; if (count < 0) { count = 0; } }
        input.value = count;
    });
});