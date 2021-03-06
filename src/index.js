import Popper from 'popper.js';
import './styles/styles.scss';

export function MxAppSwitcher(options) {
  let state, appSwitcherWrapperDiv, launchpadDiv, launchpadFrame, popperInstance, listenersHandlers, _isPopOver;

  _isPopOver = options.toggleElement ? true : false;
  state = {
    initialized: false
  };
  if (_isPopOver) {
    state = { isOpen: false, ...state };
  }
  //create the parent element of all
  appSwitcherWrapperDiv = document.createElement('div');

  //create the wrapper of the iframe which will load AppSwitcherService
  launchpadDiv = document.createElement('div');
  launchpadDiv.className = 'app-switcher__launchpad';
  if (_isPopOver) launchpadDiv.classList.add('app-switcher__effect--shadow');
  //create the iframe & set the src url
  launchpadFrame = document.createElement('iframe');
  launchpadFrame.className = 'app-switcher__launchpad-frame';
  if (!_isPopOver) launchpadFrame.classList.add('app-switcher__launchpad-frame--full-width');
  launchpadFrame.src = _getServiceURL();

  launchpadDiv.appendChild(launchpadFrame);
  appSwitcherWrapperDiv.appendChild(launchpadDiv);

  function getState() {
    return state;
  }
  function destroy() {
    if (listenersHandlers) {
      if (_isPopOver) {
        options.toggleElement.removeEventListener('click', listenersHandlers.toggleHandler);
        document.removeEventListener('click', listenersHandlers.documentOnClickHandler);
        popperInstance.destroy();
      }
      window.removeEventListener('message', listenersHandlers.windowMessageHandler);
    }
  }
  function init() {
    if (state.initialized) return;
    if (_isPopOver && !state.isOpen && !state.initialized) {
      appSwitcherWrapperDiv.classList.add('app-switcher__effect--hide');
    }
    if (_isPopOver) {
      document.body.appendChild(appSwitcherWrapperDiv);
      popperInstance = new Popper(options.toggleElement, appSwitcherWrapperDiv, {
        placement: 'auto-end',
        positionFixed: false,
        eventsEnabled: true,
        modifiers: {
          offset: {
            enabled: true,
            offset: '0,10'
          },
          flip: {
            enabled: true
          },
          arrow: {
            enabled: true
          },
          preventOverflow: {
            boundariesElement: document.body
          }
        },
        onCreate: function() {
          state.initialized = true;
          options.zIndex
            ? (appSwitcherWrapperDiv.style.zIndex = options.zIndex)
            : (appSwitcherWrapperDiv.style.zIndex = '1001');
          _setEvent();
          // call the provided on create callback
          if (options.onCreate && typeof options.onCreate === 'function') options.onCreate();
        }
      });
      return {
        destroy: destroy,
        getState: getState,
        popperInstance: popperInstance,
        element: appSwitcherWrapperDiv
      };
    } else {
      _setEvent();
      // call the provided on create callback
      if (options.onCreate && typeof options.onCreate === 'function') options.onCreate();
      return {
        destroy: destroy,
        getState: getState,
        element: appSwitcherWrapperDiv
      };
    }
  }

  //set toggling
  function _setEvent() {
    // register event listeners in this object for later removal on destroy
    listenersHandlers = {};
    if (_isPopOver) {
      listenersHandlers.toggleHandler = event => {
        event.stopPropagation();
        if (!state.isOpen) {
          _show();
        } else {
          _hide();
        }
        state.isOpen = !state.isOpen;
      };

      listenersHandlers.documentOnClickHandler = () => {
        if (state.isOpen) {
          _hide();
          state.isOpen = !state.isOpen;
        }
      };
      options.toggleElement.addEventListener('click', listenersHandlers.toggleHandler);
      document.addEventListener('click', listenersHandlers.documentOnClickHandler);
    }
    listenersHandlers.windowMessageHandler = function(messageEvent) {
      var origin = messageEvent.origin;
      //  make sure that the message is coming fromn a trusted origin
      if (
        origin === 'https://appswitcherservice-accp.mendixcloud.com' ||
        origin === 'https://appswitcherservice-test.mendixcloud.com' ||
        origin === 'https://appswitcherservice.mendixcloud.com'
      ) {
        if (
          messageEvent.data &&
          messageEvent.data.communicationCode === 'kY28$Y' &&
          messageEvent.data.action === 'CREATE_NEW_APP'
        ) {
          window.open('https://sprintr.home.mendix.com/link/startnewproject', '_blank');
        }
      }
    };

    window.addEventListener('message', listenersHandlers.windowMessageHandler);
  }

  function _show() {
    appSwitcherWrapperDiv.classList.remove('app-switcher__effect--hide');
    appSwitcherWrapperDiv.classList.remove('app-switcher__effect--fadeOut');
    appSwitcherWrapperDiv.classList.add('app-switcher__effect--fadeIn');
  }

  function _hide() {
    appSwitcherWrapperDiv.classList.remove('app-switcher__effect--fadeIn');
    appSwitcherWrapperDiv.classList.add('app-switcher__effect--fadeOut');
  }

  function _getServiceURL() {
    var url = options.serviceURL;
    if (options.idToken) url = url + '?idTokenValue=' + options.idToken.trim();
    if (typeof options.hasCreateAppButton === 'boolean')
      url = url + '&hasCreateAppButton=' + options.hasCreateAppButton.toString();
    if (options.customStyle) {
      var formatedStyle = options.customStyle.replace(/\s*/g, ''); //remove white spaces.
      formatedStyle = formatedStyle.replace(/#/g, '$'); // replace hash tag symbol with $
      url = url + '&customStyle=' + formatedStyle;
    }
    return url;
  }

  return {
    init: init
  };
}
