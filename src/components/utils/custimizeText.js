export default function customizeText(text) {
  return `${text[0].toUpperCase()}${text.slice(1, text.length)}`;
}
