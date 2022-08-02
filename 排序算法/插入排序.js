//从第二个数，开始往前比较
//比它大就往后排
//依次排

//时间复杂度o（n^2）
Array.prototype.insertionSort = function () {
    //遍历数组，从第二个开始
    for (let i = 1; i < this.length; i++) {
        //获取第二个元素
        const temp = this[i];

        let j = i;
        while (j > 0) {
            //如果当前元素小于前一个元素就往后移动
            if (this[j - 1] > temp) {
                this[j] = this[j - 1];
            } else {

                //否则就跳出循环
                break
            }

            //递减
            j--;
        }
        //前一个位置赋值为当前元素
        this[j] = temp;
    }
}
