function iterate(elems, action) {
    for(elem of elems) {
        action(elem);
    }
}
//action can be console.log or alert

function filter(elems, predicate) {
    var result = [];
    iterate(elems, function(elem){
        if(predicate(elem)) {
            result.push(elem);
        }
    });
    return result;
}



function map(elems, transformFn) {
    var result = [];
    iterate(elems, function(elem){
            result.push(transformFn(elem));
    });
    return result;
}
