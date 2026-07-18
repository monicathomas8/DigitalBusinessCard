// Grab references to the save button and the message element,
// so we don't have to query the DOM every time the button is clicked.
const saveBtn = document.getElementById('saveBtn');
const saveMessage = document.getElementById('saveMessage');


// When the user clicks "Save My Contact", build a vCard and trigger a download.
// Placeholder details below need to be swapped for real ones in the private copy.
saveBtn.addEventListener('click', () => {
  
  // vCard is a standard contact-file format phones understand,
  // so opening this file lets the user "Add Contact" directly.
  const vCardData = 
`BEGIN:VCARD
VERSION:3.0
FN:Your Name
TITLE:Your Job Title
TEL;TYPE=CELL:+10000000000
EMAIL:you@example.com
END:VCARD`;


  // Turn the vCard text into a downloadable file in memory (no server needed).
  const blob = new Blob([vCardData], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);

  // Create a hidden link pointing at that file and "click" it programmatically
  // — this is the standard trick to trigger a download from JS.
  const link = document.createElement('a');
  link.href = url;
  link.download = 'contact.vcf';
  link.click();

  // Free up the memory used for the temporary file now that it's downloaded.
  URL.revokeObjectURL(url);

  // Let the user know what to do next, since the download alone isn't obvious.
  saveMessage.textContent = 'Saved! Tap the downloaded file to add to your contacts.';
});