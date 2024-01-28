//task1
//task2
//task3


var promise1 = new Promise(function(res,rej){
    return res("task1 resolved");

});

var promise2 = promise1.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("task2 resolved");
    })
});

var promise3 = promise2.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("task 3 resolved");
    })
});

promise3.then(function(data){
    console.log(data);
})