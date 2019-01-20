module.exports = class Renderer {
	constructor (element, autoRender = false) {
		this.element = element

		this.ctx = this.element.getContext('2d')
		this.entities = []

		if (autoRender) {
			this._repeatRender = () => {
				this.render()

				window.requestAnimationFrame(this._repeatRender)
			}

			this._repeatRender()
		}
	}

	render () {
		this._clearCanvas()

		for (let i = 0; i < this.entities.length; i++) {
			this.entities[i].render(this.ctx)
		}
	}

	add (entity) {
		this.entities.push(entity)
	}

	clear () {
		this.entities = []
	}

	_clearCanvas () {
		this.ctx.clearRect(0, 0, this.element.width, this.element.height)
	}
}