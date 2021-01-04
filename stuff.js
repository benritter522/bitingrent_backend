const showFunction = () => {
    return {
        show: console.log
    }
}

module.exports = showFunction(); 
// ^ can I just do module.exports = () => for my whole stuff.js file?