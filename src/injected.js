console.log("zoom拡張を読み込みます");
class Ws extends window.WebSocket {
  constructor(e) {
    super(e);
    this.addEventListener("message", (e) => {
      const msgID = JSON.parse(e.data).body?.msgID;
      if (!msgID) return;
      (async () => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const comments = [
          ...document.querySelectorAll(
            `[aria-label='Chat Message List'] [id="${msgID}"] p`
          ),
        ];
        if (!comments.length) return;
        fetch("http://localhost:5100/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comment: comments[0].innerText,
          }),
        });
      })();
    });
  }
}
setTimeout(() => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("fromPWA")) {
    if (
      confirm("Zoomの拡張機能がオフです。PWAモードを解除してリロードしますか？")
    ) {
      urlParams.delete("fromPWA");
      window.location.search = urlParams.toString();
    }
  }
}, 3000);
window.WebSocket = Ws;
