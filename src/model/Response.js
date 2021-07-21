class Response {
    success = false;
    message = '';
    error_code = 401;
    data = {}
    Error = (error_code, message = '') => {
        this.success = false;
        this.data = {};
        this.error_code = error_code || 401;
        this.message = message || '';
    }
    Success = (data,message = '') => {
        this.success = true;
        this.data = data || {};
        this.message = message || '';
    }
}
export default Response;