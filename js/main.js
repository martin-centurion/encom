const clientes = [
    {
        id: 55517,
        direccion: "Bdo Irigoyen 680, Florida Oeste",
        mail: "correo@correo.com",
        celular: 5491156555517,
        ubicacion: {
            estado: "Provincia de Buenos Aires",
            id: "Provincia de Buenos Aires",
        }
    },

    {
        id: 55518,
        direccion: "Tamborini 4845, Saavedra, Caba",
        mail: "correo@correo.com",
        celular: 5491156555517,
        ubicacion: {
            estado: "Caba",
            id: "Caba",
        }
    },
    {
        id: 55519,
        direccion: "Tamborini 4845, Saavedra, Caba",
        mail: "correo@correo.com",
        celular: 5491156555517,
        ubicacion: {
            estado: "Caba",
            id: "Caba",
        }
    },
    {
        id: 55520,
        direccion: "Tamborini 4845, Saavedra, Caba",
        mail: "correo@correo.com",
        celular: 5491156555517,
        ubicacion: {
            estado: "Caba",
            id: "Caba",
        }
    },
];

const contenedorClientes = document.querySelector("#contenedor-destinos");


function cargarClientes () {

    clientes.forEach(clientes => {

        const div = document.createElement("div");
        div.classList.add("todos-destinos");
        div.innerHTML = `
                 <div class="destino-agregado">

                     <div class="destino-agregado-cliente">
                    <small>Numero cliente</small>
                    <h3>${clientes.id}</h3>
                    </div>

                    <div class="destino-cliente-direccion">
                    <small>Direccion</small>
                    <p>${clientes.direccion}</p>
                    </div>

                    <div class="destino-cliente-horario-entrega">
                    <small>Celular</small>
                    <p>${clientes.celular}</p>
                    </div>

                    <div>
                    <button class="destino-cliente-agregar"><i class="bi bi-send-check-fill"></i></button>
                    </div>
            
                </div>
        `;
        contenedorClientes.append(div);
    })

}

cargarClientes();


/*<div class="destino-agregado">

                    <div class="destino-agregado-cliente">
                            <small>Numero cliente</small>
                            <h3>0001</h3>
                        </div>
                        <div class="destino-cliente-direccion">
                            <small>Direccion</small>
                            <p>Direccion de entrega</p>
                        </div>
                        <div class="destino-cliente-horario-entrega">
                            <small>Horario de entrega</small>
                            <p>Antes 14hs</p>
                        </div>
                        <div>
                            <button class="destino-cliente-agregar"><i class="bi bi-send-check-fill"></i></button>
                        </div>
                        
                    </div>*/