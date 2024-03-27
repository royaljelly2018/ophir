$(document).ready(function () {
  var tempCssClass;

  setTimeout(function () {
    $("#initTyping").remove();
    $("#msg1").removeClass("hidden").after(typingEffect());
    setTimeout(function () {
      $(".temp-typing").remove();
      $("#msg2").removeClass("hidden").after(typingEffect());
      scrollToBottom();
      setTimeout(function () {
        $(".temp-typing").remove();
        $("#msg3").removeClass("hidden").after(typingEffect());
        scrollToBottom();
        setTimeout(function () {
          $(".temp-typing").remove();
          $("#msg4").removeClass("hidden");
        }, 0);
      }, 1750);
    }, 1250);
  }, 750);

  var buttonValue;
  var currentStep;

  $("button.chat-button").on("click", function () {
    currentStep = $(this).attr("data-form-step");
    buttonValue = $(this).attr("data-form-value");

    if (currentStep == 1) {
      // Assume your anchor tag's href is something like /path?param1=value1
      var anchorTag = document.getElementById("rtRef");
      var anchorUrl = new URL(anchorTag.href);
      var anchorParams = new URLSearchParams(anchorUrl.search);

      // Assume your window location is something like /path?param2=value2
      var windowUrl = new URL(window.location.href);
      var windowParams = new URLSearchParams(windowUrl.search);

      // Append params from the anchor tag to the main URL's params
      for (let pair of anchorParams.entries()) {
        windowParams.append(pair[0], pair[1]);
      }

      // Set the window's location search params
      windowUrl.search = windowParams.toString();
      history.replaceState({}, "", windowUrl.toString());

      //scrollToBottom();
      $("#agentBlock2 .agent-chat").prepend(typingEffect());
      $("#msg4").addClass("hidden");
      $("#userBlock1").removeClass("hidden");
      scrollToBottom();
      setTimeout(function () {
        $("#agentBlock2").removeClass("hidden");
        scrollToBottom();
        setTimeout(function () {
          $(".temp-typing").remove();
          $("#msg6").removeClass("hidden").after(typingEffect());
          scrollToBottom();
          setTimeout(function () {
            $(".temp-typing").remove();
            $("#msg7").removeClass("hidden").after(typingEffect());
            scrollToBottom();
            setTimeout(function () {
              $(".temp-typing").remove();
              $("#msg8").removeClass("hidden");
              scrollToBottom();
            }, 0);
          }, 1750);
        }, 2250);
      }, 50);
    }

    if (currentStep == 2) {
      //scrollToBottom();
      $("#agentBlock3 .agent-chat").prepend(typingEffect());
      $("#msg8").addClass("hidden");
      $("#userBlock2").removeClass("hidden");
      //scrollToBottom();
      if (buttonValue == "64andUnder") {
        $("#msg964andUnder").removeClass("hidden");

        var windowUrl = new URL(window.location.href);
        var windowParams = new URLSearchParams(windowUrl.search);

        // Append params from the anchor tag to the main URL's params
        windowParams.append("age", "64");

        // Set the window's location search params
        windowUrl.search = windowParams.toString();
        history.replaceState({}, "", windowUrl.toString());
        // $("#hdnApprovalStatus").val("no");
      } else if (buttonValue == "6574") {
        $("#msg96574").removeClass("hidden");

        var windowUrl = new URL(window.location.href);
        var windowParams = new URLSearchParams(windowUrl.search);

        // Append params from the anchor tag to the main URL's params
        windowParams.append("age", "67");

        // Set the window's location search params
        windowUrl.search = windowParams.toString();
        history.replaceState({}, "", windowUrl.toString());
      } else if (buttonValue == "74andOlder") {
        $("#msg974andOlder").removeClass("hidden");

        var windowUrl = new URL(window.location.href);
        var windowParams = new URLSearchParams(windowUrl.search);

        // Append params from the anchor tag to the main URL's params
        windowParams.append("age", "75");

        // Set the window's location search params
        windowUrl.search = windowParams.toString();
        history.replaceState({}, "", windowUrl.toString());
      }
      scrollToBottom();
      setTimeout(function () {
        $("#agentBlock3").removeClass("hidden");
        scrollToBottom();
        setTimeout(function () {
          $(".temp-typing").remove();
          $("#msg10").removeClass("hidden").after(typingEffect());
          scrollToBottom();
          setTimeout(function () {
            $(".temp-typing").remove();
            $("#msg11").removeClass("hidden");
            scrollToBottom();
          }, 0);
        }, 1750);
      }, 50);
    }
    if (currentStep == 3) {
      //scrollToBottom();
      $("#agentBlock4 .agent-chat").prepend(typingEffect());
      $("#msg11").addClass("hidden");
      $("#userBlock3").removeClass("hidden");
      //scrollToBottom();
      if (buttonValue == "Yes") {
        $("#msg12yes").removeClass("hidden");
      } else if (buttonValue == "No") {
        $("#msg12no").removeClass("hidden");
        $("#hdnApprovalStatus").val("no");

        setTimeout(function () {
          $("#agentBlock4").removeClass("hidden");
          scrollToBottom();
          setTimeout(function () {
            $(".temp-typing").remove();
            $("#msg18").removeClass("hidden").after(typingEffect());
            scrollToBottom();
            setTimeout(function () {
              $(".temp-typing").remove();
              $("#msg19").removeClass("hidden");
              scrollToBottom();
              setTimeout(function () {
                $(".temp-typing").remove();
                $("#msg20").removeClass("hidden");
                console.log("here");
                scrollToBottom();
                setTimeout(function () {
                  $("#disconnected").removeClass("hidden");
                  scrollToBottom();
                }, 1250);
              }, 1250);
            }, 1250);
          }, 1250);
        }, 1250);
        return false;
      } else {
        $("#msg12medicare").removeClass("hidden");
        setTimeout(function () {
          $("#agentBlock4").removeClass("hidden");
          scrollToBottom();
          setTimeout(function () {
            $(".temp-typing").remove();
            $("#msg18").removeClass("hidden").after(typingEffect());
            scrollToBottom();
            setTimeout(function () {
              $(".temp-typing").remove();
              $("#msg19").removeClass("hidden");
              scrollToBottom();
              setTimeout(function () {
                $(".temp-typing").remove();
                $("#msg20").removeClass("hidden");
                scrollToBottom();
                setTimeout(function () {
                  $("#disconnected").removeClass("hidden");
                  scrollToBottom();
                }, 1250);
              }, 1250);
            }, 1250);
          }, 1250);
        }, 1250);
        return false;
      }
      scrollToBottom();
      //

      if ($("#hdnApprovalStatus").val() == "no") {
        //downsell
        $("#DownsellNumber").removeClass("hidden");
        var script = document.createElement("script");
        script.src = "http://b-js.ringba.com/CAb49cfcb9181147da91c79a5b41b45130";
        document.head.appendChild(script);
        $("#msg14disapproved").removeClass("hidden");
        $("#msg16disapproved").removeClass("hidden");
      } else {
        //standard aca
        $("#PrimaryNumber").removeClass("hidden");
        var script = document.createElement("script");
        script.src = "https://b-js.ringba.com/CA9cca4b342f594cd7928868efff9c5410";
        document.head.appendChild(script);
        $("#msg14approved").removeClass("hidden");
        $("#msg16approved").removeClass("hidden");
      }
      scrollToBottom();
      //
      setTimeout(function () {
        $("#agentBlock4").removeClass("hidden");
        scrollToBottom();
        setTimeout(function () {
          $(".temp-typing").remove();
          $("#msg13").removeClass("hidden").after(typingEffect());
          scrollToBottom();
          setTimeout(function () {
            $(".temp-typing").remove();
            $("#msg14").removeClass("hidden").after(typingEffect());
            scrollToBottom();
            setTimeout(function () {
              $(".temp-typing").remove();
              $("#msg15").removeClass("hidden").after(typingEffect());
              scrollToBottom();
              setTimeout(function () {
                $(".temp-typing").remove();
                $("#msg16").removeClass("hidden").after(typingEffect());
                scrollToBottom();
                setTimeout(function () {
                  $(".temp-typing").remove();
                  $("#msg17").removeClass("hidden");
                  //$('#tcpa').removeClass('hidden');
                  scrollToBottom();
                }, 0);
              }, 2250);
            }, 1250);
          }, 1750);
        }, 1250);
      }, 250);
    }
  });

  function scrollToBottom(elementId) {
    var object = $("main");
    $("html, body").animate(
      {
        scrollTop: object.offset().top + object.outerHeight() - $(window).height(),
      },
      "fast"
    );
  }
});

function typingEffect(cssClass) {
  string = '<div class="temp-typing bg-gray-200 p-3 rounded-lg shadow-xs mt-2 inline-block">';
  string += '<div class="typing-animation">';
  string += '<div class="typing-dot"></div>';
  string += '<div class="typing-dot"></div>';
  string += '<div class="typing-dot"></div>';
  string += "</div>";
  string += "</div>";

  return string;
}

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var currentDate = new Date();
var currentDayOfWeek = daysOfWeek[currentDate.getDay()];
var currentMonth = months[currentDate.getMonth()];
var currentDay = currentDate.getDate();
var currentYear = currentDate.getFullYear();
var formattedDate =
  currentDayOfWeek +
  ", " +
  ("0" + (currentDate.getMonth() + 1)).slice(-2) +
  "/" +
  ("0" + currentDay).slice(-2) +
  "/" +
  currentYear;
document.getElementById("currentDate").textContent = formattedDate;

var numberCloak = () => {
  let fbclid = window.location.search.split("fbclid=")[1];
  let sub2 = window.location.search.split("sub2=")[1];
  let sub3 = window.location.search.split("sub3=")[1];
  let sub4 = window.location.search.split("sub4=")[1];
  let sub5 = window.location.search.split("sub5=")[1];
  let sub6 = window.location.search.split("sub6=")[1];
  let sub7 = window.location.search.split("sub7=")[1];
  let sub8 = window.location.search.split("sub8=")[1];
  let cmpid = window.location.search.split("cmpid=")[1];
  if (cmpid || sub2 || sub3 || sub4 || sub5 || sub6 || sub7 || sub8 || fbclid) {
    return;
  } else {
    let numberElement = document.getElementById("PrimaryNumber");
    if (numberElement) {
      numberElement.setAttribute("href", "tel:+18444870575");
      numberElement.textContent = "(844) 487-0575"; // Replace with the new number
    }
  }
};
// numberCloak();
