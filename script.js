function calcularOvulacion() {
  const fechaInput = document.getElementById("fecha").value;
  const resultadoDiv = document.getElementById("resultado");

  if (!fechaInput) {
    resultadoDiv.innerHTML = "<p class='text-danger'>Por favor, ingresa una fecha válida.</p>";
    return;
  }

  const fechaInicio = new Date(fechaInput);
  const ovulacion = new Date(fechaInicio);
  ovulacion.setDate(fechaInicio.getDate() + 14);

  const inicioFertilidad = new Date(ovulacion);
  inicioFertilidad.setDate(ovulacion.getDate() - 4);

  const finFertilidad = new Date(ovulacion);
  finFertilidad.setDate(ovulacion.getDate() + 1);

  // Reproducir sonido breve
  const audio = new Audio("rizz.mp3");
  audio.play();

  resultadoDiv.innerHTML = `
    <div class="alert alert-info">
      <p><strong>Día estimado de ovulación:</strong> ${ovulacion.toLocaleDateString()}</p>
      <p><strong>Días fértiles:</strong> ${inicioFertilidad.toLocaleDateString()} al ${finFertilidad.toLocaleDateString()}</p>
    </div>
  `;
}