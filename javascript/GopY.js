// this function checks for the ID of sender and send comment to server
function sendComment() {
		
	// variables
	
	var id = $("#CMND").val();
	var fullName = $("#HoTen").val();
	var contentComment = $("#NoiDungGopY").val();
	var idPattern = new RegExp("^[0-9]{9,10}$");
	
	// program
	// check for emptyness of textfields and patterns
	if (fullName == "") {
		alert("Tên không được trống");
		$("#HoTen").focus();
        	return;
	}
	
	if (idPattern.test(id) == false) {
		alert("Số chứng minh không hợp lệ");
		$("#CMND").focus();
        	return;
	}
	
	if (contentComment == "") {
		alert("Nội dung góp ý không được trống");
		$("#NoiDungGopY").focus();
        	return;
	}
	
       	alert("Gửi góp ý thành công");
};
// end of sendComment
