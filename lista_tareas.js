count_tareas = 0;
realiz = 0;

relizadas = $("#t_realiz")
pendientes = $("#t_pend")
console.log(count_tareas)
console.log(realiz)
pendientes.append(`<span class="contadores">${count_tareas}</span>`);
relizadas.append(`<span class="contadores">${realiz}</span>`);


$(document).on('submit', '#add_tarea', function(e){
    e.preventDefault();
    count_tareas = count_tareas + 1;
    descrip = $("#descripcion").val()
    tarea = $("#tarea").val();
    id_prior = parseFloat($("#prioridad").val());
    lista_tareas = $("#lista_tareas")
    pendientes = $("#t_pend")
    form = document.getElementById('add_tarea');
    pend = count_tareas;

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
            <h5 class="card-title text-uppercase"><input type="checkbox" id="check_${count_tareas}" class="check_realizadas" value="1"> ${tarea}</h5>
            <div class="row">
                <div class="col-6 text-left tituto-card">
                    <h6>${prioridad}</h6>
                </div>
                <div class="col-12">
                    <p>${descrip}</p>
                </div>
            </div>
            <div class="row justify-content-end">
                <button data-tarea="${count_tareas}" class="btn btn-warning update solid pd-x-20 btn-circle btn-sm mr-sm-3 mt-sm-2" type="button">Editar <i class="fa fa-trash" aria-hidden="true"></i></button>    
                <button data-tarea="${count_tareas}" class="btn btn-danger delete solid pd-x-20 btn-circle btn-sm mr-sm-3 mt-sm-2" type="button">Eliminar <i class="fa fa-trash" aria-hidden="true"></i></button>
            </div>
        </div>
    </div>`;

    lista_tareas.append(card_tareas)
    pendientes.children().remove()
    pendientes.append(`<span class="contadores">${count_tareas}</span>`);
    form.reset()
    console.log("HOLA ESTAMOS FUNCIONANDO")
});

$(document).on('click', '.delete', function(){
    id_tarea = $(this).data('tarea');
    div_tarea = document.getElementById(id_tarea)
    div_tarea.classList.add('d-none')
});

$(document).on('click', '.update', function(){
    id_tarea = $(this).data('tarea');
    div_tarea = document.getElementById(id_tarea)
    title = document.getElementById(div_tarea).querySelector('.card-title');
    title.textContent;
});

$(document).on('click', '.check_realizadas', function(){
    realiz = realiz + 1;
    relizadas = $("#t_realiz")
    relizadas.children().remove()
    relizadas.append(`<span class="contadores">${realiz}</span>`);
})

