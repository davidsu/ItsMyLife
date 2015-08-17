var _ = require('lodash-node');

var t = {
    a:1,
    b:[2,3]
};

var y = _.pick(t, function(h,r,f){
    console.log(h, r, f);
    return  r!=='a';
});
console.log('ended', y);