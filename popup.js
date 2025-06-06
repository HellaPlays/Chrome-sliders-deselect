document.getElementById('deselect').addEventListener('click', () => {
    // Send a message to the content script to deselect all sliders
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: deselectSliders
      });
    });
  });
  
  function deselectSliders() {
    // Select all sliders (checkboxes) on the page and deselect them
    let sliders = document.querySelectorAll('input[type="checkbox"]');
    sliders.forEach(slider => {
      if (slider.checked) {
        slider.click(); // Turn off the slider if it's on
      }
    });
  }
  