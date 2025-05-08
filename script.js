document.getElementById('miFormulario').addEventListener('submit', function(event) {
    // Validación de los campos requeridos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const fecha = document.getElementById('fecha').value;
    const edad = document.getElementById('edad').value;
    const pais = document.getElementById('pais').value;
    const genero = document.querySelector('input[name="genero"]:checked');
    const intereses = document.querySelectorAll('input[type="checkbox"]:checked');
    
    // Validacion de todos los campos estén completos
    if (!nombre || !email || !fecha || !edad || pais === "Seleccione un país" || !genero || intereses.length === 0) {
        alert('Por favor complete todos los campos obligatorios');
        event.preventDefault();
        return;
    }
    
    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor ingrese un correo electrónico válido');
        event.preventDefault();
        return;
    }
    
    // Validación de edad
    if (edad < 1 || edad > 120) {
        alert('La edad debe estar entre 1 y 120 años');
        event.preventDefault();
        return;
    }
    alert('Formulario enviado correctamente');
});

// Efectos visuales para los campos de entrada
const inputs = document.querySelectorAll('.form-control');
inputs.forEach(input => {
    input.addEventListener('mouseenter', function() {
        this.style.borderColor = '#86b7fe';
    });
    
    input.addEventListener('mouseleave', function() {
        this.style.borderColor = '#ced4da';
    });
});

// Efectos visuales para los botones
const botones = document.querySelectorAll('.btn');
botones.forEach(boton => {
    boton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
    
    boton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});