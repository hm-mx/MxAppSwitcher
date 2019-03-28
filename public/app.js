(function() {
  window.addEventListener("load", function() {
    var appSwitcherToggleBtn = document.getElementById("AppSwitcherToggle");
    MxAppSwitcher({
      refNode: appSwitcherToggleBtn,
      serviceURL: "https://appswitcherservice-accp.mendixcloud.com/",
      idToken:
        "eyJraWQiOiJiMDpiYTpjOTo3YTpmMDozNjphNDoxYjo2ZDo3MzpmYzpmZjo1ZjoyMDozZjo0Yzo1ODo0MTpkOToxMCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI4ZTFiOWVjNS05YTk5LTQ0Y2YtOTE2Yi01Y2IzNmEyZGI5MzMiLCJhdWQiOiJkZWZhdWx0LWNsaWVudCIsIm5iZiI6MTU1MzY4OTMwNSwic2NvcGUiOlsib3BlbmlkIl0sImlzcyI6Imh0dHBzOlwvXC9sb2dpbi10ZXN0Lm1lbmRpeC5jb21cL29hdXRoXC90b2tlbiIsImV4cCI6MTU1Mzc3NTcwNSwiaWF0IjoxNTUzNjg5MzA1LCJqdGkiOiJhMzBlYzdiMi1jMzZlLTRiNjItOGVlNS0zZjAyM2NjZWU4NDIifQ.JAScFGyDbGSD8iqEZSRYwnSNBXfmF3EGoacnh9M9r-8RKm1j7gdU9Q5eWoSYLqO88BkSBIk9yajhaZQWkodOZloPLJFNJA4KPFpvEws9hxUfWwS7khxq3UIu-PCromeR0g7bAQpPo33tpwHj7AOW-XdhSJnn-L_KPxN4reIDdYDWEATcsdwsWMvZiE1gmvdLcgJ7oMU_Fqt1pTdIVZBI6APxu0ePOoKk4Uq8xfM3RQnl64cJXwm8jTwNOXB9LwQKkBaVd0_O0yi-YBaP6DjbQq3t4FMnnwdFfWr0c_bcFU9Pve9mY5Mj-VAwI3AFU2YtaMBk6I6ZU-JddNX_5GonlOZevN_Wa5c9AJBjvJotFh78wN66FNwX2Iml74d7osX87T0hvjNjAr0gQVK74xZdwdDVPcwT0l08ZAE63YwnenxD2jw8LkkkzBf8TyMoVtTwFOERbniUWQlnsep2zj0tk1F-uZlIvPUGDg_q8new4d2OfxVbB-X_uLzUr3sO_PuMa3O4ALKj8EHG2a2uQFk8tg5qvLFQTIVwK7CSUqgJav-X1B6VH5-knmdsuiAmMeVAOGfmLgShg-SMkPVFCMzbPguaThwffk1sDaSzGb4iFoUuyTsggjvtUvB456aw3QkzrESPJsYF6msqo8kR8XHTnNMSXIAzwrmf0U066UthZ7s",
      zIndex: "1001", //don't overlay mx popups & modals
      customStyle: "",
      hasCreateAppButton: true,
      onCreate: function() {
        console.log("created!");
      },
    }).init();
  });
})();
