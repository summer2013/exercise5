class Base {
	constructor() {
		this.event = {};
	}

	on(methodName, callback) {
		if (methodName && typeof callback  === "function") {
			this.event[methodName] = callback;
		}
	}

	trigger(methodName, value) {
		var eventHandler = this.event[methodName];
		if (methodName && typeof eventHandler === "function") {
			eventHandler.call(this, value);
		}
	}
}

module.exports = Base
