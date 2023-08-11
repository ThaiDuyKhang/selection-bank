//----------------------------------------------------/
// Filter FAQ List
//----------------------------------------------------/
$(document).ready(function () {
  const input = $("#dynamic-filter-input");
  const clearButton = $("#clearButton");

  input.on("input", function () {
    if (input.val().trim() !== "") {
      clearButton.removeClass("d-none");
    } else {
      clearButton.addClass("d-none");
    }

    FilterListSection();
  });

  clearButton.on("click", function () {
    input.val("");
    clearButton.addClass("d-none");
    FilterListSection();
  });

  function FilterListSection() {
    var filter = input.val().toUpperCase();
    var ul = $("#dynamic-filter-list");
    var li = ul.find("li");

    li.each(function () {
      var p = $(this).find("p").eq(0);
      if (p.text().toUpperCase().indexOf(filter) > -1) {
        $(this).css("display", "");
      } else {
        $(this).css("display", "none");
      }
    });
  }
});
//----------------------------------------------------/
// dynamic filter system links
//----------------------------------------------------/
jQuery(document).ready(function ($) {
  $("#dynamic-filter-list li").on("click", function () {
    $(this).addClass("filter-item-open");
    $(".dynamic-filter-list-container").addClass("dynamic-filter-min-height");
    $("#" + this.id + "-content")
      .delay(0)
      .fadeIn(50);
  });
  $(".filter-content-close").on("click", function () {
    $(this).addClass("filter-item-open");
    $(".dynamic-filter-list-container").removeClass(
      "dynamic-filter-min-height"
    );
    $(".filter-content-box").delay(0).fadeOut(50);
  });
});

//--------------------------------------------------/
// Copy button
//--------------------------------------------------/
$(document).ready(function () {
  const buttonIds = [
    "#PhoneCopyBtn",
    "#textCopyBtn",
    "#priceCopyBtn",
    "#PhoneCopyBtn2",
    "#textCopyBtn2",
    "#priceCopyBtn2",
    "#PhoneCopyBtn3",
    "#textCopyBtn3",
    "#priceCopyBtn3",
    "#PhoneCopyBtn4",
    "#textCopyBtn4",
    "#priceCopyBtn4",
  ];

  buttonIds.forEach(function (id) {
    new ClipboardJS(id);
  });

  $(buttonIds.join(", ")).on("click", function () {
    $(this).text("Đã sao chép");
  });
});

//--------------------------------------------------/
// Change QR code resposive
//--------------------------------------------------/
const outputElement = document.getElementById("qr-momo");
const smallScreen = window.matchMedia("(max-width: 768px)");
function handleScreenChange(e) {
  if (e.matches) {
    outputElement.innerHTML = `
    <div class="qrWrapper" id="qr-momo">
        <div class="subtitle">
            <h3>
                Nhấn vào nút <b>Mở App MoMo</b> để chuyển đến trang thanh toán</h3>
        </div>
        <div class="qr-code-momo" >
                <button class="nhanTienBtn" href="https://nhantien.momo.vn">Mở App Momo</button>
        </div>
    </div>
    `;
  } else {
    outputElement.innerHTML = `
    <div class="qrWrapper" id="qr-momo">
                  <div class="subtitle">
                    <h3>
                      Sử dụng <b>App MoMo</b> hoặc ứng dụng camera hỗ trợ QR
                      code để quét mã
                    </h3>
                  </div>
                  <div class="qr-code-momo" >
                    <img
                      alt="paymentcode"
                      class="image-qr-code-momo"
                      src="https://chart.googleapis.com/chart?chs=350x350&cht=qr&chl=2|99|0982933507|NGUYEN%20TRONG%20VY|info@web2m.com|0|0|1000000||transfer_myqr"
                    />
                  </div>
                </div>
    `;
  }
}
smallScreen.addListener(handleScreenChange);
handleScreenChange(smallScreen);
