const firebase  = require("firebase-admin")

const serviceAccount = require('./todo-list-c35fd-firebase-adminsdk-s3fuo-d5c1777d7c.json')

// Initialize Firebase
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
});


const db = firebase.firestore()

class Task {

  static create(task_data) {
    let taskCol = db.collection("tasks")
    let taskDoc = taskCol.doc('test2')
    taskDoc.set(task_data)
  }
}


module.exports = {Task}