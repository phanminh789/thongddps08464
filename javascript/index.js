/**
 * @author: Đinh Đạt Thông
 * */

var afterLoginStudent = "#CaNhanHocSinh, #LichHoc, #Diem";
var afterLoginTeacher = "#CaNhanGiaoVien, #LichDay";

$(document).ready(function() {
	// program
	/* part 0: when the page is first loaded */
	// we load the page TrangChu after all document has been loaded
	loadPageContent("Xin chào", "#TrangChu", "TrangChu.html");
	$("#MinorPageContent").load("../" + "SuKien.html");
	
	// we also hide some items that required login
	$(afterLoginStudent + ", " + afterLoginTeacher + ", #DangXuat").hide();	
	/* end of part 0: when the page is first loaded */
	
	/* part 1: we create functions for every button on the navigation bar */
	$("#TrangChu").click(function() {
		loadPageContent("Xin chào", "#TrangChu", "TrangChu.html");
	});
	
	$("#GioiThieu").click(function() {
		loadPageContent("Giới thiệu", "#GioiThieu", "GioiThieu.html");
	});
	
	$("#LienHe").click(function() {
		loadPageContent("Liên hệ", "#LienHe", "LienHe.html");
	});
	
	$("#GopY").click(function() {
		loadPageContent("Góp ý", "#GopY", "GopY.html");
	});
	
	$("#HoiDap").click(function() {
		loadPageContent("Hỏi & Đáp", "#HoiDap", "HoiDap.html");
	});
	
	$("#DangNhap").click(function() {
		loadPageContent("Đăng nhập", "#DangNhap", "DangNhap.html");
	});
	
	$("#DangKy").click(function() {
		loadPageContent("Đăng ký", "#DangKy", "DangKy.html");
	});
	
	$("#CaNhanGiaoVien").click(function() {
		loadPageContent("Cá nhân", "#CaNhanGiaoVien", "CaNhanGiaoVien.html");
	});
	
	$("#LichDay").click(function() {
		loadPageContent("Lịch dạy", "#LichDay", "LichDay.html");
	});
	
	$("#CaNhanHocSinh").click(function() {
		loadPageContent("Cá nhân", "#CaNhanHocSinh", "CaNhanHocSinh.html");
	});
	
	$("#LichHoc").click(function() {
		loadPageContent("Lịch học", "#LichHoc", "LichHoc.html");
	});
	
	$("#Diem").click(function() {
		loadPageContent("Điểm", "#Diem", "Diem.html");
	});
	
	$("#DangXuat").click(function() {
		doSignOut();
	});
	/* end of part 1: we create functions for every button on the navigation bar */
});

// this function sets the title on the tab, then adds the class Active to the items on nav bar, pluses some fade-in effect
function loadPageContent(tabTitle, idNavItemActive, fileName) {
	// variables
	var allNavButtonID = "#TrangChu, #GioiThieu, #LienHe, #GopY, #HoiDap," +
	" #DangNhap, #DangKy, #DangXuat, #CaNhanGiaoVien, #CaNhanHocSinh, #LichDay, #LichHoc, #Diem";
	
	// program
	// we set the title for the page, then the tab title, then we add class Active for the clicked button and disable class Active for others, next we load the content to the box
	$("title").text("[" + tabTitle + "] THPT Thanh Đa");
	$("#PageTitle").text(tabTitle);
	$(allNavButtonID).removeClass("Active");
	$(idNavItemActive).addClass("Active");
	$("#PageContent").slideUp("fast", function() {
		$("#PageContent").load("../" + fileName, function() {
			$("#PageContent").slideDown("slow");
		});
	});
};
// end of loadPageContent