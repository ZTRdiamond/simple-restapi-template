module.exports = {
    name: "ping",
    path: "/api/ping",
    type: "get",
    code: async(req, res, { axios }) => {
        res.status(200).json({message: "pong!"})
    }
};