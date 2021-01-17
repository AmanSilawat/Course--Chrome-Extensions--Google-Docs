let alarmClock = {

    createAlarmHandler (e) {
        let alarmName = e.target.previousElementSibling.value;

        // ! delayInMinutes minimum delay is 1 minute
        // delayInMinutes: this value is first time string time 
        // periodInMinutes: each time show alarm

        // ! uncoment and run
        // chrome.alarms.create(alarmName, { delayInMinutes: 0.03, periodInMinutes: .05 });

        
        // ! Cannot set both "when" and "delayInMinutes" same time.
        // ! second
        chrome.alarms.create(alarmName, { when: Date.now() + 10000, periodInMinutes: .05 });
        
        alarmClock.showList();
    },

    clearAllHandler (e) {
        chrome.alarms.clearAll();
        alarmClock.showList();
    },

    clearHandler (e) {
        let alarmName = e.target.previousElementSibling.value;
        chrome.alarms.clear(alarmName);
        alarmClock.showList();
    },

    showList () {
        chrome.alarms.getAll(function printAllAlarmName(alarmList) {
            let frag = document.createDocumentFragment();
            let ul = document.getElementById('list');
            for (const item of alarmList) {
                let li = document.createElement('li')
                li.textContent = item.name;
                frag.appendChild(li);
            }
            ul.innerHTML = '';
            ul.appendChild(frag);
        })
    },

    setup () {
        let createBtn = document.getElementById('createBtn');
        let clearAll = document.getElementById('clearAll');
    
        createBtn.addEventListener('click', this.createAlarmHandler);
        clearAll.addEventListener('click', this.clearAllHandler);
        clearBtn.addEventListener('click', this.clearHandler);
    }
};

document.addEventListener('DOMContentLoaded', function () {
    alarmClock.setup();
});


chrome.alarms.onAlarm.addListener(function (alarm) {
    console.log("alert", alarm);
});