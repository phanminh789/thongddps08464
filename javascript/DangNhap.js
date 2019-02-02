// this function checks the valiable account and responses arrcording to kind of account
function doSignIn() {
	// variables
	var kindOfAccount = "";
	
	// program
	// check if teacher logins
	if ($("#TenTaiKhoan").val() === "gv" && $("#MatKhau").val() === "123") {
		actionLogin("Giáo viên", afterLoginTeacher);
		// we need to transfer to main page
		$("#CaNhanGiaoVien").click();
		return;
	}
	
	// check if student logins
	if ($("#TenTaiKhoan").val() === "hs" && $("#MatKhau").val() === "123") {
		actionLogin("Học sinh", afterLoginStudent);
		// we need to transfer to main page
		$("#CaNhanHocSinh").click();
		return;
	}
	
	alert("Đăng nhập thất bại");
	return;
};
// end of doSignIn

// this function responses based on the kind of account
function actionLogin(kindOfAccount, afterLoginItems) {
	alert(kindOfAccount + " đăng nhập thành công");
	$("#DangNhap, #DangKy").hide();
	$(afterLoginItems + ", #DangXuat").show();
}