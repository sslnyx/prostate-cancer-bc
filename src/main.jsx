import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import GetInvolved from "./pages/GetInvolved";
import Page404 from "./pages/Page404";
import SingleEvent from "./pages/GetInvolved/SingleEvent";
import EventsArchive from "./pages/GetInvolved/EventsArchive";
import EventsArchiveOutlet from "./pages/GetInvolved/EventsArchiveOutlet";
import Volunteer from "./pages/GetInvolved/Volunteer";
import GetSupport from "./pages/GetSupport";
import IfIWereTom from "./pages/GetSupport/IfIWereTom";
import ButtsInMotion from "./pages/GetSupport/ButtsInMotion";
import MoreResourcesForPatients from "./pages/GetSupport/MoreResourcesForPatients";
import PeerSupport from "./pages/GetSupport/PeerSupport";
import ReefKnotKits from "./pages/GetSupport/ReefKnotKits";
import SupportGroupCouncils from "./pages/GetSupport/SupportGroupCouncils";
import SupportGroups from "./pages/GetSupport/SupportGroups";
import AboutProstateCancer from "./pages/AboutProstateCancer";
import WhatIsProstateCancer from "./pages/AboutProstateCancer/WhatIsProstateCancer";
import DiagnosisAndStaging from "./pages/AboutProstateCancer/DiagnosisAndStaging";
import Treatment from "./pages/AboutProstateCancer/Treatment";
import TheProstate from "./pages/AboutProstateCancer/WhatIsProstateCancer/TheProstate";
import WhatIsCancer from "./pages/AboutProstateCancer/WhatIsProstateCancer/WhatIsCancer";
import RiskFactors from "./pages/AboutProstateCancer/WhatIsProstateCancer/RiskFactors";
import OurTeam from "./pages/AboutUs/OurTeam";
import AnnualReport from "./pages/AboutUs/AnnualReport";
import Mission from "./pages/AboutUs/Mission";
import ContactUs from "./pages/AboutUs/ContactUs";
import SignsAndSymptoms from "./pages/AboutProstateCancer/WhatIsProstateCancer/SignsAndSymptoms";
import Statistics from "./pages/AboutProstateCancer/WhatIsProstateCancer/Statistics";
import ThePSATestAndTheDRE from "./pages/AboutProstateCancer/DiagnosisAndStaging/ThePSATestAndTheDRE";
import BiopsyAndImaging from "./pages/AboutProstateCancer/DiagnosisAndStaging/BiopsyAndImaging";
import ChoosingATreatment from "./pages/AboutProstateCancer/DiagnosisAndStaging/ChoosingATreatment";
import GradingAndStaging from "./pages/AboutProstateCancer/DiagnosisAndStaging/GradingAndStaging";
import WhenYourCancerReturns from "./pages/AboutProstateCancer/Treatment/WhenYourCancerReturns";
import TreatmentForAdvancedProstateCancer from "./pages/AboutProstateCancer/Treatment/TreatmentForAdvancedProstateCancer";
import TreatmentForLocalizedProstateCancer from "./pages/AboutProstateCancer/Treatment/TreatmentForLocalizedProstateCancer";
import AlternateOrNonRoutineTherapies from "./pages/AboutProstateCancer/Treatment/AlternateOrNonRoutineTherapies";
import LivingWithProstateCancer from "./pages/AboutProstateCancer/LivingWithProstateCancer";

import Incontinence from "./pages/AboutProstateCancer/LivingWithProstateCancer/Incontinence";
import Nutrition from "./pages/AboutProstateCancer/LivingWithProstateCancer/Nutrition";
import Exercise from "./pages/AboutProstateCancer/LivingWithProstateCancer/Exercise";
import MentalHealthAndWellness from "./pages/AboutProstateCancer/LivingWithProstateCancer/MentalHealthAndWellness";
import MoreResources from "./pages/AboutProstateCancer/LivingWithProstateCancer/MoreResources";
import SexWithAndAfterCancer from "./pages/AboutProstateCancer/LivingWithProstateCancer/SexWithAndAfterCancer";
import Sleep from "./pages/AboutProstateCancer/LivingWithProstateCancer/Sleep";

import OurImpact from "./pages/OurImpact";
import PatientStories from "./pages/OurImpact/PatientStories";
import PatientStoriesOutlet from "./pages/OurImpact/PatientStoriesOutlet";
import PatientStorySingle from "./pages/OurImpact/PatientStorySingle";
import Grants from "./pages/OurImpact/Grants";

import WaysToGive from "./pages/WaysToGive";
import Donate from "./pages/WaysToGive/Donate";
import AlternativeWaysToSupportUs from "./pages/WaysToGive/AlternativeWaysToSupportUs";
import DonateOnline from "./pages/WaysToGive/DonateOnline";
import ThankYou from "./pages/WaysToGive/ThankYou";
import TaxReceipt from "./pages/WaysToGive/TaxReceipt";
import PaymentError from "./pages/WaysToGive/PaymentError";
import SubmitionError from "./pages/WaysToGive/SubmissionError";

import "./index.css";
import "tw-elements";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />

          <Route path="about-us" element={<AboutUs />}>
            <Route index element={<Page404 />} />
            <Route path="our-team" element={<OurTeam />} />
            <Route path="annual-report" element={<AnnualReport />} />
            <Route path="mission" element={<Mission />} />
            <Route path="contact-us" element={<ContactUs />} />
          </Route>

          <Route path="about-prostate-cancer" element={<AboutProstateCancer />}>
            <Route index element={<Page404 />} />
            <Route
              path="What-is-prostate-cancer"
              element={<WhatIsProstateCancer />}
            >
              <Route index element={<Page404 />} />
              <Route path="the-prostate" element={<TheProstate />} />
              <Route path="what-is-cancer" element={<WhatIsCancer />} />
              <Route path="risk-factors" element={<RiskFactors />} />
              <Route path="signs-and-symptoms" element={<SignsAndSymptoms />} />
              <Route path="statistics" element={<Statistics />}></Route>
            </Route>
            <Route
              path="diagnosis-and-staging"
              element={<DiagnosisAndStaging />}
            >
              <Route index element={<Page404 />} />
              <Route
                path="the-psa-test-and-the-dre"
                element={<ThePSATestAndTheDRE />}
              />
              <Route path="biopsy-and-imaging" element={<BiopsyAndImaging />} />
              <Route
                path="choosing-a-treatment"
                element={<ChoosingATreatment />}
              />
              <Route
                path="grading-and-staging"
                element={<GradingAndStaging />}
              />
            </Route>

            <Route path="treatment" element={<Treatment />}>
              <Route index element={<Page404 />} />
              <Route
                path="treatment-for-localized-prostate-cancer"
                element={<TreatmentForLocalizedProstateCancer />}
              />
              <Route
                path="treatment-for-advanced-prostate-cancer"
                element={<TreatmentForAdvancedProstateCancer />}
              />

              <Route
                path="alternate-or-non-routine-therapies"
                element={<AlternateOrNonRoutineTherapies />}
              />

              <Route
                path="when-your-cancer-returns"
                element={<WhenYourCancerReturns />}
              />
            </Route>

            <Route
              path="living-with-prostate-cancer"
              element={<LivingWithProstateCancer />}
            >
              <Route index element={<Page404 />} />
              <Route path="incontinence" element={<Incontinence />} />
              <Route path="nutrition" element={<Nutrition />} />
              <Route path="exercise" element={<Exercise />} />
              <Route
                path="mental-health-and-wellness"
                element={<MentalHealthAndWellness />}
              />
              <Route path="more-resources" element={<MoreResources />} />
              <Route
                path="sex-with-and-after-cancer"
                element={<SexWithAndAfterCancer />}
              />
              <Route path="sleep" element={<Sleep />} />
            </Route>
          </Route>

          <Route path="get-support" element={<GetSupport />}>
            <Route index element={<Page404 />} />
            <Route path="if-i-were-tom" element={<IfIWereTom />} />
            <Route path="butts-in-motion" element={<ButtsInMotion />} />
            <Route
              path="more-resources-for-patients"
              element={<MoreResourcesForPatients />}
            />
            <Route path="peer-support" element={<PeerSupport />} />
            <Route path="reef-knot-kits" element={<ReefKnotKits />} />

            <Route path="support-groups" element={<SupportGroups />} />

            <Route
              path="support-group-councils"
              element={<SupportGroupCouncils />}
            />
          </Route>

          <Route path="get-involved" element={<GetInvolved />}>
            <Route index element={<Page404 />} />
            <Route path="volunteer" element={<Volunteer />} />
            <Route path="find-an-event" element={<EventsArchiveOutlet />}>
              <Route index element={<EventsArchive />} />
              <Route path=":eventId" element={<SingleEvent />} />
            </Route>
          </Route>

          <Route path="our-impact" element={<OurImpact />}>
            <Route index element={<Page404 />} />
            <Route path="patient-stories" element={<PatientStoriesOutlet />}>
              <Route index element={<PatientStories />} />
              <Route path=":storySlug" element={<PatientStorySingle />} />
            </Route>
            <Route path="grants" element={<Grants />} />
          </Route>

          <Route path="ways-to-give" element={<WaysToGive />}>
            <Route index element={<Page404 />} />
            <Route
              path="alternative-ways-to-support-us"
              element={<AlternativeWaysToSupportUs />}
            />
            <Route path="donate" element={<Donate />} />
            <Route path="donate-online" element={<DonateOnline />} />
            <Route path="thank-you" element={<ThankYou />} />
            <Route path="tax-receipt" element={<TaxReceipt />} />
            <Route path="payment-error" element={<PaymentError />} />
            <Route path="submission-error" element={<SubmitionError />} />
          </Route>

          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
