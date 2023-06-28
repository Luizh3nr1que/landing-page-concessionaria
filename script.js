const buttonAbrirLogin = document.querySelector('.login');
const paginaLogin = document.querySelector('.loginContainer');
const fecharLogin = document.querySelector('.fecharLogin');

buttonAbrirLogin.addEventListener('click', () => {
    paginaLogin.style.display = 'flex';
})

fecharLogin.addEventListener('click', () => {
    paginaLogin.style.display = 'none';
})



const prevBtn = document.querySelectorAll('.carousel-prev');
const nextBtn = document.querySelectorAll('.carousel-next');
const cardContainers = document.querySelectorAll('.conteudoPopularVeiculos');

let move;

function updateMoveValue() {
    if (window.innerWidth < 720) {
        move = 260;
    } else {
        move = 600;
    }
}

nextBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const container = cardContainers[index];
        container.scrollBy({ left: move, behavior: 'smooth' });
    })
})

prevBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const container = cardContainers[index];
        container.scrollBy({ left: -move, behavior: 'smooth' });
    })
})

window.addEventListener('resize', updateMoveValue);
updateMoveValue();





const MenuMobileIcon = document.querySelector('.menuMobile');
const MobileContainer = document.querySelector('.MobileContainer');
const fecharMenu = document.querySelector('.fecharMenu');

MenuMobileIcon.addEventListener('click', () => {
    MobileContainer.classList.remove('fecharMenuMobile');
    MobileContainer.classList.add('abrirMenuMobile');
    MobileContainer.style.display = 'block';
})

fecharMenu.addEventListener('click', () => {
    MobileContainer.classList.remove('abrirMenuMobile');
    MobileContainer.classList.add('fecharMenuMobile');

    setTimeout(() => {
        MobileContainer.style.display = 'none';
    }, 300)
})


const links = document.querySelectorAll(`.link`);

links.forEach((link) => {
    link.addEventListener('click', () => {
        MobileContainer.classList.remove('abrirMenuMobile');
        MobileContainer.classList.add('fecharMenuMobile');

        setTimeout(() => {
            MobileContainer.style.display = 'none';
        }, 300)
    })
})


const img = document.querySelectorAll('img');

img.forEach((img) => {
    img.draggable = false
})


window.addEventListener("load", function () {
    const loader = document.querySelector('.fundoLoad')
    loader.style.display = "none";
});