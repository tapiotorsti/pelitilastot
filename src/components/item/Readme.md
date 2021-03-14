Item-komponentilla renderöidään yksittäinen merkintä sivulle.
Komponentti saa kutsun yhteydessä tulostettavan merkinnän tiedot 
data-ominaisuuden kautta.

Malliesimerkki käytöstä: 
```js
import {BrowserRouter as Router} from 'react-router-dom';

const data = {
        id:"abc-123",
        kills:20,
        deaths:10,
        kdr:2,
        game:"CS:GO",
        date:"2020-03-09",
        winOrLoss:"Win"
    };

<Router>
    <Item data={data} />
</Router>
```