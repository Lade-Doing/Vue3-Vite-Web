//邮箱验证
export function emailValidator (rule, value, callback) {
    if (!value) {
      callback(new Error("请输入邮箱"));
    } else if (
      !/^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
    ) {
      callback(new Error("邮箱格式不正确"));
    } else {
      callback();
    }
};

//手机号验证
export function telValidator(rule, value, callback){
    if (!value) {
      callback(new Error("请输入手机号"));
    } else if (!/^1[3456789]\d{9}$/.test(value)) {
      callback(new Error("手机号格式不正确"));
    } else {
      callback();
    }
};

// 数字自定义验证规则
export function numberValidator (rule, value, callback){
    if (!value) {
      callback(new Error("请输入数字"));
    } else if (isNaN(value)) {
      callback(new Error("请输入有效的数字"));
    } else {
      callback();
    }
};

// 字符串自定义验证规则
export function stringValidator (rule, value, callback){
    if (!value) {
      callback(new Error("请输入字符串"));
    } else if (typeof value !== 'string') {
      callback(new Error("请输入有效的字符串"));
    } else {
      callback();
    }
};

// 图标字段自定义验证规则
export function iconValidator (rule, value, callback){
    if (!value) {
      callback(new Error("请选择图标"));
    } else {
      const regex = /^[A-Z][a-zA-Z]*$/;
      if (!regex.test(value)) {
        callback(new Error("图标字段必须是首字母大写的字符串"));
      } else {
        callback();
      }
    }
  };

//验证文件名字后面是否有jpg、png等图片后缀
export function fileNameValidator(fileName){
  // const
}
  

