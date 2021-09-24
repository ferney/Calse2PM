var ES1     = !!(Array.prototype && Array.prototype.join),
        ES3     = !!(Array.prototype && Array.prototype.pop),
        ES51    = (function() {'use strict'; return !this; })(),
        ES6     = !!Object.assign,
        ES7     = !!(Array.prototype && Array.prototype.includes);
            /*
            var ES51    = Modernizr.es5,
                ES6     = Modernizr.es6object;
                ES7     = false;
            */

        if(ES7){
            alert('Tu navegador contiene características mínimas de ECMAScript 7');
        }else if(ES6){
            alert('Tu navegador contiene características mínimas de ECMAScript 6');
        }else if(ES51){
            alert('Tu navegador tiene soporte para ECMAScript 5.1');
        }else if(ES3){
            alert('Tu navegador contiene características de ECMAScript 3');
        }else if(ES1){
            alert('Tu navegador contiene características de ECMAScript 1');
        }else{
            alert('Tu navegador contiene características de ECMAScript desconocida');
        }