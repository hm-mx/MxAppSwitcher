(function() {
  window.addEventListener('load', function() {
    console.log('App Started!');
    var appSwitcherToggleBtn = document.getElementById('AppSwitcherToggle');
    MxAppSwitcher({
      toggleElement: appSwitcherToggleBtn,
      serviceURL: 'https://appswitcherservice-accp.mendixcloud.com/',
      idToken:
        'eyJraWQiOiJiMDpiYTpjOTo3YTpmMDozNjphNDoxYjo2ZDo3MzpmYzpmZjo1ZjoyMDozZjo0Yzo1ODo0MTpkOToxMCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI4ZTFiOWVjNS05YTk5LTQ0Y2YtOTE2Yi01Y2IzNmEyZGI5MzMiLCJhdWQiOiJkZWZhdWx0LWNsaWVudCIsIm5iZiI6MTU1Mzc2NzQ5Nywic2NvcGUiOlsib3BlbmlkIl0sImlzcyI6Imh0dHBzOlwvXC9sb2dpbi10ZXN0Lm1lbmRpeC5jb21cL29hdXRoXC90b2tlbiIsImV4cCI6MTU1Mzg1Mzg5NywiaWF0IjoxNTUzNzY3NDk3LCJqdGkiOiJjMmU1NDNkMC03YjkzLTQ1MGUtOTVlOS0zNGJhYjJmNGVjMTEifQ.Mi1S0wy9oEsVlXuIYXJpI8pXHQYWA8EjuiyobGsH3J0TNHdcApcbSxOBywIS6Lj5uuCJNKkujSEDONly74KN25Xy0eieCV1De1-mbzsfK5L4BhFi0iFiO0H-gD03Y_TEtK31BoqFqRFjO_S_KNg7UCmHXpTbkbk1Ot47NrEkzEN6ZHhks1MPpdGLdnYc2BRbeCzrSNn4mBrr55qjHrRjKRhIzEjI052cuevPomwJLaMFyKdYwarJNV86HoMTsHHRkpwi5NF0iXq5bwi0pK4aaVp3Exwo9Sjqcg2SNdpST9fV-gm2nTBFHoQfzFrbBohCR2znyeFpw_LLLZOAjQVXcRh_v9ab8PHkOt2_5QJiLxGPGxZ6umTV11gcgGJkiabhlrUGvefy7FDp-xTStWOwrvDihpUJa8muxNNic3YjwhT7L6VqSK6D5eTLa8MfVhSzazHZvahDCKun9Q_mtACFW5zPG74jBNRGrdnlB7DhkLPLMMSw7a4WbKwodceUDqbpgBrwn7FRMLyQgU8peBbRtsBnqjPmhRNc4fAxaMxjCuWLCzNDt5SxDnHf39_hGWh0siEUTcJRyWC5_Rhi1CuMktdEUr-dQIfhlzZ-JRt1jSsGnid5XHpWp24li16mqDJyq-EVQXP4kY2rdusOfBSBU5eeLWCuzoZfdmbUqbXH9-o',
      zIndex: '1001', //don't overlay mx popups & modals
      customStyle: '',
      hasCreateAppButton: true,
      onCreate: function() {
        console.log('created!');
      }
    }).init();
    var wrapper = document.getElementById('wrapper');
    var onlyFrame = MxAppSwitcher({
      serviceURL: 'https://appswitcherservice-accp.mendixcloud.com/',
      idToken:
        'eyJraWQiOiJiMDpiYTpjOTo3YTpmMDozNjphNDoxYjo2ZDo3MzpmYzpmZjo1ZjoyMDozZjo0Yzo1ODo0MTpkOToxMCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI4ZTFiOWVjNS05YTk5LTQ0Y2YtOTE2Yi01Y2IzNmEyZGI5MzMiLCJhdWQiOiJkZWZhdWx0LWNsaWVudCIsIm5iZiI6MTU1Mzc2NzQ5Nywic2NvcGUiOlsib3BlbmlkIl0sImlzcyI6Imh0dHBzOlwvXC9sb2dpbi10ZXN0Lm1lbmRpeC5jb21cL29hdXRoXC90b2tlbiIsImV4cCI6MTU1Mzg1Mzg5NywiaWF0IjoxNTUzNzY3NDk3LCJqdGkiOiJjMmU1NDNkMC03YjkzLTQ1MGUtOTVlOS0zNGJhYjJmNGVjMTEifQ.Mi1S0wy9oEsVlXuIYXJpI8pXHQYWA8EjuiyobGsH3J0TNHdcApcbSxOBywIS6Lj5uuCJNKkujSEDONly74KN25Xy0eieCV1De1-mbzsfK5L4BhFi0iFiO0H-gD03Y_TEtK31BoqFqRFjO_S_KNg7UCmHXpTbkbk1Ot47NrEkzEN6ZHhks1MPpdGLdnYc2BRbeCzrSNn4mBrr55qjHrRjKRhIzEjI052cuevPomwJLaMFyKdYwarJNV86HoMTsHHRkpwi5NF0iXq5bwi0pK4aaVp3Exwo9Sjqcg2SNdpST9fV-gm2nTBFHoQfzFrbBohCR2znyeFpw_LLLZOAjQVXcRh_v9ab8PHkOt2_5QJiLxGPGxZ6umTV11gcgGJkiabhlrUGvefy7FDp-xTStWOwrvDihpUJa8muxNNic3YjwhT7L6VqSK6D5eTLa8MfVhSzazHZvahDCKun9Q_mtACFW5zPG74jBNRGrdnlB7DhkLPLMMSw7a4WbKwodceUDqbpgBrwn7FRMLyQgU8peBbRtsBnqjPmhRNc4fAxaMxjCuWLCzNDt5SxDnHf39_hGWh0siEUTcJRyWC5_Rhi1CuMktdEUr-dQIfhlzZ-JRt1jSsGnid5XHpWp24li16mqDJyq-EVQXP4kY2rdusOfBSBU5eeLWCuzoZfdmbUqbXH9-o',
      zIndex: '1001', //don't overlay mx popups & modals
      customStyle: '',
      hasCreateAppButton: true
    }).init().element;
    wrapper.appendChild(onlyFrame);
  });
})();
