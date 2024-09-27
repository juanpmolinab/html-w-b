

function guardarValores() {
    // Crear un objeto para almacenar los valores
    let helicopterData = {
        weightCG1: parseFloat(document.getElementById('weightCG1').value),
        armCG1: parseFloat(document.getElementById('armCG1').value),
        weightCG2: parseFloat(document.getElementById('weightCG2').value),
        armCG2: parseFloat(document.getElementById('armCG2').value),
        weightCG3: parseFloat(document.getElementById('weightCG3').value),
        armCG3: parseFloat(document.getElementById('armCG3').value),
        weightCG4: parseFloat(document.getElementById('weightCG4').value),
        armCG4: parseFloat(document.getElementById('armCG4').value),
        weightCG5: parseFloat(document.getElementById('weightCG5').value),
        armCG5: parseFloat(document.getElementById('armCG5').value),
        weightCG6: parseFloat(document.getElementById('weightCG6').value),
        armCG6: parseFloat(document.getElementById('armCG6').value),
        weightCG7: parseFloat(document.getElementById('weightCG7').value),
        armCG7: parseFloat(document.getElementById('armCG7').value),
        weightH1: parseFloat(document.getElementById('weightH1').value),
        armCGH1: parseFloat(document.getElementById('armCGH1').value),
        weightH2: parseFloat(document.getElementById('weightH2').value),
        armCGH2: parseFloat(document.getElementById('armCGH2').value),
        weightH3: parseFloat(document.getElementById('weightH3').value),
        armCGH3: parseFloat(document.getElementById('armCGH3').value),
        IDH1: parseFloat(document.getElementById('IDH1').value),
        weightF1: parseFloat(document.getElementById('weightF1').value),
        armF1: parseFloat(document.getElementById('armF1').value),
        IDH2: parseFloat(document.getElementById('IDH2').value),
        weightF2: parseFloat(document.getElementById('weightF2').value),
        armF2: parseFloat(document.getElementById('armF2').value),
        IDH3: parseFloat(document.getElementById('IDH3').value),
        weightF3: parseFloat(document.getElementById('weightF3').value),
        armF3: parseFloat(document.getElementById('armF3').value),
        IDH4: parseFloat(document.getElementById('IDH4').value),
        weightF4: parseFloat(document.getElementById('weightF4').value),
        armF4: parseFloat(document.getElementById('armF4').value),
        IDH5: parseFloat(document.getElementById('IDH5').value),
        weightF5: parseFloat(document.getElementById('weightF5').value),
        armF5: parseFloat(document.getElementById('armF5').value),
        IDH6: parseFloat(document.getElementById('IDH6').value),
        weightF6: parseFloat(document.getElementById('weightF6').value),
        armF6: parseFloat(document.getElementById('armF6').value),
        IDH7: parseFloat(document.getElementById('IDH7').value),
        weightF7: parseFloat(document.getElementById('weightF7').value),
        armF7: parseFloat(document.getElementById('armF7').value),
        IDH8: parseFloat(document.getElementById('IDH8').value),
        weightF8: parseFloat(document.getElementById('weightF8').value),
        armF8: parseFloat(document.getElementById('armF8').value),
        IDH9: parseFloat(document.getElementById('IDH9').value),
        weightF9: parseFloat(document.getElementById('weightF9').value),
        armF9: parseFloat(document.getElementById('armF9').value),
        IDH10: parseFloat(document.getElementById('IDH10').value),
        weightF10: parseFloat(document.getElementById('weightF10').value),
        armF10: parseFloat(document.getElementById('armF10').value),
        IDH11: parseFloat(document.getElementById('IDH11').value),
        weightF11: parseFloat(document.getElementById('weightF11').value),
        armF11: parseFloat(document.getElementById('armF11').value),
        IDH12: parseFloat(document.getElementById('IDH12').value),
        weightF12: parseFloat(document.getElementById('weightF12').value),
        armF12: parseFloat(document.getElementById('armF12').value),
        IDH13: parseFloat(document.getElementById('IDH13').value),
        weightF13: parseFloat(document.getElementById('weightF13').value),
        armF13: parseFloat(document.getElementById('armF13').value),
        IDH14: parseFloat(document.getElementById('IDH14').value),
        weightF14: parseFloat(document.getElementById('weightF14').value),
        armF14: parseFloat(document.getElementById('armF14').value),
        IDH15: parseFloat(document.getElementById('IDH15').value),
        weightF15: parseFloat(document.getElementById('weightF15').value),
        armF15: parseFloat(document.getElementById('armF15').value),
        IDH16: parseFloat(document.getElementById('IDH16').value),
        weightF16: parseFloat(document.getElementById('weightF16').value),
        armF16: parseFloat(document.getElementById('armF16').value),
        IDH17: parseFloat(document.getElementById('IDH17').value),
        weightF17: parseFloat(document.getElementById('weightF17').value),
        armF17: parseFloat(document.getElementById('armF17').value),
        IDH18: parseFloat(document.getElementById('IDH18').value),
        weightF18: parseFloat(document.getElementById('weightF18').value),
        armF18: parseFloat(document.getElementById('armF18').value),
        IDH19: parseFloat(document.getElementById('IDH19').value),
        weightF19: parseFloat(document.getElementById('weightF19').value),
        armF19: parseFloat(document.getElementById('armF19').value),
        arms1: parseFloat(document.getElementById('arms1').value),
        arms2: parseFloat(document.getElementById('arms2').value),
        arms3: parseFloat(document.getElementById('arms3').value),
        arms4: parseFloat(document.getElementById('arms4').value),
        arms5: parseFloat(document.getElementById('arms5').value),
        arms6: parseFloat(document.getElementById('arms6').value),
        arms7: parseFloat(document.getElementById('arms7').value),
        // Añade más campos aquí
    };

    // Guardar el objeto en localStorage
    localStorage.setItem('helicopterData', JSON.stringify(helicopterData));

    // Redirigir a la página de cálculo (HTML 2)
    window.location.href = 'helicopterWeightBalace.html';
}



function guardarValores() {
    // Obtener los valores de los helicópteros
    let weightH1 = parseFloat(document.getElementById('weightH1').value);
    let armCGH1 = parseFloat(document.getElementById('armCGH1').value);
    let weightH2 = parseFloat(document.getElementById('weightH2').value);
    let armCGH2 = parseFloat(document.getElementById('armCGH2').value);
    let weightH3 = parseFloat(document.getElementById('weightH3').value);
    let armCGH3 = parseFloat(document.getElementById('armCGH3').value);
    // Guardar los valores en localStorage
    localStorage.setItem('weightH1', weightH1);
    localStorage.setItem('armCGH1', armCGH1);
    localStorage.setItem('weightH2', weightH2);
    localStorage.setItem('armCGH2', armCGH2);
    localStorage.setItem('weightH3', weightH3);
    localStorage.setItem('armCGH3', armCGH3);

    // Redirigir a la página de cálculo (HTML 2)
    window.location.href = 'helicopterWeightBalace.html';
}


function guardarValores() {

    let weightCG1 = parseFloat(document.getElementById('weightCG1').value);
    let armCG1 = parseFloat(document.getElementById('armCG1').value);
    let weightCG = parseFloat(document.getElementById('weightCG2').value);
    let armCG2 = parseFloat(document.getElementById('armCG2').value);
    let weightCG3 = parseFloat(document.getElementById('weightCG3').value);
    let armCG3 = parseFloat(document.getElementById('armCG3').value);
    let weightCG4 = parseFloat(document.getElementById('weightCG4').value);
    let armCG4 = parseFloat(document.getElementById('armCG4').value);
    let weightCG5 = parseFloat(document.getElementById('weightCG5').value);
    let armCG5 = parseFloat(document.getElementById('armCG5').value);
    let weightCG6 = parseFloat(document.getElementById('weightCG6').value);
    let armCG6 = parseFloat(document.getElementById('armCG6').value);
    let weightCG7 = parseFloat(document.getElementById('weightCG7').value);
    let armCG7 = parseFloat(document.getElementById('armCG7').value);
    let weightH1 = parseFloat(document.getElementById('weightH1').value);
    let armCGH1 = parseFloat(document.getElementById('armCGH1').value);
    let weightH2 = parseFloat(document.getElementById('weightH2').value);
    let armCGH2 = parseFloat(document.getElementById('armCGH2').value);
    let weightH3 = parseFloat(document.getElementById('weightH3').value);
    let armCGH3 = parseFloat(document.getElementById('armCGH3').value);
    let weightH4 = parseFloat(document.getElementById('weightH4').value);
    let armCGH4 = parseFloat(document.getElementById('armCGH4').value);
    let weightH5 = parseFloat(document.getElementById('weightH5').value);
    let armCGH5 = parseFloat(document.getElementById('armCGH5').value);
    let weightH6 = parseFloat(document.getElementById('weightH6').value);
    let armCGH6 = parseFloat(document.getElementById('armCGH6').value);
    let IDH1 = parseFloat(document.getElementById('IDH1').value);
    let weightF1 = parseFloat(document.getElementById('weightF1').value);
    let armF1 = parseFloat(document.getElementById('armF1').value);
    let IDH2 = parseFloat(document.getElementById('IDH2').value);
    let weightF2 = parseFloat(document.getElementById('weightF2').value);
    let armF2 = parseFloat(document.getElementById('armF2').value);
    let IDH3 = parseFloat(document.getElementById('IDH3').value);
    let weightF3 = parseFloat(document.getElementById('weightF3').value);
    let armF3 = parseFloat(document.getElementById('armF3').value);
    let IDH4 = parseFloat(document.getElementById('IDH4').value);
    let weightF4 = parseFloat(document.getElementById('weightF4').value);
    let armF4 = parseFloat(document.getElementById('armF4').value);
    let IDH5 = parseFloat(document.getElementById('IDH5').value);
    let weightF5 = parseFloat(document.getElementById('weightF5').value);
    let armF5 = parseFloat(document.getElementById('armF5').value);
    let IDH6 = parseFloat(document.getElementById('IDH6').value);
    let weight0F6 = parseFloat(document.getElementById('weightF6').value);
    let armF6 = parseFloat(document.getElementById('armF6').value);
    let IDH7 = parseFloat(document.getElementById('IDH7').value);
    let weightF7 = parseFloat(document.getElementById('weightF7').value);
    let armF7 = parseFloat(document.getElementById('armF7').value);
    let IDH8 = parseFloat(document.getElementById('IDH8').value);
    let weightF8 = parseFloat(document.getElementById('weightF8').value);
    let armF8 = parseFloat(document.getElementById('armF8').value);
    let IDH9 = parseFloat(document.getElementById('IDH9').value);
    let weightF9 = parseFloat(document.getElementById('weightF9').value);
    let armF9 = parseFloat(document.getElementById('armF9').value);
    let IDH10 = parseFloat(document.getElementById('IDH10').value);
    let weightF10 = parseFloat(document.getElementById('weightF10').value);
    let armF10 = parseFloat(document.getElementById('armF10').value);
    let IDH11 = parseFloat(document.getElementById('IDH11').value);
    let weightF11 = parseFloat(document.getElementById('weightF11').value);
    let armF11 = parseFloat(document.getElementById('armF11').value);
    let IDH12 = parseFloat(document.getElementById('IDH12').value);
    let weightF12 = parseFloat(document.getElementById('weightF12').value);
    let armF12 = parseFloat(document.getElementById('armF12').value);
    let IDH13 = parseFloat(document.getElementById('IDH13').value);
    let weightF13 = parseFloat(document.getElementById('weightF13').value);
    let armF13 = parseFloat(document.getElementById('armF13').value);
    let IDH14 = parseFloat(document.getElementById('IDH14').value);
    let weightF14 = parseFloat(document.getElementById('weightF14').value);
    let armF14 = parseFloat(document.getElementById('armF14').value);
    let IDH15 = parseFloat(document.getElementById('IDH15').value);
    let weightF15 = parseFloat(document.getElementById('weightF15').value);
    let armF15 = parseFloat(document.getElementById('armF15').value);
    let IDH16 = parseFloat(document.getElementById('IDH16').value);
    let weightF16 = parseFloat(document.getElementById('weightF16').value);
    let armF16 = parseFloat(document.getElementById('armF16').value);
    let IDH17 = parseFloat(document.getElementById('IDH17').value);
    let weightF17 = parseFloat(document.getElementById('weightF17').value);
    let armF17 = parseFloat(document.getElementById('armF17').value);
    let IDH18 = parseFloat(document.getElementById('IDH18').value);
    let weightF18 = parseFloat(document.getElementById('weightF18').value);
    let armF18 = parseFloat(document.getElementById('armF18').value);
    let IDH19 = parseFloat(document.getElementById('IDH19').value);
    let weightF19 = parseFloat(document.getElementById('weightF19').value);
    let armF19 = parseFloat(document.getElementById('armF19').value);
    let arms1 = parseFloat(document.getElementById('arms1').value);
    let arms2 = parseFloat(document.getElementById('arms2').value);
    let arms3 = parseFloat(document.getElementById('arms3').value);
    let arms4 = parseFloat(document.getElementById('arms4').value);
    let arms5 = parseFloat(document.getElementById('arms5').value);
    let arms6 = parseFloat(document.getElementById('arms6').value);
    let arms7 = parseFloat(document.getElementById('arms7').value);


   
    localStorage.setItem('weightCG1', weightCG1);
    localStorage.setItem('armCG1', armCG1);
    localStorage.setItem('weightCG1', weightCG2);
    localStorage.setItem('armCG1', armCG2);
    localStorage.setItem('weightCG1', weightCG3);
    localStorage.setItem('armCG1', armCG3);
    localStorage.setItem('weightCG1', weightCG4);
    localStorage.setItem('armCG1', armCG4);
    localStorage.setItem('weightCG1', weightCG5);
    localStorage.setItem('armCG1', armCG5);
    localStorage.setItem('weightCG1', weightCG6);
    localStorage.setItem('armCG1', armCG6);
    localStorage.setItem('weightCG1', weightCG7);
    localStorage.setItem('armCG1', armCG7);
    localStorage.setItem('weightH1', weightH1);
    localStorage.setItem('armCGH1', armCGH1);
    localStorage.setItem('weightH2', weightH2);
    localStorage.setItem('armCGH2', armCGH2);
    localStorage.setItem('weightH3', weightH3);
    localStorage.setItem('armCGH3', armCGH3);
    localStorage.setItem('weightH3', weightH4);
    localStorage.setItem('armCGH3', armCGH4);
    localStorage.setItem('weightH3', weightH5);
    localStorage.setItem('armCGH3', armCGH5);
    localStorage.setItem('weightH3', weightH6);
    localStorage.setItem('armCGH3', armCGH6);
    localStorage.setItem('IDH1', IDH1);
    localStorage.setItem('weightF1', weightF1);
    localStorage.setItem('armF1', armF1);
    localStorage.setItem('IDH2', IDH2);
    localStorage.setItem('weightF2', weightF2);
    localStorage.setItem('armF2', armF2);
    localStorage.setItem('IDH3', IDH3);
    localStorage.setItem('weightF3', weightF3);
    localStorage.setItem('armF3', armF3);
    localStorage.setItem('IDH4', IDH4);
    localStorage.setItem('weightF4', weightF4);
    localStorage.setItem('armF4', armF4);
    localStorage.setItem('IDH5', IDH5);
    localStorage.setItem('weightF5', weightF5);
    localStorage.setItem('armF5', armF5);
    localStorage.setItem('IDH6', IDH6);
    localStorage.setItem('weightF6', weightF6);
    localStorage.setItem('armF6', armF6);
    localStorage.setItem('IDH7', IDH7);
    localStorage.setItem('weightF7', weightF7);
    localStorage.setItem('armF7', armF7);
    localStorage.setItem('IDH8', IDH8);
    localStorage.setItem('weightF8', weightF8);
    localStorage.setItem('armF8', armF8);
    localStorage.setItem('IDH9', IDH9);
    localStorage.setItem('weightF9', weightF9);
    localStorage.setItem('armF9', armF9);
    localStorage.setItem('IDH10', IDH10);
    localStorage.setItem('weightF10', weightF10);
    localStorage.setItem('armF10', armF10);
    localStorage.setItem('IDH11', IDH11);
    localStorage.setItem('weightF11', weightF11);
    localStorage.setItem('armF11', armF11);
    localStorage.setItem('IDH12', IDH12);
    localStorage.setItem('weightF12', weightF12);
    localStorage.setItem('armF12', armF12);
    localStorage.setItem('IDH13', IDH13);
    localStorage.setItem('weightF13', weightF13);
    localStorage.setItem('armF13', armF13);
    localStorage.setItem('IDH14', IDH14);
    localStorage.setItem('weightF14', weightF14);
    localStorage.setItem('armF14', armF14);
    localStorage.setItem('IDH15', IDH15);
    localStorage.setItem('weightF15', weightF15);
    localStorage.setItem('armF15', armF15);
    localStorage.setItem('IDH16', IDH16);
    localStorage.setItem('weightF16', weightF16);
    localStorage.setItem('armF16', armF16);
    localStorage.setItem('IDH17', IDH17);
    localStorage.setItem('weightF17', weightF17);
    localStorage.setItem('armF17', armF17);
    localStorage.setItem('IDH18', IDH18);
    localStorage.setItem('weightF18', weightF18);
    localStorage.setItem('armF18', armF18);
    localStorage.setItem('IDH19', IDH19);
    localStorage.setItem('weightF19', weightF19);
    localStorage.setItem('armF19', armF19);
    localStorage.setItem('arms1', arms1);
    localStorage.setItem('arms2', arms2);
    localStorage.setItem('arms3', arms3);
    localStorage.setItem('arms4', arms4);
    localStorage.setItem('arms5', arms5);
    localStorage.setItem('arms6', arms6);
    localStorage.setItem('arms7', arms7);


    // Redirigir a la página de cálculo (HTML 2)
    window.location.href = 'helicopterWeightBalace.html';
}



function guardarValores() {
    // Definir el rango de números para los IDs de los inputs
    for (let i = 1; i <= 6; i++) {
        // Obtener el valor de cada input por su ID
        let weight = parseFloat(document.getElementById('weightH' + i).value);
        let armCG = parseFloat(document.getElementById('armCGH' + i).value);
        
        // Guardar los valores en localStorage
        localStorage.setItem('weightH' + i, weight);
        localStorage.setItem('armCGH' + i, armCG);
    }
}

// Agregar eventos 'input' a todos los inputs para actualizar localStorage en tiempo real
for (let i = 1; i <= 6; i++) {
    document.getElementById('weightH' + i).addEventListener('input', guardarValores);
    document.getElementById('armCGH' + i).addEventListener('input', guardarValores);
}

// Cargar los valores guardados en localStorage al cargar la página
window.addEventListener('load', function() {
    for (let i = 1; i <= 6; i++) {
        let storedWeight = localStorage.getItem('weightH' + i);
        let storedArmCG = localStorage.getItem('armCGH' + i);
        
        if (storedWeight !== null) {
            document.getElementById('weightH' + i).value = storedWeight;
        }
        if (storedArmCG !== null) {
            document.getElementById('armCGH' + i).value = storedArmCG;
        }
    }
});






function actualizarSumaArm() {
    // Obtener los valores de los inputs
    const sf = parseInt(document.getElementById('escala-sf').value) || 0;
    const armsf = /*parseFloat(localStorage.getItem('arms1')); */ 89
    const msf = sf * armsf
    const srl = parseInt(document.getElementById('escala-srl').value) || 0;
    const armsrl = /*parseFloat(localStorage.getItem('arms3'));*/ 135
    const msrl = srl * armsrl
    const src = parseInt(document.getElementById('escala-src').value) || 0;
    const armsrc = /* parseFloat(localStorage.getItem('arms4'));*/ 135
    const msrc = src * armsrc
    const ps = parseInt(document.getElementById('escala-ps').value) || 0;
    const armps = /*parseFloat(localStorage.getItem('arms2'));*/ 89
    const mps = ps * armps
    const srr = parseInt(document.getElementById('escala-srr').value) || 0;
    const armsrr = /* parseFloat(localStorage.getItem('arms5')); */135
    const msrr = srr * armsrr
    const g = parseInt(document.getElementById('escala-g').value) || 0;
    const armg = /*parseFloat(localStorage.getItem('arms6'));*/ 168
    const mg = g * armg
    
    
    /* tengo arreglar esto
    
    const fuel = parseInt(document.getElementById('escala-fuel').value) || 0;
    const armsf = parseFloat(localStorage.getItem('arms1'));
*/


    // Recuperar los valores del helicóptero desde localStorage
    const heli = parseFloat(localStorage.getItem('weightH1'));
    const armCG1 = /*parseFloat(localStorage.getItem('armCG1'));*/177.5
    const mHeli = heli * armCG1
    
        const sumaTotalarm = sf + srl + src + ps + srr + g   /*+ fuel */  + heli;
        const sumaMoment = msf + msrl + msrc + mps + msrr + mg + mHeli
        const armTotal = sumaMoment / sumaTotalarm

    // Mostrar la suma total en el elemento con id="takeoffw"
    
    document.getElementById('takeoffArm').innerText = armTotal;


    /*  (por arreglar) 
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
    */
}

// Agregar event listeners a los inputs para que se actualice la suma cuando se modifiquen
document.getElementById('escala-sf').addEventListener('input', actualizarSumaArm);
document.getElementById('escala-srl').addEventListener('input', actualizarSumaArm);
document.getElementById('escala-src').addEventListener('input', actualizarSumaArm);
document.getElementById('escala-ps').addEventListener('input', actualizarSumaArm);
document.getElementById('escala-srr').addEventListener('input', actualizarSumaArm);
document.getElementById('escala-g').addEventListener('input', actualizarSumaArm);
document.getElementById('escala-fuel').addEventListener('input', actualizarSumaArm);
document.getElementById('escala-fuelLand').addEventListener('input', actualizarSumaArm);


actualizarSumaArm();




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
    
    /*
    // calcular el valor del brazo del combustible

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
    const momentUsableFuel = fuelWeight * arm;

 

    // Recuperar los valores del helicóptero desde localStorage
    const heli = parseFloat(localStorage.getItem('weightH1'));
    const armCG1 = parseFloat(localStorage.getItem('armCG1'));
    const mHeli = heli * armCG1;*/
    
        const sumaTotalarm = sf + srl + src + ps + srr + g/* + usableFuel*/ + heli;
        const sumaMoment = msf + msrl + msrc + mps + msrr + mg + mHeli /*+ momentUsableFuel;*/
        const armTotal = sumaMoment / sumaTotalarm;

    // Mostrar la suma total en el elemento con id="takeoffw"
    
    document.getElementById('takeoffArm').innerText = armTotal.toFixed(1);

    /*  (por arreglar) 
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
    */
}

// Agregar event listeners a los inputs para que se actualice la suma cuando se modifiquen
document.getElementById('escala-sf').addEventListener('input', actualizarSumaArm);
document.getElementById('escala-srl').addEventListener('input', actualizarSumaArm);
document.getElementById('escala-src').addEventListener('input', actualizarSumaArm);
document.getElementById('escala-ps').addEventListener('input', actualizarSumaArm);
document.getElementById('escala-srr').addEventListener('input', actualizarSumaArm);
document.getElementById('escala-g').addEventListener('input', actualizarSumaArm);
document.getElementById('escala-fuel').addEventListener('input', actualizarSumaArm);
document.getElementById('escala-fuelLand').addEventListener('input', actualizarSumaArm);


actualizarSumaArm();

