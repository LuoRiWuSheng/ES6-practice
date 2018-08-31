var handler = {
	id: "123",
	init: function (parent1) {
		(() => {
			this.say(parent1);
		})();
	},
	init2: function(p) {
		(function() {
			console.log(this);  // 在Node中,这里的this是global对象，浏览器中就是window而不是handler对象了
			this.say(p);
		})();
	},
	say: function (p) {
		console.log(p);
	}
};
handler.init2(2);