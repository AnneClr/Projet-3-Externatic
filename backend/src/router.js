const express = require("express");

const router = express.Router();

const {
  verifyEmailForSubscription,
  hashPassword,
  verifyPassword,
} = require("./services/auth");

const { getUserByEmail } = require("./controllers/UserController");
const { postAdmin } = require("./controllers/AdminController");
const { postApplicant } = require("./controllers/ApplicantController");
const { postCompany } = require("./controllers/CompanyController");
const { getAllOffers } = require("./controllers/OfferController");
const { getAllCategories } = require("./controllers/CategoryController");
const { getAllContracts } = require("./controllers/ContractController");

// ------------inscription de l'admin------------
router.post(
  "/signup/admin",
  verifyEmailForSubscription,
  hashPassword,
  postAdmin
);
// ------------inscription du candidat------------
router.post(
  "/signup/applicant",
  verifyEmailForSubscription,
  hashPassword,
  postApplicant
);
// ------------inscription de l'entreprise------------
router.post(
  "/signup/company",
  verifyEmailForSubscription,
  hashPassword,
  postCompany
);

// ------------connexion d'un utilisateur------------
router.post("/login", getUserByEmail, verifyPassword);

// ------------offres------------
router.get("/offers", getAllOffers);

// ------------catégories------------
router.get("/categories", getAllCategories);

// ------------contrats------------
router.get("/contracts-type", getAllContracts);

// ------------user------------
router.get("/users/:id");

module.exports = router;
