function test_it(entry) {
 
    var pyt_9;
    var pyt_10;
       if (entry.value!=null && entry.value.length!=0) {
       entry.value=""+ eval(entry.value);
       }
       computeForm(entry.form);
       }
   
       function computeForm(form) {
       var total=0
       
       for (var count=0; count<4; count++)
       {
       if (form.a[count].checked){
       var total=total+parseInt(form.a[count].value);
       }
       }
       
       for (var count=0; count<4; count++)
       {
       if (form.b[count].checked){
       var total=total+parseInt(form.b[count].value);
       }
       }
   
       for (var count=0; count<4; count++)
       {
       if (form.c[count].checked){
       var total=total+parseInt(form.c[count].value);
       }
       }
   
       for (var count=0; count<4; count++)
       {
       if (form.d[count].checked){
       var total=total+parseInt(form.d[count].value);
       }
       }
   
       for (var count=0; count<4; count++)
       {
       if (form.e[count].checked){
       var total=total+parseInt(form.e[count].value);
       }
       }
   
       for (var count=0; count<4; count++)
       {
       if (form.f[count].checked){
       var total=total+parseInt(form.f[count].value);
       }
       }
   
       for (var count=0; count<4; count++)
       {
       if (form.g[count].checked){
       var total=total+parseInt(form.g[count].value);
       }
       }
       
       for (var count=0; count<4; count++)
       {
       if (form.h[count].checked){
       var total=total+parseInt(form.h[count].value);
       }
       }
       
       for (var count=0; count<4; count++)
       {
       if (form.i[count].checked){
       var total=total+parseInt(form.i[count].value);
       pyt_9 = form.i[count].value;
       }
       }
   
       for (var count=0; count<4; count++)
       {
       if (form.j[count].checked){
       var total=total+parseInt(form.j[count].value);
       pyt_10 = form.j[count].value;
       }
       }
   
   
   
       if (total > 9 || pyt_10 > 0 || pyt_9 > 0){ alert('Ponieważ uzyskany wynik PHQ-9 wskazuje na występowanie ryzyka depresji, więc wskazana jest konsultacja z lekarzem lub psychologiem. Diagnoza depresji może być postawiona przez specjalistę wyłącznie na podstawie pełnego wywiadu i oceny stanu psychicznego. Nie zwlekaj i skonsultuj się jak najszybciej z  psychiatrą, lekarzem rodzinnym lub psychologiem. Tylko specjalista może zweryfikować wynik testu, postawić diagnozę depresji lub wykluczyć ją') }
       else if (total>4){ alert(' Uzyskany wynik PHQ-9 wskazuje na niskie prawdopodobieństwo występowania depresji. Jest to jednak narzędzie pomocnicze i jeśli podejrzewasz, że możesz mieć depresję, najlepiej skonsultuj się z psychiatrą, lekarzem rodzinnym lub psychologiem. Tylko specjalista może zweryfikować wynik testu: rozpoznać lub wykluczyć depresję.')}
       else { alert('Uzyskany wynik PHQ-9 nie wskazuje na prawdopodobieństwo występowania depresji. Jest to jednak narzędzie pomocnicze i jeśli podejrzewasz, że możesz mieć depresję, najlepiej skonsultuj się z psychiatrą, lekarzem rodzinnym lub psychologiem. Tylko specjalista może zweryfikować wynik testu: rozpoznać lub wykluczyć depresję.')}
   
       }
   
       //-->