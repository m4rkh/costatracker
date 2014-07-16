var $ = jQuery.noConflict();
$(document).ready(function() {
                  
                  var avgwage= 7.4;
                  var manwage = 77; // or 61
                  $("#doit").click(function(){
//fri
                                   var forecast=parseFloat($('#fri td').eq(1).children(1).val());
                                   var manager=parseFloat($('#fri td').eq(2).children(1).val());
                                   var scheduled=parseFloat($('#fri td').eq(3).children(1).val());
                                   var labour=(scheduled-manager)*avgwage+ ((manager==0) ? 0: manwage);
                                   var wtdsales=forecast;
                                   var wtdman=manager;
                                   var wtdscheduled=scheduled;
                                   var wtdlabour=labour;
                                   $('#fri td').eq(4).html('&pound;'+labour.toFixed(2)+'<br/>'+(labour/forecast*100).toFixed(1)+'%');

                                   //sat
                                   forecast=parseFloat($('#sat td').eq(1).children(1).val());
                                   manager=parseFloat($('#sat td').eq(2).children(1).val());
                                   scheduled=parseFloat($('#sat td').eq(3).children(1).val());
                                   labour=(scheduled-manager)*avgwage+ ((manager==0) ? 0: manwage);
                                   wtdsales+=forecast;
                                   wtdman+=manager;
                                   wtdscheduled+=scheduled;
                                   wtdlabour+=labour;
                                   $('#sat td').eq(4).html('&pound;'+labour.toFixed(2)+'<br/>'+(labour/forecast*100).toFixed(1)+'%');
//wtd
                                   $('#wtd1 td').eq(1).html('&pound;'+wtdsales.toFixed(2));
                                   $('#wtd1 td').eq(2).html(wtdman.toFixed(2));
                                   $('#wtd1 td').eq(3).html(wtdscheduled.toFixed(2));
                                   $('#wtd1 td').eq(4).html('&pound'+wtdlabour.toFixed(2)+'<br/>'+(wtdlabour/wtdsales*100).toFixed(1)+'%');
                                   
                                   //sun
                                   forecast=parseFloat($('#sun td').eq(1).children(1).val());
                                   manager=parseFloat($('#sun td').eq(2).children(1).val());
                                   scheduled=parseFloat($('#sun td').eq(3).children(1).val());
                                   labour=(scheduled-manager)*avgwage+ ((manager==0) ? 0: manwage);
                                   wtdsales+=forecast;
                                   wtdman+=manager;
                                   wtdscheduled+=scheduled;
                                   wtdlabour+=labour;
                                   $('#sun td').eq(4).html('&pound;'+labour.toFixed(2)+'<br/>'+(labour/forecast*100).toFixed(1)+'%');
                                   //wtd
                                   $('#wtd2 td').eq(1).html('&pound;'+wtdsales.toFixed(2));
                                   $('#wtd2 td').eq(2).html(wtdman.toFixed(2));
                                   $('#wtd2 td').eq(3).html(wtdscheduled.toFixed(2));

                                   $('#wtd2 td').eq(4).html('&pound'+wtdlabour.toFixed(2)+'<br/>'+(wtdlabour/wtdsales*100).toFixed(1)+'%');
                                   
                                   //mon
                                   forecast=parseFloat($('#mon td').eq(1).children(1).val());
                                   manager=parseFloat($('#mon td').eq(2).children(1).val());
                                   scheduled=parseFloat($('#mon td').eq(3).children(1).val());
                                   labour=(scheduled-manager)*avgwage+ ((manager==0) ? 0: manwage);
                                   wtdsales+=forecast;
                                   wtdman+=manager;
                                   wtdscheduled+=scheduled;
                                   wtdlabour+=labour;
                                   $('#mon td').eq(4).html('&pound;'+labour.toFixed(2)+'<br/>'+(labour/forecast*100).toFixed(1)+'%');
                                   //wtd
                                   $('#wtd3 td').eq(1).html('&pound;'+wtdsales.toFixed(2));
                                   $('#wtd3 td').eq(2).html(wtdman.toFixed(2));
                                   $('#wtd3 td').eq(3).html(wtdscheduled.toFixed(2));

                                   $('#wtd3 td').eq(4).html('&pound'+wtdlabour.toFixed(2)+'<br/>'+(wtdlabour/wtdsales*100).toFixed(1)+'%');
                                   
                                   
                                   //tue
                                   forecast=parseFloat($('#tue td').eq(1).children(1).val());
                                   manager=parseFloat($('#tue td').eq(2).children(1).val());
                                   scheduled=parseFloat($('#tue td').eq(3).children(1).val());
                                   labour=(scheduled-manager)*avgwage+ ((manager==0) ? 0: manwage);
                                   wtdsales+=forecast;
                                   wtdman+=manager;
                                   wtdscheduled+=scheduled;
                                   wtdlabour+=labour;
                                   $('#tue td').eq(4).html('&pound;'+labour.toFixed(2)+'<br/>'+(labour/forecast*100).toFixed(1)+'%');
                                   //wtd
                                   $('#wtd4 td').eq(1).html('&pound;'+wtdsales.toFixed(2));
                                   $('#wtd4 td').eq(2).html(wtdman.toFixed(2));
                                   $('#wtd4 td').eq(3).html(wtdscheduled.toFixed(2));
                                   $('#wtd4 td').eq(4).html('&pound'+wtdlabour.toFixed(2)+'<br/>'+(wtdlabour/wtdsales*100).toFixed(1)+'%');
                                   
                                   
                                   //wed
                                   forecast=parseFloat($('#wed td').eq(1).children(1).val());
                                   manager=parseFloat($('#wed td').eq(2).children(1).val());
                                   scheduled=parseFloat($('#wed td').eq(3).children(1).val());
                                   labour=(scheduled-manager)*avgwage+ ((manager==0) ? 0: manwage);
                                   wtdsales+=forecast;
                                   wtdman+=manager;
                                   wtdscheduled+=scheduled;
                                   wtdlabour+=labour;
                                   $('#wed td').eq(4).html('&pound;'+labour.toFixed(2)+'<br/>'+(labour/forecast*100).toFixed(1)+'%');
                                   //wtd
                                   $('#wtd5 td').eq(1).html('&pound;'+wtdsales.toFixed(2));
                                   $('#wtd5 td').eq(2).html(wtdman.toFixed(2));
                                   $('#wtd5 td').eq(3).html(wtdscheduled.toFixed(2));
                                   $('#wtd5 td').eq(4).html('&pound'+wtdlabour.toFixed(2)+'<br/>'+(wtdlabour/wtdsales*100).toFixed(1)+'%');
                                   
                                   
                                   //thu
                                   forecast=parseFloat($('#thu td').eq(1).children(1).val());
                                   manager=parseFloat($('#thu td').eq(2).children(1).val());
                                   scheduled=parseFloat($('#thu td').eq(3).children(1).val());
                                   labour=(scheduled-manager)*avgwage+ ((manager==0) ? 0: manwage);
                                   wtdsales+=forecast;
                                   wtdman+=manager;
                                   wtdscheduled+=scheduled;
                                   wtdlabour+=labour;
                                   $('#thu td').eq(4).html('&pound;'+labour.toFixed(2)+'<br/>'+(labour/forecast*100).toFixed(1)+'%');
                                   //wtd
                                   $('#wtd6 td').eq(1).html('&pound;'+wtdsales.toFixed(2));
                                   $('#wtd6 td').eq(2).html(wtdman.toFixed(2));
                                   $('#wtd6 td').eq(3).html(wtdscheduled.toFixed(2));
                                   $('#wtd6 td').eq(4).html('&pound'+wtdlabour.toFixed(2)+'<br/>'+(wtdlabour/wtdsales*100).toFixed(1)+'%');
                                   

 
                });
                 });