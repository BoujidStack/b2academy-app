import { getFirestore, collection, addDoc } from "firebase/firestore";
import firebaseApp from './FirebaseConfig';



const saveFormDataB2academyContactUs = async (formData) => {
  try {
    const db = getFirestore(firebaseApp);
    const formDataRef = collection(db, "b2academyFormContactUs");
    await addDoc(formDataRef, formData);
    console.log("Form data saved successfully!");
  } catch (error) {
    console.error("Error saving form data:", error);
  }
};



const saveFormDatab2academyBusinesses = async (formData) => {
  try {
    const db = getFirestore(firebaseApp);
    const formDataRef = collection(db, 'b2academyFormBusinesses');
    await addDoc(formDataRef, formData);
    console.log('Form data saved successfully!');
  } catch (error) {
    console.error('Error saving form data:', error);
  }
};

{/*
const saveFormDataToOtherFormPrograms = async (formData) => {
  try {
    const db = getFirestore(firebaseApp);
    const formDataRef = collection(db, 'formSubmissionsPrograms');
    await addDoc(formDataRef, formData);
    console.log('Form data saved successfully!');
  } catch (error) {
    console.error('Error saving form data:', error);
  }
};
*/}

const saveFormDatab2academyEmail = async (formData) => {
  try {
    const db = getFirestore(firebaseApp);
    const formDataRef = collection(db, 'b2academyFormEmail');
    await addDoc(formDataRef, formData);
    console.log('Form data saved successfully!');
  } catch (error) {
    console.error('Error saving form data:', error);
  }
};


const saveFormDatab2academyBlockchainProgram = async (formData) => {
  try {
    const db = getFirestore(firebaseApp);
    const formDataRef = collection(db, 'b2academyFormBlockchainProgram');
    await addDoc(formDataRef, formData);
    console.log('Form data saved successfully!');
  } catch (error) {
    console.error('Error saving form data:', error);
  }
};

const saveFormDatab2academyBlockchainConsultingProgram = async (formData) => {
  try {
    const db = getFirestore(firebaseApp);
    const formDataRef = collection(db, 'b2academyFormBlockchainConsultingProgram');
    await addDoc(formDataRef, formData);
    console.log('Form data saved successfully!');
  } catch (error) {
    console.error('Error saving form data:', error);
  }
};

const saveFormDatab2academyAiProgram = async (formData) => {
  try {
    const db = getFirestore(firebaseApp);
    const formDataRef = collection(db, 'b2academyFormAiProgram');
    await addDoc(formDataRef, formData);
    console.log('Form data saved successfully!');
  } catch (error) {
    console.error('Error saving form data:', error);
  }
};

const saveFormDatab2academyAiConsultingProgram = async (formData) => {
  try {
    const db = getFirestore(firebaseApp);
    const formDataRef = collection(db, 'b2academyFormAiConsultingProgram');
    await addDoc(formDataRef, formData);
    console.log('Form data saved successfully!');
  } catch (error) {
    console.error('Error saving form data:', error);
  }
};

const saveFormDatab2academyTwoProgramm = async (formData) => {
  try {
    const db = getFirestore(firebaseApp);
    const formDataRef = collection(db, 'b2academyFormTwoProgramm');
    await addDoc(formDataRef, formData);
    console.log('Form data saved successfully!');
  } catch (error) {
    console.error('Error saving form data:', error);
  }
};

const saveFormDatab2academyTwoProgrammAI = async (formData) => {
  try {
    const db = getFirestore(firebaseApp);
    const formDataRef = collection(db, 'b2academyFormTwoProgrammAI');
    await addDoc(formDataRef, formData);
    console.log('Form data saved successfully!');
  } catch (error) {
    console.error('Error saving form data:', error);
  }
};

const saveFormDataB2AProgramsBrochure = async (formData) => {
  try {
    const db = getFirestore(firebaseApp);
    const formDataRef = collection(db, 'b2academyFormB2AProgramsBrochure');
    await addDoc(formDataRef, formData);
    console.log('Form data saved successfully!');
  } catch (error) {
    console.error('Error saving form data:', error);
  }
};


export { saveFormDataB2academyContactUs, saveFormDatab2academyBusinesses,/*saveFormDataToOtherFormPrograms,*/ saveFormDatab2academyEmail, saveFormDatab2academyBlockchainProgram, saveFormDatab2academyAiProgram, saveFormDatab2academyTwoProgramm, saveFormDataB2AProgramsBrochure, saveFormDatab2academyBlockchainConsultingProgram, saveFormDatab2academyAiConsultingProgram, saveFormDatab2academyTwoProgrammAI};
