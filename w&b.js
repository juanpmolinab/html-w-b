function EventListener(j, k, m) {
    const rango = document.getElementById(j);
    const valorSpan = document.getElementById(k);
    const pesoInput = document.querySelector('.' + m);

    rango.addEventListener('input', function() {
        valorSpan.textContent = rango.value;
        pesoInput.value = rango.value;
    });

    pesoInput.addEventListener('input', function() {
        rango.value = pesoInput.value;
        valorSpan.textContent = pesoInput.value;
    });
}

EventListener('escala-sf', 'valor-sf', 'sf');
EventListener('escala-srl', 'valor-srl', 'srl');
EventListener('escala-src', 'valor-src', 'src');
EventListener('escala-ps', 'valor-ps', 'ps');
EventListener('escala-srr', 'valor-srr', 'srr');
EventListener('escala-g', 'valor-g', 'g');
EventListener('escala-fuel', 'valor-fuel', 'fuel');
EventListener('escala-fuelLand', 'valor-fuelLand', 'fuelLand');


const maxValue = 580;
const maxHeightPercentage = 70;

function updatePercentageFromRange(rangeId, percentageId, stankSelector) {
    const rangeInput = document.getElementById(rangeId);
    const percentageInput = document.getElementById(percentageId);
    const rangeValue = parseFloat(rangeInput.value);

    if (!isNaN(rangeValue) && rangeValue >= 0 && rangeValue <= maxValue) {
        let percentage = Math.round((rangeValue / maxValue) * 100);
        percentageInput.value = percentage;

        updateStankHeight(percentage, stankSelector, maxHeightPercentage);
    } else {
        percentageInput.value = '';
        updateStankHeight(0, stankSelector, maxHeightPercentage);
    }
}

function updateStankHeight(percentage, stankSelector, maxHeightPercentage) {
    const stank = document.querySelector(stankSelector);
    const calculatedHeight = (percentage / 100) * maxHeightPercentage;
    stank.style.height = calculatedHeight + '%';
}

document.getElementById('escala-fuel').addEventListener('input', () => updatePercentageFromRange('escala-fuel', 'percentageFuel', '#stank1'));
document.getElementById('escala-fuelLand').addEventListener('input', () => updatePercentageFromRange('escala-fuelLand', 'percentageFuelLand', '#stank2'));

function calculateEndurance() {
    const fuelValue = parseFloat(document.getElementById('escala-fuel').value);
    const consumption = parseFloat(document.getElementById('consumption').value);
    const enduranceOutput = document.getElementById('endurance');

    if (!isNaN(fuelValue) && !isNaN(consumption) && consumption > 0) {
        // Calcular la autonomía en horas y minutos
        const totalHours = fuelValue / consumption;
        const hours = Math.floor(totalHours);
        const minutes = Math.round((totalHours - hours) * 60);

        // Mostrar el resultado en el campo de texto de autonomía
        enduranceOutput.value = `${hours}h ${minutes}m`;
    } else {
        // Limpiar el resultado si los valores no son válidos
        enduranceOutput.value = '';
    }
}

document.getElementById('escala-fuel').addEventListener('input', calculateEndurance);
document.getElementById('consumption').addEventListener('input', calculateEndurance);


function calculateReserve() {
    const fuelLand = parseFloat(document.getElementById('escala-fuelLand').value);
    const consumption = parseFloat(document.getElementById('consumption').value);
    const reserveOutput = document.getElementById('reserve');

    if (!isNaN(fuelLand) && !isNaN(consumption) && consumption > 0) {
        // Calcular la autonomía en horas y minutos
        const totalHours = fuelLand / consumption;
        const hours = Math.floor(totalHours);
        const minutes = Math.round((totalHours - hours) * 60);

        // Mostrar el resultado en el campo de texto de autonomía
        reserveOutput.value = `${hours}h ${minutes}m`;
    } else {
        // Limpiar el resultado si los valores no son válidos
        reserveOutput.value = '';
    }
}

// Agregar event listeners a los elementos de entrada
document.getElementById('escala-fuelLand').addEventListener('input', calculateReserve);
document.getElementById('consumption').addEventListener('input', calculateReserve);

function actualizarSuma() {
    // Obtener los valores de los inputs
    const sf = parseInt(document.getElementById('escala-sf').value) || 0;
    const srl = parseInt(document.getElementById('escala-srl').value) || 0;
    const src = parseInt(document.getElementById('escala-src').value) || 0;
    const ps = parseInt(document.getElementById('escala-ps').value) || 0;
    const srr = parseInt(document.getElementById('escala-srr').value) || 0;
    const g = parseInt(document.getElementById('escala-g').value) || 0;
    const fuel = parseInt(document.getElementById('escala-fuel').value) || 0;

    // Recuperar los valores del helicóptero desde localStorage
    const heli = parseFloat(localStorage.getItem('weightH1'));
    
      const sumaTotal = sf + srl + src + ps + srr + g + fuel + heli;

    // Mostrar la suma total en el elemento con id="takeoffw"
    document.getElementById('takeoffw').innerText = sumaTotal;

    // Obtener el valor de escala-fuelLand y escala-fuel
    const fuelLand = parseInt(document.getElementById('escala-fuelLand').value) || 0;
    const fuelWeight = parseInt(document.getElementById('escala-fuel').value) || 0;

    // Calcular el valor de landingw y zerow
    const landingw = sumaTotal - (fuelWeight - fuelLand);
    const zerow = sumaTotal - fuelWeight;

    // Mostrar el valor de landingw en el elemento con id="landingw"
    document.getElementById('landingw').innerText = landingw;

    // Mostrar el valor de zerow en el elemento con id="zerow"
    document.getElementById('zerow').innerText = zerow;
}


/*
// Agregar event listeners a los inputs para que se actualice la suma cuando se modifiquen
document.getElementById('escala-sf').addEventListener('input', actualizarSuma);
document.getElementById('escala-srl').addEventListener('input', actualizarSuma);
document.getElementById('escala-src').addEventListener('input', actualizarSuma);
document.getElementById('escala-ps').addEventListener('input', actualizarSuma);
document.getElementById('escala-srr').addEventListener('input', actualizarSuma);
document.getElementById('escala-g').addEventListener('input', actualizarSuma);
document.getElementById('escala-fuel').addEventListener('input', actualizarSuma);
document.getElementById('escala-fuelLand').addEventListener('input', actualizarSuma);



['escala-sf', 'escala-srl', 'escala-src', 'escala-ps', 'escala-srr', 'escala-g', 'escala-fuel', 'escala-fuelLand'].forEach(id => {
    document.getElementById(id).addEventListener('input', actualizarSuma);
    });

*/
// Inicializar la suma al cargar la página
 // Guardar el valor fijo inicialmente
actualizarSuma();   // Calcular la suma inicialmente



document.addEventListener('DOMContentLoaded', function() {
    // Función para copiar el valor del input con id="pilot" al input con id="pilot1"
    function repeatPilot() {
        // Obtener el valor del input con id="pilot"
        const pilotValue = document.getElementById('pilot').value;
        // Asignar ese valor al input con id="pilot1"
        document.getElementById('pilot1').value = pilotValue;
    }

    // Escuchar el evento 'input' del input con id="pilot"
    document.getElementById('pilot').addEventListener('input', repeatPilot);
});



function actualizarSumaArm() {
    // Obtener los valores de los inputs
    const sf = parseInt(document.getElementById('escala-sf').value) || 0;
    const armsf = parseFloat(localStorage.getItem('arms1'));
    const msf = sf * armsf
    const srl = parseInt(document.getElementById('escala-srl').value) || 0;
    const armsrl = parseFloat(localStorage.getItem('arms3'));
    const msrl = srl * armsrl
    const src = parseInt(document.getElementById('escala-src').value) || 0;
    const armsrc = parseFloat(localStorage.getItem('arms4'));
    const msrc = src * armsrc
    const ps = parseInt(document.getElementById('escala-ps').value) || 0;
    const armps = parseFloat(localStorage.getItem('arms2'));
    const mps = ps * armps
    const srr = parseInt(document.getElementById('escala-srr').value) || 0;
    const armsrr = parseFloat(localStorage.getItem('arms5'));
    const msrr = srr * armsrr
    const g = parseInt(document.getElementById('escala-g').value) || 0;
    const armg = parseFloat(localStorage.getItem('arms6'));
    const mg = g * armg
    
    
const fuelData = [
    {weight: 0, arm: 164.7},
    {weight: 34, arm: 167.1},
    {weight: 68, arm: 167.6},
    {weight: 83, arm: 167.7},
    {weight: 102, arm: 167.5},
    {weight: 136, arm: 167.0},
    {weight: 170, arm: 166.7},
    {weight: 204, arm: 166.5},
    {weight: 238, arm: 166.4},
    {weight: 272, arm: 166.3},
    {weight: 306, arm: 166.2},
    {weight: 340, arm: 166.1},
    {weight: 374, arm: 166.1},
    {weight: 408, arm: 166.1},
    {weight: 442, arm: 166.0},
    {weight: 476, arm: 166.0},
    {weight: 510, arm: 166.0},
    {weight: 544, arm: 166.0},
    {weight: 577, arm: 166.0}
];

  
    
    const usableFuel = parseInt(document.getElementById('escala-fuel').value) || 0;
    const matchingUsableFuel = fuelData.find(data => usableFuel <= data.weight) || fuelData[fuelData.length - 1];
    const arm = matchingUsableFuel.arm;
    const momentUsableFuel = usableFuel * arm;




  

    // Recuperar los valores del helicóptero desde localStorage
    const heli = parseFloat(localStorage.getItem('weightH1'));
    const armCGH1 = parseFloat(localStorage.getItem('armCGH1'));
    const mHeli = heli * armCGH1
    
        const sumaTotalArmUsable = sf + srl + src + ps + srr + g + usableFuel + heli;
        const sumaMomentUsable = msf + msrl + msrc + mps + msrr + mg + momentUsableFuel + mHeli
        const armTotalUsable = sumaMomentUsable / sumaTotalArmUsable

    // Mostrar la suma total en el elemento con id="takeoffw"
    
    document.getElementById('takeoffArm').innerText = armTotalUsable.toFixed(1);

    
    // Obtener el valor del brazo con el landig fuel


    const fuelLand = parseInt(document.getElementById('escala-fuelLand').value) || 0;
    const matchingFuelLand = fuelData.find(data => fuelLand <= data.weight) || fuelData[fuelData.length - 1];
    const armLand = matchingFuelLand.arm;
    const momentFuelLand = fuelLand * armLand;


    const sumaTotalArmLand = sf + srl + src + ps + srr + g + fuelLand + heli;
    const sumaMomentLand = msf + msrl + msrc + mps + msrr + mg + momentFuelLand + mHeli
    const armTotalLand = sumaMomentLand / sumaTotalArmLand
   
   
    // obtener el valore del brazo con zero fuel


    document.getElementById('landingArm').innerText = armTotalLand.toFixed(1);

    const sumaTotalArmZero = sf + srl + src + ps + srr + g + heli;
    const sumaMomentZero = msf + msrl + msrc + mps + msrr + mg + mHeli
    const armTotalZero = sumaMomentZero / sumaTotalArmZero
    document.getElementById('zeroArm').innerText = armTotalZero.toFixed(1);
    
}
/*
// Agregar event listeners a los inputs para que se actualice la suma cuando se modifiquen
document.getElementById('escala-sf').addEventListener('input', actualizarSumaArm);
document.getElementById('escala-srl').addEventListener('input', actualizarSumaArm);
document.getElementById('escala-src').addEventListener('input', actualizarSumaArm);
document.getElementById('escala-ps').addEventListener('input', actualizarSumaArm);
document.getElementById('escala-srr').addEventListener('input', actualizarSumaArm);
document.getElementById('escala-g').addEventListener('input', actualizarSumaArm);
document.getElementById('escala-fuel').addEventListener('input', actualizarSumaArm);
document.getElementById('escala-fuelLand').addEventListener('input', actualizarSumaArm);

*/

['escala-sf', 'escala-srl', 'escala-src', 'escala-ps', 'escala-srr', 'escala-g', 'escala-fuel', 'escala-fuelLand'].forEach(id => {
    document.getElementById(id).addEventListener('input', actualizarSuma);
    document.getElementById(id).addEventListener('input', actualizarSumaArm);
});


actualizarSumaArm();


let myChart = null; // Variable global para almacenar el gráfico

function grafic() {
    // Obtener valores de la tabla para el gráfico de dispersión
    const takeoffW = parseFloat(document.getElementById('takeoffw').textContent); // Eje Y
    const landingW = parseFloat(document.getElementById('landingw').textContent); // Eje Y
    const zeroW = parseFloat(document.getElementById('zerow').textContent); // Eje Y
    
    const takeoffArm = parseFloat(document.getElementById('takeoffArm').textContent); // Eje X
    const landingArm = parseFloat(document.getElementById('landingArm').textContent); // Eje X
    const zeroArm = parseFloat(document.getElementById('zeroArm').textContent); // Eje X

    // Datos para el gráfico de dispersión
    const newData = [
        {x: takeoffArm, y: takeoffW, backgroundColor: 'orange', borderColor: 'orange', label: 'Total'}, // Total (naranja)
        {x: landingArm, y: landingW, backgroundColor: 'green', borderColor: 'green', label: 'Landing'},   // Landing (verde)
        {x: zeroArm, y: zeroW, backgroundColor: 'blue', borderColor: 'blue', label: 'Zero'}
    ];

    // Obtener los puntos del polígono (zona límite)
    const polygonData = [
        {x: 171.5, y: 2234},
        {x: 170, y: 2234},
        {x: 161.2, y: 2500},
        {x: 161.2, y: 3200},
        {x: 161.6, y: 3680},
        {x: 169.9, y: 3680},
        {x: 171.5, y: 2600},
        {x: 171.5, y: 2234} // Cerrar el polígono volviendo al primer punto
    ];

    const polygonExternalLoad = [
        {x: 161.6, y: 3680},
        {x: 162.2, y: 4475},
        {x: 169, y: 4475},  
        {x: 169.9, y: 3680},  
        {x: 161.6, y: 3680} // Cerrar el polígono volviendo al primer punto
    ];

    const polygonAftCG = [
        {x: 171.5, y: 2234},
        {x: 170, y: 2234},
        {x: 168.4, y: 3680},
        {x: 168.1, y: 4475},  // Corregido el error de coma
        {x: 169, y: 4475}, 
        {x: 169.9, y: 3680},
        {x: 171.5, y: 2600},  // Corregido el número 1169.9
        {x: 171.5, y: 2234}, // Cerrar el polígono volviendo al primer punto
    ];

    // Si el gráfico ya existe, actualizamos los datos
    if (myChart) {
        myChart.data.datasets[0].data = newData; // Actualizamos los puntos del gráfico principal
        myChart.data.datasets[1].data = polygonData; // Actualizamos el polígono
        myChart.data.datasets[2].data = polygonExternalLoad; // Actualizamos el segundo polígono
        myChart.data.datasets[3].data = polygonAftCG; 
        myChart.update(); // Actualizar el gráfico con los nuevos datos
    } else {
        // Si el gráfico no existe, lo creamos
        const data = {
            datasets: [
                {
                    label: 'Max Weight',
                    data: newData,
                    backgroundColor: newData.map(point => point.backgroundColor), // Colores individuales para cada punto
                    borderColor: newData.map(point => point.borderColor),
                    borderWidth: 1,
                    pointRadius: 5,
                    // Utilizar chartjs-plugin-datalabels para mostrar texto en los puntos
                    datalabels: {
                        color: 'grey',
                        display: true,
                        formatter: (value) => value.label // Mostrar etiqueta para cada punto
                    }
                },
                {
                    data: polygonData,
                    backgroundColor: 'rgba(192, 75, 75, 0.2)', // Relleno del polígono
                    borderColor: 'rgba(192, 75, 75, 1)',
                    borderWidth: 2,
                    fill: true, // Rellenar el polígono
                    pointRadius: 0, // Sin puntos visibles en el polígono
                    type: 'line', // Usamos un gráfico de línea para conectar los puntos
                    tension: 0, // Hace que las líneas sean rectas
                    datalabels: {
                        display: false // Ocultar etiquetas en este polígono
                    }
                },
                {
                    data: polygonExternalLoad,
                    backgroundColor: 'rgba(75, 75, 192, 0.2)', // Relleno diferente para el polígono externo
                    borderColor: 'grey',
                    borderWidth: 2,
                    fill: true, // Rellenar el polígono
                    pointRadius: 0, // Sin puntos visibles en el polígono
                    type: 'line', // Usamos un gráfico de línea para conectar los puntos
                    tension: 0, // Hace que las líneas sean rectas
                    datalabels: {
                        display: false // Ocultar etiquetas en este polígono
                    }
                },
                {
                    data: polygonAftCG,
                    backgroundColor: 'rgba(75, 75, 192, 0.9)', // Relleno diferente para el polígono AFT-CG
                    borderColor: 'rgba(75, 75, 192, 1)',
                    borderWidth: 2,
                    fill: true, // Rellenar el polígono
                    pointRadius: 0, // Sin puntos visibles en el polígono
                    type: 'line', // Usamos un gráfico de línea para conectar los puntos
                    tension: 0, // Hace que las líneas sean rectas
                    datalabels: {
                        display: false // Ocultar etiquetas en este polígono
                    }
                }
            ]
        };

        const config = {
            type: 'scatter',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false // Desactivar la leyenda completamente
                    },
                    datalabels: {
                        display: false // Ocultar etiquetas globalmente
                    }
                },
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom',
                        min: 158,
                        max: 174,
                        title: {
                            display: true,
                            text: 'CG (inches)'
                        }
                    },
                    x1: {
                        type: 'linear',
                        position: 'top',
                        min: 4022,
                        max: 4420,
                        title: {
                            display: true,
                            text: 'CG (milimeters)'
                        }
                    },
                    y: {
                        min: 2000,
                        max: 4800,
                        title: {
                            display: true,
                            text: 'Weight (lbs)'
                        }
                    },
                    y1: {
                        position: 'right',
                        min: 910,
                        max: 2175,
                        title: {
                            display: true,
                            text: 'Weight (kg)'
                        }
                    }
                },
                aspectRatio: 1, // Hace que el gráfico tenga un aspecto cuadrado
            }
        };

        // Crear el gráfico y guardarlo en una variable global para que se actualice más tarde
        myChart = new Chart(
            document.getElementById('myChart'),
            config
        );
    }
}

// Agregar eventos a todos los inputs para que llamen a `grafic` cuando cambien
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        grafic(); // Recalcular y actualizar el gráfico
    });
});

// Llamar inicialmente a la función de graficar
grafic();

/*
// Ejemplo de tabla con datos
const hoverCeilingData = [
    { altitude: 10000, temperature: -20, maxWeight: 4475 },
    { altitude: 10000, temperature: 0, maxWeight: 4250 },
    { altitude: 10000, temperature: 20, maxWeight: 4200 },
    { altitude: 12000, temperature: -20, maxWeight: 4280 },
    { altitude: 12000, temperature: 0, maxWeight: 3980 },
    { altitude: 12000, temperature: 20, maxWeight: 3680 },
    { altitude: 4300, temperature: -20, maxWeight: 3680 },
    { altitude: 4300, temperature: 0, maxWeight: 3680 },
    { altitude: 4300, temperature: 20, maxWeight: 3680 },
    // Añadir más puntos de la tabla
];

// Función para interpolar entre dos puntos
function interpolate(x, x1, y1, x2, y2) {
    return y1 + ((x - x1) * (y2 - y1)) / (x2 - x1);
}

// Función principal para calcular el peso
function calculateWeight() {
    const altitude = parseFloat(document.getElementById("Alt").value);
    const temperature = parseFloat(document.getElementById("T°").value);

    let lowerAlt, upperAlt;

    // Encontrar los puntos de altitud más cercanos en la tabla
    for (let i = 0; i < hoverCeilingData.length - 1; i++) {
        if (altitude >= hoverCeilingData[i].altitude && altitude <= hoverCeilingData[i + 1].altitude) {
            lowerAlt = hoverCeilingData[i];
            upperAlt = hoverCeilingData[i + 1];
            break;
        }
    }

    if (!lowerAlt || !upperAlt) {
        document.getElementById("ige").textContent = "Altitud fuera de rango.";
        return;
    }

    // Interpolación para el peso en función de la temperatura
    const lowerTempData = lowerAlt.temperature <= temperature ? lowerAlt : upperAlt;
    const upperTempData = upperAlt.temperature >= temperature ? upperAlt : lowerAlt;

    // Interpolación de peso por temperatura en ambas altitudes
    const weightAtLowerAlt = interpolate(temperature, lowerAlt.temperature, lowerAlt.maxWeight, upperAlt.temperature, upperAlt.maxWeight);
    const weightAtUpperAlt = interpolate(temperature, lowerAlt.temperature, lowerAlt.maxWeight, upperAlt.temperature, upperAlt.maxWeight);

    // Interpolación final de peso por altitud
    const finalWeight = interpolate(altitude, lowerAlt.altitude, weightAtLowerAlt, upperAlt.altitude, weightAtUpperAlt);

    // Mostrar el resultado en el div
    document.getElementById("ige").textContent = finalWeight + " LB";
}


document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        calculateWeight();
        interpolate(); // Recalcular y actualizar el gráfico
    });
});

*/

function calculateWeight() {
    // Obtener los valores de los inputs
    const altitude = parseFloat(document.getElementById("Alt").value);
    const temperature = parseFloat(document.getElementById("T°").value);
    
    let maxWeight = 0;

    // Lógica para determinar el peso según la tabla
    if (altitude <= 2000) {
        if (temperature <= 20) {
            maxWeight = 4475;  // Ejemplo de peso según la tabla
        } else if (temperature <= 40) {
            maxWeight = 4000;  // Ejemplo de peso
        }
    } else if (altitude <= 6000) {
        if (temperature <= 20) {
            maxWeight = 4200;  // Otro ejemplo
        } else if (temperature <= 40) {
            maxWeight = 3800;  // Otro ejemplo
        }
    }

    // Mostrar el resultado en el div
    document.getElementById("ige").textContent = maxWeight + "LB";
}


document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        calculateWeight();
        interpolate(); // Recalcular y actualizar el gráfico
    });
});

// Llamar inicialmente a la función de graficar
calculateWeight();

//interpolate();