
/*var mHtml = $("html");
var page = 0;


mHtml.animate({scrollTop : 1},10);

$(window).on("wheel", function(e) {
    if(mHtml.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) {
        if(page === 10) return;
        page++;
    } else if(e.originalEvent.deltaY < 0) {
        if(page === 1) return;
        page--;
    }
    var posTop =(page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop});
})




function myFunction() {
  alert("상담신청이 완료 되었습니다.");
}

















//============================플로팅 버튼 동작 코드============================
//============================플로팅 버튼 동작 코드============================
//============================플로팅 버튼 동작 코드============================

document.addEventListener('DOMContentLoaded', function () {
    const floatingBtn = document.getElementById('floatingBtn');
    const popupWindow = document.getElementById('popupWindow');
    const closeBtn = document.getElementById('closeBtn');

    floatingBtn.addEventListener('click', function (e) {
        e.stopPropagation(); // Stop the click event from reaching the main page

        if (popupWindow.style.display === 'none' || popupWindow.style.display === '') {
            popupWindow.style.display = 'block';

            // Disable body scroll when the popup is open
            document.body.style.overflow = 'hidden';
        } else {
            popupWindow.style.display = 'none';
        }
    });

    closeBtn.addEventListener('click', function () {
        popupWindow.style.display = 'none';

        // Enable body scroll only if there are no other popups open
        if (!document.querySelector('.popup:not([style*="display: none"])')) {
            document.body.style.overflow = 'auto';
        }
    });

    // Add this block to prevent the scroll event on the popup window from reaching the main page
    popupWindow.addEventListener('wheel', function (e) {
        e.stopPropagation();
    });
});
//============================플로팅 버튼 동작 코드============================
//============================플로팅 버튼 동작 코드============================
//============================플로팅 버튼 동작 코드============================*/