import Popper from "popper.js";
import $ from "../node_modules/jquery/dist/jquery.min.js";
import "./styles/styles.scss";

export function MxAppSwitcher(options) {
  let state,
    appSwitcherWrapperDiv,
    launchpadDiv,
    launchpadFrame,
    popperInstance,
    listenersHandlers;
  state = {
    isOpen: false,
    initialized: false,
  };

  //create the parent element of all
  appSwitcherWrapperDiv = document.createElement("div");

  //create the wrapper of the iframe which will load AppSwitcherService
  launchpadDiv = document.createElement("div");
  launchpadDiv.className = "app-switcher__launchpad";

  //create the iframe & set the src url
  launchpadFrame = document.createElement("iframe");
  launchpadFrame.className = "app-switcher__launchpad-frame";
  launchpadFrame.src = _getServiceURL();

  launchpadDiv.appendChild(launchpadFrame);
  appSwitcherWrapperDiv.appendChild(launchpadDiv);

  function getState() {
    return state;
  }
  function destroy() {
    if (listenersHandlers) {
      options.refNode.removeEventListener(
        "click",
        listenersHandlers.toggleHandler,
      );
      document.removeEventListener(
        "click",
        listenersHandlers.documentOnClickHandler,
      );
      popperInstance.destroy();
    }
  }
  function init() {
    if (state.initialized) return;
    if (!state.isOpen && !state.initialized) {
      appSwitcherWrapperDiv.style.display = "none";
    }
    document.body.appendChild(appSwitcherWrapperDiv);
    popperInstance = new Popper(options.refNode, appSwitcherWrapperDiv, {
      placement: "auto-end",
      positionFixed: false,
      eventsEnabled: true,
      modifiers: {
        offset: {
          enabled: true,
          offset: "0,10",
        },
        flip: {
          enabled: true,
        },
        arrow: {
          enabled: true,
        },
        preventOverflow: {
          boundariesElement: document.body,
        },
      },
      onCreate: function() {
        state.initialized = true;
        options.zIndex
          ? (appSwitcherWrapperDiv.style.zIndex = options.zIndex)
          : (appSwitcherWrapperDiv.style.zIndex = "1001");
        _setEvent();
        // call the provided on create callback
        if (options.onCreate && typeof options.onCreate === "function")
          options.onCreate();
      },
    });
    return {
      destroy: destroy,
      getState: getState,
      popperInstance: popperInstance,
      wrappingDom: appSwitcherWrapperDiv,
    };
  }

  //set toggling
  function _setEvent() {
    // register event listeners in this object for later removal on destroy
    listenersHandlers = {};
    const fadeOptions = {duration: 300};

    listenersHandlers.toggleHandler = event => {
      event.stopPropagation();
      if (!state.isOpen) {
        _show(fadeOptions);
      } else {
        _hide(fadeOptions);
      }
      state.isOpen = !state.isOpen;
    };

    listenersHandlers.documentOnClickHandler = () => {
      if (state.isOpen) {
        _hide(fadeOptions);
        state.isOpen = !state.isOpen;
      }
    };

    options.refNode.addEventListener("click", listenersHandlers.toggleHandler);
    document.addEventListener(
      "click",
      listenersHandlers.documentOnClickHandler,
    );
  }

  function _show(fadeOptions) {
    $(appSwitcherWrapperDiv).fadeIn({
      duration: fadeOptions.duration,
    });
  }

  function _hide(fadeOptions) {
    $(appSwitcherWrapperDiv).fadeOut({
      duration: fadeOptions.duration,
    });
  }

  function _getServiceURL() {
    var url = options.serviceURL;
    if (options.idToken) url = url + "?idTokenValue=" + options.idToken.trim();
    if (typeof options.hasCreateAppButton === "boolean")
      url =
        url + "&hasCreateAppButton=" + options.hasCreateAppButton.toString();
    if (options.customStyle) {
      url = url + "&customStyle=" + options.customStyle.replace(/\s*/g, "");
      url = url + "&customStyle=" + options.customStyle.replace(/#/g, "$");
    }
    return url;
  }

  return {
    init: init,
  };
}
