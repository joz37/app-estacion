<?php 

 ?>


 <!DOCTYPE html>
 <html lang="en">
 <head>
 	<meta charset="UTF-8">
 	<meta name="viewport" content="width=device-width, initial-scale=1.0">
 	<link rel="stylesheet" href="./css/styles.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

 	<title>Document</title>
 </head>
 <body>
 	<wrapper id="wrapper">
<div class="panel lato">
 			<div class="panel__leave cp"> <a href="panel.html"><span class="material-symbols-outlined">west</span></a></div>
	 			<div class="panel__cont">
		 			<div class="panel__header">
		 				<div class="panel__date">
		 					<div id="date"></div>
		 					<div id="time"></div>
		 				</div>
		 				<div class="panel__place">
		 					<span class="material-symbols-outlined">location_on</span>
		 					<div id="place"> </div>
		 				</div>
		 			</div>
		 			<div class="panel__temp dflex">
		 				<div class="panel__temp__div">
		 					<div class="panel__temp__header">
		 						<span class="material-symbols-outlined">thermometer</span>
		 						Temperatura
		 					</div>
		 					<div class="panel__temp__cont">
		 						<div class="panel__temp__cont__big" id="temperatura">
	 
		 						</div>
		 						<div class="panel__temp__cont__axel">
		 							<div class="panel__temp__cont__axel__max">
		 								<div class="panel__temp__cont__axel__cont__header"><span class="material-symbols-outlined">north</span>Maxima</div>
		 								<div class="panel__temp__cont__axel__cont__value" id="tempmax"></div>
		 							</div>
		 							<div class="panel__temp__cont__axel__min">
		 								<div class="panel__temp__cont__axel__cont__header"><span class="material-symbols-outlined">south</span> Minima</div>
		 								<div class="panel__temp__cont__axel__cont__value" id="tempmin"> </div>
		 							</div>
		 						</div>
		 					</div>
		 				</div>

		 				<div class="panel__temp__div">
		 					<div class="panel__temp__header">
		 						<span class="material-symbols-outlined">boy</span>
		 						Sensación
		 					</div>
		 					<div class="panel__temp__cont">
		 						<div class="panel__temp__cont__big" id="sens">
		 							
		 						</div>
		 						<div class="panel__temp__cont__axel">
		 							<div class="panel__temp__cont__axel__max">
		 								<div class="panel__temp__cont__axel__cont__header"><span class="material-symbols-outlined">north</span>Maxima</div>
		 								<div class="panel__temp__cont__axel__cont__value " id="sensmax"></div>
		 							</div>
		 							<div class="panel__temp__cont__axel__min">
		 								<div class="panel__temp__cont__axel__cont__header"><span class="material-symbols-outlined">south</span> Minima</div>
		 								<div class="panel__temp__cont__axel__cont__value" id="sensmin"></div>
		 							</div>
		 						</div>
		 					</div>
		 				</div>
		 			</div>

		 			<div class="panel__hume dnone">
		 				<div class="panel__hume__div">
		 					<div class="panel__temp__header">
		 						<span class="material-symbols-outlined">water_drop</span>
		 						Humedad
		 					</div>
		 					<div class="panel__temp__cont">
		 						<div class="panel__temp__cont__big" id="hume">

		 						</div>
		 					</div>
		 				</div>
		 			</div>

		 			<div class="panel__vie dnone">
		 				<div class="panel__vie__div">
		 					<div class="panel__temp__header">
		 						<span class="material-symbols-outlined">air</span>
		 						Viento
		 					</div>
		 					<div class="panel__temp__cont">
		 						<div class="panel__temp__cont__big" id="vientito">
	 
		 						</div>
		 						<div class="panel__temp__cont__axel">
		 							<div class="panel__temp__cont__axel__max">
		 								<div class="panel__temp__cont__axel__cont__header"><span class="material-symbols-outlined">north</span>Maximo</div>
		 								<div class="panel__temp__cont__axel__cont__value" id="maxvie"></div>
		 								<div class="panel__temp__cont__axel__cont__value" id="veleta"></div>
		 							</div>
		 						</div>
		 					</div>
		 				</div>

		 			</div>

		 			<div class="panel__fwi dnone">
		 				<div class="panel__fwi__div">
		 					<div class="panel__temp__header">
		 						<span class="material-symbols-outlined">local_fire_department</span>
		 						Fuego
		 					</div>
		 					<div class="panel__temp__cont">

		 						<div class="panel__temp__cont__axel">
		 							<div class="panel__hume__cont__axel">
		 								<div class="panel__hume__cont__axel__cont__header">FFMC</div>
		 								<div class="panel__temp__cont__axel__cont__value" id="id_ffmc"></div>
		 								<div class="panel__hume__cont__axel__cont__header">DMC</div>
		 								<div class="panel__temp__cont__axel__cont__value" id="id_dmc"></div>
		 								<div class="panel__hume__cont__axel__cont__header">DC</div>
		 								<div class="panel__temp__cont__axel__cont__value" id="id_dc"></div>
		 							</div>
		 							<div class="panel__hume__cont__axel">
		 								<div class="panel__hume__cont__axel__cont__header">ISI</div>
		 								<div class="panel__temp__cont__axel__cont__value" id="id_isi"></div>
		 								<div class="panel__hume__cont__axel__cont__header">BUI</div>
		 								<div class="panel__temp__cont__axel__cont__value" id="id_bui"></div>
		 								<div class="panel__hume__cont__axel__cont__header">FWI</div>
		 								<div class="panel__temp__cont__axel__cont__value" id="id_fwi"></div>
		 							</div>
		 						</div>
		 					</div>
		 				</div>

		 			</div>

		 			<div class="panel__pre dnone">
		 				<div class="panel__pre__div">
		 					<div class="panel__temp__header">
		 						<span class="material-symbols-outlined">arrow_downward</span>
		 						Presión
		 					</div>
		 					<div class="panel__temp__cont">
		 						<div class="panel__temp__cont__big" id="presion">
	 
		 						</div>
		 					</div>
		 				</div>


		 			</div>
	 			</div>
	 			<div class="graficos">
	 				<div class="graficos__contenedor">
		 				<canvas class="canvas" id="chart"></canvas> 					
	 					<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
	 				</div>
 			</div>
 			</div>

 		<div class="btn-container">
 			<div class="btn-div cp" id="btn_temp">
 				<div class="btn-div-cont"><span class="material-symbols-outlined">thermometer </span><div id="tempe"></div></div>
 			</div>
 			<div class="btn-div cp" id="btn_hume">
 				<div class="btn-div-cont"><span class="material-symbols-outlined">water_drop</span><div id="humedad"></div></div>
 			</div>
 			<div class="btn-div cp" id="btn_vie">
 				<div class="btn-div-cont"><span class="material-symbols-outlined">air</span><div id="air"></div></div>
 			</div>
 			<div class="btn-div cp" id="btn_fwi">
 				<div class="btn-div-cont"><span class="material-symbols-outlined">local_fire_department</span><div id="fwi_btn"></div></div>
 			</div>
 			<div class="btn-div cp" id="btn_presion">
 				<div class="btn-div-cont"><span class="material-symbols-outlined">arrow_downward</span><div id="presion_btn"></div></div>
 			</div>
 		</div>
 	</wrapper>

 	<template id="tpl_detalle">
	 		
 	</template>

 	<script type="text/javascript" src="./js/detalle.js"></script> 
 </body>
 </html>