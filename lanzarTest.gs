/************************
recibe @param {string} tipo_test,
valores checkIn o checkOut
**************************/

function desarroloLanzarTest(){
  tipoTest = SpreadsheetApp.getActiveSheet().getName();
  if(tipoTest == "Check in(TEST)"){
    tipoTest = SpreadsheetApp.getActiveSheet().getName()
    nuevoTipo = tipoTest.replace("(TEST)", "")
    lanzarTest(nuevoTipo)
  }else if (tipoTest == "Check out(TEST)"){
    tipoTest = SpreadsheetApp.getActiveSheet().getName()
    nuevoTipo = tipoTest.replace("(TEST)", "")

    lanzarTest(nuevoTipo)
  }
}

function lanzarTest2(tipo){
  //SpreadsheetApp.getUi().alert("esto es t desde lanzar" + tipo)
  //var this_sheet=new ThisSheet();

  if(tipo == "Check out"){
    SpreadsheetApp.getUi().alert("esto es tipo desde lanzar2" + tipo)
   //var test=this_sheet.getFormularioTestCheckout();
  }else if (tipo == "Check in"){
   SpreadsheetApp.getUi().alert("esto es tipo desde lanzar2" + tipo)
  //var test=this_sheet.getFormularioTestCheckin();
  }
}

function lanzarTest(t)
{


    var this_sheet=new ThisSheet();


  if(t == "Check out"){
    var test=this_sheet.getFormularioTestCheckout();
  }else if (t == "Check in"){
    var test=this_sheet.getFormularioTestCheckin();
  }
    var test=this_sheet.getFormularioTestCheckout();

    if (test)
    {
      var response = SpreadsheetApp.getUi().alert('Ya existe un test de check in creado y se procedera a lanzarlo al listado de alumnos.\n\n'+
                                                  'En caso de querer mandar un test nuevo debe borrar el anterior existente en la carpeta siguiente:\n'+this_sheet._directorio_checkout.getUrl()
      ,SpreadsheetApp.getUi().ButtonSet.OK_CANCEL)

      //El usuario cancela el lanzamiento
      if (response == SpreadsheetApp.getUi().Button.CANCEL)
      throw 'El usuario ha cancelado el lanzamiento.';
      (new Comunicaciones()).mandarCheckOut(getEmails(),FormApp.openById(test.getId()));
    }
    else
    {
      /*************************
       (Alex)
       TODO: Crear funciones para checkIn
       TODO: Abstraer classe CheckoutTest para poder reutilizarla
             en checkIn y checkOut
      *******************/
      test= new CheckinTest();
      this_sheet.addTestCheckout(test);
      DriveApp.getRootFolder().removeFile(DriveApp.getFileById(test.getFormulario().getId()));
      DriveApp.getRootFolder().removeFile(DriveApp.getFileById(test.getExcelAsociado().getId()));
      (new Comunicaciones()).mandarCheckOut(getEmails(),test.getFormulario());
    }
}
