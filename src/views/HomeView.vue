<script setup>

</script>
<template>
  <div class="home">
    <section class="hero py-5 bg-dark text-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="display-4 mb-4">Compromís amb el Medi Ambient</h1>
            <p class="lead">Descobreix les nostres iniciatives per combatre el canvi climàtic i reduir la petjada de carboni.</p>
            <div class="d-flex gap-3 mt-4">
              <router-link to="/carbonfootprint" class="btn btn-success">Petjada de Carboni</router-link>
              <router-link to="/climatic
              4change" class="btn btn-outline-light">Canvi Climàtic</router-link>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="" alt="Medi Ambient" class="img-fluid rounded-4 shadow">
          </div>
        </div>
      </div>
    </section>
        <!-- Grafica -->
    <section>
      <div class="container">
    
      </div>
    </section>

    <!-- Resum de les iniciatives -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-center mb-5">Principals Iniciatives</h2>
        
        <div class="row g-4">
          <!-- Petjada de Carboni -->
          <div class="col-md-6">
            <div class="card h-100 border-success shadow-sm">
              <div class="card-header bg-success bg-opacity-10">
                <h3 class="h5 mb-0 text-success">
                  <i class="bi bi-leaf-fill me-2"></i>Petjada de Carboni
                </h3>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Electrificació de flotes amb creixement del 92% en 2023</li>
                  <li class="list-group-item">Sistema de Gestió Ambiental ISO 14001</li>
                  <li class="list-group-item">Reducció d'emissions: 372.557,87 tCO²e en 2023</li>
                  <li class="list-group-item">Foment d'energia verda i reciclatge</li>
                </ul>
                <router-link to="/carbon-footprint" class="btn btn-outline-success mt-3">
                  Més informació
                </router-link>
              </div>
            </div>
          </div>

          <!-- Canvi Climàtic -->
          <div class="col-md-6">
            <div class="card h-100 border-primary shadow-sm">
              <div class="card-header bg-primary bg-opacity-10">
                <h3 class="h5 mb-0 text-primary">
                  <i class="bi bi-globe2 me-2"></i>Impacte Climàtic
                </h3>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Augment temperatura global: +1.1°C des de 1900</li>
                  <li class="list-group-item">Nivell CO₂ atmosfèric: 416 ppm</li>
                  <li class="list-group-item">Reducció gel Àrtic: -13% per dècada</li>
                  <li class="list-group-item">Augment nivell del mar: 3.3 mm anual</li>
                </ul>
                <router-link to="/climatic-change" class="btn btn-outline-primary mt-3">
                  Més informació
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Objectius 2030 -->
    <section class="bg-light py-5">
      <div class="container">
        <h2 class="text-center mb-4">Objectius de Reducció d'Emissions 2030</h2>
        <div class="progress" style="height: 25px">
          <div class="progress-bar bg-success" style="width: 30%">30% (2025)</div>
          <div class="progress-bar bg-info" style="width: 30%">60% (2027)</div>
          <div class="progress-bar bg-warning" style="width: 20%">80% (2030)</div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

.hero {
  background: linear-gradient(to right, #1e293b, #0f172a);
}

.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.text-success {
  color: #2e856e !important;
}

.btn-success, .bg-success {
  background-color: #2e856e !important;
  border-color: #2e856e !important;
}

.btn-outline-success {
  color: #2e856e !important;
  border-color: #2e856e !important;
}

.btn-outline-success:hover {
  background-color: #2e856e !important;
  color: white !important;
}
</style>