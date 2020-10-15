const readMarkdown = async (
  value: string,
  func: (value: React.SetStateAction<string>) => void
) => {
  fetch(value)
    .then(r => r.text())
    .then(text => func(text));
};

export default readMarkdown;
