var game = new canvax.Renderer(document.getElementById('gameCanvas'), true)

var fish = new canvax.Image({
	'x': 50,
	'y': 600,
	'width': 400 / 4,
	'height': 400 / 4,
	'source': 'http://piq.codeus.net/static/media/userpics/piq_164380_400x400.png'
})

var fps = new canvax.Text({
	'x': 30,
	'y': 100,
	'text': 'Hey',
	'font': '80px Arial'
})

const testRect = new canvax.Rectangle({
	'x': 300,
	'y': 300,
	'width': 200,
	'height': 200,
	'backgroundColor': '#FFFFFF'
})

testRect.on('mousein', () => {
	console.log('in')

	testRect.backgroundColor = '#000000'
	game.element.style.cursor = 'pointer'
})

testRect.on('mouseout', () => {
	console.log('out')

	testRect.backgroundColor = '#FFFFFF'
	game.element.style.cursor = 'default'
})

fish.on('click', () => {
	alert('fishclick')
})

game.add(fps)
game.add(fish)
game.add(testRect)

document.addEventListener("keypress", (e) => {
	var key = e.key.toLowerCase()

	if (key === " ") {
		velY = 5
	}
})

var velY = 10

setInterval(() => {
	velY += -0.1

	fish.y -= velY

	if (fish.y > game.element.height || fish.y < 0) {
		//console.log("Game over!");
	}
}, 8)

const Pipe = class Pipe {
	constructor () {
		const randomOffset = Math.floor(Math.random() * 100)
		const gapSize = 440 + Math.floor(Math.random() * 50)

		this.rectTop = new canvax.Rectangle({
			'x': game.element.width + 50,
			'y': randomOffset + gapSize,
			'width': 120,
			'height': 700,
			'backgroundColor': '#01C200',
			'borderColor': '#003600',
			'borderWeight': 5
		})

		this.rectBottom = new canvax.Rectangle({
			'x': game.element.width + 50,
			'y': randomOffset - gapSize,
			'width': 120,
			'height': 700,
			'backgroundColor': '#01C200',
			'borderColor': '#003600',
			'borderWeight': 5
		})

		this.rectBottom.on('mousedown', () => {
			this.rectBottom.backgroundColor = '#FFFFFF'
		})

		setInterval(() => {
			this.rectTop.x -= 3
			this.rectBottom.x -= 3
		}, 5)
	}
}
	

setInterval(() => {
	console.log("Adding pipe.")

	var pipeGen = new Pipe()
	game.add(pipeGen.rectTop)
	game.add(pipeGen.rectBottom)
}, 2000)