function openWorkstationSession(element) {
    return (event) => {
        const windowIdentifier = element.dataset.workstationWindowIdentifier;
        const url = element.dataset.createSessionUrl;
        const query = element.dataset.workstationQuery;
        const creationURI = `${url}?${query}`;
        const timeout = element.dataset.timeout || 1000;

        if (event.ctrlKey) {
            window.open(creationURI);
            return;
        }

        if (event.altKey) {
            copyTextToClipboard(query);
            return;
        }

        setSpinner(element);

        function createNewSessionWindow() {
            window.open(creationURI, windowIdentifier);
            removeSpinner(element);
        }

        try {
            const potentialSessionOrigins = JSON.parse(document.getElementById('workstation-domains').textContent);
            let workstationWindow = window.open('', windowIdentifier);

            // check if we just opened a blank or existing context
            let isBlankContext = false;
            try {
                isBlankContext = workstationWindow.document.location.href === 'about:blank';
            } catch (err) {
                // A SecurityError (i.e. blocked CORS requests) suggests that
                // the window is likely an existing session (that has a different origin).
                // Other errors should result in forcing a new session
                if (err.name !== 'SecurityError') {
                   createNewSessionWindow();
                   throw err;
                }
            }

            if (isBlankContext) {
                createNewSessionWindow();
            } else {
                const fallbackTimer = setTimeout(() => {
                    // Assume window is non-responsive
                    createNewSessionWindow();
                }, timeout);

                function onMessageIsSuccess() {
                    clearTimeout(fallbackTimer);
                    // focus() needed in Firefox, in Chromium engines
                    // the open() already focuses the window
                    workstationWindow.focus();
                    removeSpinner(element);
                };

                potentialSessionOrigins.forEach((origin) => {
                    sendSessionControlMessage(workstationWindow, origin, {loadQuery: query}, onMessageIsSuccess);
                });
            }
        } catch(err) {
            removeSpinner(element);
            throw err;
        }
    }
}

function hookSessionControllers() {
    const sessionControllerElements = document.querySelectorAll('[data-session-control]');
    for (const element of sessionControllerElements) {
        element.onclick = openWorkstationSession(element);
    }
}

function sendSessionControlMessage(targetWindow, origin, action, ackCallback) {
    const messageId = crypto.randomUUID();
    const msg = {
        sessionControl: {
            meta: {
                id: messageId
            },
            ...action,
        }
    };
    targetWindow.postMessage(msg, origin);

    function checkAckMessage(event) {
        const receivedMsg = event.data.sessionControl;
        if (!receivedMsg) {
            return
        }
        const ack = receivedMsg.meta.acknowledge;
        if (!ack) {
            return
        }
        if (ack.id === messageId) {
            ackCallback();
            window.removeEventListener('message', checkAckMessage);
        }
    }

    window.addEventListener('message', checkAckMessage);
}

function copyTextToClipboard(text) {
    const blob = new Blob([text], {type: "text/plain"});
    const data = [new ClipboardItem({ "text/plain": blob })];
    navigator.clipboard.write(data).then(function () {
        console.log("Copied to clipboard successfully!");
    });
}

function setSpinner(element) {
    element.disabled = true;
    element.querySelector("i").style.display = "none";
    const spinner = document.createElement("span");
    spinner.classList.add("spinner-border", "spinner-border-sm");
    element.prepend(spinner);
}

function removeSpinner(element) {
    const spinner = element.querySelector(".spinner-border");
    if (spinner !== null) {
        element.removeChild(spinner);
    }
    element.querySelector("i").style.display = "inline-block";
    element.disabled = false;
}

function setUpOberserver(){
    // MutationObserver to listen to DOM changes on the display set cards
    // this is necessary to initiate the session control hooks after a
    // display set update
    const targetNodes = document.querySelectorAll('[id^="collapse-"]');
    const config = { attributes: true, childList: true, subtree: true };
    const observer = new MutationObserver(function(mutations) {
        hookSessionControllers()
    });
    [...targetNodes].forEach(target => {
        observer.observe(target, config);
    });
}

$(document).ready(() => {
    // Run default once
    hookSessionControllers();

    // Sometimes content insertion is deferred and might result in adding session-control elements later:
    //  add listeners:

    // ajax-based tables
    $('#ajaxDataTable').on('init.dt', () => {
        setUpOberserver()
    })
    $('#ajaxDataTable').on('draw.dt childRow.dt', () => {
        hookSessionControllers()
    });

    // htmx-based tables
    htmx.onLoad(function () {
        hookSessionControllers()
    });
});
