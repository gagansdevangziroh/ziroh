browser.composeAction.onClicked.addListener(async(window) =>{
    let details = await browser.compose.getComposeDetails(window.id);
  console.log(details);

  if (details.isPlainText) {
    let body = details.plainTextBody;
    console.log(body);

    body += "\nwelcome to my Thunderbird ";
    console.log(body);
    browser.compose.setComposeDetails(window.id, { plainTextBody: body });
      
  } else {
    
    let document = new DOMParser().parseFromString(details.body, "text/html");
    console.log(document);
    let para = document.createElement("p");
    para.textContent = "message from my Thunderbird";
    document.body.appendChild(para);
    let html = new XMLSerializer().serializeToString(document);
    console.log(html);
    browser.compose.setComposeDetails(window.id, { body: html });
  }
    
});
browser.composeAction.onClicked.addListener(async (tab) => {

    var file = new File(["xyz"], "xyz.pdf", {
        type: "application/pdf",
    });

    console.log("File : " + file);

    browser.compose.addAttachment(tab.id, {
        file
    })

    var test = await browser.compose.ComposeAttachment.getFile();
    console.log("attachment : " + test);

    var test1 = await browser.compose.listAttachments(tab.id);
    console.log("attachments : " + test1.toString());

 
}); 
browser.composeAction.onClicked.addListener(async(window) =>{
    let details = await browser.compose.getComposeDetails(window.id);
  console.log(details);

  if (details.subject) {
      browser.compose.setComposeDetails(window.id, { subject: details.subject +"   thunderbird subject" });
      
  }
});