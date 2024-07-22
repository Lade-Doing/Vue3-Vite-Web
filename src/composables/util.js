import { ElNotification, ElMessageBox } from 'element-plus'
import nprogress from 'nprogress'
// 导入 CryptoJS 库
import CryptoJS from "crypto-js";
// 消息提示
export function toast(message, type = "success", dangerouslyUseHTMLString = false, duration = 3000) {
  ElNotification({
    message,
    type,
    dangerouslyUseHTMLString,
    duration: duration
  })
}

// 显示全屏loading
export function showFullLoading() {
  nprogress.start()
}

// 隐藏全屏loading
export function hideFullLoading() {
  nprogress.done()
}

export function showModal(content = "提示内容", type = "warning", title = "") {
  return ElMessageBox.confirm(
    content,
    title,
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type,
    }
  )
}

//进行md5加密和解密
export function md5(plaintext) {
  return CryptoJS.MD5(plaintext).toString();
}


//格式化时间
export function formatTime(time) {
  const date = new Date(time);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
}

//返回菜单树中所有的菜单ids
export function getAllMenuIds(menuTree, ids = []) {
  for (let i = 0; i < menuTree.length; i++) {
    const item = menuTree[i];
    ids.push(item.id);
    if (item.children && item.children.length > 0) {
      getAllMenuIds(item.children, ids);
    }
  }
  return ids;
}

//将file对象转化为dto对象
export function convertFileToDto(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const imageData = event.target.result;
      const dto = {
        name: file.name,
        type: file.type,
        size: file.size,
        data: imageData,
      };
      resolve(dto);
    };

    reader.onerror = (event) => {
      reject(event.target.error);
    };

    reader.readAsDataURL(file);
  });
}
