var dayCouter = moment().format("LL");

var timeCouter = moment().format("H HH");

var currentTime = parseInt($(".hour").text());

var timePars = parseInt(timeCouter);

// var valueStore = JSON.parse(localStorage.values);

$("#currentDay").text(dayCouter);

var viewableText;

$(document).ready(function () {
  $("#9-block .description").val(localStorage.getItem("9-block"));
  $("#10-block .description").val(localStorage.getItem("10-block"));
  $("#11-block .description").val(localStorage.getItem("11-block"));
  $("#12-block .description").val(localStorage.getItem("12-block"));
  $("#1-block .description").val(localStorage.getItem("1-block"));
  $("#2-block .description").val(localStorage.getItem("2-block"));
  $("#3-block .description").val(localStorage.getItem("3-block"));
  $("#4-block .description").val(localStorage.getItem("4-block"));
  $("#5-block .description").val(localStorage.getItem("5-block"));

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

  $(".saveBtn").on("click", function () {
    var siblingText = $(this).siblings(".description").val();
    var timeBlock = $(this).parent().attr("id");
    console.log(timeBlock);
    // console.log(viewableText.text());
    console.log($(this).siblings());
    console.log(siblingText);
    localStorage.setItem(timeBlock, siblingText);
  });
});
