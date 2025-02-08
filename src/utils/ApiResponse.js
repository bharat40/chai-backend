class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}



// This class is a structured response wrapper for API responses. It ensures that every response follows a consistent format.

/** 
{
    "statusCode": 200,
    "data": [
        { "id": 1, "name": "John Doe" },
        { "id": 2, "name": "Jane Doe" }
    ],
    "message": "Users fetched successfully",
    "success": true
}
    */