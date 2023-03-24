
export function mensajeForm() {
    async function handlesubmit(e) {
        e.preventDefault();
        const formulario = new FormData(this);
        const response = await fetch(this.action, {
            method: this.method,
            body: formulario,
            headers: {
                'Accept': 'application/json'
            }
        })
    
        if (response.ok) {
            this.reset();
            alert('Gracias por contactarme, te escribiré pronto :)')
        }
    }

    const contactameFormulario = document.querySelector('#form');
    contactameFormulario.addEventListener('submit', handlesubmit)

} 