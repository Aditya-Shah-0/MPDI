/* global __initial_auth_token */
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInAnonymously,
    signInWithCustomToken
} from "firebase/auth";
import {
    getFirestore,
    collection,
    onSnapshot,
    addDoc,
    doc,
    updateDoc,
    serverTimestamp
} from "firebase/firestore";

// --- INITIALIZATION ---

// Get the Firebase config object from your environment variables
const firebaseConfig = import.meta.env.VITE_FIREBASE_CONFIG
    ? JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG)
    : JSON.parse({});

// Get the collection path from environment variables for flexibility
const VEHICLES_COLLECTION_PATH = import.meta.env.VITE_FIREBASE_COLLECTION_PATH || '/artifacts/default-app-id/public/data/vehicles';

// Initialize Firebase app, Firestore, and Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Get a reference to the vehicles collection
const vehiclesCollection = collection(db, VEHICLES_COLLECTION_PATH);

// --- AUTHENTICATION ---

/**
 * Signs in the user anonymously or with a custom token.
 * This should be called once when the app loads.
 */
export const signIn = async () => {
    try {
        // eslint-disable-next-line no-undef
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
            await signInWithCustomToken(auth, __initial_auth_token);
        } else {
            await signInAnonymously(auth);
        }
        console.log("Firebase authentication successful.");
    } catch (authError) {
        console.error("Firebase authentication failed: ", authError);
    }
};

// --- DATABASE OPERATIONS ---

/**
 * Sets up a real-time listener for the vehicles collection.
 * @param {function} callback - A function to be called with the vehicle data array.
 * @returns {function} An unsubscribe function to clean up the listener.
 */
export const streamVehicles = (callback) => {
    const unsubscribe = onSnapshot(vehiclesCollection, (querySnapshot) => {
        const vehiclesData = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }));
        callback(vehiclesData);
    });
    return unsubscribe;
};

/**
 * Adds a new vehicle entry to Firestore.
 * @param {object} vehicleData - Contains name, vehicleNumber, and idNumber.
 * @returns {Promise} A promise that resolves when the document is added.
 */
export const addVehicleEntry = (vehicleData) => {
    return addDoc(vehiclesCollection, {
        ...vehicleData,
        entryTime: serverTimestamp(),
        exitTime: null,
        status: 'Inside',
    });
};

/**
 * Updates a vehicle's status to 'Exited' and records the exit time.
 * @param {string} vehicleId - The ID of the document to update.
 * @returns {Promise} A promise that resolves when the document is updated.
 */
export const updateVehicleExit = (vehicleId) => {
    const vehicleDocRef = doc(db, VEHICLES_COLLECTION_PATH, vehicleId);
    return updateDoc(vehicleDocRef, {
        exitTime: serverTimestamp(),
        status: 'Exited',
    });
};