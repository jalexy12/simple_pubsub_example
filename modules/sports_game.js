module.exports = function(){
	this.points = 0;
	this.subscribers = [];

	this.addSubscriber = function(subscriber){
		this.subscribers.push(subscriber);
	}

	this.updatePoints = function(){
		this.points++;
		this.subscribers.forEach((subscriber) => {
			subscriber.notify(this.points);
		})
	}
}