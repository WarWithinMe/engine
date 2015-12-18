pc.promise = {
    Promise: window.Promise,
    all: function(a,b){ return window.Promise.all(a,b); }
};
