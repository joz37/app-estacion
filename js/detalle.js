let url = new URLSearchParams(document.location.search);
let chipid = url.get('chipid') 


async function loadEstaciones(){
	const response = await fetch("https://mattprofe.com.ar/proyectos/app-estacion/datos.php?chipid=" + chipid + "&cant=5")
	const data = await response.json();

	return data;
}

let temp = []
let fec = []
let hora = ""
let hum = []; // humedad
let vie = []; // viento
let fwi = []; // fuego
let pre = []; // presion
let datosPalGrafico = ""
let section = ""
let mycharto = null
document.addEventListener("DOMContentLoaded", () => {
	
	addVisita()

	loadEstaciones().then( data => {
		console.log(data);

  
		data.forEach(info =>{
			temp.unshift(info.temperatura);
			hora = info.fecha.split(" ")[1]
			dia = info.fecha.split(" ")[0]
			fec.unshift(hora.split(":")[0]+":"+hora.split(":")[1])
			hum.unshift(info.humedad);
			vie.unshift(info.viento);
			fwi.unshift(info.fwi);
 
			pre.unshift(info.presion);


			

		})
	console.log(vie)
 	
 
	renderCharts(temp)
	refreshId = setInterval(refresh,60000,data);

	// PANEL HEADER 
	date.innerHTML = dia;
	time.innerHTML = hora;
	place.innerHTML = data[0].ubicacion


	// TEMPERATURA
	temperatura.innerHTML = data[0].temperatura
	tempmax.innerHTML = data[0].tempmax
	tempmin.innerHTML = data[0].tempmin
	sens.innerHTML = data[0].sensacion
	sensmax.innerHTML = data[0].sensamax
	sensmin.innerHTML = data[0].sensamin


	// HUMEDAD
	hume.innerHTML = data[0].humedad

	// VIENTO
	vientito.innerHTML = data[0].viento
	maxvie.innerHTML = data[0].maxviento
	veleta.innerHTML = data[0].veleta

	// FUEGO
	id_ffmc.innerHTML = data[0].ffmc
	id_dmc.innerHTML = data[0].dmc
	id_dc.innerHTML = data[0].dc
	id_isi.innerHTML = data[0].isi
	id_bui.innerHTML = data[0].bui
	id_fwi.innerHTML = data[0].fwi

	// PRESIÓN
	presion.innerHTML = data[0].presion


	// BOTONES
	tempe.innerHTML = data[0].temperatura
	humedad.innerHTML = data[0].humedad
	air.innerHTML = data[0].viento
	fwi_btn.innerHTML = fireDanger(data[0].fwi) 
	presion_btn.innerHTML = data[0].presion

	});


}

)


function refresh(data){


	// PANEL HEADER 
	date.innerHTML = dia;
	time.innerHTML = hora;
	place.innerHTML = data[0].ubicacion


	// TEMPERATURA
	temperatura.innerHTML = data[0].temperatura
	tempmax.innerHTML = data[0].tempmax
	tempmin.innerHTML = data[0].tempmin
	sens.innerHTML = data[0].sensacion
	sensmax.innerHTML = data[0].sensamax
	sensmin.innerHTML = data[0].sensamin


	// HUMEDAD
	hume.innerHTML = data[0].humedad

	// VIENTO
	vientito.innerHTML = data[0].viento
	maxvie.innerHTML = data[0].maxviento
	veleta.innerHTML = data[0].veleta

	// FUEGO
	id_ffmc.innerHTML = data[0].ffmc
	id_dmc.innerHTML = data[0].dmc
	id_dc.innerHTML = data[0].dc
	id_isi.innerHTML = data[0].isi
	id_bui.innerHTML = data[0].bui
	id_fwi.innerHTML = data[0].fwi

	// PRESIÓN
	presion.innerHTML = data[0].presion


	// BOTONES
	tempe.innerHTML = data[0].temperatura
	humedad.innerHTML = data[0].humedad
	air.innerHTML = data[0].viento
	fwi_btn.innerHTML = fireDanger(data[0].fwi) 
	presion_btn.innerHTML = data[0].presion



	temp.unshift(data[0].temperatura);
	hora = data[0].fecha.split(" ")[1]
	dia = data[0].fecha.split(" ")[0]
	fec.unshift(hora.split(":")[0]+":"+hora.split(":")[1])
	hum.unshift(data[0].humedad);
	vie.unshift(data[0].viento);
	fwi.unshift(data[0].fwi);

	pre.unshift(data[0].presion);

	temp.pop();
	fec.pop();
	hum.pop();
	vie.pop();
	fwi.pop();
	pre.pop();



		



	if (document.querySelector(".panel__temp").classList.add("dflex")) {
		renderCharts(temp)
	} 

	if (document.querySelector(".panel__hume").classList.add("dflex")) {
		renderCharts(hum)
	
	} 
	if (document.querySelector(".panel__vie").classList.add("dflex")){ 
		renderCharts(vie) 
			
	} 
	if (document.querySelector(".panel__fwi").classList.add("dflex")) {
		renderCharts(fwi)
				
	} 
	if (document.querySelector(".panel__pre").classList.add("dflex")) {
		renderCharts(pre)
	}

 

		
}


function putalldnone(){
	document.querySelector(".panel__temp").classList.add("dnone")
	document.querySelector(".panel__hume").classList.add("dnone")
	document.querySelector(".panel__vie").classList.add("dnone")
	document.querySelector(".panel__fwi").classList.add("dnone")
	document.querySelector(".panel__pre").classList.add("dnone")

}



async function addVisita(){
	const response = await fetch("https://mattprofe.com.ar/proyectos/app-estacion/datos.php?chipid=" + chipid +"&mode=visit-station")
	const data = await response.json();

	return data;
}


btn_temp.addEventListener("click", event =>{
	putalldnone()
	document.querySelector(".panel__temp").classList.add("dflex")
	document.querySelector(".panel__temp").classList.remove("dnone")
	section = "temp"
	
	renderCharts(temp)
})

btn_hume.addEventListener("click", event =>{
	putalldnone()
	document.querySelector(".panel__hume").classList.add("dflex")
	document.querySelector(".panel__hume").classList.remove("dnone")
	section = "hum"
	
	renderCharts(hum)
})

btn_vie.addEventListener("click", event =>{
	putalldnone()
	document.querySelector(".panel__vie").classList.add("dflex")
	document.querySelector(".panel__vie").classList.remove("dnone")
	section = "vie"
	
	renderCharts(vie)
})

btn_fwi.addEventListener("click", event =>{
	putalldnone()
	document.querySelector(".panel__fwi").classList.add("dflex")
	document.querySelector(".panel__fwi").classList.remove("dnone")
	section = "fwi"
	
	renderCharts(fwi)
})

btn_presion.addEventListener("click", event =>{
	putalldnone()
	document.querySelector(".panel__pre").classList.add("dflex")
	document.querySelector(".panel__pre").classList.remove("dnone")
	section = "pre"
	
	renderCharts(pre)
})







function fireDanger(fwi){
	let fwiFloat = parseFloat(fwi)
	
	if(fwiFloat>=50){
		return "Extremo"
	}else{
		if(fwiFloat>=38){
			return "Muy alto"
		}else{
			if(fwiFloat>=21.3){
				return "Alto"
			}else{
				if(fwiFloat>=11.2){
					return "Moderado"
				}else{
					if(fwiFloat>=5.2){
						return "Bajo"
					}else{
						return "Muy bajo"
					}
				}
			}
		}
	}

}



function renderCharts(datosPalGrafico){

	// si el objeto grÃ¡fico ya esta instanciado lo destruyo para que se vuelva a crear limpio
	if(mycharto!=null){
        mycharto.destroy();
    }

	const mic = document.getElementById('chart');
    mycharto = new Chart(mic, {
    type: "line",
  	data: {
		    labels: fec,
		    datasets: [{
		      data: datosPalGrafico
		    }],

		     
		  },
		 options: {

				
		  plugins: {
		    legend: {
		      	display: false
		    }
		  }
		}
    })

}