count_tareas = 0; 

$(document).on('submit', '#add_tarea', function(e){
    e.preventDefault();
    count_tareas = count_tareas + 1;
    descrip = $("#descripcion").val()
    tarea = $("#tarea").val();
    id_prior = parseFloat($("#prioridad").val());
    lista_tareas = $("#lista_tareas")
    form = document.getElementById('add_tarea');

    switch(id_prior){
        case 1: 
            prioridad = "Alta"
        break;
        case 2:
            prioridad = "Media"
        break;
        case 3:
            prioridad = "Baja"
        break;
        default:
            prioridad = "SIN PRIORIDAD"
    }
    
    card_tareas = `<div id="${count_tareas}" class="card lista-tareas pb-3 my-1">
        <div class="card-body">
            <h5 class="card-title text-uppercase">${tarea}</h5>
            <div class="row">
                <div class="col-6 text-left tituto-card">
                    <h6>${prioridad}</h6>
                </div>
                <div class="col-12">
                    <p>${descrip}</p>
                </div>
            </div>
        </div>
    </div>`;

    lista_tareas.append(card_tareas)
    form.reset()
    console.log("HOLA ESTAMOS FUNCIONANDO")
});