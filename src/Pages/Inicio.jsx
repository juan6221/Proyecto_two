const Inicio = () => {
    return (
        <section className="inicio-section">
            <h1>Inicio</h1>
            <p>Bienvenido a la página de inicio</p>

            <h2>Consultas</h2>

            <h3>¿Qué son los Componentes React?</h3>
            <p>Los componentes en React son bloques reutilizables de código que representan partes de la interfaz de usuario. Pueden ser funciones o clases y permiten dividir la UI en piezas independientes y reutilizables.</p>

            <h3>¿Qué es un Layout?</h3>
            <p>Un layout es un componente que define la estructura general de la página, organizando elementos comunes como el encabezado, menú de navegación y pie de página, para que se mantengan consistentes en todas las vistas.</p>

            <h3>¿Qué es JSX?</h3>
            <p>JSX (JavaScript XML) es una extensión de sintaxis para JavaScript que permite escribir código similar a HTML dentro de archivos JavaScript. Es utilizado por React para describir cómo debe verse la UI.</p>

            <h3>Diferencias entre JS y JSX</h3>
            <ul>
                <li><b>JS:</b> Es JavaScript puro, sin sintaxis especial para UI.</li>
                <li><b>JSX:</b> Permite escribir etiquetas similares a HTML dentro de JavaScript, facilitando la creación de interfaces visuales.</li>
                <li>En JSX, se usan <code>className</code> en vez de <code>class</code> y las expresiones JS se incluyen entre llaves <code>{ }</code>.</li>
            </ul>
        </section>
    );
}

export default Inicio;