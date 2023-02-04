/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Welcome to your AI Sentinel generic FAQs about your clinic.! Please ask your question...';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .withStandardCard(speakOutput)
            .getResponse();
    }
};

//Brush Teeth
const brushTeethHandler= {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'brushTeeth';
    },
    handle(handlerInput) {
        const speakOutput = 'Yes. You may brush your teeth and swish with a small amount of water to rinse.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
             .withStandardCard(speakOutput)
            .getResponse();
    }
};

//drink alcohol
const drinkAlcoholHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'drinkAlcohol';
    },
    handle(handlerInput) {
        const speakOutput = 'you cannot drink any alcohol after 12PM midnight before the day of your procedure';

        return handlerInput.responseBuilder
            .speak(speakOutput)
             .reprompt(speakOutput)
             .withStandardCard(speakOutput)
            .getResponse();
    }
};

//Smoke_Before_Procedure
const Smoke_Before_ProcedureHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Smoke_Before_Procedure';
    },
    handle(handlerInput) {
        const speakOutput = 'You should not smoke after 12PM midnight before the day of your procedure';

        return handlerInput.responseBuilder
            .speak(speakOutput)
           .reprompt(speakOutput)
             .withStandardCard(speakOutput)
            .getResponse();
    }
};



//should_i_not_wear
const should_i_not_wearHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'should_i_not_wear';
    },
    handle(handlerInput) {
        const speakOutput = 'Makeup, Nail Polish, Jewelry (including body jewelry)';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
             .withStandardCard(speakOutput)
            .getResponse();
    }
};

//bringClothes
const bringClothesHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'bringClothes';
    },
    handle(handlerInput) {
        const speakOutput = 'Yes - Wear loose, casual, comfortable clothing to fit over dressings';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
             .withStandardCard(speakOutput)
            .getResponse();
    }
};

//safeValuables
const safeValuablesHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'safeValuables';
    },
    handle(handlerInput) {
        const speakOutput = 'No – Please leave all your valuables at home';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
             .withStandardCard(speakOutput)
            .getResponse();
    }
};

//medications
const medicationsHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'medications';
    },
    handle(handlerInput) {
        const speakOutput = 'Yes- You make take your medications with sips of water the morning of the procedure. For diabetics, please follow the instructions regarding dosing of diabetic medications provided by the provider. ';

        return handlerInput.responseBuilder
            .speak(speakOutput)
             .reprompt(speakOutput)
             .withStandardCard(speakOutput)
            .getResponse();
    }
};


//dietPills
const dietPillsHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'dietPills';
    },
    handle(handlerInput) {
        const speakOutput = 'No – Please discontinue and confirm with your physician';

        return handlerInput.responseBuilder
            .speak(speakOutput)
           .reprompt(speakOutput)
             .withStandardCard(speakOutput)
            .getResponse();
    }
};


//bringFood
const bringFoodHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'bringFood';
    },
    handle(handlerInput) {
        const speakOutput = 'No – please refer to post procedure food  guidelines';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
             .withStandardCard(speakOutput)
            .getResponse();
    }
};

//visitors
const visitorsHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'visitors';
    },
    handle(handlerInput) {
        const speakOutput = 'Usually 12  hours after procedure';

        return handlerInput.responseBuilder
            .speak(speakOutput)
           .reprompt(speakOutput)
             .withStandardCard(speakOutput)
            .getResponse();
    }
};

//rely on somebody
const relyONHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'relyON';
    },
    handle(handlerInput) {
        const speakOutput = 'It is advisable that you have someone with you for 24 hours post procedure. This surveillance period might vary based on what kind of intervention was done.';
        const speakOutput2 ='Talk to your physician before you head home after procedure.';
        return handlerInput.responseBuilder
            .speak(speakOutput + speakOutput2)
           .reprompt(speakOutput)
             .withStandardCard(speakOutput ,speakOutput2)
            .getResponse();
    }
};



//dayProcedure
const dayProcedureHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'dayProcedure';
    },
    handle(handlerInput) {
        const speakOutput = 'Active Insurance cards, photo ID, Medicare or Medical Assistance information, numbers and addresses';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
             .withStandardCard(speakOutput)
            .getResponse();
    }
};

//driveMyself
const driveMyselfHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'driveMyself';
    },
    handle(handlerInput) {
        const speakOutput = 'No - You cannot drive back home, and someone must be available to take you home or a taxi. ';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
             .withStandardCard(speakOutput)
            .getResponse();
    }
};

//familyMember
const familyMemberHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'familyMember';
    },
    handle(handlerInput) {
        const speakOutput = 'Yes – A guardian must be with you at the procedure center all the time';

        return handlerInput.responseBuilder
            .speak(speakOutput)
           .reprompt(speakOutput)
             .withStandardCard(speakOutput)
            .getResponse();
    }
};

//afterProcedure
const afterProcedureHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'afterProcedure';
    },
    handle(handlerInput) {
        const speakOutput = 'It’s normal to Have some blotting or sore throat or nausea for a short time after the procedure. If these persist for more than 1-2 days contact your doctor.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
             .withStandardCard(speakOutput)
            .getResponse();
            
    }
};




//old_medication
const old_medicationHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'old_medication';
    },
    handle(handlerInput) {
        const speakOutput = 'Resume your medications as before as per your schedule or as advised by your physician.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
           .reprompt(speakOutput)
             .withStandardCard(speakOutput)
            .getResponse();
    }
};


//emergency
const emergencyHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'emergency';
    },
    handle(handlerInput) {
        const speakOutput = 'Please click on emergency on app OR contact your physician or emergency care provider ';

        return handlerInput.responseBuilder
            .speak(speakOutput)
             .reprompt(speakOutput)
             .withStandardCard(speakOutput)
            .getResponse();
    }
};


const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!';

        return handlerInput.responseBuilder
           .reprompt(speakOutput)
             .withStandardCard(speakOutput)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
    
};


/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        brushTeethHandler,
        drinkAlcoholHandler,
        Smoke_Before_ProcedureHandler,
        should_i_not_wearHandler,
        bringClothesHandler,
        safeValuablesHandler,
        medicationsHandler,
        dietPillsHandler,
        bringFoodHandler,
        visitorsHandler,
        dayProcedureHandler,
        driveMyselfHandler,
        familyMemberHandler,
        afterProcedureHandler,
        emergencyHandler,
        relyONHandler,
        old_medicationHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();