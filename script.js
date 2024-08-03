document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('show-flowers');
    const flowersMessage = document.getElementById('flowers-message');

    button.addEventListener('click', () => {
        if (flowersMessage.classList.contains('hidden')) {
            flowersMessage.classList.remove('hidden');
        } else {
            flowersMessage.classList.add('hidden');
        }
    });
});
