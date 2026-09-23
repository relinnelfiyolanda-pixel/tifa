function openGift() {

    const message =
        document.getElementById("gift-message");

    message.classList.remove("hidden");

    message.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}
