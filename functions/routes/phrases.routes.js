const { Router } = require('express');
const admin = require("firebase-admin");
const router = Router();

const db = admin.firestore();

router.get("/api/phrases", async (req, res) => {
  const snapshot = await db.collection("phrases").get();
  const phrases = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return res.status(200).json(phrases);
});

router.post("/api/phrases", async (req, res) => {
  try {
    const {phrase, author} = req.body;
    const newPhrase = {
        phrase,
        author,
        date: new Date().toISOString()
    };

    await db
      .collection("phrases")
      .add(newPhrase);

    return res.status(204).json();
  } catch {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.delete("/api/phrases/:id", async (req, res) => {
  try {
    const document = db.collection("phrases").doc(req.params.id);
    await document.delete();
    return res.status(200).json();
  } catch (error) {
    return res.status(500).json();
  }
});

module.exports = router;