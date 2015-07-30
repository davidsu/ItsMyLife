define(function () {
    var afterPublish;
    var isHandlingEvent = false;
    function publishStarted(){
        var wasHandlingEvent = isHandlingEvent;
        isHandlingEvent = true;
        return wasHandlingEvent;
    }

    function publishEnded(wasHandlingEvent){
        if (!wasHandlingEvent && afterPublish) {
            isHandlingEvent = false;
            afterPublish();
        }
    }
    var publisher = {
        subscriber: {
            any: []
        },
        subscribe: function (fn, type) {
            type = type || 'any';
            if (typeof this.subscribers[type] === 'undefined') {
                this.subscribers[type] = [];
            }
            this.subscribers[type].push(fn);
        },
        unsubscribe: function (fn, type) {
            this.visitSubscribers('unsubscribe', fn, type);
        },
        publish: function (publication, type) {
            var startState = publishStarted();
            this.visitSubscribers('publish', publication, type);
            publishEnded(startState);

        },
        visitSubscribers: function (action, arg, type) {
            var pubtype = type || 'any',
                subscribers = this.subscribers[pubtype],
                i,
                max = subscribers.length;
            for (i = 0; i < max; i += 1) {
                if (action === 'publish') {
                    subscribers[i](arg);
                } else if (subscribers[i] === arg) {
                    subscribers.splice(i, i);
                }
            }
        }
    };

    function makePublisher(o) {
        var i;
        for (i in publisher) {
            if (publisher.hasOwnProperty(i) && typeof publisher[i] === 'function') {
                o[i] = publisher[i];
            }
        }
        o.subscribers = {any: []};
    }

    return {
        makePublisher: makePublisher,
        setAfterPublishCallback: function (callback) {
            afterPublish = callback;
        }
    }
});