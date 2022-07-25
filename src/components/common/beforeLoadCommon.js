
export default function beforeLoadCommon() {
    window.addEventListener('beforeunload', (event) => {
        const msg = "Are you sure you want to load this page"
        event.returnValue = msg
        return msg
    });
}
