let exp1 = ((4 + 5) && "abc" || false + "test") * (1-- || 1--) || (false && (++1 + 1)) * "end";
// ans is 0;

let exp2 = 10 * ('foo' && 5 + (++6) || 'bar') && (false + --"test") || 0 && 'end';
// ans is 0;

let exp3 = 3 + (1-- || 'start') * 4 && (--0 + 'value') * (1 + 2) + 'result';
// ans is NaNresult;

let exp4 = "hello" * (++0 + "value") * (1 + 2) + "result";
// ans is 0;

let exp5 = (true || (0 + 1) * "test" && 4 || (false && 3 + "value") * 1-- + 2);
// ans is true;

let exp6 = ++2 + 'abc' && (4 * 2) + 3 || (0 + 1) && (3 * 'hello') || 5;
// ans is 5;

let exp7 = ('foo' + 5) * (++0 + true) || 2 * 3 + (true + 2) || 'result';
// ans is 9;

let exp8 = (0 + 1) && (true + 0) || (false + 'test') * 4 && 3 + 2 || ++'value';
// ans is NaN;

let exp9 = 3 * 'abc' + (true + 1) || (++0 + 'test') && (3 + 'result') || null;
// ans is '3result';

let exp10 = (++6 + false) && 'start' || 0 + 1 && 'value' || 5 * 'end' && 3++;
// ans is 'start';

let exp11 = (false && 'hello') + (3++ || 3 + 'test') * 4 || 5 * 'abc' && 0;
// ans is 12;

let exp12 = 'hello' + (true + 0) + 2 || (false + 1) * 3 && 'result' || 4 + 'test';
// ans is 'hello12';

let exp13 = 5 * (3++ || false) + 2 && (false + 'test') || 3 * 'end' && 4;
// ans is 'falsetest';

let exp14 = (false + 'abc') * 2 || (--4 + 1) * 'start' && 4 || 'end';
// ans is 'end';

let exp15 = (0 + 'foo') * 3 + (true && "result") || 'start' + (++0 + 1) * 4;
// ans is 'NaNresult';

let exp16 = 2 * 'end' || (false && true) || "start" + (--4 + 2) * 5 && null;
// ans is null;

let exp17 = 3 + 2 * ('test' + 1--) && (false + 3) * 5 || 0 + 'value' && 4;
// ans is 4;

let exp18 = 'start' && (false || 2 * 'end') || (++1 + 1) * 3 + 'result' && 0;
// ans is 0;

let exp19 = ((5 + 1) && 'foo') || (++1 + 2) * (false + 3) + 'test' && 7;
// ans is 'foo';

let exp20 = 2 * 3 + 'hello' && (false + ++1) * 'result' || 'end' + 5 || 0
;
// ans is 'end5';

let exp21 = 5 * (true + ++1) && ('test' + false) || 7 * (true + 2) + 'value';
// ans is 'falsetest';

let exp22 = 'foo' & 4 && (++a + 1) * 'start' || 5 + 6 * (false + true) && 'test';
// ans is 'test';

let exp23 = (false && 2) || (1 + 1) * 'end' && 'start' || 4 * 5 && 'result';
// ans is 'result';

let exp24 = 3 + 2 * 'test' || (false + a--) * 'hello' && "world" + 1 || 2;
// ans is 2;

let exp25 = (3 + 4) * (false || a--) && 5 || 'start1test' && 0;
// ans is 

let exp26 = 'hello' && 3 * 2 + (a++ +1) || (false + true) * 'result' + 'end';
// ans is 8;

let exp27 = 3 * 'test' + (true + 2) && (false || 'value') || 'start' + a++;
// ans is 'start1';

let exp28 = (false + 1) * 'hello' || 3 + (1 && 5) * 'result' || 'world';
// ans is 'world';

let exp29 = 'start' + 2 * (true || 1) && (false || 'value') * 5 + 'result';
// ans is 'NaNresult';

let exp30 = (true + 3) * 'test' || 1 * 5 && (false + 'value') + 'end' || a--;
// ans is 'falsevalueend';

let exp31 = '3end' || 2 * 'test' && (++a + true) || 'start' + 1;
// ans is 'end';

let exp32 = (0 + 3) * (true + false) || 5 * 'hello' + 2 && (false + test);
// ans is 3;

let exp33 = 2 + 3 && ('end' + a++) || (false + 'test' && 5);
// ans is 'end1';

let exp34 = "hello" + 4 * (false + 1) || 3 && 'start' + 1 || (true + 'test');
// ans is 'hello4';

let exp35 = 'start' && (a-- || 'test') * 4 + 5 && (false +'end') || 2;
// ans is 'falseend';

let exp36 = 1 + 'value' && (++a + 2) || (3 + 'result') * true && 4;
// ans is 4;

let exp37 = "hello" && 2 + 'test' || (++a + 3) && (true + 'value') + 1;
// ans is '2test';

let exp38 = 5 * (a-- || 'test')  && 6 * 'result' || 2 + 'end';
// ans is '2end';

let exp39 = 'start' && (false + 1) * 2 || 3 + 4 * 'hello' + 5 && 0;
// ans is 2;

let exp40 = (false || 'test') * 5 || 6 + (a-- && 'result' * 4);
// ans is NaN;

let exp41 = 'start' && (3 + 2) * 'test' + 5 || 4 * (false + 1) && 'hello'; 
// ans is 'hello';

let exp42 = 1 + 2 * 'end' || (false + 3) && 'result' * 4 + a--;
// ans is 'NaN';

let exp43 = (false && a--) || 4 * (3 + 2) && 'start' + 5;
// ans is 'start5'; 

let exp44 = 3 + 2 * (true + 5) && 'value' + 1 || (++a + 2) + 'test';
// ans is 'value1';

let exp45 = (false || 1) + 'test' && 5 + (3 * a--) || 'end' + 2;
// ans is 8;

let exp46 = (2 * a-- + 4) && 'test' || 3 + 'hello' || (false + 1) *  5;
// ans is 'test';

let exp47 = 0 + 'result' && (3 + 1) * 2 || (false + a--) * 'end';
// ans is 8;'

let exp48 = (false || 1) * 'test' && 4 ||(true + 2) * 'hello' + a--;
// ans is NaN;

let exp49 = (2 * 3) + 'result' && 4 * (a-- + 1) || 'start' + 2 + 'end';
// ans is 8;

let exp50 = 32 && true - ++a && '' || 'true'; //for a = 5;
// ans is 'true';