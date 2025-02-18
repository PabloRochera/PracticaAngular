# P1_Angular

## Descripción
Este proyecto es una práctica sencilla para aprender a manejar los bindings en Angular. Se exploran diferentes tipos de binding como la interpolación, el binding de eventos, el binding de propiedades y el binding bidireccional usando [(ngModel)].

## Funcionalidades
- Mostrar datos estáticos: nombre, apellido, edad, dirección, empresa y nacionalidad.
- Actualizar dinámicamente la dirección y la nacionalidad a través de inputs y eventos.
- Uso de variables locales en el template (por ejemplo, el input de empresa).
- Ejemplificación de cómo modificar propiedades del componente sin necesidad de llamar a funciones explícitas.

## Análisis del Código
- En empleado.component.ts se definen propiedades y métodos para manejar eventos y actualizar el estado del componente.
- En empleado.component.html se utilizan distintos tipos de binding para interactuar con el usuario.
- Se importa FormsModule para habilitar el two-way binding y simplificar la gestión de los formularios en Angular.

