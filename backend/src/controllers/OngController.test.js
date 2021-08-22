const OngController = require("./OngController")
// @ponicode
describe("OngController.index", () => {
    test("0", async () => {
        await OngController.index("GET", 429)
    })

    test("1", async () => {
        await OngController.index("POST", 404)
    })

    test("2", async () => {
        await OngController.index("GET", 200)
    })

    test("3", async () => {
        await OngController.index("PUT", 404)
    })

    test("4", async () => {
        await OngController.index("DELETE", 400)
    })

    test("5", async () => {
        await OngController.index(undefined, Infinity)
    })
})
