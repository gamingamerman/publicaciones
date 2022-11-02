class Post {
    #subscribers;

    constructor(name) {
        this.name = name;
        this.summary = calculate()
        this.#subscribers = [];
    }

    get getSubscribers() {
        return this.#subscribers;
    }

    attach(User) {
        this.#subscribers.push(User)
    }
}

module.exports = Post;