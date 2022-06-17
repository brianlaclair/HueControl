// Define the possible states
HC_STATES = {
    AWAIT_BRIDGE:               0,
    AWAIT_USER_CONFIRMATION:    1,
    CONNECTED:                  2
}

// Set the initial state
state               = HC_STATES.AWAIT_BRIDGE;

// Variables for data storage
ip                  = "";
id                  = "";
username            = "";
lights              = [];
groups              = [];
availableBridges    = [];

getBridgeList(function () { console.log("Bridge list retrieved"); });

function getBridgeList(callback = null) {
    $.get("https://discovery.meethue.com/", function(data) { 
        availableBridges = data;
        console.log(availableBridges);

        // If there's only one bridge, we'll fill the values automatically
        if (data.length > 0) {
            ip      = data[0].internalipaddress;
            id      = data[0].id;
        }

        callback();
    });
}