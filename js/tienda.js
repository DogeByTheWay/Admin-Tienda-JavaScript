let listaArticulos=[];	

	function getArticulos(){
		let xhr=new XMLHttpRequest();
		xhr.open("GET","http://localhost:3000/articulos");
		xhr.responseType="json";
		xhr.send();
		xhr.onload=()=>{
			if(xhr.status==200){
				pintaArticulos(xhr.response)
			}
		};
	}
	function pintaArticulos(listaArticulos){
		let contenedor=document.getElementById("contenedor");
		let resultado="<table class='table table-hover'><tr><td>ID</td><td>Nombre</td><td>Descripcion</td><td>Precio</td><td></td></tr>";
		listaArticulos.forEach(e => {
			resultado+=`<tr><td>${e.codigo}</td><td>${e.nombre}</td><td>${e.descripcion}</td><td>${e.precio}</td><td><button style="margin-right:20px;" id="${e.codigo}" class="btn btn-primary">Modificar</button><button id="${e.codigo}" class="btn btn-danger">Eliminar</button></td></tr>`;
		});
		resultado+="</table>";
		contenedor.innerHTML=resultado;
	}

	function modificaArticulo(){}

	function borraArticulo(){}

	function abrirModalCrear(){
		document.getElementById("miDialogo").showModal();
	}
	function cierraModal(){
		document.getElementById("miDialogo").close();
	}

	window.onload=()=>{
		getArticulos();
		document.getElementById("agregar").onclick=abrirModalCrear;
		document.getElementById("close").onclick=cierraModal;
	}


