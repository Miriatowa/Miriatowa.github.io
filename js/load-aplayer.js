document.addEventListener("DOMContentLoaded", function() {
  let apContainer = document.createElement("div");
  apContainer.id = "aplayer";
  document.body.append(apContainer);
  const ap = new APlayer({
    container: document.getElementById("aplayer"),
    fixed: true,
    audio: [
      {
        name: "意外",
        artist: "薛之谦",
        url: "薛之谦 - 意外.mp3",
        cover: "//y.gtimg.cn/music/photo_new/T002R300x300M000000QgFcm0v8WaF_1.jpg?max_age=2592000"
      },
      {
        name: "肆无忌惮",
        artist: "薛之谦",
        url: "薛之谦 - 肆无忌惮.mp3",
        cover: " //y.gtimg.cn/music/photo_new/T002R300x300M0000015rUVB2OUdGA_1.jpg?max_age=2592000"
      },
      {
        name: "水手",
        artist: "郑智化",
        url: "郑智化 - 水手.mp3",
        cover: "//y.gtimg.cn/music/photo_new/T002R300x300M000002uGyPT1oYzxV_1.jpg?max_age=2592000"
      },
      {
        name: "天后 (Live)",
        artist: "薛之谦",
        url: "薛之谦 - 天后 (Live).mp3",
        cover: "//y.gtimg.cn/music/photo_new/T002R300x300M000001mH3KE1Z6Prd_1.jpg?max_age=2592000"
      },
    ],
  });
});