/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ImproveSkills from "./ImproveSkills";
import QuoteSection from "./QuoteSection";
import Mixologists from "./Mixologists";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchCocktailsAction,
  fetchIngs,
  getUsersAction,
} from "../redux/actions";

function HomePage() {
  const token = useSelector((state) => state.user.accessToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    dispatch(fetchCocktailsAction(token));
    dispatch(getUsersAction(token));
    dispatch(fetchIngs(token));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container main">
        <HeroSection />
        <ImproveSkills />
        <QuoteSection />
        <Mixologists />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
