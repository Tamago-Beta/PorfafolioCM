export function scrollMenuActive() {
    const scrollActive = () =>{
        const secciones = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;
    
        secciones.forEach(current =>{
            const seccionAltura = current.offsetHeight,
            seccionTop = current.offsetTop - 85,
            seccionId = current.getAttribute('id'),
            seccionesClasses= document.querySelector('.menu a[href*=' + seccionId + ']');
            
            if (scrollY > seccionTop && scrollY <= seccionTop + seccionAltura) {
                seccionesClasses.classList.add('menu__link--active');
            }else{
                seccionesClasses.classList.remove('menu__link--active');
            }
        })
    }
    
    window.addEventListener('scroll', scrollActive);
 }