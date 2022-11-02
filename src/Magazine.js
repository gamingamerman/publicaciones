const PaidPost = require("./PaidPost");

class Magazine extends PaidPost {
    constructor(topic) {
        super()
        this.topic = topic;
    }
}

module.exports = Magazine;