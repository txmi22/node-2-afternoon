messages = []
let id = 0

module.exports = {
    createMessage: (req, res) => {
        const {time, text} = req.body
        let message = {
            id,
            text,
            time
        }
        messages.push(message)
        id++
        res.status(200).send(messages)
    },
    readMessage: (req, res) => {
        res.status(200).send(messages)
    },
    updateMessage: (req, res) => {
        const {id} = req.params
        const {time, text} = req.body
        let index = messages.findIndex(value => value.id === +id)
        messages = {
            id: id,
            text: text || messages[index].text,
            time: messages[index].time
        }
        res.status(200).send(messages)
    },
    deleteMessage: (req, res) => {
        const {id} = req.params
        let index = messages.findIndex(value => value.id === +id)
        messages.splice(index, 1)
        res.status(200).send(messages)
    }
}
