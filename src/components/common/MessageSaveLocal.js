import { h } from 'vue'
import { ElMessageBox } from 'element-plus'
const MessageBox = ({ id, data, screen }) => {
  const dataSave = {
    id: id,
    data: data,
    screen: screen,
  }
  ElMessageBox({
    title: "Message",
    message: h("p", null, [
      h("span", null, "Are you sure you want to close this?"),
    ]),
    showCancelButton: true,
    confirmButtonText: "Save",
    cancelButtonText: "Back Later",
    beforeClose: (action, instance, done) => {
      if (action === "confirm") {
        done();
        // props.cancel();
        // dialogVisible.value = false;
        return true
      } else {
        localStorage.setItem("dataSave", dataSave)
        done();
        return false
      }
    },
  });
}

export default MessageBox;