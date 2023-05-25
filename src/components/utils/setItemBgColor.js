export default function setItemBgColor({ labelName }) {
  switch (labelName) {
    case '.docx':
      return '#7777ff';
    case '.pdf':
      return '#d94fff';
    case '.mp3':
      return '#ec6363';
    case '.psd':
      return '#65c2c2';
    default:
      return '#ffffff';
  }
}
