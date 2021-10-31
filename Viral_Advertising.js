function dataProcessMarketing(input) {
        let reached = 2, 
            sharing = 2;
        for(let day = 1; day < input; day++)
        {
            reached += Math.floor((sharing * 3) / 2);
            sharing = Math.floor((sharing * 3) / 2);
        }
    console.log(reached);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    dataProcessMarketing(_input);
});

