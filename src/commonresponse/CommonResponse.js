function response(code, message, data) {
    return {
      code: code,
      message: message,
      data: data
    };
}
  
function success(data) {
    return response(0, null, data);
}
  
function error(code, message) {
    return response(code, message, null);
}
  
module.exports = {success,error};