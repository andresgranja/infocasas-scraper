const axios = require('axios');

/**
 * Obtiene el precio de un inmueble basado en su ID utilizando axios.
 * @param {string} id El ID del inmueble.
 * @returns {Promise<string>} Promesa que resuelve con el precio del inmueble.
 */
async function fetchPropertyPrice(id) {
    try {
        // Reemplaza esta URL por la URL real de la API que encontraste
        const url = `https://api.infocasas.com.uy/data/property/${id}`;
        const response = await axios.get(url);

        // Asumiendo que la respuesta tiene una estructura { price: { currency: 'USD', amount: 100000 } }
        const priceInfo = response.data.price;
        return `Moneda: ${priceInfo.currency}, Monto: ${priceInfo.amount}`;
    } catch (error) {
        throw new Error(`Error al obtener el precio del inmueble: ${error.message}`);
    }
}

// Ejemplo de uso
const propertyId = '189771624'; // Ejemplo de ID, reemplazar con un ID real
fetchPropertyPrice(propertyId)
    .then(price => console.log(`El precio del inmueble es: ${price}`))
    .catch(error => console.error(error.message));