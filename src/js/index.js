/* 
    sw代码必须运行在服务器上
      --> nodejs 
        npm i serve -g
        serve -s build 启动服务器，将build目录下所有资源作为静态资源暴露出去
*/
// 注册serviceWorker
// 处理兼容性问题

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("sw注册成功了 ", registration);
      })
      .catch((registrationError) => {
        console.log("SW注册失败 ", registrationError);
      });
  });
}
