import {
    collection,
    addDoc
} from "firebase/firestore";
const db = getFirestore(app);

//Get Form Values
const name = document.getElementById('name').value
const email = document.getElementById('email').value
const message = document.getElementById('message').value

const submitButton = document.getElementById('submit')

submitButton.addEventListener("click", async (e) => {
    try {
    const docRef = await addDoc(collection(db, "contactQuery"), {
        Name: name,
        Email: email,
        Message: message
    });
    console.log("Document written with ID: ", docRef.id);
    } catch (e) {
    console.error("Error adding document: ", e);
    }
})