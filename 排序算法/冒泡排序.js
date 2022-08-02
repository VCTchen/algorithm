//比较所有元素，如果第一个比第二个大就交换
//执行一次后可以保证最后一个数字是最大的
//重复执行n-1次就可以完成排序

//时间复杂度o（n^2）
//空间复杂度o（1）
Array.prototype.bubbleSort = function (){
    for(let i=0;i<this.length-1;i++){
        for(let j=0;j<this.length-1;j++){
            if(this[j]>this[j+1]){
                //交换
                // let temp=null;
                // this[j]=temp;
                // temp= this[j+1];
                // this[j]=this[j+1];
                [this[j],this[j+1]=[this[j+1],this[j]]];
            }
        }
}
}
