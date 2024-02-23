const canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const ctx = canvas.getContext("2d");

const sleep = ms => new Promise(r => setTimeout(r, ms));
const divisions = 60;

async function anim() 
{
	while(true)
	{
		for (let i = 0; i < divisions; i++) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.lineWidth = 5;
			ctx.strokeStyle = "#FFFFFF";
			ctx.beginPath();
			ctx.arc(canvas.width / 2, canvas.height / 2, 50, - Math.PI / 2,2*Math.PI*(i/divisions) - Math.PI / 2);
			ctx.stroke();
			await sleep(1000);
		}
	}
}

anim();