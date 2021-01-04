// const sendErrorInJSONFormat = (res, error) => {
//     return {
//         sendError:  res.status(400).json({msg: error.message})
//         // ^does NOT WORK
//     }
// }

// module.exports = sendErrorInJSONFormat(); 
// // ^ can I just do module.exports = () => for my whole file?