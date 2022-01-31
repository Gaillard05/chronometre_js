let afficheur = document.getElementById("afficheur");

let startTemps = 0;
let debut = 0;
let fin = 0;
let dif = 0;
let timeId = 0;
let millsec = 0;
let second = 0;
let minute = 0;
let heure = 0;

function afficher(){
    afficheur.innerText += heure+':'+'0'+minute+':'+'0'+second+':'+'0'+'0'+millsec;
}

afficher();


function chrono(){
	fin = new Date();
	dif = fin - debut;
	dif = new Date(dif);
	millsec = dif.getMilliseconds();
	second = dif.getSeconds();
	minute = dif.getMinutes();
	heure = dif.getHours()-1;
	
	if (minute < 10){
		minute = '0' + minute;
	}
	if (second < 10){
		second = '0' + second;
	}
	if(millsec < 10){
		millsec = '00' + millsec;
	}
	else if(millsec < 100){
		millsec = '0' + millsec;
	}
		afficheur.innerHTML =  heure+':'+minute + ':' + second + ':' + millsec;
		timeId = setTimeout("chrono()", 10);
}

function depart(param1){
	let btnDep = param1.innerText = "départ";
	debut = new Date();
if(btnDep == "départ"){
		chrono();
	}
}

function continu(){
    debut = new Date() - dif;
    debut = new Date(debut);

    chrono();
}

function pause(){
	
	clearTimeout(timeId);
}

function reset(){
    afficheur.innerText = '0'+':'+'00'+':'+'00'+':'+'000';
    debut = new Date();

    pause();
}

function resultat(){
	let resultAffich = document.getElementById("result");
	resultAffich.style.backgroundColor = "white";
	resultAffich.style.textAlign = "center";
	resultAffich.innerText += heure+':'+ minute + ':' + second + ':' + millsec + "\n";
}