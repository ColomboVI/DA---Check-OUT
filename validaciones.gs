
function validateEmailPythonYlanzarCuestionarioWorkshop()  {
var sheet_workshops=SpreadsheetApp.getActive().getSheetByName('Workshops');
var emailProfePython = sheet_workshops.getRange('emailProfePython').getValue();
var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!re.test(emailProfePython)){
    var ui = SpreadsheetApp.getUi();
   var response = ui.prompt('Necesitamos email profesor Python', 'Cual es tu correo electrónico?', ui.ButtonSet.YES_NO);  
   // Process the user's response.
   if (response.getSelectedButton() == ui.Button.YES) {
       if(response.getResponseText() == ""){
           sheet_workshops.getRange('emailProfePython')
           .setValue("Falta email aqui").setBackground("red").setFontColor("white");
           return
       }else{
        var emailDado = response.getResponseText() 
            sheet_workshops.getRange('emailProfePython')
           .setValue(emailDado)
           return
        }
  } else if (response.getSelectedButton() == ui.Button.NO) {
        sheet_workshops.getRange('emailProfePython')
       .setValue("Falta email aqui").setBackground("red").setFontColor("white");
  } else {
        sheet_workshops.getRange('emailProfePython')
       .setValue("Falta email aqui").setBackground("red").setFontColor("white");
  }
    
    } else {
    //Lanzar Workshop Python
    lanzarCuestionarioWorkshop('Python');   
   /* var htmlOutput = HtmlService
    .createHtmlOutput('<p>Ok Python</p>')
    .setWidth(250)
    .setHeight(300);
     SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'My add-on'); 
     */  
    // Logger.log("Evaluadores " + getEmailsSelected(false, "Python"))
     
    }
}

//validar email Spark
function validateEmailSparkYlanzarCuestionarioWorkshop()  {
var sheet_workshops=SpreadsheetApp.getActive().getSheetByName('Workshops');
var emailProfeSpark = sheet_workshops.getRange('emailProfeSpark').getValue();
var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!re.test(emailProfeSpark)){
    var ui = SpreadsheetApp.getUi();
   var response = ui.prompt('Necesitamos email profesor Spark', 'Cual es tu correo electrónico?', ui.ButtonSet.YES_NO);  
   // Process the user's response.
   if (response.getSelectedButton() == ui.Button.YES) {
       if(response.getResponseText() == ""){
           sheet_workshops.getRange('emailProfeSpark')
           .setValue("Falta email aqui").setBackground("red").setFontColor("white");
           return
       }else{
        var emailDado = response.getResponseText() 
            sheet_workshops.getRange('emailProfeSpark')
           .setValue(emailDado)
           return
        }
  } else if (response.getSelectedButton() == ui.Button.NO) {
        sheet_workshops.getRange('emailProfeSpark')
       .setValue("Falta email aqui").setBackground("red").setFontColor("white");
  } else {
        sheet_workshops.getRange('emailProfeSpark')
       .setValue("Falta email aqui").setBackground("red").setFontColor("white");
  }
    
    } else {
    //Lanzar Workshop Spark
    lanzarCuestionarioWorkshop('Spark');
    /*
    var htmlOutput = HtmlService
    .createHtmlOutput('<p>Ok Spark</p>')
    .setWidth(250)
    .setHeight(300);
     SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'My add-on'); 
     */
    // Logger.log("Evaluadores " + getEmailsSelected(false, "Spark"))
    }
}
