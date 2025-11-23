import twilio from 'twilio';

// Initialiser client Twilio
export function initTwilio() {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;

  if (!accountSid || !authToken) {
    throw new Error('Twilio credentials missing');
  }

  return twilio(accountSid, authToken);
}

// TODO: Fonction pour envoyer SMS
export async function sendSMS(to: string, message: string) {
  // TODO: Implémenter
  throw new Error('TODO: sendSMS not implemented');
}

// TODO: Fonction pour passer appel
export async function makeCall(to: string, twimlUrl: string) {
  // TODO: Implémenter
  throw new Error('TODO: makeCall not implemented');
}

// TODO: Fonction pour générer TwiML
export function generateTwiML(instructions: any) {
  // TODO: Implémenter
  throw new Error('TODO: generateTwiML not implemented');
}
