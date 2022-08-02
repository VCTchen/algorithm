//找到数组中最小的值，选中它并放到第一位
//接着找数组中第二小的值，并放到第二位
//重复执行n-1次


//时间复杂度o（n^2）
//空间复杂度o（1）
Array.prototype.selectionSort = function (){
    for(let i=0;i<this.length-1;i++){
        let indecMin = i;
        for(let j =0;j<this.length;j++){
        //    如果当前这个元素小于最小值的下标就更新最小值的下标
            if(this[j]<this[indecMin]){
                indecMin = j;
            }
        }

    //    避免和自己交换
        if(indecMin !==i){
            //进行数据交换
            [this[i],this[indecMin]]=[this[indecMin],this[i]];
        }
    }
}
