const Post = require("./Post");

class PaidPost extends Post{
    constructor(price) {
        super();
        this.price = price;
    }
}

module.exports = PaidPost;