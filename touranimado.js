// Importar la biblioteca Shepherd.js
// import Shepherd from 'shepherd.js';
// alert("Bienvenido a mi sitio web, a continuación te mostraré un tour por el mismo, espero que lo disfrutes");

// Crear una instancia de Shepherd
const tour = new Shepherd.Tour({
    defaultStepOptions: {
        cancelIcon: {
            enabled: true
        },
        classes: 'shepherd-theme-custom',
        scrollTo: { behavior: 'smooth', block: 'center' }
    }
});

// Agregar los pasos del tour
tour.addStep({
    id: 'step1',
    text: 'Bienvenido a mi sitio web, a continuación te mostraré un tour por el mismo, espero que lo disfrutes. Si deseas saltar el tour, puedes hacerlo dando click en el botón "Cerrar"',
    attachTo: {
        element: '',
        on: 'center'
    },
    buttons: [
        {
            text: 'Siguiente',
            action: tour.next
        }
    ]
});

tour.addStep({
    id: 'step2',
    text: 'Aquí puedes navegar entre las diferentes secciones de mi sitio web',
    attachTo: {
        element: '.navbar',
        on: 'bottom'
    },
    buttons: [
        {
            text: 'Anterior',
            action: tour.back
        },
        {
            text: 'Siguiente',
            action: tour.next
        }
    ]
});

tour.addStep({
    id: 'step3',
    text: 'Aquí puedes ver un breve resumen de mi perfil profesional',
    attachTo: {
        element: '.home_section',
        on: 'top'
    },
    buttons: [
        {
            text: 'Anterior',
            action: tour.back
        },
        {
            text: 'Siguiente',
            action: tour.next
        }
    ]
});

tour.addStep({
    id: 'step4',
    text: 'Sobre mí',
    attachTo: {
        element: '.about_section',
        on: 'bottom'
    },
    buttons: [
        {
            text: 'Anterior',
            action: tour.back
        },
        {
            text: 'Siguiente',
            action: tour.next
        }
    ]
});


tour.addStep({
    id: 'step5',
    text: 'Aquí puedes ver las tecnologías que manejo',
    attachTo: {
        element: '.skills_section',
        on: 'bottom'
    },
    buttons: [
        {
            text: 'Anterior',
            action: tour.back
        },
        {
            text: 'Siguiente',
            action: tour.next
        }
    ]
});

tour.addStep({
    id: 'step6',
    text: 'Aquí puedes ver los proyectos que he realizado',
    attachTo: {
        element: '.portafolio_section',
        on: 'bottom'
    },
    buttons: [
        {
            text: 'Anterior',
            action: tour.back
        },
        {
            text: 'Siguiente',
            action: tour.next
        }
    ]
});

tour.addStep({
    id: 'step7',
    text: 'Dale click a este botón para descargar mi CV',
    attachTo: {
        element: '.contact_section',
        on: 'bottom'
    },
    buttons: [
        {
            text: 'Anterior',
            action: tour.back
        },
        {
            text: 'Siguiente',
            action: tour.next
        }
    ]
});

tour.addStep({
    id: 'step8',
    text: '¡Espero que hayas disfrutado este breve tour en mi portafolio!',
    attachTo: {
        element: '',
        on: 'center'
    },
    buttons: [
        {
            text: 'Anterior',
            action: tour.back
        },
        {
            text: 'Finalizar',
            action: tour.complete
        }
    ]
});

// Iniciar el tour
tour.start();

