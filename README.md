
# InfoCasas Scraper

## Descripción
Este proyecto es un scraper hipotético para el sitio web InfoCasas, diseñado para obtener el precio de un inmueble basándose en su ID único sin hacer parsing directo de HTML y asumiendo que existe un endpoint de API que proporciona los datos en formato JSON.

## Estructura del Proyecto
El proyecto está estructurado en varios archivos dentro del directorio raíz:

- `scripts.js`: Punto de entrada que procesa los argumentos de la línea de comandos y coordina la obtención y presentación de datos.

## Cómo Usar
Para usar el scraper, ejecute el archivo `script.js` con Node.js, proporcionando el ID del inmueble como argumento:

```bash
node script.js <property-id>
```

Reemplace `<property-id>` con el ID real del inmueble que desea consultar.

## Nota Importante
Este código es puramente hipotético y no funcionará sin un endpoint de API real y accesible. Además, se debe respetar la legalidad y las normativas de privacidad y términos de servicio del sitio web al realizar cualquier forma de scraping.

## Licencia
Este proyecto está licenciado bajo la Licencia ISC.
