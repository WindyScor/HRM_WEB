import { ElLoading } from "element-plus";

export default function openLoading({close}) {
    const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.7)",
    });
    console.log(close)
    setTimeout(() => {
        loading.close();
    }, 5000);
}