function crearFormularioCheckIn()
{
    var this_sheet=new ThisSheet();   
    var test=this_sheet.getFormularioTestCheckin();
    
    if (test)
    {
      var response = SpreadsheetApp.getUi().alert('Ya existe un test de check in creado y se procedera a lanzarlo al listado de alumnos.\n\n'+
                                                  'En caso de querer mandar un test nuevo debe borrar el anterior existente en la carpeta siguiente:\n'+this_sheet._directorio_checkout.getUrl()
      ,SpreadsheetApp.getUi().ButtonSet.OK_CANCEL)
      
      //El usuario cancela el lanzamiento
      if (response == SpreadsheetApp.getUi().Button.CANCEL)
      throw 'El usuario ha cancelado el lanzamiento.';
      //(new Comunicaciones()).mandarCheckIn(getEmails(),FormApp.openById(test.getId()));
    }
    else
    {
   
      test= new CheckinTest();
      this_sheet.addTestCheckin(test);
      DriveApp.getRootFolder().removeFile(DriveApp.getFileById(test.getFormulario().getId()));  
      DriveApp.getRootFolder().removeFile(DriveApp.getFileById(test.getExcelAsociado().getId()));
     // (new Comunicaciones()).mandarCheckIn(getEmails(),test.getFormulario());
    }
}

function enviarTestCheckIn(){
    var this_sheet=new ThisSheet();   
    var test=this_sheet.getFormularioTestCheckin();    
    if(test){     
     (new Comunicaciones()).mandarCheckIn(getEmails(),FormApp.openById(test.getId()));
    } else {
      var ui = SpreadsheetApp.getUi();
      var response = ui.alert('No hay formulario, Desea crearlo?', ui.ButtonSet.YES_NO);
    
    if (response == ui.Button.YES) {
      crearFormularioCheckIn();
    } else if ((response == ui.Button.NO)) {
      Logger.log('El usuario ha cerrado el cuadro de dialogo');
      return;
    }
  }
}

function recopilarRespuestasCheckIn() {

         var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Check in(TEST)');
                      
        var excel_response=(new ThisSheet()).getRespuestasTestCheckin();
        //cogermos el valor en la celda A1
        //si no es vacio entocnes abrimos la hoja y copiamos los valores
        if (excel_response)
        {
          var excel_response_ss= SpreadsheetApp.open(excel_response);
          
          var last_column_excel_response = excel_response_ss.getLastColumn();
          if (excel_response_ss.getLastRow()-1>0)
          {
           sheet.getRange(3, 1, excel_response_ss.getLastRow(), excel_response_ss.getLastColumn()).setValues(excel_response_ss.getActiveSheet().getRange(1, 1, excel_response_ss.getLastRow(), excel_response_ss.getLastColumn()).getValues())
          }
        }
}


