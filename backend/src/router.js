const express = require("express");

const router = express.Router();

const {
  verifyEmailForSubscription,
  hashPassword,
  verifyPassword,
} = require("./services/auth");

const { getUserByEmail } = require("./controllers/UserController");
const {
  getAllAdmins,
  deleteAdmin,
  postAdmin,
} = require("./controllers/AdminController");
const {
  getAllApplicants,
  deleteApplicant,
  postApplicant,
} = require("./controllers/ApplicantController");
const {
  getAllCompanies,
  deleteCompany,
  postCompany,
} = require("./controllers/CompanyController");
const {
  getAllOffers,
  getFilteredOffers,
  deleteOfferByCompanyId,
} = require("./controllers/OfferController");
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
router.post("/filtered-offers", getFilteredOffers);

// ------------catégories------------
router.get("/categories", getAllCategories);

// ------------contrats------------
router.get("/contracts-type", getAllContracts);

// ------------users------------
router.get("/admins", getAllAdmins);
router.delete("/admins/:id", deleteAdmin);
router.get("/applicants", getAllApplicants);
router.delete("/applicants/:id", deleteApplicant);
router.get("/companies", getAllCompanies);
router.delete("/companies/:id", deleteOfferByCompanyId, deleteCompany);

module.exports = router;
