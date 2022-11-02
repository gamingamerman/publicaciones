const PaidPost = require("./PaidPost");

class Newspaper extends PaidPost {
    constructor(district) {
        super();
        this.district = district;
    }
}

module.exports = Newspaper;