

document.addEventListener("DOMContentLoaded", function() {
    // ------------------------
    // 1. Configuración Inicial
    // ------------------------

    const maxValue = 580;
    const maxHeightPercentage = 70;
    let myChart = null; // Variable global para almacenar el gráfico



    // ------------------------
    // 2. Función guardarEnLocalStorage
    // ------------------------


    
    const elementos = [
        { sliderId: 'escala-sf', spanId: 'valor-sf' },
        { sliderId: 'escala-srl', spanId: 'valor-srl' },
        { sliderId: 'escala-src', spanId: 'valor-src' },
        { sliderId: 'escala-ps', spanId: 'valor-ps' },
        { sliderId: 'escala-srr', spanId: 'valor-srr' },
        { sliderId: 'escala-g', spanId: 'valor-g' },
        { sliderId: 'escala-fuel', spanId: 'valor-fuel' },
        { sliderId: 'escala-fuelLand', spanId: 'valor-fuelLand' }
        
    ];
    
    // Recorre cada elemento y configura el evento y almacenamiento en localStorage
    elementos.forEach(({ sliderId, spanId }) => {
        const slider = document.getElementById(sliderId);
        const spanValor = document.getElementById(spanId);
    
        // Actualizar el valor del span y guardar en localStorage
        slider.addEventListener('input', () => {
            const valorActual = slider.value;
            spanValor.textContent = valorActual;
            localStorage.setItem(sliderId, valorActual); // Guarda el valor en localStorage
        });
    
        // Recuperar el valor guardado al cargar la página
        const valorGuardado = localStorage.getItem(sliderId);
        if (valorGuardado !== null) {  // Verifica si hay un valor guardado
            slider.value = valorGuardado;
            spanValor.textContent = valorGuardado;
        }
    });
 
    // ------------------------
    // 3. Función EventListener
    // ------------------------

    function setupEventListener(rangeId, spanId, inputClass) {
        const range = document.getElementById(rangeId);
        const span = document.getElementById(spanId);
        const input = document.querySelector(`.${inputClass}`);

        if (!range || !span || !input) {
            console.warn(`Elementos con IDs/Clases (${rangeId}, ${spanId}, ${inputClass}) no encontrados.`);
            return;
        }

        // Sincronizar rango y input
        range.addEventListener('input', () => {
            span.textContent = range.value;
            input.value = range.value;
            actualizarSuma();
            actualizarSumaArm();
            grafic();
            actualizarSilla();
            guardarEnLocalStorage(rangeId, range.value, inputClass);
        });

        input.addEventListener('input', () => {
            range.value = input.value;
            span.textContent = input.value;
            actualizarSuma();
            actualizarSumaArm();
            grafic();
            actualizarSilla();
            guardarEnLocalStorage(rangeId, input.value, inputClass);
        });
    }

    // ------------------------
    // 4. Inicializar EventListeners
    // ------------------------

    const eventListenersConfig = [
        { rangeId: 'escala-sf', spanId: 'valor-sf', inputClass: 'sf' },
        { rangeId: 'escala-srl', spanId: 'valor-srl', inputClass: 'srl' },
        { rangeId: 'escala-src', spanId: 'valor-src', inputClass: 'src' },
        { rangeId: 'escala-ps', spanId: 'valor-ps', inputClass: 'ps' },
        { rangeId: 'escala-srr', spanId: 'valor-srr', inputClass: 'srr' },
        { rangeId: 'escala-g', spanId: 'valor-g', inputClass: 'g' },
        { rangeId: 'escala-fuel', spanId: 'valor-fuel', inputClass: 'fuel' },
        { rangeId: 'escala-fuelLand', spanId: 'valor-fuelLand', inputClass: 'fuelLand' },
    ];

    eventListenersConfig.forEach(config => {
        setupEventListener(config.rangeId, config.spanId, config.inputClass);
    });

    const seats = [
        { input: "escala-ps", div: "seat-p", span: "valor-ps" },
        { input: "escala-sf", div: "seat-f1", span: "valor-sf" },
        { input: "escala-srl", div: "seat-rl", span: "valor-srl" },
        { input: "escala-src", div: "seat-cc", span: "valor-src" },
        { input: "escala-srr", div: "seat-rr", span: "valor-srr" },
        { input: "escala-g", div: "seat-cargo", span: "valor-g", occupiedImg: 'img/cargo-ocu.png', emptyImg: 'img/cargo.png' }
    ];
    
    function actualizarSilla(seatInput, seatDiv, spanValor, occupiedImg = 'img/silla-ocu.png', emptyImg = 'img/silla.png') {
        const valor = parseInt(seatInput.value);
        spanValor.textContent = valor;
    
        // Actualiza la imagen de fondo dependiendo del valor del deslizador
        seatDiv.style.backgroundImage = valor > 0 ? `url(${occupiedImg})` : `url(${emptyImg})`;
        seatDiv.style.color = valor > 0 ? `black` : `white`;
    }
    
    // Configurar los deslizadores y actualizar al cargar la página
    seats.forEach(function(seat) {
        const seatInput = document.getElementById(seat.input);
        const seatDiv = document.getElementById(seat.div);
        const spanValor = document.getElementById(seat.span);
    
        if (seatInput && seatDiv && spanValor) {
            // Recupera y asigna el valor guardado en `localStorage`, si existe
            const valorGuardado = localStorage.getItem(seat.input);
            if (valorGuardado !== null) {
                seatInput.value = valorGuardado;         // Asigna el valor al deslizador
                spanValor.textContent = valorGuardado;   // Actualiza el valor del span
                actualizarSilla(seatInput, seatDiv, spanValor, seat.occupiedImg, seat.emptyImg); // Actualiza la imagen
            }
    
            // Evento para actualizar el valor y guardar en `localStorage`
            seatInput.addEventListener("input", function() {
                const valorActual = seatInput.value;
                spanValor.textContent = valorActual; // Muestra el valor en el span
                localStorage.setItem(seat.input, valorActual); // Guarda el valor en localStorage
                actualizarSilla(seatInput, seatDiv, spanValor, seat.occupiedImg, seat.emptyImg); // Actualiza la imagen
            });
        }
    });
    
    // ------------------------
    // 5. Funciones de Actualización
    // ------------------------
        
    function updatePercentageFromRange(rangeId, percentageId, stankSelector) {
        const rangeInput = document.getElementById(rangeId);
        const percentageInput = document.getElementById(percentageId);
        const rangeValue = parseFloat(rangeInput.value);
    
        if (!isNaN(rangeValue) && rangeValue >= 0 && rangeValue <= maxValue) {
            let percentage = Math.round((rangeValue / maxValue) * 100);
            percentageInput.value = percentage;
    
            // Guardar valor del rango y porcentaje en `localStorage`
            localStorage.setItem(rangeId, rangeValue);
            localStorage.setItem(percentageId, percentage);
    
            updateStankHeight(percentage, stankSelector, maxHeightPercentage);
        } else {
            percentageInput.value = '';
            updateStankHeight(0, stankSelector, maxHeightPercentage);
        }
    }
    
    function updateStankHeight(percentage, stankSelector, maxHeightPercentage) {
        const stank = document.querySelector(stankSelector);
        if (stank) {
            const calculatedHeight = (percentage / 100) * maxHeightPercentage;
            stank.style.height = calculatedHeight + '%';
        }
    }
    
    // Configurar y recuperar los valores guardados en `localStorage` al cargar la página
    window.addEventListener('load', () => {
        // Deslizadores y sus elementos asociados
        const elements = [
            { rangeId: 'escala-fuel', percentageId: 'percentageFuel', stankSelector: '#stank1' },
            { rangeId: 'escala-fuelLand', percentageId: 'percentageFuelLand', stankSelector: '#stank2' }
        ];
    
        elements.forEach(({ rangeId, percentageId, stankSelector }) => {
            const rangeInput = document.getElementById(rangeId);
            const percentageInput = document.getElementById(percentageId);
    
            if (rangeInput && percentageInput) {
                // Recuperar valores desde `localStorage`
                const savedRangeValue = localStorage.getItem(rangeId);
                const savedPercentage = localStorage.getItem(percentageId);
    
                // Asignar valores guardados si existen
                if (savedRangeValue !== null) {
                    rangeInput.value = savedRangeValue;
                    percentageInput.value = savedPercentage;
                    updateStankHeight(savedPercentage, stankSelector, maxHeightPercentage);
                }
    
                // Configurar el evento `input` para actualizar y guardar valores en `localStorage`
                rangeInput.addEventListener('input', () => updatePercentageFromRange(rangeId, percentageId, stankSelector));
            }
        });
    });
    

   
    function calculateEndurance() {
        const fuelValue = parseFloat(document.getElementById('escala-fuel').value);
        const consumption = parseFloat(document.getElementById('consumption').value);
        const enduranceOutput = document.getElementById('endurance');
    
        if (!isNaN(fuelValue) && !isNaN(consumption) && consumption > 0) {
            const totalHours = fuelValue / consumption;
            const hours = Math.floor(totalHours);
            const minutes = Math.round((totalHours - hours) * 60);
    
            enduranceOutput.value = `${hours}h ${minutes}m`;
        } else {
            enduranceOutput.value = '';
        }
    }
    
    // Función para configurar los eventos de 'input'
    function setupEnduranceEvents() {
        ['escala-fuel', 'consumption'].forEach(id => {
            document.getElementById(id).addEventListener('input', calculateEndurance);
        });
    }
    
    // Ejecutar la configuración de eventos y el cálculo inicial si es necesario
    setupEnduranceEvents();
    calculateEndurance(); // Opcional, para mostrar el valor al cargar la página si ya hay datos en los inputs
    

    function calculateReserve() {
        const fuelLand = parseFloat(document.getElementById('escala-fuelLand').value);
        const consumption = parseFloat(document.getElementById('consumption').value);
        const reserveOutput = document.getElementById('reserve');

        if (!isNaN(fuelLand) && !isNaN(consumption) && consumption > 0) {
            const totalHours = fuelLand / consumption;
            const hours = Math.floor(totalHours);
            const minutes = Math.round((totalHours - hours) * 60);

            reserveOutput.value = `${hours}h ${minutes}m`;
        } else {
            reserveOutput.value = '';
        }

    document.getElementById('escala-fuelLand').addEventListener('input', calculateReserve);
    document.getElementById('consumption').addEventListener('input', calculateReserve);
    }

    

    // 4.4. Calcular Suma Total
    
    function actualizarSuma() {
        const elementos = ['escala-sf', 'escala-srl', 'escala-src', 'escala-ps', 'escala-srr', 'escala-g', 'escala-fuel'];
        const valores = elementos.map(id => parseInt(document.getElementById(`${id}`).value) || 0);
        const heli = parseFloat(localStorage.getItem('weightH1')) || 0;

        const sumaTotal = valores.reduce((acc, val) => acc + val, 0) + heli;
        document.getElementById('takeoffw').innerText = sumaTotal;

        const fuelLand = parseInt(document.getElementById('escala-fuelLand').value) || 0;
        const fuelWeight = parseInt(document.getElementById('escala-fuel').value) || 0;

        const landingw = sumaTotal - (fuelWeight - fuelLand);
        const zerow = sumaTotal - fuelWeight;

        document.getElementById('landingw').innerText = landingw;
        document.getElementById('zerow').innerText = zerow;
    }

    // 4.5. Calcular Suma Arm
    function actualizarSumaArm() {
        const elementos = [
            { id: 'escala-sf', armKey: 'arms1' },
            { id: 'escala-srl', armKey: 'arms3' },
            { id: 'escala-src', armKey: 'arms4' },
            { id: 'escala-ps', armKey: 'arms2' },
            { id: 'escala-srr', armKey: 'arms5' },
            { id: 'escala-g', armKey: 'arms6' }
        ];

        let sumaTotalArmUsable = 0;
        let sumaMomentUsable = 0;

        elementos.forEach(el => {
            const valor = parseInt(document.getElementById(`${el.id}`).value) || 0;
            const arm = parseFloat(localStorage.getItem(el.armKey)) || 0;
            sumaTotalArmUsable += valor;
            sumaMomentUsable += valor * arm;
        });

        const usableFuel = parseInt(document.getElementById('escala-fuel').value) || 0;
        const fuelData = [
            { weight: 0, arm: 164.7 },
            { weight: 34, arm: 167.1 },
            { weight: 68, arm: 167.6 },
            { weight: 83, arm: 167.7 },
            { weight: 102, arm: 167.5 },
            { weight: 136, arm: 167.0 },
            { weight: 170, arm: 166.7 },
            { weight: 204, arm: 166.5 },
            { weight: 238, arm: 166.4 },
            { weight: 272, arm: 166.3 },
            { weight: 306, arm: 166.2 },
            { weight: 340, arm: 166.1 },
            { weight: 374, arm: 166.1 },
            { weight: 408, arm: 166.1 },
            { weight: 442, arm: 166.0 },
            { weight: 476, arm: 166.0 },
            { weight: 510, arm: 166.0 },
            { weight: 544, arm: 166.0 },
            { weight: 577, arm: 166.0 }
        ];

        const matchingUsableFuel = fuelData.find(data => usableFuel <= data.weight) || fuelData[fuelData.length - 1];
        const momentUsableFuel = usableFuel * matchingUsableFuel.arm;

        const heli = parseFloat(localStorage.getItem('weightH1')) || 0;
        const armCGH1 = parseFloat(localStorage.getItem('armCGH1')) || 0;
        const mHeli = heli * armCGH1;

        sumaTotalArmUsable += usableFuel + heli;
        sumaMomentUsable += momentUsableFuel + mHeli;

        const armTotalUsable = sumaMomentUsable / sumaTotalArmUsable || 0;
        document.getElementById('takeoffArm').innerText = armTotalUsable.toFixed(1);

        // Calcular Landing Arm
        const fuelLand = parseInt(document.getElementById('escala-fuelLand').value) || 0;
        const matchingFuelLand = fuelData.find(data => fuelLand <= data.weight) || fuelData[fuelData.length - 1];
        const momentFuelLand = fuelLand * matchingFuelLand.arm;

        const sumaTotalArmLand = sumaTotalArmUsable - usableFuel + fuelLand;
        const sumaMomentLand = sumaMomentUsable - momentUsableFuel + momentFuelLand;
        const armTotalLand = sumaMomentLand / sumaTotalArmLand || 0;

        document.getElementById('landingArm').innerText = armTotalLand.toFixed(1);

        // Calcular Zero Arm
        const sumaTotalArmZero = sumaTotalArmUsable - usableFuel;
        const sumaMomentZero = sumaMomentUsable - momentUsableFuel;
        const armTotalZero = sumaMomentZero / sumaTotalArmZero || 0;

        document.getElementById('zeroArm').innerText = armTotalZero.toFixed(1);
    }

    // 4.6. Repetir Nombre del Piloto

    function syncPilotFields() {
        const pilot = document.getElementById('pilot');
        const pilot1 = document.getElementById('pilot1');
    
        // Función para sincronizar ambos campos y guardar el valor en localStorage
        function updateBothFields(value) {
            pilot.value = pilot1.value = value;
            localStorage.setItem('pilotValue', value);
        }
    
        // Escuchar cambios en "pilot" y sincronizar con "pilot1"
        pilot.addEventListener('input', () => updateBothFields(pilot.value));
    
        // Escuchar cambios en "pilot1" y sincronizar con "pilot"
        pilot1.addEventListener('input', () => updateBothFields(pilot1.value));
    
        // Al cargar la página, recuperar el valor guardado en localStorage
        window.addEventListener('load', () => {
            const savedValue = localStorage.getItem('pilotValue');
            if (savedValue) {
                pilot.value = pilot1.value = savedValue;
            }
        });
    }

    // ------------------------
    // 7. Función de Graficación
    // ------------------------

    function grafic() {
        // Obtener valores para el gráfico
        const takeoffW = parseFloat(document.getElementById('takeoffw').textContent) || 0;
        const landingW = parseFloat(document.getElementById('landingw').textContent) || 0;
        const zeroW = parseFloat(document.getElementById('zerow').textContent) || 0;

        const takeoffArm = parseFloat(document.getElementById('takeoffArm').textContent) || 0;
        const landingArm = parseFloat(document.getElementById('landingArm').textContent) || 0;
        const zeroArm = parseFloat(document.getElementById('zeroArm').textContent) || 0;

        // Datos para el gráfico de dispersión
        const newData = [
            { x: takeoffArm, y: takeoffW, backgroundColor: 'orange', borderColor: 'orange', label: 'Total' },
            { x: landingArm, y: landingW, backgroundColor: 'green', borderColor: 'green', label: 'Landing' },
            { x: zeroArm, y: zeroW, backgroundColor: 'blue', borderColor: 'blue', label: 'Zero' }
        ];

        // Puntos del polígono (zona límite)
        const polygonData = [
            { x: 171.5, y: 2234 },
            { x: 170, y: 2234 },
            { x: 161.2, y: 2500 },
            { x: 161.2, y: 3200 },
            { x: 161.6, y: 3680 },
            { x: 169.9, y: 3680 },
            { x: 171.5, y: 2600 },
            { x: 171.5, y: 2234 }
        ];

        const polygonExternalLoad = [
            { x: 161.6, y: 3680 },
            { x: 162.2, y: 4475 },
            { x: 169, y: 4475 },
            { x: 169.9, y: 3680 },
            { x: 161.6, y: 3680 }
        ];

        const polygonAftCG = [
            { x: 171.5, y: 2234 },
            { x: 170, y: 2234 },
            { x: 168.4, y: 3680 },
            { x: 168.1, y: 4475 },
            { x: 169, y: 4475 },
            { x: 169.9, y: 3680 },
            { x: 171.5, y: 2600 },
            { x: 171.5, y: 2234 }
        ];

        // Datos del gráfico
        const data = {
            datasets: [
                {
                    label: 'Max Weight',
                    data: newData,
                    backgroundColor: newData.map(point => point.backgroundColor),
                    borderColor: newData.map(point => point.borderColor),
                    borderWidth: 1,
                    pointRadius: 5,
                    datalabels: {
                        color: 'grey',
                        display: true,
                        formatter: value => value.label
                    }
                },
                {
                    data: polygonData,
                    backgroundColor: 'rgba(192, 75, 75, 0.2)',
                    borderColor: 'rgba(192, 75, 75, 1)',
                    borderWidth: 2,
                    fill: true,
                    pointRadius: 0,
                    type: 'line',
                    tension: 0,
                    datalabels: { display: false }
                },
                {
                    data: polygonExternalLoad,
                    backgroundColor: 'rgba(75, 75, 192, 0.2)',
                    borderColor: 'grey',
                    borderWidth: 2,
                    fill: true,
                    pointRadius: 0,
                    type: 'line',
                    tension: 0,
                    datalabels: { display: false }
                },
                {
                    data: polygonAftCG,
                    backgroundColor: 'rgba(75, 75, 192, 0.9)',
                    borderColor: 'rgba(75, 75, 192, 1)',
                    borderWidth: 2,
                    fill: true,
                    pointRadius: 0,
                    type: 'line',
                    tension: 0,
                    datalabels: { display: false }
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
                    legend: { display: false },
                    datalabels: { display: false }
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
                aspectRatio: 1
            }
        };

        // Crear o actualizar el gráfico
        if (myChart) {
            myChart.data.datasets[0].data = newData;
            myChart.data.datasets[1].data = polygonData;
            myChart.data.datasets[2].data = polygonExternalLoad;
            myChart.data.datasets[3].data = polygonAftCG;
            myChart.update();
        } else {
            const ctx = document.getElementById('myChart').getContext('2d');
            myChart = new Chart(ctx, config);
        }
    }

    // ------------------------
    // 8. Función para Calcular Peso
    // ------------------------

    function calculateWeight() {
        const altitude = parseFloat(document.getElementById("Alt").value);
        const temperature = parseFloat(document.getElementById("T°").value);
        const ige = document.getElementById("ige");

        let maxWeight = 0;

        if (altitude <= 2000) {
            if (temperature <= 20) {
                maxWeight = 4475;
            } else if (temperature <= 40) {
                maxWeight = 4000;
            }
        } else if (altitude <= 6000) {
            if (temperature <= 20) {
                maxWeight = 4200;
            } else if (temperature <= 40) {
                maxWeight = 3800;
            }
        }

        if (ige) {
            ige.textContent = maxWeight ? `${maxWeight}LB` : '';
        }
    }

    // ------------------------
    // 9. Agregar Event Listeners Adicionales
    // ------------------------

    function setupAdditionalEventListeners() {
        // Actualizar porcentajes y stanks
        document.getElementById('escala-fuel').addEventListener('input', () => {
            updatePercentageFromRange('escala-fuel', 'percentageFuel', '#stank1');
            calculateEndurance();
            actualizarSuma();
            actualizarSumaArm();
            grafic();
        });

        document.getElementById('escala-fuelLand').addEventListener('input', () => {
            updatePercentageFromRange('escala-fuelLand', 'percentageFuelLand', '#stank2');
            calculateReserve();
            actualizarSuma();
            actualizarSumaArm();
            grafic();
        });

        // Consumir evento 'input' para el consumo
        document.getElementById('consumption').addEventListener('input', () => {
            calculateEndurance();
            calculateReserve();
            actualizarSuma();
            actualizarSumaArm();
            grafic();
        });

        
        

        // Calcular peso basado en Altitud y Temperatura
        document.getElementById('Alt').addEventListener('input', calculateWeight);
        document.getElementById('T°').addEventListener('input', calculateWeight);
    }

    // ------------------------
    // 10. Inicializar Funcionalidades
    // ------------------------

    function initialize() {
        // Inicializar EventListeners
        eventListenersConfig.forEach(config => {
            setupEventListener(config.rangeId, config.spanId, config.inputClass);
        });

        setupAdditionalEventListeners();
        actualizarSuma();
        actualizarSumaArm();
        grafic();
        calculateWeight();
        syncPilotFields();
        calculateEndurance();
        calculateReserve();

    }

    // Ejecutar la inicialización
    initialize();

    

  
    elementos.forEach(({ sliderId, spanId }) => {
        const slider = document.getElementById(sliderId);
        const spanValor = document.getElementById(spanId);
    
        // Actualizar el valor del span y guardar en localStorage
        slider.addEventListener('input', () => {
            const valorActual = slider.value;
            spanValor.textContent = valorActual;
            localStorage.setItem(sliderId, valorActual); // Guarda el valor en localStorage
        });
    
        // Recuperar el valor guardado al cargar la página
        const valorGuardado = localStorage.getItem(sliderId);
        if (valorGuardado !== null) {  // Verifica si hay un valor guardado
            slider.value = valorGuardado;
            spanValor.textContent = valorGuardado;
        }
    });
});


    function guardarValores() {
    
        for (let i = 1; i <= 7; i++) {
            let weight = parseFloat(document.getElementById(`weightCG${i}`).textContent) || 0;
            let arm = parseFloat(document.getElementById(`armCG${i}`).textContent) || 0;
            localStorage.setItem(`weightCG${i}`, weight);
            localStorage.setItem(`armCG${i}`, arm);
        }
    
        for (let i = 1; i <= 6; i++) {
            let weightH = parseFloat(document.getElementById(`weightH${i}`).value) || 0;
            let armCGH = parseFloat(document.getElementById(`armCGH${i}`).value) || 0;
            localStorage.setItem(`weightH${i}`, weightH);
            localStorage.setItem(`armCGH${i}`, armCGH);
        }
    
        for (let i = 1; i <= 19; i++) {
            let IDH = parseFloat(document.getElementById(`IDH${i}`).textContent) || 0;
            let weightF = parseFloat(document.getElementById(`weightF${i}`).textContent) || 0;
            let armF = parseFloat(document.getElementById(`armF${i}`).textContent) || 0;
            localStorage.setItem(`IDH${i}`, IDH);
            localStorage.setItem(`weightF${i}`, weightF);
            localStorage.setItem(`armF${i}`, armF);
        }
    
        for (let i = 1; i <= 7; i++) {
            let arm = parseFloat(document.getElementById(`arms${i}`).textContent) || 0;
            localStorage.setItem(`arms${i}`, arm);
        }
    
        window.location.href = 'index.html';
    }
     

// Función para guardar el valor de cada deslizador en localStorage
function guardarValorDeslizador(idDeslizador, idSpan, keyLocalStorage) {
    const deslizador = document.getElementById(idDeslizador);
    
    if (deslizador) {
        const valor = deslizador.value;
        localStorage.setItem(keyLocalStorage, valor); // Guarda el valor en localStorage
        const valorSpan = document.getElementById(idSpan);
        if (valorSpan) {
            valorSpan.textContent = valor; // Actualiza el texto del span en index.html
        }
    }
}

// Función para cargar y mostrar los valores guardados en manifest.html
function cargarValoresDeslizadores() {
    const configuraciones = [
        { key: 'paxValue', selector: '.p2.slr2' },
        { key: 'sfValue', selector: '.cp2' },
        { key: 'srlValue', selector: '.l2' },
        { key: 'srcValue', selector: '.c2' },
        { key: 'srrValue', selector: '.r2' },
        { key: 'gValue', selector: '.cargo2' },
        { key: 'fuelValue', selector: '.mF2' },
        { key: 'fuelLandValue', selector: '.lF2' }
    ];

    configuraciones.forEach(config => {
        const destinoDiv = document.querySelector(config.selector);
        const valorGuardado = localStorage.getItem(config.key);

        if (destinoDiv && valorGuardado !== null) {
            destinoDiv.textContent = valorGuardado; // Muestra el valor en manifest.html
            calcularMomentos(); // Llama a la función de cálculo cuando el valor se actualiza
        }
    });
}

// Función para inicializar los valores de los deslizadores en index.html
function inicializarValoresDeslizadores() {
    const configuraciones = [
        { idDeslizador: 'escala-ps', idSpan: 'valor-ps', key: 'paxValue' },
        { idDeslizador: 'escala-sf', idSpan: 'valor-sf', key: 'sfValue' },
        { idDeslizador: 'escala-srl', idSpan: 'valor-srl', key: 'srlValue' },
        { idDeslizador: 'escala-src', idSpan: 'valor-src', key: 'srcValue' },
        { idDeslizador: 'escala-srr', idSpan: 'valor-srr', key: 'srrValue' },
        { idDeslizador: 'escala-g', idSpan: 'valor-g', key: 'gValue' },
        { idDeslizador: 'escala-fuel', idSpan: 'valor-fuel', key: 'fuelValue' },
        { idDeslizador: 'escala-fuelLand', idSpan: 'valor-fuelLand', key: 'fuelLandValue' }
    ];

    configuraciones.forEach(config => {
        const deslizador = document.getElementById(config.idDeslizador);
        const valorGuardado = localStorage.getItem(config.key);

        if (deslizador && valorGuardado !== null) {
            deslizador.value = valorGuardado; // Sincroniza el valor del deslizador
            const valorSpan = document.getElementById(config.idSpan);
            if (valorSpan) {
                valorSpan.textContent = valorGuardado; // Actualiza el texto en el span en index.html
            }
        }
    });
}

// Detectar cambios en localStorage desde manifest.html para actualizar automáticamente
window.addEventListener('storage', (event) => {
    const keys = [
        'paxValue', 'sfValue', 'srlValue', 'srcValue', 
        'srrValue', 'gValue', 'fuelValue', 'fuelLandValue'
    ];
    
    if (keys.includes(event.key)) {
        cargarValoresDeslizadores(); // Actualiza los divs en manifest.html cuando cambia algún valor
    }
});

// Eventos para cada deslizador en index.html para guardar el valor en localStorage
document.addEventListener('input', (event) => {
    const configMap = {
        'escala-ps': { span: 'valor-ps', key: 'paxValue' },
        'escala-sf': { span: 'valor-sf', key: 'sfValue' },
        'escala-srl': { span: 'valor-srl', key: 'srlValue' },
        'escala-src': { span: 'valor-src', key: 'srcValue' },
        'escala-srr': { span: 'valor-srr', key: 'srrValue' },
        'escala-g': { span: 'valor-g', key: 'gValue' },
        'escala-fuel': { span: 'valor-fuel', key: 'fuelValue' },
        'escala-fuelLand': { span: 'valor-fuelLand', key: 'fuelLandValue' }
    };

    const config = configMap[event.target.id];
    if (config) {
        guardarValorDeslizador(event.target.id, config.span, config.key);
    }
});

// Al cargar la página, inicializa o carga los valores según el HTML en uso
window.addEventListener('load', () => {
    inicializarValoresDeslizadores(); // Para index.html
    cargarValoresDeslizadores();      // Para manifest.html
});


// Configuración para los cálculos de momento
const elementosConfig = {
    Blanco: { valor1: ".blanco2", valor2: ".blanco3", resultado1: ".blanco4", valor3: ".blanco5", resultado2: ".blanco6" },
    p: { valor1: ".p2", valor2: ".p3", resultado1: ".p4", valor3: ".p5", resultado2: ".p6" },
    cp: { valor1: ".cp2", valor2: ".cp3", resultado1: ".cp4", valor3: ".cp5", resultado2: ".cp6" },
    l: { valor1: ".l2", valor2: ".l3", resultado1: ".l4", valor3: ".l5", resultado2: ".l6" },
    c: { valor1: ".c2", valor2: ".c3", resultado1: ".c4", valor3: ".c5", resultado2: ".c6" },
    r: { valor1: ".r2", valor2: ".r3", resultado1: ".r4", valor3: ".r5", resultado2: ".r6" },
    cargo: { valor1: ".cargo2", valor2: ".cargo3", resultado1: ".cargo4", valor3: ".cargo5", resultado2: ".cargo6" },
    hook: { valor1: ".hook2", valor2: ".hook3", resultado1: ".hook4", valor3: ".hook5", resultado2: ".hook6" },
    zW: { valor1: ".zW2", valor2: ".zW3", resultado1: ".zW4", valor3: ".zW5", resultado2: ".zW6" },
    mF: { valor1: ".mF2", valor2: ".mF3", resultado1: ".mF4", valor3: ".mF5", resultado2: ".mF6" },
    TW: { valor1: ".TW2", valor2: ".TW3", resultado1: ".TW4", valor3: ".TW5", resultado2: ".TW6" },
    uF: { valor1: ".uF2", valor2: ".uF3", resultado1: ".uF4", valor3: ".uF5", resultado2: ".uF6" },
    lF: { valor1: ".lF2", valor2: ".lF3", resultado1: ".lF4", valor3: ".lF5", resultado2: ".lF6" },
    LW: { valor1: ".LW2", valor2: ".LW3", resultado1: ".LW4", valor3: ".LW5", resultado2: ".LW6" }
};

// Función para calcular el momento basado en el conjunto de elementos
function calcularMomento(config) {
    const valor1 = document.querySelector(config.valor1);
    const valor2 = document.querySelector(config.valor2);
    const resultado1 = document.querySelector(config.resultado1);
    const valor3 = document.querySelector(config.valor3);
    const resultado2 = document.querySelector(config.resultado2);

    if (valor1 && valor2 && resultado1 && valor3 && resultado2) {
        const valor1Num = parseFloat(valor1.value || valor1.textContent) || 0;
        const valor2Num = parseFloat(valor2.value || valor2.textContent) || 0;
        const valor3Num = parseFloat(valor3.value || valor3.textContent) || 0;

        resultado1.textContent = valor1Num * valor2Num;
        resultado2.textContent = valor1Num * valor3Num;
    }
}

// Iterar sobre cada conjunto de elementos para aplicar la función de cálculo y asignar eventos
function calcularMomentos() {
    Object.values(elementosConfig).forEach(config => {
        calcularMomento(config); // Ejecutar el cálculo cada vez que cambia el valor en localStorage
    });
}

// Escuchar el evento input para actualizar en index.html y recalcular en manifest.html
document.addEventListener('input', (event) => {
    if (event.target.id === 'escala-ps') {
        guardarValorPax();
    }
});

// Al cargar la página, inicializa los valores
window.addEventListener('load', () => {
    inicializarValorPax(); // Para index.html
    cargarValorPax();      // Para manifest.html
});

   

// Función para transferir los valores de W&B.html a manifest.html
// Función para guardar los valores en localStorage desde W&B.html
function guardarValoresWnB() {
    const configuraciones = [
        { idSource: 'weightH1', key: 'arms0Value' },
        { idSource: 'arms1', key: 'arms1Value' },
        { idSource: 'arms2', key: 'arms2Value' },
        { idSource: 'arms3', key: 'arms3Value' },
        { idSource: 'arms4', key: 'arms4Value' },
        { idSource: 'arms5', key: 'arms5Value' },
        { idSource: 'arms6', key: 'arms6Value' },
        { idSource: 'arms7', key: 'arms7Value' }
    ];

    configuraciones.forEach(config => {
        const valorFuente = document.getElementById(config.idSource);
        if (valorFuente) {
            localStorage.setItem(config.key, valorFuente.textContent); // Guarda el valor en localStorage
        }
    });
}

// Función para transferir los valores de localStorage a manifest.html
function transferirValores() {
    const configuraciones = [
        { key: 'arms0Value', selector: '.blanco2' },
        { key: 'arms1Value', selector: '.cp3.slr3' },
        { key: 'arms2Value', selector: '.p3' },
        { key: 'arms3Value', selector: '.l3' },
        { key: 'arms4Value', selector: '.c3' },
        { key: 'arms5Value', selector: '.r3' },
        { key: 'arms6Value', selector: '.cargo3' },
        { key: 'arms7Value', selector: '.hook3' }
    ];

    configuraciones.forEach(config => {
        const valorGuardado = localStorage.getItem(config.key);
        const destinoDiv = document.querySelector(config.selector);
        
        if (destinoDiv && valorGuardado !== null) {
            destinoDiv.textContent = valorGuardado; // Transfiere el valor al div destino
        }
    });
}

// Llama a la función al cargar manifest.html
window.addEventListener('load', () => {
    transferirValores(); // Transfiere valores al cargar manifest.html
});

// Guarda valores en localStorage al cargar W&B.html
window.addEventListener('load', () => {
    guardarValoresWnB(); // Guarda valores al cargar W&B.html
});

