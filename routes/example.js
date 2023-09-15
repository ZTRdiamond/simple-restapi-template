module.exports = {
    name: "example",
    path: "/example",
    type: "get",
    code: async(req, res, { axios }) => {
        res.json({message: "this is example"})
    }
}