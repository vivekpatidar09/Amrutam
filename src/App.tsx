import { useState } from "react";
import "./App.css";
import AyurvedaHeroSection from "./components/AyurvedaHeroSection";
import AyurvedaMagicSection from "./components/AyurvedaMagicSection";
import AyurvedicConsultationsSection from "./components/AyurvedicConsultationsSection";
import HarmonySection from "./components/HarmonySection";
import AyurvedicApproach from "./components/AyurvedicApproach";
import CustomerStories from "./components/CustomerStories";
import MeetExpertss from "./components/MeetExperts";
import AppPromotionSection from "./components/AppPromotionSection";
import FooterSection from "./components/FooterSection";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <>
      <div>
        <Header />
        <AyurvedaHeroSection />
        <AyurvedaMagicSection />
        <AyurvedicConsultationsSection />
        <HarmonySection />
        <AyurvedicApproach />
        <CustomerStories />
        <MeetExpertss />
        <AppPromotionSection />
        <FooterSection />
      </div>
    </>
  );
};

export default App;
