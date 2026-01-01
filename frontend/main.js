$(document).ready(function () {
  eel.init()()

  // Load settings from localStorage
  let theme = localStorage.getItem('theme') || 'dark';
  if (theme === 'light') {
    $('body').addClass('light-mode');
    $('#themeToggle').prop('checked', true);
  }

  let uiColor = localStorage.getItem('uiColor') || 'blue';
  setUIColor(uiColor);

  function setUIColor(color) {
    let primaryColor;
    switch(color) {
      case 'blue':
        primaryColor = '#00AAFF';
        break;
      case 'green':
        primaryColor = '#28a745';
        break;
      case 'red':
        primaryColor = '#dc3545';
        break;
      case 'yellow':
        primaryColor = '#ffc107';
        break;
      case 'cyan':
        primaryColor = '#17a2b8';
        break;
      case 'purple':
        primaryColor = '#6f42c1';
        break;
      default:
        primaryColor = '#00AAFF';
    }
    document.documentElement.style.setProperty('--primary-color', primaryColor);
  }
  $(".text").textillate({
    loop: true,
    speed: 1500,
    sync: true,
    in: {
      effect: "bounceIn",
    },
    out: {
      effect: "bounceOut",
    },
  });

  $(".siri-message").textillate({
    loop: true,
    sync: true,
    in: {
      effect: "fadeInUp",
      sync: true,
    },
    out: {
      effect: "fadeOutUp",
      sync: true,
    },
  });

  var siriWave = new SiriWave({
    container: document.getElementById("siri-container"),
    width: 940,
    style: "ios9",
    amplitude: "1",
    speed: "0.30",
    height: 200,
    autostart: true,
    waveColor: "#ff0000",
    waveOffset: 0,
    rippleEffect: true,
    rippleColor: "#ffffff",
  });

  $("#MicBtn").click(function () {
    eel.play_assistant_sound();
    $("#Oval").attr("hidden", true);
    $("#SiriWave").attr("hidden", false);

    eel.takeAllCommands()();
  });

  function doc_keyUp(e) {
    // this would test for whichever key is 40 (down arrow) and the ctrl key at the same time

    if (e.key === "j" && e.metaKey) {
      eel.play_assistant_sound();
      $("#Oval").attr("hidden", true);
      $("#SiriWave").attr("hidden", false);
      eel.takeAllCommands()();
    }
  }
  document.addEventListener("keyup", doc_keyUp, false);

  function PlayAssistant(message) {
    if (message != "") {
      $("#Oval").attr("hidden", true);
      $("#SiriWave").attr("hidden", false);
      eel.takeAllCommands(message);
      $("#chatbox").val("");
      $("#MicBtn").attr("hidden", false);
      $("#SendBtn").attr("hidden", true);
    } else {
      console.log("Empty message, nothing sent."); // Log if the message is empty
    }
  }

  function ShowHideButton(message) {
    if (message.length == 0) {
      $("#MicBtn").attr("hidden", false);
      $("#SendBtn").attr("hidden", true);
    } else {
      $("#MicBtn").attr("hidden", true);
      $("#SendBtn").attr("hidden", false);
    }
  }

  $("#chatbox").keyup(function () {
    let message = $("#chatbox").val();
    console.log("Current chatbox input: ", message); // Log input value for debugging
    ShowHideButton(message);
  });

  $("#SendBtn").click(function () {
    let message = $("#chatbox").val();
    PlayAssistant(message);
  });

  $("#chatbox").keypress(function (e) {
    key = e.which;
    if (key == 13) {
      let message = $("#chatbox").val();
      PlayAssistant(message);
    }
  });

  // Settings functionality
  $("#themeToggle").change(function() {
    if ($(this).is(':checked')) {
      $('body').addClass('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      $('body').removeClass('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  });

  $('.color-btn').click(function() {
    const color = $(this).data('color');
    setUIColor(color);
    localStorage.setItem('uiColor', color);
  });

});



