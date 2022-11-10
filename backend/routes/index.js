const express = require("express")
const router = express.Router()
const userEndpoints = require("./user")

router.get('/', (req, res) => {
    res.send('Testing Routes')
})

router.get('/user', userEndpoints.getAllUsers)
router.post('/user', userEndpoints.createNewUser)
router.put('/user', userEndpoints.editUser)
router.delete('/user', userEndpoints.deleteUser)

// router.get('/events')
// router.post('/events')
// router.delete('/events')
// router.put('/events')


module.exports = router;