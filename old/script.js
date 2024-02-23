function loader() //Charge les paramètres pour le jour, le mois et l'année
{
	//Initialisation
	var joursParMois=[31,28,31,30,31,30,31,31,30,31,30,31];
	var moisNoms=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout"];
	var joursNoms=["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];

	//console.log("Page chargée");

	//Récupération de la date
	var maDate = new Date();

	//Récupération des valeurs
	var mois = maDate.getMonth();

	var jourSemaine = maDate.getDay();
	if(jourSemaine===0)
	{
		jourSemaine=6;
	}
	else
	{
		jourSemaine--;
	}
	//console.log(jourSemaine);

	var jourMois=maDate.getDate();
	var valueJourMois=jourMois/joursParMois[mois];

	var annee=maDate.getFullYear();

	//Mise à jour de l'affichage
	refMois = document.getElementById("month");
	refMois.style.width = (((mois+1)/12)*100)+"%";
	refMois.innerHTML = moisNoms[mois];

	refJourSemaine = document.getElementById("dayW");
	refJourSemaine.style.width = ((jourSemaine/7)*100)+"%";
	refJourSemaine.innerHTML = joursNoms[jourSemaine];

	refJourMois = document.getElementById("dayM");
	refJourMois.style.width = (valueJourMois*100)+"%";
	refJourMois.innerHTML = jourMois;

	refAnnee = document.getElementById("year");
	refAnnee.innerHTML=annee;

	actualiser();

}

function actualiser() //Change les paramètres pour les heures, minutes et secondes
{
	var maDate = new Date();

	//Récupération des valeurs
	var heures = maDate.getHours();

	var minutes = maDate.getMinutes();

	var secondes = maDate.getSeconds();


	//Mise à jour de l'affichage
	var refHeures = document.getElementById("hours");
	refHeures.style.width=(heures/24*100)+"%";
	refHeures.innerHTML = heures+"h";

	var refMinutes=document.getElementById("minutes");
	refMinutes.style.width=(minutes/60*100)+"%";
	refMinutes.innerHTML = minutes+"\'";

	var refSecondes=document.getElementById("seconds");
	refSecondes.style.width=(secondes/60*100)+"%";
	if(secondes>1)
	{
		refSecondes.innerHTML=secondes+"\'\'";
	}
	else
	{
		refSecondes.innerHTML=secondes+"";
	}

	setTimeout(actualiser, 1000);

}