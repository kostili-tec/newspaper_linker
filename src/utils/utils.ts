export const getInnerData = () => {
  const title = getTitle();
  const checkBoxes = getCheckBoxes();
  const annoucment = getAnnoucment();
  const links = getLinks();

  return {
    title,
    checkBoxes,
    annoucment,
    links
  }
}

const getTitle = () => {
  const inputTitle = document.querySelector('#edit-title') as HTMLInputElement;
  const titleText = inputTitle.value;
  return titleText;
}

const getCheckBoxes = () => {
  const wrapper = document.querySelector('edit-field-rubrika1') as HTMLDivElement;
  const checkedInputs = wrapper.querySelectorAll('input:checked') as NodeListOf<HTMLInputElement>;
  const labels: Array<string> = [];
  checkedInputs.forEach((input) => {
    
    const label = wrapper.querySelector(`[for="${input.id}"]`) as HTMLLabelElement;
    const labelText = label.textContent;

    if (labelText) labels.push(labelText);
  })

  return labels;
}

const getAnnoucment = () => {
  const iframe = document.querySelector('.cke_wysiwyg_frame.cke_reset');
  const paragraph = iframe?.querySelector('p');

  return paragraph?.textContent;
}



const getLinks = () => {
  let links = '';
  const getLinksTextarea = () => {
    const textArea = document.querySelector('.cke_source') as HTMLTextAreaElement;
    if (textArea && textArea.value) {
      clearInterval(interval);
      links = textArea.value;
      return textArea.value;
    } else {
      return null;
    }
  }
  const switchButton = document.querySelector('#cke_90') as HTMLLinkElement;
  switchButton.click();

  const interval = setInterval(getLinksTextarea, 1000);
  return links;
}