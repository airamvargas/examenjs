count_tareas = 0;
realiz = 0;

relizadas = $("#t_realiz")
pendientes = $("#t_pend")

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
                    <h6 class="text-prioridad">${prioridad}</h6>
                </div>
                <div class="col-12">
                    <p class="text-descrip">${descrip}</p>
                </div>
            </div>
            <div class="row justify-content-end">
                <button data-tarea="${count_tareas}" class="btn btn-color update solid pd-x-20 btn-circle btn-sm mr-sm-3 mt-sm-2" type="button">Editar <i class="fa fa-trash" aria-hidden="true"></i></button>    
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
    let title = document.getElementById(id_tarea).querySelector('.card-title');
    let prioridad = document.getElementById(id_tarea).querySelector('.text-prioridad');
    let descrip = document.getElementById(id_tarea).querySelector('.text-descrip');
    switch(prioridad.textContent){
        case "Alta":
            id_prio = 1;
        break;
        case "Media":
            id_prio = 2;
        break;
        case "Baja":
            id_prio = 3;
        break;
        default:
            id_prio = 0
    }
    $("#upd_tarea").val(title.textContent);
    $("#upd_prioridad").val(id_prio);
    $("#upd_descripcion").val(descrip.textContent);
    $("#id_upd").val(id_tarea);
});

$(document).on('click', '.check_realizadas', function(){
    check = $(this).attr('id');
    let miCheckbox = document.getElementById(check)
    relizadas = $("#t_realiz")
    if (miCheckbox.checked) {
        realiz = realiz + 1;
        count_tareas = count_tareas - 1;       
    } else {
        realiz = realiz - 1;
        count_tareas = count_tareas + 1;      
    }
    relizadas.children().remove()
    pendientes.children().remove()
    pendientes.append(`<span class="contadores">${count_tareas}</span>`);
    relizadas.append(`<span class="contadores">${realiz}</span>`);
    
});

$(document).on('submit', '#upd_tarea', function(e){
    e.preventDefault();
    count_tareas = count_tareas + 1;
    descrip = $("#upd_descripcion").val()
    tarea = $("#upd_tarea").val();
    id_prior = parseFloat($("#upd_prioridad").val());
    id_tarea = $("#id_upd").val();
    form = document.getElementById('upd_tarea');

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

    let title = document.getElementById(id_tarea).querySelector('.card-title');
    let prior = document.getElementById(id_tarea).querySelector('.text-prioridad');
    let descripcion = document.getElementById(id_tarea).querySelector('.text-descrip');

    title.textContent = tarea
    prior.textContent = prioridad
    descripcion.textContent = descrip

    form.reset()
});
