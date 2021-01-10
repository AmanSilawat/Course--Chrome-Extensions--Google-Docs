function animationPolicyChanged() {
    if (this.checked) {
        var setting = this.value;

        // Sets the value of a setting.
        chrome.accessibilityFeatures.animationPolicy.set({ value: setting }, function (callback) {
            // Called at the completion of the set operation.
        });
    }
}

function listener(data) {
    console.log('animation policy is changed.');
}

function init() {
    const selects = document.querySelectorAll('input');

    // Fired after the setting changes.
    chrome.accessibilityFeatures.animationPolicy.onChange.addListener(listener);

    // Gets the value of a setting.
    chrome.accessibilityFeatures.animationPolicy.get({ incognito: false }, function (policy) {
        for (var i = 0; i < selects.length; i++) {
            if (selects[i].value == policy.value) {
                selects[i].checked = true;
                console.log(policy, selects)
                break;
            }
        }
    });

    for (var i = 0; i < selects.length; i++) {
        selects[i].addEventListener('change', animationPolicyChanged);
    }
}

document.addEventListener('DOMContentLoaded', init);