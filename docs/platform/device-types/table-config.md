---
draft: true
---

# Table Config (TODO)


Die folgendenZugriffspfade können für Filter und Sort Properties genutzt werden.

Zusätlich kann ein Typ Binary im Filter ausgesucht werden.

Zugriffspfad für Config:

    `configuration[<column>=DevEUI].<column>`

Der erste `<column>` Wert ist eine nested Query welche den Wert "DevEUI" in der Column der Config sucht. 
Der zweite `<column>` Wert ist die Haupt-Query welche denWert für den Filter bzw.

Beispielsweise: 

    `configuration[name=DevEUI].value`

Finde in jedem Device den ConfigWert, bei dem der Wert Name = "DevEUI" ist.


Anzeige der Config Daten:
Config Daten werden als Liste an das UI weitergegeben. Wenn eine Filter Query ausgeführt wurde wird nicht der Wert der Haupt-Query angezeigt, sondern alle Config Wert für das gefundene Device.

Nutzt man das HTML Flagkann Handelbar benutzt werden um bspw. mehrere Config Werte im gleichen Tab anzuzeigen.

```
{{#each configuration}}
{{#if (eq this.name "listenCron") }}
{{ this.value }} 

{{{ this.updatedAt }}}
{{/if}}
{{/each}}
```

erzeugt:

0 0/5 * * * *
2024-03-08T17:14:36.617223+01:00

Simpler ist
```
{{#each configuration}}
{{#if (eq this.name "DevEUI") }}
{{ this.value }}
{{/if}}
{{/each}}
```
erzeugt:

fc0fe7fffee68ce2


In manchen Fällen kann es zu HTML Steuerungszeichen im Value kommen.

In diesem Fall sollte entweder das HTML Flag in derTableConfig gestzt werden oder der "triple-stash" Operator genutzt werden, welcher diese Werte escaped:

```
{{#each configuration}}
{{#if (eq this.name "DevEUI") }}
{{{ this.value }}}                  <-- tripple-stash
{{/if}}
{{/each}}
```