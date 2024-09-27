
function guardarValores() {

    // datos del performanca

    let weightCG1 = parseFloat(document.getElementById('weightCG1').textContent);
    let armCG1 = parseFloat(document.getElementById('armCG1').textContent);
    let weightCG2 = parseFloat(document.getElementById('weightCG2').textContent);
    let armCG2 = parseFloat(document.getElementById('armCG2').textContent);
    let weightCG3 = parseFloat(document.getElementById('weightCG3').textContent);
    let armCG3 = parseFloat(document.getElementById('armCG3').textContent);
    let weightCG4 = parseFloat(document.getElementById('weightCG4').textContent);
    let armCG4 = parseFloat(document.getElementById('armCG4').textContent);
    let weightCG5 = parseFloat(document.getElementById('weightCG5').textContent);
    let armCG5 = parseFloat(document.getElementById('armCG5').textContent);
    let weightCG6 = parseFloat(document.getElementById('weightCG6').textContent);
    let armCG6 = parseFloat(document.getElementById('armCG6').textContent);
    let weightCG7 = parseFloat(document.getElementById('weightCG7').textContent);
    let armCG7 = parseFloat(document.getElementById('armCG7').textContent);

//datos de 6 helos 

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

// brazo del combustible segun la cantidad de combustible 

    let IDH1 = parseFloat(document.getElementById('IDH1').textContent);
    let weightF1 = parseFloat(document.getElementById('weightF1').textContent);
    let armF1 = parseFloat(document.getElementById('armF1').textContent);
    let IDH2 = parseFloat(document.getElementById('IDH2').textContent);
    let weightF2 = parseFloat(document.getElementById('weightF2').textContent);
    let armF2 = parseFloat(document.getElementById('armF2').textContent);
    let IDH3 = parseFloat(document.getElementById('IDH3').textContent);
    let weightF3 = parseFloat(document.getElementById('weightF3').textContent);
    let armF3 = parseFloat(document.getElementById('armF3').textContent);
    let IDH4 = parseFloat(document.getElementById('IDH4').textContent);
    let weightF4 = parseFloat(document.getElementById('weightF4').textContent);
    let armF4 = parseFloat(document.getElementById('armF4').textContent);
    let IDH5 = parseFloat(document.getElementById('IDH5').textContent);
    let weightF5 = parseFloat(document.getElementById('weightF5').textContent);
    let armF5 = parseFloat(document.getElementById('armF5').textContent);
    let IDH6 = parseFloat(document.getElementById('IDH6').textContent);
    let weight0F6 = parseFloat(document.getElementById('weightF6').textContent);
    let armF6 = parseFloat(document.getElementById('armF6').textContent);
    let IDH7 = parseFloat(document.getElementById('IDH7').textContent);
    let weightF7 = parseFloat(document.getElementById('weightF7').textContent);
    let armF7 = parseFloat(document.getElementById('armF7').textContent);
    let IDH8 = parseFloat(document.getElementById('IDH8').textContent);
    let weightF8 = parseFloat(document.getElementById('weightF8').textContent);
    let armF8 = parseFloat(document.getElementById('armF8').textContent);
    let IDH9 = parseFloat(document.getElementById('IDH9').textContent);
    let weightF9 = parseFloat(document.getElementById('weightF9').textContent);
    let armF9 = parseFloat(document.getElementById('armF9').textContent);
    let IDH10 = parseFloat(document.getElementById('IDH10').textContent);
    let weightF10 = parseFloat(document.getElementById('weightF10').textContent);
    let armF10 = parseFloat(document.getElementById('armF10').textContent);
    let IDH11 = parseFloat(document.getElementById('IDH11').textContent);
    let weightF11 = parseFloat(document.getElementById('weightF11').textContent);
    let armF11 = parseFloat(document.getElementById('armF11').textContent);
    let IDH12 = parseFloat(document.getElementById('IDH12').textContent);
    let weightF12 = parseFloat(document.getElementById('weightF12').textContent);
    let armF12 = parseFloat(document.getElementById('armF12').textContent);
    let IDH13 = parseFloat(document.getElementById('IDH13').textContent);
    let weightF13 = parseFloat(document.getElementById('weightF13').textContent);
    let armF13 = parseFloat(document.getElementById('armF13').textContent);
    let IDH14 = parseFloat(document.getElementById('IDH14').textContent);
    let weightF14 = parseFloat(document.getElementById('weightF14').textContent);
    let armF14 = parseFloat(document.getElementById('armF14').textContent);
    let IDH15 = parseFloat(document.getElementById('IDH15').textContent);
    let weightF15 = parseFloat(document.getElementById('weightF15').textContent);
    let armF15 = parseFloat(document.getElementById('armF15').textContent);
    let IDH16 = parseFloat(document.getElementById('IDH16').textContent);
    let weightF16 = parseFloat(document.getElementById('weightF16').textContent);
    let armF16 = parseFloat(document.getElementById('armF16').textContent);
    let IDH17 = parseFloat(document.getElementById('IDH17').textContent);
    let weightF17 = parseFloat(document.getElementById('weightF17').textContent);
    let armF17 = parseFloat(document.getElementById('armF17').textContent);
    let IDH18 = parseFloat(document.getElementById('IDH18').textContent);
    let weightF18 = parseFloat(document.getElementById('weightF18').textContent);
    let armF18 = parseFloat(document.getElementById('armF18').textContent);
    let IDH19 = parseFloat(document.getElementById('IDH19').textContent);
    let weightF19 = parseFloat(document.getElementById('weightF19').textContent);
    let armF19 = parseFloat(document.getElementById('armF19').textContent);

// posiciones de asientoscar, carga y hook

    let arms1 = parseFloat(document.getElementById('arms1').textContent);
    let arms2 = parseFloat(document.getElementById('arms2').textContent);
    let arms3 = parseFloat(document.getElementById('arms3').textContent);
    let arms4 = parseFloat(document.getElementById('arms4').textContent);
    let arms5 = parseFloat(document.getElementById('arms5').textContent);
    let arms6 = parseFloat(document.getElementById('arms6').textContent);
    let arms7 = parseFloat(document.getElementById('arms7').textContent);
    

   
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
    window.location.href = 'index.html';
}

