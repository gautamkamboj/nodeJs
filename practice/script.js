var promise1 = new Promise(function(res,rej){
    return res("task1");
});

var promise2 = promise1.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("task2");
    });
});

var promise3 = promise2.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("task3");
    });
});

promise3.then(function(data){
    console.log(data);
})