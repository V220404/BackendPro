

const asynchandler = (requestHandler) =>{
    (req , res , next ) =>{
        Promise . resolve(requestHandler(req , res , next ))
.catch((err) => next(err))    }
}

export { asynchandler };

// const asynchandler = (fn)=>async(req , res , next )=>{
//     try {
//         await(req,res,next)
//     } catch (error) {
//        res.send(err.code || 500).json({
//         sucess:false,
//         message:err.message
//        })
//     }

// }
