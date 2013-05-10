css-zone
========

**Piccola "espansione" per Modernizr.**

Aggiunge:
- Una di queste classi: *zonarossa*, *zonagialla* o *zonaverde*
- La proprietà "zona" a Modernizr, con valore *zonarossa*, *zonagialla* o *zonaverde*
- Il test "deprefix" a Modernizr, e quindi la classe *deprefix* / *no-deprefix*
- Nei browser "non deprefixati", viene aggiunta la classe *no-deprefix-VENDOR-* ( *moz* o *webkit* )
- I seguenti test a Modernizr: *mediaqueries*, *boxsizing*, *matchmedia* e *standalone*, presi dalle [specifiche ufficiali](https://github.com/Modernizr/Modernizr/tree/master/feature-detects)


# Come usare css-zone

1. Inserendo un messaggio personalizzato per i browser della "zona rossa", ad esempio:
```
<div class="avviso-zonarossa">Visita la <a href="...">versione accessibile</a> del sito</div>
```
che apparirà solo agli utenti interessati grazie a queste regole CSS:
```
.avviso-zonarossa { display:none; }
.zonarossa .avviso-zonarossa { display:block; }
```

2. Caricando [prefixfree](https://github.com/LeaVerou/prefixfree) solo per i browser "non deprefixati":
```
Modernizr.load([{test:Modernizr.deprefix,nope:'/path/del/file/prefixfree.js'}]);
```
per garantire la compatibilità di *box-shadow* e *border-radius* senza vendor-prefix (e risparmiare metri di css)
3. Caricando altri plugin condizionali per la "zona gialla" (polyfill, fallback ecc):
```
Modernizr.load([{test:Modernizr.zona=="gialla",yep:'/path/plugin.js'}]);
```
4. Usando le classi *.no-deprefix-moz* e *.no-deprefix-webkit* per correggere i fastidiosi errori sulle vecchie versioni di Firefox e Safari, ad esempio:
```.no-deprefix-moz .div-qualunque { padding-top:0; }```

# Come funziona

**css-zone** dipende da Modernizr con almeno queste features:

[#-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes](http://modernizr.com/download/#-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes)

## Le zone

#### .zonarossa
Classe applicata ai browser: IE7< , Safari 3.2< , Opera: 9< e Firefox 3<

#### .zonagialla
Classe applicata ai browser: IE8 , Safari 4 e 5 , Opera 9.5>10.1 , Firefox 3.5 e 3.6 , Chrome 9< , Android 3< , iOs Safari 3.2>4.3 , Blackberry 7 , Opera Mobile 10 e tutte le versioni di Opera Mini

#### .zonaverde
Classe applicata ai browser: IE9+ , Safari 5.1+ , Opera 10.5+ , Chrome 10+ , Firefox 4+ , iOs Safari 5+ , Android 4+ , Blackberry 10+ e Opera Mobile 11+.

## Deprefix

#### .no-deprefix
Browser che supportano le proprietà *border-radius* e *box-shadow*, ma una delle due o entrambe solo con il vendor-prefix.
Lo scopo principale è caricare condizionalmente [prefixfree](https://github.com/LeaVerou/prefixfree) tramite [Modernizr.load](http://modernizr.com/docs/#load)

Viene applicata solo a Safari 5< , iOs Safari 4.3< , Android 3< , Blackberry 7 e Firefox 2>3.6 

**_no-deprefix-moz_** colpisce solo Firefox 2>3.6, mentre **_no-deprefix-webkit_** gli altri browser elencati.

#### .deprefix
Tutti i browser che supportano le proprietà *border-radius* e *box-shadow*, entrambe senza vendor-prefix, oppure non le supportano affatto.
Per questi browser è inutile o controproducente utilizzare prefixfree.

## Altri test

Il plugin aggiunge anche questi test comuni ma che non fanno parte del core di Modernizr:
- *mediaqueries* e *matchmedia*
- *boxsizing*
- *standalone*

# Altre informazioni
- Versione: alpha
- Ultima modifica: 10 Maggio 2013  
- Autore: [Giona Ferrandu](http://gionaf.com)

La divisione in "zone" non si basa su user-agent sniffing o simili, combina invece il supporto di alcune features rilevato da Modernizr.
Essendo basato su versioni dei browser di 3 o più anni fa, il plugin è sicuramente stabile. Le versioni mobile interessate richiedono però ulteriori test.

[Maggiori informazioni](http://gionaf.com/playground/css-zone/)
