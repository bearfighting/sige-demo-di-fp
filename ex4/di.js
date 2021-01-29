const awilix = require("awilix");
// create a container
const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
})
// example config json
const config = {
    server: '8.8.8.8'
}


//now in user controller we can directly resolve config, without the need of importing any config file.
class UserController {
    constructor({ config }) {
        // notice how deps are injected in constructor
        this.config = config
    }

    print() {
        console.log(JSON.stringify(this.config));
    }
}

// register config and user controller to our container
container.register({
    config: awilix.asValue(config),
    userController: awilix.asClass(UserController)
})

container.resolve("userController").print();
