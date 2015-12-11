/* @flow */
class People {
    name: string;
    constructor(name:string){
        this.name = name
    }
    getAge():number{
        return 18;
    }
}


function getLength(param?:string):number {
    /*param?:string传参类型什么，?表示此处可不传值；*/
    /*\:number为函数返回值类型,如果没有return可不写或写void*/
    var s:string = 'string';/*字符*/
    var ss:String = new String('string');/*字符对象*/

    /* s = ss*///类型不同，flow会报错

    var n:number = 12;/*数字*/
    var nn:Number = new Number(12);/*数字对象*/

    var b:boolean = true;/*bool值，仅能为true/false*/
    var bb:Boolean = new Boolean(true);/*bool值对象*/

    var o:{prop1:number,prop2:string} = {
        /*对象熟悉声明*/
        prop1: 12,
        prop2: '21123'
    }

    var v:void = undefined;/*undefined*/
    var a:any = 'aa';/*任意类型，除undefined*/
    var m:mixed = '1';/*任意类型+undefined*/
    var mm:mixed = undefined;/*任意类型+undefined*/

    var aa:Array<number> = [1,2,3,4];/*数组内值类型声明*/

    var P:Class<People> = People;/*自定义类型声明*/
    var p:People = new People('pt');/*自定义People类型*/


    if (param) {
        return param.length;
    } else {
        return 0;
    }
}

getLength('2313')


// var a = React.create({
// })