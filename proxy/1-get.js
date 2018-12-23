/**
 * Proxy实例的方法-get
 * 
 * 作用： 拦截对象的读取
 */
let obj = {
    name: "张三"
}

/**
 * 用法：
 *      new Proxy(要代理的对象，handle对象{})
 * 
 *      new Proxy(obj, {
 *          get: function(对象本身obj, obj的属性， reciver) {...}
 *      })
 * 
 */

let proxy = new Proxy(obj, {
    get(target, property, reciver) {
        if(property in target) {
            console.log(`访问 ${target}的属性 property`);
            console.log(target);
            
            return target[property];
        } else {
            throw new Error(`${target}不存在这个属性`)
        }
    }
})

// proxy已经是实例对象，直接可以去访问对对象的属性
console.log(proxy.name);
console.log(proxy.sex);




