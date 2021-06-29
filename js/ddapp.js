	// put variables (connections to the web page / DOM) at the top
	// constant -> something that will never change / can't be redefined
	let puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
				dropZoneContainer = document.querySelector(".puzzle-board"),
				dragImages = document.querySelectorAll(".puzzle-image"),
				dropZones = document.querySelectorAll(".drop-zone");

	// functions go in the middle
function swapImages(){
	// swap out the draggable thumbnail images
	debugger;
}

function starDrag(){
	console.log("dragging" + this.dataset.piecenum);
}

function draggedOver (event) {}

function dropped(event){}

	// event handling at the bottom

dragimages.forEach(piece =>{
		piece.addEventListener("dragstart", starDrag, false)
	});

dragzones.forEach(zone =>{
	zone.addEventListener("drop", dropped, false)
	zone.addEventListener("draggover", draggedOver, false)
});

puzzleSelectors.forEach(buttin => button.addEventListener("click", swapImages))
