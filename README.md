He creat un projecte de Angular amb Stackblitz que podeu executar des de https://angular-ivy-txqu8q.stackblitz.io

Primera pantalla:
- Les cards dels trimestres estan generades dinàmicament a traves del termProgress.service. (He intentat que agafes les dades del php creat en la carpeta de services però al no estar pujat a cap servidor amb php no em funcionava la crida amb el http client i no he sabut linkar aquestes dos parts)
- Els gràfics de les cards dels trimestres també han estat realitzats a partir de la informació del termProgress.service.
- El boto del header de preferències obre una sidenav que conte una sèrie de preferències i les opcions de guardar i tancar sense guardar. (El problema de aquesta sidenav son que no fa un fade del body que en teoria hauria de fer automàticament amb la opció de mode="over")
- Quan es fa un Guardar Cambios els valors de les preferències queden storejats al localStorage per a que no s’eliminin al tancar el navegador, però podrien guardar-se a la BBDD.
- Al fer click en qualsevol de les cards de trimestres et porta a la segona pantalla.

Segona pantalla:
- A la segona pantalla se li passa informació de quina card has clickat y es crea la mateixa card que teníem a la primera pantalla per saber en quin trimestre estàs. Això es fa a traves del data.service creant una variable a la que li pesem el term i des de la segona pantalla ens subscrivim per a agafar aquest term.
- En cas de no tenir un term al entrar en aquesta pagina (ja sigui per reload o al entrar per url directament) t'envia a la pagina de home.
- La llista de les sessions es una llista clickable que agafa les dades del mateix component (s'hauria de agafar de la BBDD) i posa el numero, el nom de la sessió i si ja ha estat visualitzada o no.
- Per entrar a veure les sessions has de clickar dos cops a la mateixa sessió ja que no he pogut fer que un svg fos clickable al canviar-lo des de el ts i no estar creat dins el html.

Tercera pantalla:
- Es una pantalla basica de visualització on desapareix el header al passar-li en el router el queryparameter de hasFullView=true.

El php en la carpeta de services:
- El php crec que esta ben comentat dins del codi, explicat com s'utilitzaria i que faig en cada moment.



