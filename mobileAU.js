window.addEventListener("load", function () {
  var phoneNumberInput = document.getElementById("phoneNumber");

  phoneNumberInput.addEventListener("input", formatPhoneNumber);
  phoneNumberInput.addEventListener("keydown", handleBackspace);

  // Set "04" on page load
  phoneNumberInput.value = "04";

  function formatPhoneNumber() {
    var phoneNumber = phoneNumberInput.value.replace(/\D/g, "");

    if (phoneNumber.length > 10) {
      phoneNumber = phoneNumber.slice(0, 10);
    }

    var formattedPhoneNumber = "04" + formatAsAusPhoneNumber(phoneNumber);

    phoneNumberInput.value = formattedPhoneNumber;
  }

  function formatAsAusPhoneNumber(number) {
    if (number.length >= 8) {
      return (
        number.substring(2, 4) +
        " " +
        number.substring(4, 7) +
        " " +
        number.substring(7)
      );
    } else if (number.length >= 5) {
      return number.substring(2, 4) + " " + number.substring(4, 7);
    } else if (number.length >= 2) {
      return number.substring(2, 4);
    } else {
      return "";
    }
  }

  function handleBackspace(event) {
    var cursorPosition = phoneNumberInput.selectionStart;

    if (event.key === "Backspace" && cursorPosition <= 2) {
      event.preventDefault();
      phoneNumberInput.setSelectionRange(0, 0);
    } else if (event.key === "Backspace") {
      event.preventDefault();
      var newValue =
        phoneNumberInput.value.substring(0, cursorPosition - 1) +
        phoneNumberInput.value.substring(cursorPosition);
      phoneNumberInput.value = newValue;
      phoneNumberInput.setSelectionRange(
        cursorPosition - 1,
        cursorPosition - 1
      );
    }
  }

  phoneNumberInput.addEventListener("input", function () {
    var inputValue = phoneNumberInput.value.replace(/[^\d]/g, "");
    var formattedValue = "04" + formatAsAusPhoneNumber(inputValue);
    phoneNumberInput.value = formattedValue;
  });

  phoneNumberInput.addEventListener("keydown", function (event) {
    if (!/[0-9\b]/.test(event.key)) {
      event.preventDefault();
    }
  });
});
