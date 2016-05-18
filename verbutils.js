/**
 * Created by Anuraag on 5/17/2016.
 */
module.exports=function(){
    return new function(){
        var weirds=[
            //participle, past, present
            ['gone','went','go'],
            ['done','did','do'],
            ['made','make'],
            ['chosen','chose','choose'],
        ];
        var endings={
            past1: [
                {rev:'dlo',end:'old',val: 'ell'}, //sold->sell
                {rev:'dei',end:'ied', val: 'y'}, //multiplied -> multiply
                {rev:'de',end:'ed', val: 'ee', o:['fl']}, //fled -> flee
                {rev:'de',end:'ed', val: 'eed', o:['f']}, //feed, fed
                {rev:'de',end:'ed', val: ''}, //anything left with an ed

                {rev:'eda',end:'ade',val: 'id'}, //forbade->forbid
                {rev:'eno',end:'one',val: 'ine'}, //shone->shine
                {rev:'ema',end:'ame', val: 'ome'}, //came -> come
                {rev:'eta',end:'ate', val: 'eat'}, //ate -> eat
                {rev:'eto',end:'ote', val: 'ite'}, //wrote -> write
                {rev:'evo',end:'ove', val: 'ive'}, //drove -> drive
                {rev:'edo',end:'ode', val: 'ide'}, //rode -> ride
                {rev:'eko',end:'oke', val: 'eak'}, //spoke -> speak
                {rev:'eko',end:'oke', val: 'eak'}, //spoke -> speak

                {rev:'gna', end:'ang',val: 'ing'}, //sang->sing
                {rev:'gu',end:'ug', val: 'ig'}, //dig -> dug

                {rev:'kna',end:'ank', val: 'ink'}, //drank -> drink
                {rev:'koo',end:'ook', val: 'ake'}, //took -> take

                {rev:'nia',end:'ain', val: 'ay'}, //slain -> slay
                {rev:'nwo',end:'own', val: 'ew'}, //blown -> blew
                {rev:'ni',end:'in', val: 'ie', ex:['sla']}, //lain -> lie
                {rev:'ne',end:'en', val: '', o:['t']}, //eaten -> eat
                {rev:'ne',end:'en', val: 'e'}, //given -> give
                {rev:'na',end:'an', val: 'un'}, //ran -> run
                {rev:'nu',end:'un',val: 'ine'}, //shun->shine

                {rev:'rae',end:'ear', val: 'ore'}, //swear -> swore

                {rev:'thgua', end:'aught',val: 'atch'}, //caught->catch
                {rev:'thguo',end:'ought',val: 'ight'}, //fought->fight
                {rev:'tli',end:'ilt',val: 'ild'}, //built->build
                {rev:'ta',end:'at', val: 'it'}, //shat -> shit, sat->sit,
                {rev:'tpe',end:'ept', val: 'eep'}, //slept -> sleep
                {rev:'tl',end:'lt', val: 'el'}, //felt -> feel
                {rev:'tu',end:'ut', val: 'ut'}, //shut -> shut
                {rev:'ti',end:'it', val: 'ite'}, //bit -> bite

                {rev:'we',end:'ew', val: 'y', ex:['br','gr','dr','kn','bl']}, //flew -> fly
                {rev:'we',end:'ew', val: 'aw', ex:['br','fl','gr','kn','bl']}, //drew -> draw, sew->saw
                {rev:'we',end:'ew', val: 'ow', ex:['fl','dr']}, //grew -> grow, knew -> know

                {rev:'ya',end:'ay', val: 'ie'}, //lay -> lie
            ]
        };

        this.toBaseForm=function(verb)
        {
            var pastWords=endings.past1;
            var newVerb=verb;
            var matched=false;
            for(var i=0;i<weirds.length;i++){
                for(var j=0;j<weirds[i].length-1;j++)
                {
                    if(verb==weirds[i][j])
                    {
                        //console.log('matched weird!',i,verb + '->' + weirds[i][weirds[i].length-1]);
                        newVerb=weirds[i][weirds[i].length-1];
                        matched=true;
                        break;
                    }
                }
            }
            if(!matched)
            {
                for(var ending in pastWords)
                {
                    if(verb.substr(verb.length-pastWords[ending].end.length,pastWords[ending].end.length)==pastWords[ending].end)
                    {
                        if(pastWords[ending].ex)
                        {
                            var matchesException=false;
                            for(var i=0;i<pastWords[ending].ex.length;i++)
                            {
                                if(
                                    pastWords[ending].ex[i]==verb.substr(verb.length-pastWords[ending].end.length-pastWords[ending].ex[i].length,pastWords[ending].ex[i].length)
                                )
                                {
                                    matchesException=true;
                                    break;
                                }
                            }
                            if(!matchesException)
                            {
                                newVerb=verb.substr(0,verb.length-pastWords[ending].end.length) + pastWords[ending].val;
                                //console.log('matched 2!',ending,verb + '->' + newVerb);
                                matched=true;
                                break;
                            }
                        }
                        else if(pastWords[ending].o)
                        {
                            var matchesOnly=false;
                            for(var i=0;i<pastWords[ending].o.length;i++)
                            {
                                if(
                                    pastWords[ending].o[i]==verb.substr(verb.length-pastWords[ending].end.length-pastWords[ending].o[i].length,pastWords[ending].o[i].length)
                                )
                                {
                                    matchesOnly=true;
                                    break;
                                }
                            }
                            if(matchesOnly)
                            {
                                newVerb=verb.substr(0,verb.length-pastWords[ending].end.length) + pastWords[ending].val;
                                //console.log('matched 3!',ending,verb + '->' + newVerb);
                                matched=true;
                                break;
                            }
                        }
                        else{
                            newVerb=verb.substr(0,verb.length-pastWords[ending].end.length) + pastWords[ending].val;
                            //console.log('matched 1!',ending,verb + '->' + newVerb);
                            matched=true;
                            break;
                        }
                    }
                }
            }
            return newVerb;
        }
    };
};













