

const logoutvenue = (req, res) => {

    console.log("hello");
    res.cookie('jwt', '', { maxAge: 0 })

   return res.json({
        message: 'success'
    })
}


module.exports = logoutvenue;