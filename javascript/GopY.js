// this function checks for the ID of sender and send comment to server
function sendComment() {
	// variables
	var id = $("#CMND").val();
	var idPattern = new RegExp("^[0-9]{9,10}$");
	
	// program
    if (idPattern.test(id)) {
        alert("Gửi góp ý thành công");
        return;
    }
	
	alert("Số chứng minh không hợp lệ");
	return;
};
// end of sendComment