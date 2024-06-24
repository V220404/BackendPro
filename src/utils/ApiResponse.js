class ApiResponse{
    constructor(statusCode , data , message  = "Success "){
        this.statusCode = statusCode
        this.data  = data
        this.messsage = messsage
        this.success = statusCode <400 
    }
}