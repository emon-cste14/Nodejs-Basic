const fs=require('fs')

 fs.unlink('dem.txt',function(error,data){
    if(error){
        console.log(error);
    }
    else{
        console.log("Done");
    }
});