function distanceFromHqInBlocks(pickup) {
	return Math.abs(pickup - 42);
}

function distanceFromHqInFeet(pickup) {
	return distanceFromHqInBlocks(pickup) * 264;
}

function distanceTravelledInFeet(start_block, end_block) {
	return Math.abs(start_block - end_block) * 264;
}

function calculatesFarePrice(start, destination) {
	let distance = distanceTravelledInFeet(start, destination)
	if (distance <= 400) 
		return 0;
	else if (distance <= 2000)
		return (distance - 400) * 2 / 100;
	else if (distance <= 2500)
		return 25;
	else
		return "cannot travel that far"
}
