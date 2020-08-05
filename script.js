var dayCouter = moment().format("LL");

var timeCouter = moment().format("H HH");

var currentTime = parseInt($(".hour").text());

var timePars = parseInt(timeCouter);

$("#currentDay").text(dayCouter);

var viewableText;

if (timePars <= 8) {
  $("#9-block").addClass("future");
  $("#10-block").addClass("future");
  $("#11-block").addClass("future");
  $("#12-block").addClass("future");
  $("#1-block").addClass("future");
  $("#2-block").addClass("future");
  $("#3-block").addClass("future");
  $("#4-block").addClass("future");
  $("#5-block").addClass("future");
} else if (timePars <= 9) {
  $("#9-block").addClass("present");
  $("#10-block").addClass("future");
  $("#11-block").addClass("future");
  $("#12-block").addClass("future");
  $("#1-block").addClass("future");
  $("#2-block").addClass("future");
  $("#3-block").addClass("future");
  $("#4-block").addClass("future");
  $("#5-block").addClass("future");
} else if (timePars <= 10) {
  $("#9-block").addClass("past");
  $("#10-block").addClass("present");
  $("#11-block").addClass("future");
  $("#12-block").addClass("future");
  $("#1-block").addClass("future");
  $("#2-block").addClass("future");
  $("#3-block").addClass("future");
  $("#4-block").addClass("future");
  $("#5-block").addClass("future");
} else if (timePars <= 11) {
  $("#9-block").addClass("past");
  $("#10-block").addClass("past");
  $("#11-block").addClass("present");
  $("#12-block").addClass("future");
  $("#1-block").addClass("future");
  $("#2-block").addClass("future");
  $("#3-block").addClass("future");
  $("#4-block").addClass("future");
  $("#5-block").addClass("future");
} else if (timePars <= 12) {
  $("#9-block").addClass("past");
  $("#10-block").addClass("past");
  $("#11-block").addClass("past");
  $("#12-block").addClass("present");
  $("#1-block").addClass("future");
  $("#2-block").addClass("future");
  $("#3-block").addClass("future");
  $("#4-block").addClass("future");
  $("#5-block").addClass("future");
} else if (timePars <= 13) {
  $("#9-block").addClass("past");
  $("#10-block").addClass("past");
  $("#11-block").addClass("past");
  $("#12-block").addClass("past");
  $("#1-block").addClass("present");
  $("#2-block").addClass("future");
  $("#3-block").addClass("future");
  $("#4-block").addClass("future");
  $("#5-block").addClass("future");
} else if (timePars <= 14) {
  $("#9-block").addClass("past");
  $("#10-block").addClass("past");
  $("#11-block").addClass("past");
  $("#12-block").addClass("past");
  $("#1-block").addClass("past");
  $("#2-block").addClass("present");
  $("#3-block").addClass("future");
  $("#4-block").addClass("future");
  $("#5-block").addClass("future");
} else if (timePars <= 15) {
  $("#9-block").addClass("past");
  $("#10-block").addClass("past");
  $("#11-block").addClass("past");
  $("#12-block").addClass("past");
  $("#1-block").addClass("past");
  $("#2-block").addClass("past");
  $("#3-block").addClass("present");
  $("#4-block").addClass("future");
  $("#5-block").addClass("future");
} else if (timePars <= 16) {
  $("#9-block").addClass("past");
  $("#10-block").addClass("past");
  $("#11-block").addClass("past");
  $("#12-block").addClass("past");
  $("#1-block").addClass("past");
  $("#2-block").addClass("past");
  $("#3-block").addClass("past");
  $("#4-block").addClass("present");
  $("#5-block").addClass("future");
} else if (timePars <= 16) {
  $("#9-block").addClass("past");
  $("#10-block").addClass("past");
  $("#11-block").addClass("past");
  $("#12-block").addClass("past");
  $("#1-block").addClass("past");
  $("#2-block").addClass("past");
  $("#3-block").addClass("past");
  $("#4-block").addClass("past");
  $("#5-block").addClass("present");
} else {
  $("#9-block").addClass("past");
  $("#10-block").addClass("past");
  $("#11-block").addClass("past");
  $("#12-block").addClass("past");
  $("#1-block").addClass("past");
  $("#2-block").addClass("past");
  $("#3-block").addClass("past");
  $("#4-block").addClass("past");
  $("#5-block").addClass("past");
}

function textClicked() {
  var textHtml = $(this).html();
  var editableText = $("<textarea />");
  editableText.val(textHtml);
  $(this).replaceWith(editableText);
  editableText.focus();
  editableText.blur(editableTextBlurred);
}

function editableTextBlurred() {
  var html = $(this).val();
  viewableText = $("<div>");
  viewableText.addClass("col-lg-9 text-area");
  viewableText.html(html);
  $(this).replaceWith(viewableText);
  viewableText.click(textClicked);
}

$(document).ready(function () {
  $(".text-area").click(textClicked);

  $(".saveBtn").on("click", function () {
    console.log(viewableText.text());
  });
});
