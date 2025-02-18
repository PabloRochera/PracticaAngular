# Lista de Empleados - Angular

Esta aplicación es un ejemplo de manejo de formularios en Angular.

## Descripción

- **Formulario con enlace bidireccional (two-way binding):**  
  Se utilizan los inputs con la directiva `[(ngModel)]` para vincular los datos del formulario con las propiedades del componente (`cuadroNombre`, `cuadroApellido`, `cuadroCargo`, `cuadroSalario`).

- **Agregación de Empleados:**  
  Al pulsar el botón "Agregar Empleado", se ejecuta el método `agregarEmpleado()` que crea un nuevo objeto `Empleado` y lo añade al array de empleados, actualizando la lista mostrada dinámicamente con `*ngFor`.

- **Diseño responsivo:**  
  La estructura del formulario usa clases de Bootstrap, organizando los inputs en fila mediante el uso de contenedores `row` y `col-md-3`.

## Cómo utilizar

1. Rellena los campos del formulario.
2. Haz clic en "Agregar Empleado" para agregar un nuevo empleado a la lista.
3. La lista se actualizará automáticamente mostrando todos los empleados agregados.

<!-- ...existing code/documentation if needed... -->
