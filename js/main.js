async function loadEstaciones(){
	const response = await fetch("https://mattprofe.com.ar/proyectos/app-estacion/datos.php?mode=list-stations");
	const data = await response.json();

	return data;
}

document.addEventListener("DOMContentLoaded", () => {
	loadEstaciones().then( data => {
		console.log(data);
  
 		 data.forEach(info => {
 		 	createbtn(info)
 		 })

	})
})



function createbtn(info){
 
	const tpl = tpl_btn.content
	const clon = tpl.cloneNode(true)

	clon.querySelector(".card__estation").setAttribute("href", "./detalle.php?chipid="+info.chipid)
	clon.querySelector(".card__estation__header").innerHTML = info.apodo
	clon.querySelector(".card__estation__ubication").innerHTML = info.ubicacion
	clon.querySelector(".card__estation__views").innerHTML = info.visitas
	listcont.appendChild(clon)

}

