window.addEventListener("load", function () {
  var phoneNumberInput = document.getElementById("phoneNumber");

  phoneNumberInput.addEventListener("input", formatPhoneNumber);
  phoneNumberInput.addEventListener("keydown", handleBackspace);

  function formatPhoneNumber() {
    var phoneNumber = phoneNumberInput.value.replace(/\D/g, "");

    if (phoneNumber.length > 12) {
      phoneNumber = phoneNumber.slice(0, 12);
    }

    var formattedPhoneNumber = formatAsPhoneNumber(phoneNumber);

    phoneNumberInput.value = formattedPhoneNumber;
  }

  function formatAsPhoneNumber(number) {
    if (number.length >= 7) {
      return (
        "+" +
        number.substring(0, 2) +
        " " +
        number.substring(2, 6) +
        " " +
        number.substring(6, 13)
      );
    } else if (number.length >= 4) {
      return (
        "+" +
        number.substring(0, 2) +
        " " +
        number.substring(2, 6) +
        " " +
        number.substring(6)
      );
    } else if (number.length > 2) {
      return "+" + number.substring(0, 2) + " " + number.substring(2);
    } else {
      return "+" + number;
    }
  }

  function handleBackspace(event) {
    var cursorPosition = phoneNumberInput.selectionStart;

    if (event.key === "Backspace" && cursorPosition > 3) {
      event.preventDefault();
      phoneNumberInput.value =
        phoneNumberInput.value.substring(0, cursorPosition - 1) +
        phoneNumberInput.value.substring(cursorPosition);
      phoneNumberInput.setSelectionRange(
        cursorPosition - 1,
        cursorPosition - 1
      );
    }
  }

  phoneNumberInput.addEventListener("input", function () {
    phoneNumberInput.value = phoneNumberInput.value.replace(/[^\d+ -]/g, "");
  });

  phoneNumberInput.addEventListener("keydown", function (event) {
    if (!/[0-9\b+ -]/.test(event.key)) {
      event.preventDefault();
    }
  });

  phoneNumberInput.value = "+44 ";
});
