# VerbUtils #
VerbUtils is a JavaScript module for changing tenses of verbs. Currently, conversion from only past tense verbs to base forms is supported.


## Usage ##
    //import module
    var verbutils = require('./verbutils')();


    //Get base form
    console.log(verbutils.toBaseForm('spoke')); //outputs speak
    console.log(verbutils.toBaseForm('gone')); //outputs go

## More examples ##

**Code**

    console.log(verbutils.toBaseForm('gone'));
    console.log(verbutils.toBaseForm('caught'));
    console.log(verbutils.toBaseForm('blew'));
    console.log(verbutils.toBaseForm('sat'));
    console.log(verbutils.toBaseForm('heard'));
    console.log(verbutils.toBaseForm('slain'));
    console.log(verbutils.toBaseForm('given'));
    console.log(verbutils.toBaseForm('fought'));
    console.log(verbutils.toBaseForm('angered'));
    console.log(verbutils.toBaseForm('annoyed'));
    console.log(verbutils.toBaseForm('drew'));
    console.log(verbutils.toBaseForm('locked'));
    console.log(verbutils.toBaseForm('wrote'));
    console.log(verbutils.toBaseForm('drove'));
    console.log(verbutils.toBaseForm('bit'));
    console.log(verbutils.toBaseForm('slept'));
    console.log(verbutils.toBaseForm('fled'));
    console.log(verbutils.toBaseForm('murdered'));
    console.log(verbutils.toBaseForm('felt'));
    console.log(verbutils.toBaseForm('sang'));
    console.log(verbutils.toBaseForm('swept'));
    console.log(verbutils.toBaseForm('rode'));
    console.log(verbutils.toBaseForm('fed'));
    console.log(verbutils.toBaseForm('took'));
    console.log(verbutils.toBaseForm('ran'));
    console.log(verbutils.toBaseForm('spoke'));
    console.log(verbutils.toBaseForm('shone'));

**Output**

    go
    catch
    blow
    sit
    heard
    slay
    give
    fight
    anger
    annoy
    draw
    lock
    write
    drive
    bite
    sleep
    flee
    murder
    feel
    sing
    sweep
    ride
    feed
    take
    run
    speak
    shine
